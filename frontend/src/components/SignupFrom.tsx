import type React from "react"
import { useState, type FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [aadhar, setAadhar] = useState<string>("")
    const [photo, setPhoto] = useState<File[]>([]);
    const navigate = useNavigate()

    const handlePhotoChange = (e: any) => {
        setPhoto(e.target.files);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("aadhar_number", aadhar)
        formData.append("avatar", photo[0]);

        try {
            fetch('https://kunal_test.kunalserver.live/signup', {
                method: 'POST',
                body: formData
            }).then(async (res: Response) => {
                const data = await res.json()
                if (data.valid) {
                    if (data.token) {
                        toast.success('Redirecting...')
                        setTimeout(() => {
                            navigate(`/generate/${data.token}`)
                        }, 1000)
                    }
                    else {

                    }

                }
            })
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <Toaster />
            <img src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg" alt="Company Logo" className="w-32 mb-6" />


            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Aadhar"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    className="border p-2 rounded"
                    required
                />


                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
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

export default SignUpForm