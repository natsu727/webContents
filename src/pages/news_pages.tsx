import Footer from "./footer"
import News from "./news"
import Header from "./header"

export default function News_Page() {
    return (
      <div className="flex flex-col min-h-screen bg-white">
          <Header />
        <div id="root" className="flex-1 object-center">
          <News />
        </div>
        <div className="fixed bottom-0 w-full  text-white p-4">
        <Footer />
        </div>
      </div>
    );
  }
