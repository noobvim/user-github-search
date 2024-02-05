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
    <form action={formAction} id="form">
      <input
        name="username"
        placeholder="Search GitHub username..."
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
}
