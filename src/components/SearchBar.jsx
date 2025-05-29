import { FiSearch } from "react-icons/fi";

const SearchBar = ({ query, setQuery }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Optional: Trigger immediate search logic here
      console.log("Enter pressed, query:", query);
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search domain name..."
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm
                   bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition duration-150"
        autoFocus
        spellCheck="false"
      />
    </div>
  );
};
export default SearchBar