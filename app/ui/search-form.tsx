"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { getUserByUsernameFormAction } from "@/app/actions/get-user-by-username";
import type { GitHubUser } from "@/app/types";

type Props = {
  setUser: (user: GitHubUser) => void;
};

export function SearchForm({ setUser }: Props) {
  const [state, formAction] = useFormState(
    getUserByUsernameFormAction,
    undefined
  );

  useEffect(() => {
    if (state) {
      setUser(state);
    }
  }, [state, setUser]);

  return (
    <div className="w-full area-bg-2 p-2 rounded-xl mt-4">
      <form action={formAction} className="relative pl-20 flex space-between">
        <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
          <Image
            className="text-blue-50"
            width={30}
            height={30}
            src="/search.svg"
            alt="GitHub User Avatar Image"
          />
        </div>
        <input
          className="area-bg-2 w-full text-lg !outline-none"
          name="username"
          placeholder="Search GitHub username..."
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue-700 rounded-xl ml-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
