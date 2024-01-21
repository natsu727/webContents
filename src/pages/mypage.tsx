import CartBody from "./cartBody"
import Footer from "./footer"
import Header from "./header"

export default function Login() {
    return (
      <div className="flex flex-col min-h-screen bg-white ">
          <Header page="cart" />
        <CartBody/>
        <div className="bottom-0 w-full  text-white p-4">
        <Footer />
        </div>
      </div>
    );
  }
