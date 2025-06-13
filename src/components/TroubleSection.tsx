import Image from "next/image";

const troubles = [
  "店舗数が多くGoogleマイビジネス管理が面倒…",
  "作業にばかり時間がかかり集客のことを考える余裕がない",
  "要望なユーザーに店舗情報が改ざんされた！",
  "複数店舗のデータを一括で分析したい",
  "他社に依頼したけど費用が高かった",
  "Googleマップの表示順位で他店に勝てない",
  "ネガティブな口コミを減らして評価を増やしたい",
];

const TroubleSection = () => (
  <section className="bg-gray-50 py-28 px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 tracking-wide text-blue-500">
      このようなお悩みを抱えていませんか？
    </h2>
    <div className="flex justify-center">
      <ul className="bg-white rounded-xl shadow max-w-xl w-full p-12 space-y-8 border border-gray-100">
        {troubles.map((t, i) => (
          <li
            key={i}
            className="flex items-center gap-4 text-lg md:text-xl leading-relaxed"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-500 font-bold text-xl">
              ✓
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TroubleSection;
