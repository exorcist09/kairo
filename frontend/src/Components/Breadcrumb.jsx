import React from "react";

const Breadcrumb = ({ items, onNavigate }) => {
  return (
    <nav className="text-sm text-gray-500 mb-4 select-none flex items-center space-x-2">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        if (!isLast) {
          return (
            <span key={item.label} className="flex items-center space-x-2">
              <button
                onClick={() => onNavigate(item.key)}
                className="hover:underline focus:outline-none"
              >
                {item.label}
              </button>
              <span className="text-gray-400">/</span>
            </span>
          );
        }

        // Last item is current page - just text, no click
        return (
          <span key={item.label} className="font-semibold text-gray-900">
            {item.label}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
