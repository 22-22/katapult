const Parallax = () => {
    return (
        <div className="relative h-80 bg-fixed bg-cover bg-center md:bg-left-top bg-[url(/mfd/knk-1.jpg)]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text */}
            <div className="relative flex items-center justify-center h-full">
                <h2 className="text-4xl md:text-5xl text-white uppercase shadow-lg tracking-wide text-center px-4">
                    Mladinske filmske delavnice
                </h2>
            </div>
        </div>
    )
}

export default Parallax