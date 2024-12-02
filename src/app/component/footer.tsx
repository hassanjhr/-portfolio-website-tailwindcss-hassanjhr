import Link from "next/link";
import { FaFacebook} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";


export default function Footer() {
    return(
        <div className="bg-blue-50">
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
  src="/assests/pictures/logo.png" 
  width={100} 
  alt="Logo" 
  height={100} 
  className="w-12"
/>

      <span className="ml-3 text-xl">HassanJHR</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      ©2024 HassanJHR
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={'https://www.facebook.com/'} target="_blank" className="text-gray-500">
      <FaFacebook className="text-2xl hover:text-sky-800"/>
      </Link >
      
      <Link href={'https://www.twitter.com/'} target="_blank" className="text-gray-500">
      <FaTwitter className="text-2xl hover:text-sky-500 ml-2"/>
      </Link >
      <Link href={'https://www.youtube.com/'} target="_blank" className="text-gray-500">
      <FaYoutube className="text-2xl hover:text-[#ff0000] ml-2"/>
      </Link >
      
    </span>
  </div>
</footer>

        </div>
    )
}