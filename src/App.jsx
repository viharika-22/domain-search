import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TabNav from "./components/TabNav";
import ResultList from "./components/ResultList";
import DomainExtensions from "./components/DomainExtensions";
import DomainGenerator from "./components/DomainGenerator";
import { checkDomain } from "./utils/checkDomain"; // import function
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [results, setResults] = useState([]);
  const [selectedExt, setSelectedExt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      const domainResults = checkDomain(query.toLowerCase());
      setResults(domainResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const filteredResults = results.filter((result) =>
    selectedExt ? result.name.endsWith(selectedExt) : true
  );

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="sticky top-4 z-50">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          {/* Added margin-bottom here for spacing below tabs */}
          <div className="mt-4 mb-6">
            <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="flex-grow space-y-8">
            {activeTab === "search" && (
              <ResultList results={filteredResults} isLoading={isLoading} />
            )}
            {activeTab === "extensions" && (
              <DomainExtensions onSelect={setSelectedExt} selected={selectedExt} />
            )}
            {activeTab === "generator" && query && <DomainGenerator base={query} />}
          </div>

          <section className="text-center mt-12">
            <p className="text-sm text-teal-400 uppercase font-semibold mb-2">
              Search Top Level Domains
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Start typing to find available
              <br />
              extensions for your domain name
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our domain search tool shows all domain extensions available from the hundreds of possibilities.
              From .com to .ai, find the best extension and TLD for your website.
            </p>
          </section>

          <div className="flex gap-8 mt-12 max-w-6xl mx-auto">
            {/* Additional content can go here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
