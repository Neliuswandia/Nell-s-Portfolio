import React, { useState } from "react";

function Sidebar() {
  const links = [
    { href: "home", label: "Home", icon: "🏠" },
    { href: "about", label: "About", icon: "ℹ️" },
    { href: "projects", label: "Projects", icon: "💼" },
    { href: "contacts", label: "Contacts", icon: "📞" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:right-0 md:top-0 md:h-screen md:flex md:flex-col md:justify-center md:items-end md:pr-4 md:z-50">
        <ul className="space-y-4 flex flex-col items-center">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  group flex items-center w-12 h-12 rounded-full bg-yellow-300
                  transition-all duration-300 overflow-hidden
                  hover:w-40 hover:rounded-2xl hover:bg-yellow-300
                  focus:w-40 focus:rounded-2xl focus:bg-yellow-300
                "
              >
                <span className="flex justify-center items-center w-12 h-12 text-xl">
                  {link.icon}
                </span>
                <span
                  className="
                    opacity-0 ml-3 whitespace-nowrap text-white text-base
                    transition-opacity duration-300
                    group-hover:opacity-100 group-focus:opacity-100
                  "
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          aria-label="open menu"
          className="flex flex-col space-y-1 focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <span className="block h-1 w-8 bg-yellow-400 rounded"></span>
          <span className="block h-1 w-8 bg-yellow-400 rounded"></span>
          <span className="block h-1 w-8 bg-yellow-400 rounded"></span>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {open && (
        <>
          {/* Blur overlay */}
          <div
            className="fixed inset-0 bg-[#363636]/20 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar menu */}
          <div className="fixed top-0 right-0 w-2/3 max-w-xs h-full bg-[#363636] z-50 opacity-60 flex flex-col items-center pt-20 shadow-2xl">
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 text-yellow-400 text-3xl font-bold opacity-100"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <ul className="space-y-6 w-full mt-8">
              {links.map((link) => (
                <li key={link.label} className="w-full flex justify-center">
                  <a
                    href={link.href}
                    className=" w-40 h-12 rounded-2xl bg-yellow-300 text-white text-base font-semibold flex items-center justify-center shadow-md transition-all duration-300 opacity-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;