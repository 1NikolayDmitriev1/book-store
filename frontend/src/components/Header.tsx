"use client";

import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="container max-w-7xl mx-auto bg-emerald-900 text-white">
      <div className="flex justify-between input">
        <div className="">
          <span>Elliott Bay Book Company</span>
        </div>
        <div className="">
          <SearchInput />
        </div>
        <div className="">
          <button className="px-4 py-1 border-solid border-2 border-white">
            Login
          </button>
        </div>
        <div className="">Cart</div>
      </div>
    </div>
  );
}
