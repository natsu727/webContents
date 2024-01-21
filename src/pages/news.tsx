
export default function News(){
    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">News</h1>
          </div>
          {/* <!-- text - end --> */}
      
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- article - start --> */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">July 19, 2021</span>
      
                <h2 className="text-xl font-bold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
                </h2>
      
                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
      
            {/* <!-- article - start --> */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 07, 2021</span>
      
                <h2 className="text-xl font-bold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
                </h2>
      
                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
          </div>
        </div>
      </div>
    )
}