import { Loader } from "lucide-react";
import type React from "react";
import { useState, type FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [aadhar, setAadhar] = useState<string>("");
    const [photo, setPhoto] = useState<File[]>([]);
    const navigate = useNavigate();

    const handlePhotoChange = (e: any) => {
        setPhoto(e.target.files);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Validate Aadhar format: xxxx xxxx xxxx
        const aadharRegex = /^(\d{4} \d{4} \d{4})$/;
        if (!aadharRegex.test(aadhar)) {
            toast.error("Aadhar must be in xxxx xxxx xxxx format");
            return;
        }

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("aadhar_number", aadhar);
        formData.append("avatar", photo[0]);
        setLoading(true);

        try {
            fetch('https://kunal-test.kunalserver.live/signup', {
                method: 'POST',
                body: formData
            }).then(async (res: Response) => {
                const data = await res.json();
                if (data.valid) {
                    if (data.token) {
                        toast.success('Redirecting...');
                        setLoading(false);
                        setTimeout(() => {
                            navigate(`/generate/${data.token}`);
                        }, 1000);
                    } else {
                        setLoading(false);
                        toast.error('Error signing up');
                    }
                }
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen relative">
            <Toaster />
            <img src="https://sugee.io/ckyc/assets/img/logo-text-primary.svg" alt="Company Logo" className="w-32 mb-6" />

            {loading && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className='rounded-lg shadow-md h-auto p-4 w-[30%] m-auto'>
                        <div className="flex flex-col justify-center items-center p-4 bg-white w-full gap-4 rounded-lg">
                            <Loader />
                        </div>
                    </div>
                </div>
            )}

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
                    placeholder="Aadhar (xxxx xxxx xxxx)"
                    value={aadhar}
                    onChange={(e) => {
                        // Remove all non-digit characters
                        let value = e.target.value.replace(/\D/g, '');
                        // Limit to 12 digits
                        value = value.slice(0, 12);
                        // Add spaces after every 4 digits
                        const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                        setAadhar(formatted);
                    }}
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
    );
}

export default SignUpForm;
