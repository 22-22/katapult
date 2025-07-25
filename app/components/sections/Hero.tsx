export default function Hero() {
    return (
        <div
            className="relative h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/DoKKu25_Day01-2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">DRUŠTVO KATAPULT</h1>
                    <p className="mt-4 text-lg md:text-xl">Več kot 20 let izkušenj na področju videoprodukcije in neformalnega izobraževanja.</p>
                </div>
            </div>
        </div>
    )
}