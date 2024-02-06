"use client";

import { useState } from "react";
import { SearchForm } from "@/app/ui/search-form";
import { UserNotFound } from "@/app/ui/user-not-found";
import { GitHubUser } from "@/app/types";
import { User } from "@/app/ui/user";

type Props = {
  defaultUser: GitHubUser | null | undefined;
};

export function Main({ defaultUser }: Props) {
  const [user, setUser] = useState(defaultUser);

  // There are probably better ways to check for a non-existent user, but this seemed to suffice for the time being.
  return (
    <>
      <SearchForm setUser={setUser} />
      {!user?.login ? <UserNotFound /> : <User user={user} />}
    </>
  );
}
