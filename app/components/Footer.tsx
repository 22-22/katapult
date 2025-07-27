export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white px-6 md:px-24 py-6 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-2xl text-right font-bold md:text-left">
                    <p>Društvo Katapult</p>
                </div>
                <div>
                    <p>Libna 5, 8270 Krško</p>
                    <p><a href="mailto:katapult2003@gmail.com" className="underline hover:text-gray-300">katapult2003@gmail.com</a></p>
                </div>
            </div>
        </footer>

    );
}
