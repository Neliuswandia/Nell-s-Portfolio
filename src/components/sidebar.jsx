import React from "react";

function Sidebar() {
  const links = [
    { href: "home", label: "Home", icon: "🏠" },
    { href: "about", label: "About", icon: "ℹ️" },
    { href: "projects", label: "Projects", icon: "💼" },
    { href: "contacts", label: "Contacts", icon: "📞" },
  ];

  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end pr-4 z-50">
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
  );
}

export default Sidebar;