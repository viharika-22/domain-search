import { FiSearch, FiBox, FiZap, FiStar } from "react-icons/fi";

const tabs = [
  { label: "Domain search", icon: <FiSearch />, id: "search" },
  { label: "Domain extensions", icon: <FiBox />, id: "extensions" },
  { label: "Domain generator", icon: <FiZap />, id: "generator" },
  // { label: "Premium domains", icon: <FiStar />, id: "premium" },
];

const TabNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium
              ${
                activeTab === tab.id
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};


export default TabNav