// src/components/DomainExtensions.jsx
const extensions = [".com", ".net", ".org", ".ai", ".xyz", ".co", ".app", ".dev", ".io", ".tech"];

const DomainExtensions = ({ onSelect, selected }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
      {extensions.map((ext) => (
        <button
          key={ext}
          onClick={() => onSelect(ext === selected ? null : ext)}
          className={`px-4 py-2 rounded-lg border font-mono transition text-lg
            ${
              ext === selected
                ? "bg-teal-600 text-white border-teal-500"
                : "bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600"
            }`}
        >
          {ext}
        </button>
      ))}
    </div>
  );
};

export default DomainExtensions;
