export default function Stats() {
    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="text-4xl font-cyber text-white">3.5M</h3>
                    <p className="text-gray-500 text-sm mt-2">Unfilled Jobs Globally</p>
                </div>
                <div>
                    <h3 className="text-4xl font-cyber text-cyber-blue">EVERY 39s</h3>
                    <p className="text-gray-500 text-sm mt-2">A New Cyber Attack</p>
                </div>
                <div>
                    <h3 className="text-4xl font-cyber text-white">100%</h3>
                    <p className="text-gray-500 text-sm mt-2">Defensive Mindset</p>
                </div>
            </div>
        </section>
    );
}
