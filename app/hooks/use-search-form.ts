"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import type { GitHubUserResponse } from "@/app/types";
import { getUserByUsernameFormAction } from "@/app/actions/get-user-by-username";

type Props = {
  setUser: (data: GitHubUserResponse) => void;
};

export function useSearchForm({ setUser }: Props) {
  const [userState, formAction] = useFormState(
    getUserByUsernameFormAction,
    undefined
  );

  useEffect(() => {
    if (userState) {
      setUser(userState);
    }
  }, [userState, setUser]);

  return { userState, formAction };
}
