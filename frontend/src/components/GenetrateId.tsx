
import { LoaderCircle } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"



const GenerateId: React.FC = () => {
    const path = useLocation()
    const [generating, setGenerating] = useState<boolean>(false)
    const navigate = useNavigate()

    function generateHandler(): void {
        try {
            setGenerating(true)
            const id = path.pathname.split('/').at(-1)
            fetch('http://kunal_test.kunalserver.live/createDynamicId/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res: Response) => {
                const data = await res.json()
                if (data.valid) {

                    setGenerating(false)
                    navigate(`/card/${data.userId.uuid}`)
                } else {
                    alert(data.message)
                    setGenerating(false)
                }
            })
        } catch (error) {
            console.log(error)
            setGenerating(false)
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center gap-15">
            <button className="w-[20%] bg-green-400 text-white rounded-lg cursor-pointer mt-30" onClick={() => generateHandler()} >Generate Id</button>
            {
                generating && (<div><LoaderCircle /></div>)
            }
        </div>
    )
}
export default GenerateId