import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

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
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 40,
            }}
        >
            <div
                ref={cardRef}
                style={{
                    width: 400,
                    height: 620,
                    borderRadius: 20,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 24,
                    backgroundColor: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    color: "#1f2937",
                    position: "relative",
                }}
            >
                {/* Logo */}
                <div style={{ width: 90, height: 70, marginBottom: 8 }}>
                    <img
                        src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg"
                        alt="Company Logo"
                        style={{
                            width: "auto",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* User Avatar or Default Icon */}


                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="60px" height="60px" className="rounded-full my-2" />


                {/* QR Code */}
                <div
                    style={{
                        width: 230,
                        height: 230,
                        borderRadius: 16,
                        overflow: "hidden",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        border: "4px solid #e5e7eb",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
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
                <div style={{ marginTop: 20, textAlign: "center" }}>
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
                    <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Code
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>T_{id.uuid}</p>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Valid From
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{validFrom}</p>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Valid Till
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>{validTill}</p>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Bank
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>
                            {id.bank_name?.[0]?.bank_name || "N/A"}
                        </p>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 10, textTransform: "uppercase", color: "#6b7280" }}>
                            Branch
                        </p>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>
                            {id.branch_name?.branch_name || "N/A"}
                        </p>
                    </div>
                </div>
            </div>

            <button
                disabled={true}
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
                Please take a screenshot
            </button>
        </div>
    );
};

export default Card;
