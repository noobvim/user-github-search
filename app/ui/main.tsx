"use client";

import { useState } from "react";
import { SearchForm } from "@/app/ui/search-form";
import { GitHubUser } from "@/app/types";
import { User } from "@/app/ui/user";

type Props = {
  defaultUser: GitHubUser;
};

export function Main({ defaultUser }: Props) {
  const [user, setUser] = useState(defaultUser);

  return (
    <>
      <SearchForm setUser={setUser} />
      <User user={user} />
    </>
  );
}
