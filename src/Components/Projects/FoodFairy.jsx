import { FaArrowRight } from 'react-icons/fa6';
import foodfairy from '../../assets/foodfairy.png';

export function FoodFairy() {
    return (
        <div className="flex flex-row bg-gray-50 border border-gray-900 rounded-4xl items-center gap-4 p-4">
            <div className="flex flex-row bg-gray-50 border border-gray-900 p-6 rounded-4xl">
                <div className="flex flex-col bg-gray-50 justify-between">
                    <div>
                        <div className="flex items-center gap-3 border border-gray-900 rounded-2xl px-3 py-1 w-fit">
                            <div className="bg-green-300 rounded-full w-5 h-5"></div>
                            <p className="text-sm font-medium">
                                Frontend Development
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-1">
                            <p className="text-4xl md:text-5xl">3--3</p>
                            <h2 className="text-5xl md:text-6xl font-bold">
                                Illuseum
                            </h2>
                            <p className="text-gray-800 text-sm md:text-base">
                                Welcome to the Future Home Technology website, a
                                cutting-edge platform showcasing the latest in
                                smart home innovation. Designed with sleek,
                                user-friendly interfaces, this site offers an
                                immersive experience, seamlessly blending
                                intuitive navigation with stunning visuals.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a className="flex items-center bg-gray-900 border border-gray-50 rounded-2xl px-3 py-1 hover:bg-gray-800 transition">
                                <span className="text-sm font-medium text-gray-50 rounded-4xl">
                                    View
                                </span>
                                <div className="ml-2 bg-green-300 rounded-full w-6 h-6 flex items-center justify-center">
                                    <FaArrowRight className="text-gray-900 w-4 h-4" />
                                </div>
                            </a>
                            <div className="bg-gray-900 border border-gray-50 rounded-full px-3 py-1 text-sm font-medium flex items-center text-gray-50">
                                NON-PROFIT
                            </div>
                            <div className="bg-gray-900 border border-gray-50 rounded-full px-3 py-1 text-sm font-medium flex items-center text-gray-50">
                                2024
                            </div>
                        </div>
                    </div>
                </div>
                <img src={foodfairy} alt="project"></img>
            </div>
            <div className="bg-green-300 rounded-full w-5 h-5"></div>
        </div>
    );
}
