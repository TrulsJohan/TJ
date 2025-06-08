import { useInView } from 'react-intersection-observer';
import { Illuseum } from '../Components/Projects/Illuseum';
import { Techo } from '../Components/Projects/Techo';
import { StayAWhile } from '../Components/Projects/StayAWhile';
import banner from '../assets/banner.png';
import portfolio from '../assets/portfolio.png';

export function RenderHome() {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: techoRef, inView: techoInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: stayAWhileRef, inView: stayAWhileInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: illuseumRef, inView: illuseumInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-gray-100 snap-y snap-mandatory overflow-y-scroll h-screen">
      <div
        ref={bannerRef}
        className={`relative min-h-screen flex flex-col transition-all duration-700 ease-out snap-start ${
          bannerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <img
          src={portfolio}
          className="z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 mt-32 sm:mt-32 md:mt-32 lg:mt-32"
        />
        <div className="w-full flex flex-row-reverse px-4 sm:px-6 md:px-8 lg:px-12 z-10 mt-4 sm:mt-5 md:mt-6 lg:mt-5">
          <p className="w-full sm:w-[500px] md:w-[550px] lg:w-[600px] text-center font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl">
            Hi, I am Truls Johan, a Frontend developer based in Norway. If you are looking for a website or collaboration, contact me through the socials.
          </p>
        </div>
        <img
          src={banner}
          alt="Portfolio Banner"
          className="absolute top-8 sm:top-10 md:top-12 lg:top-12 right-4 sm:right-6 md:right-8 lg:right-12 w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 object-cover z-0"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="snap-start min-h-screen flex items-center justify-center">
          <div
            ref={techoRef}
            className={`mx-auto max-w-7xl px-4 w-full transition-all duration-700 ease-out delay-100 ${
              techoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Techo />
          </div>
        </div>
        <div className="snap-start min-h-screen flex items-center justify-center">
          <div
            ref={stayAWhileRef}
            className={`mx-auto max-w-7xl px-4 w-full transition-all duration-700 ease-out delay-200 ${
              stayAWhileInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <StayAWhile />
          </div>
        </div>
        <div className="snap-start min-h-screen flex items-center justify-center">
          <div
            ref={illuseumRef}
            className={`mx-auto max-w-7xl px-4 w-full transition-all duration-700 ease-out delay-300 ${
              illuseumInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Illuseum />
          </div>
        </div>
      </div>
    </div>
  );
}
