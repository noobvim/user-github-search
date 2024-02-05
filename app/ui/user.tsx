'use client'

import type { GitHubUser } from "@/app/types";

type Props = {
  user: GitHubUser;
};

export function User({ user }: Props) {
  return (
    <div>
      <div className="field name">{user.name}</div>
      <div className="field bio">{user.bio}</div>
    </div>
  );
}
