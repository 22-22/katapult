export default function Header() {
    return (
        <header className="hidden md:flex justify-between items-center px-24 py-10 text-white md:fixed top-0 left-0 w-full z-50">
            <a className="text-4xl" href="#katapult">Katapult</a>
            <ul className="flex items-center gap-8 text-2xl">
                <li className="hover:scale-110 transition duration-300 ease-in-out"><a href="#dokku">DoKKu</a></li>
                <li className="hover:scale-110 transition duration-300 ease-in-out"><a href="#mfd">Mladinske delavnice</a></li>
                <li className="hover:scale-110 transition duration-300 ease-in-out"><a href="#filmi">Filmi</a></li>
                <li className="hover:scale-110 transition duration-300 ease-in-out"><a href="#o-nas">O nas</a></li>
            </ul>
        </header>
    );
}
