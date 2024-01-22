import CartBody from "./cartBody"
import Footer from "./footer"
import Header from "./header"

export default function Login() {
    return (
      <div className=" bg-green-50 flex flex-col min-h-screen ">
          <Header page="cart" />
        <CartBody/>
        <div className="bottom-0 w-full  text-white">
        <Footer />
        </div>
      </div>
    );
  }
