export function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Truls Johan
                </p>
                <nav className="flex space-x-4">
                    <a
                        href="#about"
                        className="text-gray-600 hover:text-gray-800 transition">
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-600 hover:text-gray-800 transition">
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-600 hover:text-gray-800 transition">
                        Contact
                    </a>
                </nav>
                <img
                    src={''}
                    alt="Background"
                    className="w-8 h-8 mt-2 sm:mt-0"
                />
            </div>
        </header>
    );
}
