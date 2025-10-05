import { Loader } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { useLocation } from "react-router-dom"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface IdCard {
    uuid: string,
    user_id: number,
    name: string,
    qrCode: string,
    user_avatar: string
}



const Card: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null)
    const path = useLocation()
    const [loading, setLoading] = useState<boolean>(false)
    const [id, setId] = useState<IdCard>({
        uuid: '',
        user_id: 0,
        name: '',
        qrCode: '',
        user_avatar: ''
    })
    const downloadPDF = async () => {
        if (!cardRef.current) return

        const canvas = await html2canvas(cardRef.current, { scale: 1 }) // High resolution
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [canvas.width, canvas.height]
        })
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
        pdf.save(`${id.name}_id_card.pdf`)
    }
    useEffect(() => {
        try {
            setLoading(true)
            const id = path.pathname.split('/').at(-1)
            fetch('http://kunal_test.kunalserver.live/card/' + `${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(async (res: Response) => {
                const data = await res.json()
                if (data.valid) {
                    setId(data.userId)
                    setLoading(false)
                } else {
                    toast.error(data.message)
                    setLoading(false)
                }
            })
        } catch (error) {
            toast.error('Sonmething went wrong')
        }
    }, [])
    return (
        <>
            {
                loading ? <Loader /> : <div className="flex flex-col items-center justify-center">
                    <div ref={cardRef} className="w-128 h-96 mt-50  rounded-2xl shadow-2xl overflow-hidden relative" style={{ background: 'white' }}>

                        <div className="absolute left-0 top-0 bottom-0 w-48 p-6 flex flex-col items-center justify-between" style={{ background: "linear-gradient(to bottom right, #065f46, #064e3b)" }}>

                            <div className="w-32 h-32 rounded-lg flex items-center justify-center shadow-lg" style={{ background: 'white' }}>
                                <div className="w-28 h-28 rounded-lg flex items-center justify-center">
                                    <img src={id.user_avatar} crossOrigin="anonymous" />
                                </div>
                            </div>

                            <div className="text-center w-full">
                                <h2 className="font-bold text-lg tracking-wide mb-1" style={{ color: 'white' }}>{id.name}</h2>
                                <p className="text-sm font-medium" style={{ color: 'green' }}>{'Feild member'}</p>
                            </div>


                            <div className="w-32 h-32 rounded-lg p-2 shadow-lg" style={{ background: 'white' }}>
                                <img
                                    src={id.qrCode}
                                    alt="QR Code"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>


                        <div className="absolute right-0 top-0 bottom-0 left-48 p-6 flex flex-col justify-between">

                            <div className="text-right">
                                <div className="flex items-center justify-end gap-2 mb-2">
                                    <img src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg" />

                                </div>
                                <div className="text-xs font-semibold tracking-wider" style={{ color: 'green' }}>EMPLOYEE IDENTIFICATION</div>
                            </div>


                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}>CODE</div>
                                    <div className="font-bold text-xl tracking-wide" style={{ color: 'green' }}>{id.uuid}</div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}> DATE OF BIRTH</div>
                                    <div className="font-bold text-lg" style={{ color: 'green' }}>{'02-06-2003'}</div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}>EXP DATE</div>
                                    <div className="font-bold text-lg" style={{ color: 'green' }}>{'31-12-2026'}</div>
                                </div>
                            </div>
                        </div>


                        <div style={{ background: "linear-gradient(to bottom right, #065f46, #064e3b)" }}></div>

                    </div>
                    <button onClick={downloadPDF} className="px-4 py-2 bg-green-700 text-white rounded-md">
                        Download as PDF
                    </button>
                </div>
            }
        </>
    )
}

export default Card