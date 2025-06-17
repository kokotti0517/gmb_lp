import React from "react";

const TroubleSection = () => (
  <section className="bg-blue-50 py-28 px-6">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 text-blue-900 leading-tight">
      飲食店経営、<span className="text-orange-500">こんなお悩み</span>ありませんか？
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* カード 1 */}
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-blue-700">
          1. 低評価レビュー、<span className="text-orange-500">放置</span>していません？
        </h3>
        <p className="text-gray-800 leading-relaxed">
          GoogleマップやSNSの口コミは、<span className="font-bold">集客や来店動機に直結</span>する時代。
          にもかかわらず、多くの店舗では放置されがちです。
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-300 pl-4 py-3 text-blue-800 text-sm space-y-1">
          <p>“読むけど、具体的にどう改善すればいいか分からない”</p>
          <p>“スタッフの感覚に任せきり”</p>
          <p>“忙しくて対応できないまま放置している”</p>
        </div>
        <div className="mt-4 border-l-4 border-orange-400 pl-4 py-2">
          <p className="text-sm text-orange-500 font-semibold">Insight</p>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong className="font-bold text-gray-900">レビュー対応の質とスピード</strong> が店舗の印象を大きく左右。
          </p>
        </div>
      </div>

      {/* カード 2 */}
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-blue-700">
          2. 経営判断が<span className="text-orange-500">感覚頼り</span>になっていません？
        </h3>
        <p className="text-gray-800 leading-relaxed">
          飲食店経営はスピード勝負。<span className="font-bold">「なんとなく」「たぶん〇〇が悪い」</span>では、改善できない時代です。
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-300 pl-4 py-3 text-blue-800 text-sm space-y-1">
          <p>“売上が落ちている理由がはっきり分からない”</p>
          <p>“どこを直せばいいのか感覚で決めている”</p>
          <p>“課題がたくさんあり、何から着手すべきか悩む”</p>
        </div>
        <div className="mt-4 border-l-4 border-orange-400 pl-4 py-2">
          <p className="text-sm text-orange-500 font-semibold">Insight</p>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-bold">「味」</span>なのか <span className="font-bold">「接客」</span>なのか。
            <br />
            お客様が離れた理由は <span className="font-bold">「待ち時間」</span>か <span className="font-bold">「価格」</span>か？
            <br />
            その答えは、<span className="text-blue-600 font-bold">すでに口コミの中にあります。</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TroubleSection;
