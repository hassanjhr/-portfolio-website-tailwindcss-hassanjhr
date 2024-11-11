'use client'

import Link from "next/link"
import Image from "next/image"

export default function Projects() {
    return(
        <div id="project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       My Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap -m-8">
{/* Project1 */}


      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/pictures/project1.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dynamic
            </h1>
            <p className="leading-relaxed">
              This project represents dynamic resume builder.
            </p>
            <Link target="_blank" href={'https://updated-milestone5-hassanjhr.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 mb-1 hover:underline">
              View Project.
            </p></Link>
          </div>
        </div>
      </div>
      




      {/* Project2 */}


      <div className="lg:w-1/4 sm:w-1/ p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/pictures/project2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Responsive Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Landing Page
            </h1>
            <p className="leading-relaxed">
              This project represents Landing Page of Panacloud.
            </p>
            <Link target="_blank" href={'https://panacloud-landing-page-hassanjhr.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 mb-1 hover:underline">
              View Project.
            </p></Link>
          </div>
        </div>
      </div>


      {/* Project3 */}


      <div className="lg:w-1/4 sm:w-1/ p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/pictures/project3.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              repsonsive 
            </h1>
            <p className="leading-relaxed">
              This project represents Simple Calculator using HTML CSS & JavaScript.
            </p>
            <Link target="_blank" href={'https://calculator-hassanjhr.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 mb-1 hover:underline">
              View Project.
            </p></Link>
          </div>
        </div>
      </div>


      {/* Project4 */}


      <div className="lg:w-1/4 sm:w-1/ p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assests/pictures/project4.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Timer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             CountDown 
            </h1>
            <p className="leading-relaxed">
              This project represents Countdown Timer.
            </p>
            <Link target="_blank" href={'https://time-counter-hassanjhr.vercel.app/'}>
            <p className="leading-relaxed text-blue-500 mb-1 hover:underline">
              View Project.
            </p></Link>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

        </div>
    )
}