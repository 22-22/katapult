export default function Header() {
    return (
        <header className="flex justify-between items-center px-24 py-10 text-white fixed top-0 left-0 w-full z-50">
            <div className="text-4xl">Katapult</div>
            <ul className="flex items-center gap-8 text-2xl">
                <li><a href="#o-nas" className="hover:underline">O nas</a></li>
                <li><a href="#dokku" className="hover:underline">DoKKu</a></li>
                <li><a href="#delavnice" className="hover:underline">Mladinske delavnice</a></li>
                <li><a href="#filmi" className="hover:underline">Filmi</a></li>
            </ul>
        </header>
    );
}