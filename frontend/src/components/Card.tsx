// import { Loader } from "lucide-react"
// import React, { useEffect, useRef, useState } from "react"
// import toast from "react-hot-toast"
// import { useLocation } from "react-router-dom"
// import html2canvas from "html2canvas"
// import jsPDF from "jspdf"

// interface IdCard {
//     uuid: string,
//     user_id: number,
//     name: string,
//     qrCode: string,
//     user_avatar: string
// }



// const Card: React.FC = () => {
//     const cardRef = useRef<HTMLDivElement>(null)
//     const path = useLocation()
//     const [loading, setLoading] = useState<boolean>(false)
//     const [id, setId] = useState<IdCard>({
//         uuid: '',
//         user_id: 0,
//         name: '',
//         qrCode: '',
//         user_avatar: ''
//     })
//     const downloadPDF = async () => {
//         if (!cardRef.current) return

//         const canvas = await html2canvas(cardRef.current, { scale: 1 }) // High resolution
//         const imgData = canvas.toDataURL("image/png")
//         const pdf = new jsPDF({
//             orientation: "landscape",
//             unit: "px",
//             format: [canvas.width, canvas.height]
//         })
//         pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
//         pdf.save(`${id.name}_id_card.pdf`)
//     }
//     useEffect(() => {
//         try {
//             setLoading(true)
//             const id = path.pathname.split('/').at(-1)
//             fetch('https://kunal-test.kunalserver.live/card/' + `${id}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//             }).then(async (res: Response) => {
//                 const data = await res.json()
//                 if (data.valid) {
//                     setId(data.userId)
//                     setLoading(false)
//                 } else {
//                     toast.error(data.message)
//                     setLoading(false)
//                 }
//             })
//         } catch (error) {
//             toast.error('Sonmething went wrong')
//         }
//     }, [])
//     return (
//         <>
//             {
//                 loading ? <Loader /> : <div className="flex flex-col items-center justify-center">
//                     <div ref={cardRef} className="w-128 h-96 mt-50  rounded-2xl shadow-2xl overflow-hidden relative" style={{ background: 'white' }}>

//                         <div className="absolute left-0 top-0 bottom-0 w-48 p-6 flex flex-col items-center justify-between" style={{ background: "linear-gradient(to bottom right, #065f46, #064e3b)" }}>

//                             <div className="w-32 h-32 rounded-lg flex items-center justify-center shadow-lg" style={{ background: 'white' }}>
//                                 <div className="w-28 h-28 rounded-lg flex items-center justify-center">
//                                     <img src={id.user_avatar} crossOrigin="anonymous" />
//                                 </div>
//                             </div>

//                             <div className="text-center w-full">
//                                 <h2 className="font-bold text-lg tracking-wide mb-1" style={{ color: 'white' }}>{id.name}</h2>
//                                 <p className="text-sm font-medium" style={{ color: 'green' }}>{'Feild member'}</p>
//                             </div>


//                             <div className="w-32 h-32 rounded-lg p-2 shadow-lg" style={{ background: 'white' }}>
//                                 <img
//                                     src={id.qrCode}
//                                     alt="QR Code"
//                                     className="w-full h-full object-contain"
//                                 />
//                             </div>
//                         </div>


//                         <div className="absolute right-0 top-0 bottom-0 left-48 p-6 flex flex-col justify-between">

//                             <div className="text-right">
//                                 <div className="flex items-center justify-end gap-2 mb-2">
//                                     <img src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg" />

//                                 </div>
//                                 <div className="text-xs font-semibold tracking-wider" style={{ color: 'green' }}>EMPLOYEE IDENTIFICATION</div>
//                             </div>


//                             <div className="space-y-3">
//                                 <div>
//                                     <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}>CODE</div>
//                                     <div className="font-bold text-xl tracking-wide" style={{ color: 'green' }}>{id.uuid}</div>
//                                 </div>

