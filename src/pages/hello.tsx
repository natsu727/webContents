import { useState } from "react";

export default function Hello(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <header className="mb-8 border-b">
    <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
      {/* <!-- logo - start --> */}
      <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Libreries
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
        <a href="./news_pages" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">News</a>
        <a href="./faq" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">FAQ</a>
        {/* <a href="./mypage" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Login</a> */}
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <div className="flex divide-x border-r sm:border-l">

      <a href="./mypage" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>

          <span className="hidden text-xs font-semibold text-gray-500 sm:block">Login</span>
        </a>

        <button type="button" onClick={handleButtonClick} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-gray-800 opacity-75"></div>
        )}
        {isMenuOpen && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 text-black z-20">
            {/* メニューの中身 */}
            <div className=" w-40 h-50 text-xl">
              <h3 className=" font-bold">Menu Content</h3>
              <ul className=" p-4">
                <li><a href="/#">Home</a></li>
                <li><a href="/news_pages">News</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/mypage">Login</a></li>
              </ul>
            </div>
            
          </div>
        )}
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
        </button>
      </div>
      {/* <!-- buttons - end --> */}
    </div>
  </header>

  <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Shear your<br />Book shelf</h1>

        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">興味のあるコンテンツを保存・管理・共有しよう！！</p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="bookcases-1869616_1280.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="a-book-67049_1280.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>

    {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Men</a>
        <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Women</a>
        <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Teens</a>
      </div>
    </div> */}
  </section>
</div>
    )
}