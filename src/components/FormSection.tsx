const FormSection = () => (
  <section id="form-section" className="bg-white py-28 px-6">
  

  <section className="bg-yellow-50 py-16 px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
      無料相談・資料請求はこちらから
    </h2>
    <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-5 border border-yellow-200">
      <input
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="会社名または店舗名"
        required
      />
      <input
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="担当者名"
        required
      />
      <input
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="メールアドレス"
        type="email"
        required
      />
      <input
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="電話番号"
        required
      />
      <textarea
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="お問い合わせ内容"
        rows={4}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-green-600 transition w-full text-lg"
      >
        入力内容を送信する
      </button>
    </form>
    <div className="text-center mt-8">
      <p className="font-bold text-lg">お電話でのお問い合わせ</p>
      <p className="text-2xl text-green-700 font-bold">03-6690-1621</p>
      <p className="text-sm">受付時間/10:00-19:00（土・日・祝日除く）</p>
    </div>
  </section>
  </section>
);

export default FormSection;

