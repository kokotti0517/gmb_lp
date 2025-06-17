
const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="2" fill="#FDBA74" />
        <rect x="18" y="4" width="10" height="10" rx="2" fill="#FDBA74" />
        <rect x="4" y="18" width="10" height="10" rx="2" fill="#FDBA74" />
        <rect x="18" y="18" width="10" height="10" rx="2" fill="#FDBA74" />
      </svg>
    ),
    title: "GMB Review",
    subtitle: "口コミ管理システム",
    desc: "Googleマイビジネスの口コミを一元管理し、効率的な対応を実現します。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="#FDBA74" />
        <path
          d="M16 10v6l4 2"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "GMB Insight",
    subtitle: "分析・レポート",
    desc: "店舗ごとのデータを可視化し、改善ポイントを明確にします。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="3" fill="#FDBA74" />
        <rect x="10" y="12" width="12" height="8" rx="1.5" fill="#fff" />
      </svg>
    ),
    title: "GMB Post",
    subtitle: "投稿管理",
    desc: "最新情報やキャンペーンを簡単に一括投稿できます。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#FDBA74" />
        <path
          d="M10 16l4 4 8-8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "GMB Support",
    subtitle: "サポート機能",
    desc: "困ったときも安心のサポート体制でバックアップします。",
  },
];

const FeatureList = () => (
  <section className="bg-blue-50 py-28 px-4">
    <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white border border-blue-100 rounded-xl shadow-sm flex flex-col items-center w-64 min-h-[260px] p-8 hover:shadow-lg transition-all"
        >
          <div className="mb-4">{f.icon}</div>
          <div className="text-xl font-bold text-orange-500 mb-1 tracking-wide">
            {f.title}
          </div>
          <div className="text-sm text-gray-500 mb-2">{f.subtitle}</div>
          <div className="text-xs text-gray-400 text-center">{f.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureList;
