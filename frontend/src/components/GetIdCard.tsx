import { useState, type FormEvent } from "react";
import type React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GetIdCard: React.FC = () => {


    const [mobileNumber, setMobileNumber] = useState<string>("");
    const navigate = useNavigate();
    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        if (mobileNumber.length < 10 || mobileNumber.length > 10) {
            toast.error("Enter correct mobile number");
            return;
        }
        navigate(`/card/${mobileNumber}`);
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen relative">
            <Toaster />

            <img src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg" alt="Company Logo" className="w-32 mb-6" />

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>


        </div>
    )
}

export default GetIdCard;