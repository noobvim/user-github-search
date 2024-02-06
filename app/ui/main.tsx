"use client";

import { useState } from "react";
import { SearchForm } from "@/app/ui/search-form";
import { UserNotFound } from "@/app/ui/user-not-found";
import { GitHubUserResponse } from "@/app/types";
import { User } from "@/app/ui/user";

type Props = {
  defaultUser: GitHubUserResponse;
};

export function Main({ defaultUser }: Props) {
  const [user, setUser] = useState(defaultUser);

  return (
    <>
      <SearchForm setUser={setUser} />
      {!user.error && user.data ? <User user={user.data} /> : <UserNotFound />}
    </>
  );
}
