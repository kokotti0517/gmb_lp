import Image from "next/image";

const points = [
  { label: "POINT1", desc: "上位3位以内の専用エリアに表示されるから", detail: "Googleマップで上位表示されることで、より多くのユーザーに見つけてもらえます。" },
  { label: "POINT2", desc: "意欲の高いユーザーにアプローチできるから", detail: "検索意図の強いユーザーに直接アプローチでき、来店や問い合わせにつながりやすいです。" },
  { label: "POINT3", desc: "電話予約や経路検索がスムーズに行えるから", detail: "ユーザーがすぐに行動できる導線を確保し、機会損失を防ぎます。" },
];

const SuccessPoints = () => (
  <section className="bg-orange-50 py-28 px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-orange-500">どうしてMEOだと集客に成功できるの？</h2>
    <div className="flex flex-wrap justify-center gap-12 mb-12">
      {points.map((p, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-10 w-72 min-h-[280px] flex flex-col items-center border border-orange-100">
          <div className="mb-4">
            <div className="w-16 h-32 bg-white rounded-2xl border-2 border-orange-200 flex items-center justify-center mb-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="6" width="16" height="20" rx="4" fill="#FDBA74"/><rect x="12" y="10" width="8" height="12" rx="2" fill="#fff"/></svg>
            </div>
          </div>
          <div className="bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{p.label}</div>
          <div className="text-base text-center mb-2 text-gray-700 font-bold">{p.desc}</div>
          <div className="text-xs text-gray-400 text-center">{p.detail}</div>
        </div>
      ))}
    </div>
    <p className="text-center font-bold text-orange-500 text-lg">コストパフォーマンスが高く効果が出やすい集客方法です</p>
  </section>
);

export default SuccessPoints;

