import React, { ChangeEvent } from "react";

interface props {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

export default function SearchBox({ setQuery, query }: props) {
  function updateQuery(e: ChangeEvent) {
    if (e.currentTarget instanceof HTMLInputElement) {
      setQuery(e.currentTarget.value);
    }
  }

  return (
    <input
      type="search"
      name="schoolSearch"
      id="schoolSearch"
      className="w-full bg-slate-100 outline outline-2 rounded outline-ku-orange p-2"
      placeholder="スクール名検索、住所検索、電話番号検索、エリア検索"
      onChange={updateQuery}
      value={query}
    />
  );
}
