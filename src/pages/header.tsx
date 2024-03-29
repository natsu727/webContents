import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header(props:any){
    const selected :string = "font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";
    const unselected :string ="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"; 
    let state_home = props.page==="#"?selected:unselected;
    let state_news =props.page==="news"?selected:unselected;
    let state_search =props.page==="faq"?selected:unselected;
    let state_cart =props.page==="cart"?selected:unselected;

    return(
        <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gradient-to-t from-green-100 to-green-500 text-sm py-4 ">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
            <a className="inline-flex text-xl font-semibold text-purple-800" href="./#">
            {/* <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg> */}
            <img className=" w-6 " src="本の無料アイコン素材4.svg"></img>

            Libraries</a>
            <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </div>
            <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a className={state_home} href="./#" aria-current="page">Home</a>
                <a className={state_news} href="./news_pages">News</a>
                <a className={state_search} href="./faq">FAQ</a>
                <a className={state_cart} href="./mypage">Login</a>
            </div>
            </div>
        </nav>
        </header>
        </>
    )
}