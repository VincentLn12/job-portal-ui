export const Tooltip = ({ content, children }) => {
  return (
    <span className="group/tooltip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 max-w-[80vw] -translate-x-1/2 translate-y-1 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-4 text-left text-xs leading-relaxed text-gray-300 opacity-0 shadow-xl shadow-primary-600/10 transition-all duration-300 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100"
      >
        {content}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-gray-700/50 bg-gray-900"></span>
      </span>
    </span>
  );
};
