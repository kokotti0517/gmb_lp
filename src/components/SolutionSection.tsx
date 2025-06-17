import React from "react";

const features = [
  {
    title: "口コミをAIで自動分析",
    description: "低評価の背景を自動で分類し、感覚ではなく“根拠ある改善”が可能に。",
  },
  {
    title: "改善ポイントがひと目でわかる",
    description: "「接客？」「味？」「価格？」改善すべき点がグラフで一目瞭然に。",
  },
  {
    title: "複数店舗を一括管理",
    description: "全店舗の口コミ状況を一元化。現場・経営の両方で見える化を実現。",
  },
];

const SolutionSection = () => (
  <section className="relative bg-green-50 pt-28 pb-32 px-4 text-center overflow-visible">
    {/* ▼ ラベル（逆三角形） */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 w-[28rem] text-center">
      <svg
        className="w-full h-40 text-[#FFF9DB]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 50,100" fill="currentColor" />
      </svg>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full px-6">
        <p className="text-2xl font-semibold text-black">そんなご担当者様に</p>
        <p className="text-4xl font-bold text-red-500 tracking-widest">朗報です！</p>
      </div>
    </div>

    {/* ▼ 見出し */}
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-green-600 leading-tight tracking-tight">
      “見えない課題”を<br className="sm:hidden" />
      <span className="text-gray-800">AIで見える化。</span>
    </h2>

    {/* ▼ サブ説明 */}
    <p className="mb-14 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
      複数店舗の口コミ管理に悩むあなたへ。
      <span className="block mt-2">
        <span className="text-green-700 font-bold">口コレ</span>なら、
        <span className="text-orange-500 font-bold">“低評価の理由”</span>を分析し、
        <span className="text-orange-500 font-bold">“改善のヒント”</span>が一目で分かる
      </span>
    </p>

    {/* ▼ 特徴カード */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 px-2">
      {features.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 flex flex-col items-start text-left hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>

    {/* ▼ CTAボタン（スクロールリンク） */}
    <a href="#form-section">
      <button className="bg-orange-500 text-white px-12 py-6 font-bold shadow hover:bg-orange-600 transition text-2xl rounded-md">
        無料相談はこちら
      </button>
    </a>
  </section>
);

export default SolutionSection;
