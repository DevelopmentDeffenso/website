export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-apple-white dark:bg-apple-black">
            <div className="w-full max-w-md rounded-apple bg-white/70 p-8 backdrop-blur-apple dark:bg-black/70">
                <h1 className="text-2xl font-bold text-apple-black dark:text-apple-white">Login</h1>
                <p className="mt-4 text-apple-grey">Welcome back to Antigravity.</p>
                <button className="mt-6 w-full rounded-lg bg-apple-blue py-2 text-white transition-all hover:opacity-90 active:scale-95">
                    Sign In
                </button>
            </div>
        </div>
    );
}
