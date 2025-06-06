import { Link } from 'react-router-dom';
import linkedIn from '../../assets/linkedIn.svg';

export function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Truls Johan
                </p>
                <nav className="flex space-x-4">
                    <Link
                        to="/about"
                        className="text-gray-600 hover:text-gray-800 transition">
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="text-gray-600 hover:text-gray-800 transition">
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-600 hover:text-gray-800 transition">
                        Contact
                    </Link>
                </nav>
                <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="w-8 h-8 mt-2 sm:mt-0"
                />
            </div>
        </header>
    );
}
