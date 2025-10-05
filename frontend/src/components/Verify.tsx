import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface User {
    id: string;
    name: string;
    email: string;
}

const Verify: React.FC = () => {
    const path = useLocation()
    const [user, setUser] = useState<User | null>(null);
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const user_id = path.pathname.split('/').at(-1)
        if (user_id) {
            setLoading(true);

            setTimeout(() => {
                setUser({
                    id: user_id,
                    name: "John Doe",
                    email: "john.doe@example.com",
                });
                setLoading(false);
            }, 1000);
        }
    }, []);

    const handleVerify = () => {

        setVerified(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

            <img
                src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg"
                alt="Company Logo"
                className="w-32 h-32 mb-6"
            />


            <h1 className="text-3xl font-bold mb-4">Verify User</h1>


            {loading ? (
                <p>Loading user details...</p>
            ) : user ? (
                <div className="bg-white shadow-md rounded p-6 w-full max-w-md text-center">
                    <p className="mb-4">
                        <span className="font-semibold">User ID:</span> {user.id}
                    </p>

                    {!verified ? (
                        <button
                            onClick={handleVerify}
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Verify User
                        </button>
                    ) : (
                        <div className="mt-4">
                            <p className="text-green-600 font-semibold mb-2">Verified!</p>
                            <div className="text-left">
                                <p>
                                    <span className="font-semibold">Name:</span> {user.name}
                                </p>
                                <p>
                                    <span className="font-semibold">Email:</span> {user.email}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
};

export default Verify;
