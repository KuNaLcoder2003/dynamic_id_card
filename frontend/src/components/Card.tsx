import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";

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

    // Convert SVG logo to Base64


    // Fetch ID data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const idParam = path.pathname.split("/").at(-1);
                const res = await fetch(
                    `https://sugee.io/KYCServiceAPI/kycapi/VerifyID/${idParam}`,
                    { method: "POST", headers: { "Content-Type": "application/json" } }
                );
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
            } catch (error) {
                toast.error("Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [path.pathname]);

    // Wait for all images to load
    const waitForImages = async (node: HTMLElement) => {
        const imgs = node.querySelectorAll("img");
        await Promise.all(
            Array.from(imgs).map(
                (img) =>
                    new Promise<void>((resolve) => {
                        if (img.complete) resolve();
                        else {
                            img.onload = () => resolve();
                            img.onerror = () => resolve();
                        }
                    })
            )
        );
    };

    // Download card as image
    const downloadImage = async () => {
        if (!cardRef.current) {
            toast.error("Card not ready");
            return;
        }
        const node = cardRef.current;
        try {
            await waitForImages(node);

            const canvas = await html2canvas(node, {
                scale: window.devicePixelRatio * 1, // handle mobile DPI
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${id.name}_ID_CARD.png`;
            link.click();
        } catch (error) {
            console.error("Failed to generate image:", error);
            toast.error("Failed to generate image");
        }
    };

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Loader className="animate-spin" style={{ width: 32, height: 32 }} />
            </div>
        );
    }

    if (!permitted) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    gap: 16,
                }}
            >
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937" }}>
                    Not Permitted
                </p>
            </div>
        );
    }

    return (
        <div
            className="p-6"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                marginTop: 40,
            }}
        >
            <div
                className="p-4"
                ref={cardRef}
                style={{
                    width: 450,
                    height: 700,
                    borderRadius: 16,
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 24,
                    backgroundColor: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    color: "#1f2937",
                }}
            >
                {/* Logo */}
                <div className="m-auto p-4" style={{ width: "50%", height: 64, marginBottom: 16, backgroundImage: `url(/logo.svg)`, backgroundRepeat: "no-repeat", backgroundPositionX: "50%" }}>

                </div>

                {/* QR Code */}
                <div
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 16,
                        overflow: "hidden",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        border: "4px solid #e5e7eb",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={id.qrCode}
                        alt="QR Code"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        crossOrigin="anonymous"
                    />
                </div>

                {/* Name */}
                <div style={{ marginTop: 16, textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{id.name}</h2>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: 4 }}>
                        Field Consultant
                    </p>
                </div>

                <div
                    style={{
                        width: "100%",
                        borderTop: "1px solid #d1d5db",
                        margin: "16px 0",
                    }}
                ></div>

                {/* Details */}
                <div style={{ width: "100%", marginTop: 8, padding: "0 16px" }}>
                    <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Code
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>T_{id.uuid}</p>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Valid From
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{validFrom}</p>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Valid Till
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{validTill}</p>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Bank
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{id.bank_name[0].bank_name}</p>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Branch
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{id.branch_name.branch_name}</p>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <button
                onClick={downloadImage}
                style={{
                    marginTop: 24,
                    padding: "8px 24px",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Download ID
            </button>
        </div>
    );
};

export default Card;
