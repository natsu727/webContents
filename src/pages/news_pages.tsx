import Footer from "./footer"
import News from "./news"
import Header from "./header"

export default function News_Page() {
    return (
      <div className="flex flex-col min-h-screen bg-white">
          <Header page="news" />
        <div id="root" className="flex-1 object-center">
        {/* <h1 className=" relative text-black left-1/4 font-italic text-6xl top-10">News</h1> */}
        <News/>
        </div>
        <div className="bottom-0 w-full  text-white p-4">
        <Footer />
        </div>
      </div>
    );
  }
