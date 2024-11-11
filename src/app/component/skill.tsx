import { FaRegCheckSquare } from "react-icons/fa";

export default function Skill(){
    return(
        <div id="skill">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">

        {/* Skills1 */}
      <div className="p-4 w-[100%] md:w-1/2">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">

        <div className="relative h-1 w-full bg-gray-300 rounded-xl">
            <div className= "absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
            

        </div>

            <p className="font-bold text-blue-500 text-right">100%</p>
          </div>
        </div>
      </div>


       {/* Skills2 */}
       <div className="p-4 w-[100%] md:w-1/2">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">

        <div className="relative h-1 w-full bg-gray-300 rounded-xl">
            <div className= "absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
            

        </div>
            <p className="font-bold text-blue-500 text-right">80%</p>
          </div>
        </div>
      </div>


      {/* Skills4 */}
      <div className="p-4 w-[100%] md:w-1/2">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">

        <div className="relative h-1 w-full bg-gray-300 rounded-xl">
            <div className= "absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
            

        </div>
            <p className="font-bold text-blue-500 text-right">80%</p>
          </div>
        </div>
      </div>

      {/* Skills3 */}
      <div className="p-4 w-[100%] md:w-1/2">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegCheckSquare  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Python
            </h2>
          </div>
          <div className="flex-grow">

        <div className="relative h-1 w-full bg-gray-300 rounded-xl">
            <div className= "absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
            

        </div>
            <p className="font-bold text-blue-500 text-right">70%</p>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</section>

        </div>
    )
}