import Footer from "./footer"
import Header from "./header"
import HowUseBody from "./how_use_body";

export default function HowUse() {
    return (
    <>
        <div className="flex flex-col min-h-screen bg-green-50 ">
        <Header page="" />
        <h2 className="mb-4 text-center text-5xl font-bold text-purple-900 md:mb-6 lg:text-5xl">How to use</h2>
        <h3　className=" text-center text-2xl  text-purple-600 ">簡単３ステップ！！</h3>
        <HowUseBody/>
        </div>
        <div className="bottom-0 w-full  text-white"><Footer /></div>
    </>
    );
  }
