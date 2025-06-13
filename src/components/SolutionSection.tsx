import Image from "next/image";

const SolutionSection = () => (
  <section className="bg-green-50 py-28 px-4 text-center relative overflow-hidden">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-green-600">
      MAP職人なら解決できます！
    </h2>
    <p className="mb-10 text-xl text-gray-700">
      複数店舗の管理・集客のお悩みを
      <br />
      <span className="text-green-600 font-bold">MAP職人</span>が解決します！
    </p>
    <div className="flex justify-center mb-10">
      <div className="bg-gradient-to-r from-green-200 via-green-100 to-white rounded-2xl shadow p-10 flex items-center gap-6 border border-green-100 text-xl">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400 text-white text-3xl font-bold shadow">
          ★
        </span>
        <span className="font-bold text-green-600">
          一括管理・効率化・集客UP！
        </span>
      </div>
    </div>
    <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow hover:bg-orange-600 transition text-xl">
      無料相談・資料請求はこちら
    </button>
  </section>
);

export default SolutionSection;
