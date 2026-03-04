import { beatsnoop } from "../assets/icons";

export default function Login() {
    return (
        <section className="min-h-[calc(100vh-140px)] flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                <div className="hidden md:flex justify-center">
                    <img
                        src={beatsnoop}
                        alt="Login visual"
                        className="max-w-md w-full object-contain"
                    />
                </div>
                <div className="w-full max-w-md mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold text-gray-900">
                            Log in to Exclusive
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Enter your details below
                        </p>
                    </div>
                    <form className="space-y-6">
                        <input
                            type="email"
                            placeholder="Email or Phone Number"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition"
                        />
                        <div className="flex items-center justify-between pt-4">
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
                            >
                                Log In
                            </button>

                            <a
                                href="/"
                                className="text-red-500 text-sm hover:underline"
                            >
                                Forget Password?
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
