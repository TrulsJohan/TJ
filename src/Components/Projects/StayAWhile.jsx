import { FaArrowRight } from 'react-icons/fa6';
import stayawhile from '../../assets/stayawhile.png';

export function StayAWhile() {
    return (
        <div className="flex flex-row bg-gray-50 border border-gray-900 rounded-3xl items-center gap-4 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row w-full justify-between bg-gray-50 text-gray-900 border border-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl gap-6">
                <div className="flex flex-col bg-gray-50 justify-between">
                    <div>
                        <div className="flex items-center gap-3 border border-gray-900 rounded-2xl px-3 py-1 w-fit">
                            <div className="bg-green-300 rounded-full w-5 h-5"></div>
                            <p className="text-sm font-medium">
                                Frontend Development
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-9">
                        <div className="flex flex-col gap-1">
                            <p className="text-3xl sm:text-4xl md:text-5xl">
                                2--3
                            </p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                                StayAWhile
                            </h2>
                            <p className="text-gray-800 text-sm sm:text-base md:text-lg w-full sm:w-[90%] md:w-[600px]">
                                StayAWhile is a modern platform for booking and
                                renting cabins. Featuring sleek, intuitive
                                interfaces, it offers a seamless experience,
                                combining user-friendly navigation with vibrant
                                visuals to connect travelers with unique
                                accommodations.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://stay-a-while-dev.netlify.app/"
                                className="flex items-center bg-gray-900 border border-gray-50 rounded-2xl px-3 py-1 hover:bg-gray-800 transition">
                                <span className="text-sm font-medium text-gray-50">
                                    View
                                </span>
                                <div className="ml-2 bg-green-300 rounded-full w-6 h-6 flex items-center justify-center">
                                    <FaArrowRight className="text-gray-900 w-4 h-4" />
                                </div>
                            </a>
                            <a
                                href="https://github.com/StayAwhileOrg/stay-a-while"
                                className="flex items-center bg-gray-900 border border-gray-50 rounded-2xl px-3 py-1 hover:bg-gray-800 transition">
                                <span className="text-sm font-medium text-gray-50">
                                    GitHub
                                </span>
                            </a>
                            <div className="bg-gray-900 border border-gray-50 rounded-full px-3 py-1 text-sm font-medium flex items-center text-gray-50">
                                2024
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={stayawhile}
                    alt="StayAWhile Project"
                    className="w-full sm:w-2/5 md:w-1/3 lg:w-2/10 object-cover rounded-2xl"
                />
            </div>
            <div className="bg-green-300 rounded-full w-1 h-5"></div>
        </div>
    );
}
