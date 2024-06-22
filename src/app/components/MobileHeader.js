export default function MobileHeader({ sideBarOpen, setSideBarOpen }) {
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -md-px">
          {/* Header: left side */}
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSideBarOpen(!sideBarOpen);
              }}
            >
              {" "}
              <span className="sr-only">Open sidebar</span>
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
