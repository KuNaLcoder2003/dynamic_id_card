import { Loader } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { useLocation } from "react-router-dom"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface IdCard {
    uuid: string
    user_id: number
    name: string
    qrCode: string
    user_avatar: string
    bank_name?: any
    branch_name?: any
}

const Card: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null)
    const path = useLocation()
    const [loading, setLoading] = useState<boolean>(false)
    const [permitted, setPermitted] = useState<boolean>(false)
    const [id, setId] = useState<IdCard>({
        uuid: "",
        user_id: 0,
        name: "",
        qrCode: "",
        user_avatar: "",
        bank_name: [],
        branch_name: [],
    })
    const [message, setMessage] = useState<string>("")

    const downloadPDF = async () => {
        if (!cardRef.current) return

        const cardElement = cardRef.current

        // Wait for images to load before capture
        const images = cardElement.querySelectorAll("img")
        await Promise.all(
            Array.from(images).map(
                (img) =>
                    new Promise<void>((resolve) => {
                        if (img.complete) resolve()
                        else img.onload = () => resolve()
                    })
            )
        )

        // Capture the card
        const canvas = await html2canvas(cardElement, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            scrollX: 0,
            scrollY: 0,
        })
        const imgData = canvas.toDataURL("image/png")

        // Create PDF with the same aspect ratio as the card
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width + 40, canvas.height + 40], // added buffer
        })

        // Add image with a small top/left margin
        pdf.addImage(imgData, "PNG", 20, 20, canvas.width, canvas.height)
        pdf.save(`${id.name}_id_card.pdf`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // const idParam = path.pathname.split("/").at(-1)
                const res = await fetch(
                    `https://sugee.io/KYCServiceAPI/kycapi/VerifyID/9322725437`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                const data = await res.json()
                if (data.valid) {
                    setId(data.userId)
                    setPermitted(true)
                } else {
                    toast.error(data.message)
                    setMessage(data.message)
                    setPermitted(false)
                }
            } catch (error) {
                toast.error("Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [path.pathname])

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin w-8 h-8 text-gray-700" />
                </div>
            ) : permitted ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div
                        ref={cardRef}
                        className="w-[400px] h-[560px] rounded-xl shadow-lg flex flex-col items-center p-6 pb-14 relative"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            backgroundColor: "#ffffff",
                            color: "#1f2937",
                        }}
                    >
                        {/* QR Code (replaces avatar) */}
                        <div
                            className="w-28 h-28 overflow-hidden shadow-md border-4 flex items-center justify-center"
                            style={{ borderColor: "#e5e7eb" }}
                        >
                            <img
                                src={id.qrCode}
                                alt="QR Code"
                                className="w-full h-full object-contain"
                                crossOrigin="anonymous"
                            />
                        </div>

                        {/* User Info */}
                        <div className="mt-4 text-center">
                            <h2 className="text-xl font-bold" style={{ color: "#1f2937" }}>
                                {id.name}
                            </h2>
                            <p className="text-sm mt-1" style={{ color: "#4b5563" }}>
                                Field Consultant
                            </p>
                        </div>

                        {/* Details */}
                        <div className="w-full mt-6 space-y-4 px-4">
                            <div>
                                <p className="text-xs uppercase" style={{ color: "#6b7280" }}>
                                    Code
                                </p>
                                <p
                                    className="text-base font-semibold"
                                    style={{ color: "#1f2937" }}
                                >
                                    T_{id.uuid}
                                </p>
                            </div>

                            {/* <div>
                                <p className="text-xs uppercase" style={{ color: "#6b7280" }}>
                                    Date of Birth
                                </p>
                                <p
                                    className="text-base font-semibold"
                                    style={{ color: "#1f2937" }}
                                >
                                    02-06-2003
                                </p>
                            </div> */}

                            <div>
                                <p className="text-xs uppercase" style={{ color: "#6b7280" }}>
                                    Expiry Date
                                </p>
                                <p
                                    className="text-base font-semibold"
                                    style={{ color: "#1f2937" }}
                                >
                                    31-12-2026
                                </p>
                            </div>

                            {id.bank_name && id.bank_name.length > 0 && (
                                <div>
                                    <p className="text-xs uppercase" style={{ color: "#6b7280" }}>
                                        Bank Name
                                    </p>
                                    <p
                                        className="text-base font-semibold"
                                        style={{ color: "#1f2937" }}
                                    >
                                        {`${id.bank_name[0].bank_name} (${id.bank_name[0].bank_code})`}
                                    </p>
                                </div>
                            )}

                            {id.branch_name && id.branch_name.length > 0 && (
                                <div>
                                    <p className="text-xs uppercase" style={{ color: "#6b7280" }}>
                                        Branch Name
                                    </p>
                                    <p
                                        className="text-base font-semibold"
                                        style={{ color: "#1f2937" }}
                                    >
                                        {`${id.branch_name[0].branch_name} (${id.branch_name[0].branch_code})`}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Logo - adjusted position to prevent crop */}
                        <div className="absolute bottom-8 right-8 w-10 h-10">
                            <img
                                src="/logo.svg"
                                alt="Company Logo"
                                className="w-full h-full object-contain"
                                crossOrigin="anonymous"
                                style={{ maxWidth: "40px", maxHeight: "40px" }}
                            />
                        </div>
                    </div>

                    <button
                        onClick={downloadPDF}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Download as PDF
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 w-screen h-screen">
                    <p className="text-2xl font-bold">{message}</p>
                    <p className="text-lg font-semibold">
                        After getting approval get your ID card at{" "}
                        <span
                            onClick={() =>
                                window.open(
                                    `https://dynamic-id-card.vercel.app/card/${path.pathname
                                        .split("/")
                                        .at(-1)}`,
                                    "_blank"
                                )
                            }
                            className="text-blue-400 cursor-pointer underline"
                        >
                            {`https://dynamic-id-card.vercel.app/card/${path.pathname
                                .split("/")
                                .at(-1)}`}
                        </span>
                    </p>
                </div>
            )}
        </>
    )
}

export default Card
