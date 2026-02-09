export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-apple-white dark:bg-apple-black">
            <h1 className="text-6xl font-bold text-apple-black dark:text-apple-white">404</h1>
            <p className="mt-4 text-xl text-apple-grey">Page not found.</p>
            <a href="/" className="mt-6 text-apple-blue hover:underline">Go back home</a>
        </div>
    );
}
