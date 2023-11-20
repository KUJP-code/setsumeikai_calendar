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
    <div className="flex items-center gap-2 w-full rounded pl-2 text-ku-secondary bg-white border border-secondary focus-within:shadow-input-orange">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>

      <input
        type="search"
        name="schoolSearch"
        className="w-full p-1 rounded border-l border-secondary placeholder:text-ku-secondary focus-visible:outline-none focus-visible:shadow-input-orange"
        id="schoolSearch"
        placeholder="スクール名検索、住所検索、電話番号検索、エリア検索"
        onChange={updateQuery}
        value={query}
      />
    </div>
  );
}
