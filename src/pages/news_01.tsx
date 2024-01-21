import Footer from "./footer"
import Header from "./header"

export default function Faq() {
    return (
    <div className="flex flex-col min-h-screen bg-white ">
        <Header page="news" />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">＜予告＞アップデート情報</h1>
        <h3 className=" text-right pr-20 text-gray-500 sm:text-lg md:mb-8">2024/01/22</h3>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        本日は今後追加予定の機能を３つご紹介します！！<br/>
        </p>
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">1. ネット記事などのブックマーク</h2>
        <p className="text-gray-500 sm:text-lg">ネットニュースや、ネットサーフィン中に見つけた興味のある記事をメモとともに保存することができます。</p>
        <br/>
        <br/>
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">2. 外部サービスとのアカウント連携</h2>
        <p className="text-gray-500 sm:text-lg">Googleなどの外部サービスのアカウントを連携させることで、ブックマークの同期や興味をもった本の購入などができるようになります</p>
        <br/>
        <br/>
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">3. 本棚の共有機能</h2>
        <p className="text-gray-500 sm:text-lg">自身の興味を持ったコンテンツ（本、ネット記事、etc.）を本サービスを利用している他のユーザーと共有することができるようになります</p>
        <br/>
        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
        </div>
        <p className="text-gray-500 sm:text-lg">今回ご紹介した機能は、2024年2月上旬頃追加予定です。<br/>
        今後も本サービスをよろしくおねがいします。</p>
        
  </div>
</div>
        <div className="bottom-0 w-full  text-white p-4"><Footer /></div>
    </div>
    );
  }
