import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const SkeletonCard = () => (
  <div className="animate-pulse p-4 rounded-lg border border-gray-700 bg-gray-800 flex justify-between items-center">
    <div className="h-5 w-32 bg-gray-600 rounded"></div>
    <div className="h-5 w-20 bg-gray-600 rounded"></div>
  </div>
);

const ResultList = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-6 max-w-2xl mx-auto space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-6 max-w-2xl mx-auto">
        <p className="text-center text-gray-400 italic">Start typing to search for a domain name.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 max-w-2xl mx-auto space-y-4">
      {results.map(({ name, available }) => (
        <div
          key={name}
          className={`flex items-center justify-between p-4 rounded-lg border shadow transition
            ${available
              ? "bg-green-900/20 border-green-500"
              : "bg-red-900/20 border-red-500"}`}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg text-white">{name}</span>
          </div>
          <span
            className={`flex items-center gap-1 font-semibold
              ${available ? "text-green-400" : "text-red-400"}`}
          >
            {available ? <><FiCheckCircle size={18} /> Available</> : <><FiXCircle size={18} /> Taken</>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResultList