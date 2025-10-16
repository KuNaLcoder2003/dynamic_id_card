import React, { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import rasterizeHTML from "rasterizehtml";

interface IdCard {
    uuid: string;
    user_id: number;
    name: string;
    qrCode: string;
    user_avatar: string;
    bank_name?: any;
    branch_name?: any;
    valid_from: string;
    valid_till: string;
}

const Card: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const path = useLocation();
    const [loading, setLoading] = useState<boolean>(true);
    const [permitted, setPermitted] = useState<boolean>(true);
    const [validTill, setValidTill] = useState("");
    const [validFrom, setValidFrom] = useState("");
    const [logoBase64, setLogoBase64] = useState<string>("");

    const [id, setId] = useState<IdCard>({
        uuid: "",
        user_id: 0,
        name: "",
        qrCode: "",
        user_avatar: "",
        bank_name: {},
        branch_name: {},
        valid_from: "",
        valid_till: "",
    });

    useEffect(() => {
        const convertLogoToBase64 = async () => {
            try {
                const response = await fetch("/logo.svg");
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (typeof reader.result === "string") setLogoBase64(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (err) {
                console.error("Failed to load logo:", err);
            }
        };
        convertLogoToBase64();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const idParam = path.pathname.split("/").at(-1);
                const res = await fetch(`https://sugee.io/KYCServiceAPI/kycapi/VerifyID/${idParam}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                if (data.valid) {
                    setId(data.userId);
                    setPermitted(true);
                    setValidFrom(data.valid_from);
                    setValidTill(data.valid_to);
                } else {
                    toast.error(data.message);
                    setPermitted(false);
                }
            } catch (err) {
                toast.error("Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [path.pathname]);

    const downloadImage = async () => {
        if (!cardRef.current) return toast.error("Card not ready");

        try {
            const htmlString = cardRef.current.outerHTML;

            // Create a temporary canvas
            const canvas = document.createElement("canvas");
            canvas.width = cardRef.current.offsetWidth * 2; // scale for high-res
            canvas.height = cardRef.current.offsetHeight * 2;

            // Draw HTML into the canvas
            await rasterizeHTML.drawHTML(htmlString, canvas);

            // Convert canvas to image
            const dataUrl = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${id.name}_ID_CARD.png`;
            link.click();
        } catch (err) {
            console.error("Failed to generate image:", err);
            toast.error("Failed to download ID");
        }
    };

    return (
        <>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <Loader className="animate-spin" style={{ width: 32, height: 32 }} />
                </div>
            ) : permitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
                    <div
                        ref={cardRef}
                        style={{
                            width: 400,
                            height: 560,
                            borderRadius: 16,
                            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 24,
                            backgroundColor: "#fff",
                            fontFamily: "Inter, sans-serif",
                            color: "#1f2937",
                        }}
                    >
                        {/* Logo */}
                        <div style={{ width: 64, height: 64, marginBottom: 16 }}>
                            {logoBase64 ? (
                                <img src={logoBase64} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            ) : (
                                <Loader className="animate-spin" style={{ width: 24, height: 24 }} />
                            )}
                        </div>

                        {/* QR */}
                        <div style={{ width: 200, height: 200, borderRadius: 16, overflow: "hidden", border: "4px solid #e5e7eb", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={id.qrCode} alt="QR Code" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>

                        <h2 style={{ marginTop: 16, textAlign: "center", fontSize: "1.25rem", fontWeight: 700 }}>{id.name}</h2>
                        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Field Consultant</p>

                        <div style={{ width: "100%", borderTop: "1px solid #d1d5db", margin: "16px 0" }} />

                        {/* Details */}
                        <div style={{ width: "100%", padding: "0 16px" }}>
                            <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6b7280" }}>Code</p>
                            <p style={{ fontSize: 16, fontWeight: 600 }}>T_{id.uuid}</p>

                            <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6b7280" }}>Valid From</p>
                            <p style={{ fontSize: 16, fontWeight: 600 }}>{validFrom}</p>

                            <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6b7280" }}>Valid Till</p>
                            <p style={{ fontSize: 16, fontWeight: 600 }}>{validTill}</p>

                            {id.bank_name?.length && (
                                <>
                                    <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6b7280" }}>Bank Name</p>
                                    <p style={{ fontSize: 16, fontWeight: 600 }}>
                                        {`${id.bank_name[0].bank_name} (${id.bank_name[0].bank_code})`}
                                    </p>
                                </>
                            )}

                            {id.branch_name?.length && (
                                <>
                                    <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6b7280" }}>Branch Name</p>
                                    <p style={{ fontSize: 16, fontWeight: 600 }}>
                                        {`${id.branch_name[0].branch_name} (${id.branch_name[0].branch_code})`}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <button onClick={downloadImage} style={{ marginTop: 24, padding: "8px 24px", backgroundColor: "#2563eb", color: "#fff", borderRadius: 8, cursor: "pointer", border: "none" }}>
                        Download ID
                    </button>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Not Permitted</p>
                </div>
            )}
        </>
    );
};

export default Card;
