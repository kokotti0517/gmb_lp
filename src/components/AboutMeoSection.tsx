import Image from "next/image";

const AboutMeoSection = () => (
  <section className="bg-yellow-50 py-28 px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-orange-500">
      MEOとは？
    </h2>
    <p className="max-w-2xl mx-auto text-center mb-12 text-xl text-gray-700">
      Googleマップ上位表示サービス。MEO（Map Engine
      Optimization）は、GoogleマップやGoogleビジネスプロフィールの情報を最適化し、検索結果で上位表示を目指す集客施策です。
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
      <div className="flex-1 flex flex-col gap-8">
        <div className="bg-white border-l-8 border-yellow-400 p-8 rounded-2xl shadow text-left flex items-center gap-6 text-lg">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200 text-yellow-600 font-bold text-xl">
            例1
          </span>
          <span>「地域名×キーワード」で検索 → 上位表示で集客力UP！</span>
        </div>
        <div className="bg-white border-l-8 border-yellow-400 p-8 rounded-2xl shadow text-left flex items-center gap-6 text-lg">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200 text-yellow-600 font-bold text-xl">
            例2
          </span>
          <span>
            「キーワード」だけで検索 → 現在地周辺の検索結果が表示される
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeoSection;
