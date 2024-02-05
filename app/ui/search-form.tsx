"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { getUserByUsername } from "@/app/actions/get-user-by-username";
import type { GitHubUser } from "@/app/types";

type Props = {
  setUser: (user: GitHubUser) => void;
};

export function SearchForm({ setUser }: Props) {
  const [state, formAction] = useFormState(getUserByUsername, undefined);
  useEffect(() => {
    if (state) {
      setUser(state);
    }
  }, [state, setUser]);

  return (
    <div className="w-full area-bg-2 p-2 rounded-xl mt-4">
      <form action={formAction} className="relative pl-14" id="form">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-blue-500 dark:text-blue-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="area-bg-2 w-full text-lg"
          name="username"
          placeholder="Search GitHub username..."
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue-700 rounded-xl"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
