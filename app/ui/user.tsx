"use client";

import classNames from "classNames";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import type { GitHubUser } from "@/app/types";
import { UserLink } from "./user-link";

type Props = {
  user: GitHubUser;
};

export function User({ user }: Props) {
  const reposCount = (user.public_repos || 0) + (user.total_private_repos || 0);
  const twitterLink = user.twitter_username
    ? `http://twitter.com/${user.twitter_username}`
    : user.twitter_username;
  const companyLink = user.company
    ? `http://github.com/${user.company.slice(1)}`
    : user.company;

  return (
    <div className="w-full area-bg-2 p-12 rounded-xl grid grid-cols-2 grid-rows-1 gap-4 mt-4 root-grid">
      <div className="grid grid-cols-1">
        {user.avatar_url && (
          <Image
            className="rounded-full"
            width={100}
            height={100}
            src={user.avatar_url}
            alt="GitHub User Avatar Image"
          />
        )}
      </div>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div>
            <h2 className="text-2xl font-bold user-username">
              {user.name || user.login}
            </h2>
            <div className="text-mdm">
              <Link
                href={`http://github.com/${user.login}`}
                className="text-blue-50"
              >
                @{user.login}
              </Link>
            </div>
          </div>
          <div className="text-mdm text-right">
            Joined {moment(user.created_at).format("DD MMM YYYY")}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-8 pb-8">
          <div
            className={classNames("text-sm flex", !user.bio && "opacity-50")}
          >
            {user.bio || "This profile has no bio"}
          </div>
        </div>
        <div className="stats-container area-bg-1 grid grid-cols-3 grid-rows-1 gap-4 p-4 rounded-xl">
          <div className="stats-area">
            <div className="text-sm label">Repos</div>
            <div className="text-xl user-repos font-bold">{reposCount}</div>
          </div>
          <div className="stats-area">
            <div className="text-sm label">Followers</div>
            <div className="text-xl user-repos font-bold">{user.followers}</div>
          </div>
          <div className="stats-area">
            <div className="text-sm label">Following</div>
            <div className="text-xl user-repos font-bold">{user.following}</div>
          </div>
        </div>
        <div className="area grid grid-cols-2 grid-rows-2 gap-4 social-area mt-8">
          <UserLink icon="/location.svg" value={user.location} />
          <UserLink
            link={twitterLink}
            icon="/twitter.svg"
            value={user.twitter_username}
          />
          <UserLink
            link={user.html_url}
            icon="/link.svg"
            value={user.html_url}
          />
          <UserLink
            link={companyLink}
            icon="/company.svg"
            value={user.company}
          />
        </div>
      </div>
    </div>
  );
}
