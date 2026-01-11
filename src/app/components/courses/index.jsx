import Image from "next/image";
const levels = [
  {
    title: "Pre-Intermediate",
    image: "/images/pre-intermediate.jpg",
  },
  {
    title: "Intermediate",
    image: "/images/intermediate.jpg",
  },
  {
    title: "IELTS",
    image: "/images/photo.jpg",
  },
  {
    title: "IELTS PRO",
    image: "/images/advanced.jpg",
  },
];

export default function CourseCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-white font-bold text-center mb-12">
        Available courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {levels.map((level, index) => (
          <div
            key={index}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={level.image}
              alt={level.title}
              fill
              className="object-cover transition duration-500 group-hover:blur-sm scale-105"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {level.title}
              </h3>

              <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
