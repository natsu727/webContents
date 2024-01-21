import Footer from "./footer"
import Header from "./header"
import FaqBody from "./faq_body"

export default function Faq() {
    return (
      <div className="flex flex-col min-h-screen bg-white ">
          <Header page="faq" />
        <FaqBody/>
        <div className=" bottom-0 w-full  text-white p-4">
        <Footer />
        </div>
      </div>
    );
  }
