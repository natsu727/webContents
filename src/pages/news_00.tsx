import Footer from "./footer"
import Header from "./header"

export default function Faq() {
    return (
    <div className="flex flex-col min-h-screen bg-white ">
        <Header page="news" />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">サービス開始のお知らせ</h1>
        <h3 className=" text-right pr-20 text-gray-500 sm:text-lg md:mb-8">2024/01/20</h3>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        本日、2024年1月20日より本サービスを開始します。<br/>

        本サイトでは、ユーザーの皆様の読書活動を促進していくような情報・サービスを発信して参ります。
        今後、アップデートのお知らせなどは随時Newsに投稿させていただきますのでご確認ください。

        </p>

        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
        <img src="hand-895592_1280.jpg" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
        </div>
  
  </div>
</div>
        <div className="bottom-0 w-full  text-white p-4"><Footer /></div>
    </div>
    );
  }
