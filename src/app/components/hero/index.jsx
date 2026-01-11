import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../../public/images/photo.jpg"

export default function Hero() {
  return (
    <section className="w-ful">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* LEFT - TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[25px] md:text-5xl font-bold text-white leading-tight">
              English with XOXO, Asadulla
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Let’s unlock your potential together! 
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Link href={'/'} className="px-3 py-2 md:px-4 md:py-4 bg-blue-600 text-white rounded-lg text-[14px] lg:text-[16px] hover:bg-blue-700 transition">
                Learn from a teacher with 10+ years of experience
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-[450px] md:h-[500px]">
              <Image
                src={HeroImage}   
                alt="O'quv markaz"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
