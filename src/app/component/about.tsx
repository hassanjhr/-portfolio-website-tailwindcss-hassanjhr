
import Link from "next/link";
export default function About() {
    return (
      <div id = "about">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 flex-col items-center">
            <div className="lg:flex-grow md:w-3/4 flex flex-col items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                About Me
              </h1>
              <p className="mb-2 leading-relaxed">
                I am Muhammad Hassan Jawaid, a multifaceted professional with a Bachelor
                degree in Finance and an MS in Data Science from Szabist, Karachi,
                currently enhancing my expertise through a certification in
                Artificial Intelligence from GIAIC. My portfolio showcases a blend
                of analytical prowess and digital innovation, featuring projects
                in web development, data-driven solutions, and AI implementations.
              </p>
              <p className="mb-5 leading-relaxed">
                I specialize in creating user-friendly, impactful web experiences
                that integrate advanced data analysis and AI technologies,
                demonstrating my commitment to driving sustainable and intelligent
                solutions. Explore my work to see how I merge finance, data
                science, and web development to craft transformative digital
                solutions.
              </p>
              <div className="flex justify-center">
                <Link href={'/assests/Resume/myResume.pdf'}>
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    View Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  