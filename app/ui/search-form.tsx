"use client";

import Image from "next/image";
import type { GitHubUserResponse } from "@/app/types";
import { useSearchForm } from "@/app/hooks/use-search-form";

import { InlineUserNotFound } from "./user-not-found";
import { Submit } from "./submit";

type Props = {
  setUser: (user: GitHubUserResponse) => void;
};

export function SearchForm({ setUser }: Props) {
  const { userState, formAction } = useSearchForm({ setUser });

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
        {userState?.error === "Not Found" && <InlineUserNotFound />}
        <input
          className="area-bg-2 w-full text-lg !outline-none"
          name="username"
          placeholder="Search GitHub username..."
          type="text"
        />
        <Submit />
      </form>
    </div>
  );
}
