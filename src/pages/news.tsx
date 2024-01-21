
export default function News(){
    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6 lg:text-3xl">News</h1>
          </div>
          {/* <!-- text - end --> */}
      
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- article - start --> */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src="hand-895592_1280.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">January 20, 2024</span>
      
                <h2 className="text-xl font-bold text-gray-800">
                  <a href="./news_00" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">サービス開始のお知らせ</a>
                </h2>
      
                <p className="text-gray-500"></p>
      
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
                <span className="text-sm text-gray-400">January 22, 2024</span>
      
                <h2 className="text-xl font-bold text-gray-800">
                  <a href="./news_01" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"> ＜予告＞アップデート情報</a>
                </h2>
      
                <p className="text-gray-500">今後のアップデートで追加する新機能をご紹介！！</p>
      
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