//                                 <div>
//                                     <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}> DATE OF BIRTH</div>
//                                     <div className="font-bold text-lg" style={{ color: 'green' }}>{'02-06-2003'}</div>
//                                 </div>

//                                 <div>
//                                     <div className="text-xs font-semibold mb-1" style={{ color: 'green' }}>EXP DATE</div>
//                                     <div className="font-bold text-lg" style={{ color: 'green' }}>{'31-12-2026'}</div>
//                                 </div>
//                             </div>
//                         </div>


//                         <div style={{ background: "linear-gradient(to bottom right, #065f46, #064e3b)" }}></div>

//                     </div>
//                     <button onClick={downloadPDF} className="px-4 py-2 bg-green-700 text-white rounded-md">
//                         Download as PDF
//                     </button>
//                 </div>
//             }
//         </>
//     )
// }

// export default Card
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
    bank_name?: any;
    branch_name?: any;
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
        const canvas = await html2canvas(cardRef.current, { scale: 2 })
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width + 20, canvas.height + 20],
        })
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
        pdf.save(`${id.name}_id_card.pdf`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const idParam = path.pathname.split("/").at(-1)
                const res = await fetch(
                    `https://kunal-test.kunalserver.live/card/${idParam}`,
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
                setPermitted(false)
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
            ) : (
                permitted ? <div className="flex flex-col items-center justify-center mt-10">
                    <div
                        ref={cardRef}
                        className="w-[400px] h-[560px] rounded-xl shadow-lg bg-white flex flex-col items-center p-6 relative"
                        style={{ fontFamily: "Inter, sans-serif" }}
                    >

                        <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
                            <img
                                src={id.user_avatar}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                                crossOrigin="anonymous"
                            />
                        </div>


                        <div className="mt-4 text-center">
                            <h2 className="text-xl font-bold text-gray-800">{id.name}</h2>
                            <div className="flex flex-col items-center justify-center mt-1 space-x-2">
                                <img
                                    src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg"
                                    alt="Company Logo"
                                    className="h-8"
                                />
                                <p className="text-sm text-gray-600">Field Member</p>
                            </div>
                        </div>


                        <div className="w-full mt-6 space-y-4 px-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Code</p>
                                <p className="text-base font-semibold text-gray-800">
                                    {id.uuid}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase">
                                    Date of Birth
                                </p>
                                <p className="text-base font-semibold text-gray-800">
                                    02-06-2003
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase">
                                    Expiry Date
                                </p>
                                <p className="text-base font-semibold text-gray-800">
                                    31-12-2026
                                </p>
                            </div>

                            {id.bank_name && id.bank_name.length > 0 && (
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">
                                        Bank Name
                                    </p>
                                    <p className="text-base font-semibold text-gray-800">
                                        {`${id.bank_name[0].bank_name} (${id.bank_name[0].bank_code})`}
                                    </p>
                                </div>
                            )}

                            {id.branch_name && id.branch_name.length > 0 && (
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">
                                        Branch Name
                                    </p>
                                    <p className="text-base font-semibold text-gray-800">
                                        {`${id.branch_name[0].branch_name} (${id.branch_name[0].branch_code})`}
                                    </p>
                                </div>
                            )}
                        </div>


                        <div className="absolute bottom-10 right-4 w-24 h-24">
                            <img
                                src={id.qrCode}
                                alt="QR Code"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <button
                        onClick={downloadPDF}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Download as PDF
                    </button>
                </div> : <div className="flex flex-col items-center justify-center gap-4 w-screen h-screen">
                    <p className="text-2xl font-bold">{message}</p>
                    <p className="text-lg font-semibold">After getting approval get your ID card at <span onClick={() => window.open(`https://dynamic-id-card.vercel.app/card/${path.pathname.split("/").at(-1)}`, '_blank')} className="text-blue-400 cursor-pointer text-underline">{`https://dynamic-id-card.vercel.app/card/${path.pathname.split("/").at(-1)}`}</span></p>
                </div>
            )}
        </>
    )
}

export default Card
