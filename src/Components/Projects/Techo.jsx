import { FaArrowRight } from 'react-icons/fa6';
import techo from '../../assets/techo.png';

export function Techo() {
    return (
        <div className="flex flex-row bg-gray-900 border border-gray-50 rounded-3xl items-center gap-4 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row w-full justify-between bg-gray-900 text-gray-50 border border-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl gap-6">
                <div className="flex flex-col bg-gray-900 justify-between">
                    <div>
                        <div className="flex items-center gap-3 border border-gray-50 rounded-2xl px-3 py-1 w-fit">
                            <div className="bg-yellow-200 rounded-full w-5 h-5"></div>
                            <p className="text-sm font-medium">
                                Frontend Development
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-9">
                        <div className="flex flex-col gap-1">
                            <p className="text-3xl sm:text-4xl md:text-5xl">
                                1--3
                            </p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                                Techo
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg w-full sm:w-[90%] md:w-[600px]">
                                The Techo website is a cutting-edge platform
                                showcasing smart home innovations. With sleek,
                                user-friendly interfaces, it delivers an
                                immersive experience, seamlessly blending
                                intuitive navigation and stunning visuals to
                                highlight the future of home technology.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://ticho.netlify.app/"
                                className="flex items-center bg-gray-900 border border-gray-50 rounded-2xl px-3 py-1 hover:bg-gray-800 transition">
                                <span className="text-sm font-medium">
                                    View
                                </span>
                                <div className="ml-2 bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center">
                                    <FaArrowRight className="text-gray-900 w-4 h-4" />
                                </div>
                            </a>
                            <a
                                href="https://github.com/TrulsJohan/techo"
                                className="flex items-center bg-gray-900 border border-gray-50 rounded-2xl px-3 py-1 hover:bg-gray-800 transition">
                                <span className="text-sm font-medium">
                                    GitHub
                                </span>
                            </a>
                            <div className="bg-gray-900 border border-gray-50 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                                2024
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={techo}
                    alt="Techo Project"
                    className="w-full sm:w-2/5 md:w-1/3 lg:w-2/10 object-cover rounded-2xl"
                />
            </div>
            <div className="bg-yellow-200 rounded-full w-1 h-5"></div>
        </div>
    );
}
