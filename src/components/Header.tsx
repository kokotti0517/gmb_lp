

const Header = () => (
  <header className="relative min-h-[520px] flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 pt-24 pb-24 text-center overflow-hidden">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10">
      <div className="w-[420px] h-[420px] bg-orange-100 rounded-full opacity-60 blur-2xl" />
    </div>
    <div className="max-w-2xl mx-auto z-10">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-400 rounded grid grid-cols-2 grid-rows-2">
          <div className="bg-white m-1 rounded" />
          <div className="bg-white m-1 rounded" />
          <div className="bg-white m-1 rounded" />
          <div className="bg-orange-400 m-1 rounded" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 tracking-tight">
          GMB Review
        </h1>
      </div>
      <div className="text-lg sm:text-xl text-gray-500 mb-8">
        口コミ管理システム
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-60 h-32 bg-gradient-to-tr from-orange-200 via-orange-100 to-white rounded-2xl flex items-center justify-center shadow-inner">
          <svg
            width="64"
            height="64"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="12"
              width="36"
              height="24"
              rx="4"
              fill="#fff"
              stroke="#FDBA74"
              strokeWidth="2"
            />
            <rect x="12" y="18" width="24" height="12" rx="2" fill="#FDBA74" />
            <circle cx="38" cy="36" r="3" fill="#FDBA74" />
          </svg>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
