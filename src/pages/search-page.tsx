import { useMemo, useState } from "react";
import { mockWorks } from "../mock/works";
import { SearchInput } from "../components/search-input";
import { WorkList } from "../components/work-list";

export const SearchPage = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return mockWorks;
    const q = query.toLowerCase();
    return mockWorks.filter((w) => w.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <SearchInput value={query} onChange={setQuery} />
      <div style={{ marginTop: 16 }}>
        <WorkList works={filtered} onSelect={(w) => console.log("select", w)} />
      </div>
    </div>
  );
};
