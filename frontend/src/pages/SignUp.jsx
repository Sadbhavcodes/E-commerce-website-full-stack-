import { beatsnoop, googleLogo } from "../assets/icons";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <section className="min-h-[calc(100vh-140px)] flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

                <div className="hidden md:flex justify-center">
                    <img src={beatsnoop} alt="Signup visual" className="max-w-md w-full" />
                </div>

                <div className="max-w-md w-full mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold">Create an account</h1>
                        <p className="text-gray-500 mt-2">Enter your details below</p>
                    </div>

                    <form className="space-y-6">
                        <input type="text" placeholder="Name"
                            className="w-full border-b py-2 outline-none focus:border-black" />

                        <input type="email" placeholder="Email or Phone Number"
                            className="w-full border-b py-2 outline-none focus:border-black" />

                        <input type="password" placeholder="Password"
                            className="w-full border-b py-2 outline-none focus:border-black" />

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
                        >
                            Create Account
                        </button>
                    </form>
                    <button
                        className="mt-4 w-full flex items-center justify-center gap-3 border py-3 rounded-md hover:bg-gray-50 transition"
                    >
                        <img src={googleLogo} alt="Google" className="w-5 h-5" />
                        Sign up with Google
                    </button>
                    <p className="text-sm text-center mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-red-500 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
}