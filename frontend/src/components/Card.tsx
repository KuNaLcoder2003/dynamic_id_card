import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
// @ts-ignore
import domtoimage from "dom-to-image";

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
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

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

    const downloadPDF = async () => {
        if (!cardRef.current) {
            toast.error("Card not ready");
            return;
        }

        if (!imagesLoaded) {
            toast.error("Please wait for images to load");
            return;
        }

        const node = cardRef.current;

        domtoimage
            .toPng(node, {
                quality: 1,
                bgcolor: "#ffffff",
                cacheBust: true,
                useCORS: true,
                width: node.offsetWidth,
                height: node.offsetHeight,
                style: {
                    transform: "scale(1)",
                    transformOrigin: "top left",
                },
            })
            .then((dataUrl: string) => {
                const link = document.createElement("a");
                link.download = `${id.name}_ID_CARD.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((error: any) => {
                console.error("oops, something went wrong!", error);
                toast.error("Failed to generate image");
            });
    };

    useEffect(() => {
        const convertLogoToBase64 = async () => {
            try {
                const response = await fetch("/logo.svg");
                const blob = await response.blob();
                const reader = new FileReader();

                reader.onloadend = () => {
                    if (typeof reader.result === "string") {
                        setLogoBase64(reader.result);
                    }
                };

                reader.readAsDataURL(blob);
            } catch (error) {
                console.error("Failed to load logo:", error);
            }
        };

        convertLogoToBase64();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const idParam = path.pathname.split("/").at(-1);
                const res = await fetch(
                    `https://sugee.io/KYCServiceAPI/kycapi/VerifyID/${idParam}`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    }
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

    // ✅ Wait until both logo & QR images are loaded before allowing download
    useEffect(() => {
        if (logoBase64 && id.qrCode) {
            const logoImg = new Image();
            const qrImg = new Image();

            logoImg.src = logoBase64;
            qrImg.src = id.qrCode;

            Promise.all([
                new Promise((resolve) => (logoImg.onload = resolve)),
                new Promise((resolve) => (qrImg.onload = resolve)),
            ]).then(() => setImagesLoaded(true));
        }
    }, [logoBase64, id.qrCode]);

    return (
        <>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Loader
                        className="animate-spin"
                        style={{ width: "32px", height: "32px", color: "#374151" }}
                    />
                </div>
            ) : permitted ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "40px",
                    }}
                >
                    <div
                        ref={cardRef}
                        style={{
                            width: "400px",
                            height: "560px",
                            borderRadius: "16px",
                            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "24px",
                            backgroundColor: "#ffffff",
                            fontFamily: "Inter, sans-serif",
                            color: "#1f2937",
                        }}
                    >
                        {/* ✅ Logo */}
                        <div style={{ width: "64px", height: "64px", marginBottom: "16px" }}>
                            {logoBase64 ? (
                                <img
                                    src={logoBase64}
                                    alt="Company Logo"
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                            ) : (
                                <Loader
                                    className="animate-spin"
                                    style={{ width: "24px", height: "24px" }}
                                />
                            )}
                        </div>

                        {/* ✅ QR Code */}
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "16px",
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

                        <div style={{ marginTop: "16px", textAlign: "center" }}>
                            <h2
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "#1f2937",
                                }}
                            >
                                {id.name}
                            </h2>
                            <p
                                style={{
                                    fontSize: "0.875rem",
                                    color: "#6b7280",
                                    marginTop: "4px",
                                }}
                            >
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

                        {/* ✅ Details */}
                        <div style={{ width: "100%", marginTop: "8px", padding: "0 16px" }}>
                            <div style={{ marginBottom: "16px" }}>
                                <p
                                    style={{
                                        fontSize: "0.625rem",
                                        textTransform: "uppercase",
                                        color: "#6b7280",
                                    }}
                                >
                                    Code
                                </p>
                                <p
                                    style={{ fontSize: "1rem", fontWeight: 600, color: "#1f2937" }}
                                >
                                    T_{id.uuid}
                                </p>
                            </div>

                            <div style={{ marginBottom: "16px" }}>
                                <p
                                    style={{
                                        fontSize: "0.625rem",
                                        textTransform: "uppercase",
                                        color: "#6b7280",
                                    }}
                                >
                                    Valid From
                                </p>
                                <p
                                    style={{ fontSize: "1rem", fontWeight: 600, color: "#1f2937" }}
                                >
                                    {validFrom}
                                </p>
                            </div>

                            <div style={{ marginBottom: "16px" }}>
                                <p
                                    style={{
                                        fontSize: "0.625rem",
                                        textTransform: "uppercase",
                                        color: "#6b7280",
                                    }}
                                >
                                    Valid Till
                                </p>
                                <p
                                    style={{ fontSize: "1rem", fontWeight: 600, color: "#1f2937" }}
                                >
                                    {validTill}
                                </p>
                            </div>

                            {id.bank_name?.length && (
                                <div style={{ marginBottom: "16px" }}>
                                    <p
                                        style={{
                                            fontSize: "0.625rem",
                                            textTransform: "uppercase",
                                            color: "#6b7280",
                                        }}
                                    >
                                        Bank Name
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                            color: "#1f2937",
                                        }}
                                    >
                                        {`${id.bank_name[0].bank_name} (${id.bank_name[0].bank_code})`}
                                    </p>
                                </div>
                            )}

                            {id.branch_name?.length && (
                                <div>
                                    <p
                                        style={{
                                            fontSize: "0.625rem",
                                            textTransform: "uppercase",
                                            color: "#6b7280",
                                        }}
                                    >
                                        Branch Name
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                            color: "#1f2937",
                                        }}
                                    >
                                        {`${id.branch_name[0].branch_name} (${id.branch_name[0].branch_code})`}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ✅ Download Button */}
                    <button
                        onClick={downloadPDF}
                        style={{
                            marginTop: "24px",
                            padding: "8px 24px",
                            backgroundColor: "#2563eb",
                            color: "#ffffff",
                            borderRadius: "8px",
                            cursor: "pointer",
                            border: "none",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#1d4ed8")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#2563eb")
                        }
                    >
                        Download ID
                    </button>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    <p
                        style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937" }}
                    >
                        Not Permitted
                    </p>
                </div>
            )}
        </>
    );
};

export default Card;
