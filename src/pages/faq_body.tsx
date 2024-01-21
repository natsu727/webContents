

export default function FaqBody() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">よくあるご質問</h2>
      
          </div>
          {/* <!-- text - end --> */}
      
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
            {/* <!-- question - start --> */}
            <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>
      
              <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">保存したコンテンツは他のユーザーと共有できますか？</h3>
              <p className="text-gray-500">はい、このサービスではユーザー同士で保存したコンテンツを共有することができます。他のユーザーがあなたの保存した本や記事を見ることができ、同じ興味を共有するユーザーとの交流が可能です。</p>
            </div>
            {/* <!-- question - end --> */}
      
            {/* <!-- question - start --> */}
            <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>
      
              <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">コンテンツはどのように整理・管理できますか？</h3>
              <p className="text-gray-500">保存した本や記事を整理・管理するために、タグやカテゴリの設定が可能です。各コンテンツに対してタグを追加し、カテゴリに分類することで、効果的に検索やフィルタリングが行えます。これにより、保存したコンテンツを簡単かつ効果的に管理できます。</p>
            </div>
            {/* <!-- question - end --> */}
      
            {/* <!-- question - start --> */}
            <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>
      
              <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">プライバシー設定はどのように行われていますか？</h3>
              <p className="text-gray-500">ユーザーは個々のコンテンツやアカウントのプライバシー設定をカスタマイズすることができます。保存したコンテンツやプロフィール情報を非公開にするか、特定のユーザーとだけ共有するかを選択できます。プライバシー設定により、ユーザーは自分の快適な範囲で情報を管理できます。</p>
            </div>
            {/* <!-- question - end --> */}
      
            {/* <!-- question - start --> */}
            <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>
      
              <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">サービス内でのコミュニケーション手段はありますか？</h3>
              <p className="text-gray-500">はい、サービス内でのコミュニケーションをサポートしています。ユーザー同士でコメントを交換したり、おすすめのコンテンツを共有するためのメッセージ機能があります。これにより、同じ興味を持つユーザー同士での交流や情報の共有がスムーズに行えます。</p>
            </div>
            {/* <!-- question - end --> */}
      
            
          </div>
        </div>
      </div>
    );
  }
