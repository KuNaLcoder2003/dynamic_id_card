import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";



const Verify: React.FC = () => {
    const path = useLocation()
    const userId = path.pathname.split('/').at(-1)
    const [loading, setLoading] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false)

    const [id, setId] = useState<IdCard>({
        uuid: '',
        user_id: 0,
        name: '',
        qrCode: '',
        user_avatar: ''
    })
    interface IdCard {
        uuid: string,
        user_id: number,
        name: string,
        qrCode: string,
        user_avatar: string
    }

    const handleVerify = () => {

        const user_id = path.pathname.split('/').at(-1)
        setLoading(true)
        try {
            if (!user_id) {
                toast.error('Bad request')
                return
            }
            fetch('http://kunal_test.kunalserver.live/verify/' + user_id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(async (res: Response) => {
                const data = await res.json()
                if (data.valid) {
                    toast.success(data.message)
                    setId(data.userId)
                    setLoading(false)
                    setVerified(true)

                } else {
                    toast.error(data.message)
                    setLoading(false)
                }
            })
        } catch (error) {
            toast.error('Somethig went wrong')
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

            <img
                src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg"
                alt="Company Logo"
                className="w-32 h-32 mb-6"
            />


            <h1 className="text-3xl font-bold mb-4">Verify User</h1>





            <div className="bg-white shadow-md rounded p-6 w-full max-w-md text-center">
                <p className="mb-4">
                    <span className="font-semibold">User ID:</span> {userId}
                </p>

                {!verified ? (
                    <button
                        onClick={handleVerify}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Verify User
                    </button>
                ) : (
                    <>
                        {
                            loading ? <p>Loading...</p> : <div className="mt-4">
                                <p className="text-green-600 font-semibold mb-2">Verified!</p>
                                <div className="text-left">
                                    <p>
                                        <span className="font-semibold">Name:</span> {id.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Code:</span> {id.uuid}
                                    </p>
                                </div>
                            </div>
                        }
                    </>
                )}
            </div>
            : (
            <p>User not found</p>
            )
        </div>
    );
};

export default Verify;
