"use server";

import type { GitHubUser } from "@/app/types";

export const getUserByUsernameFormAction = async (
  _prev: unknown,
  formData: FormData
): Promise<GitHubUser | undefined> =>
  getUserByUsername(formData.get("username") as string);

export const getUserByUsername = async (
  username: string
): Promise<GitHubUser | undefined> => {
  try {
    const response = await fetch(
      `${process.env.GITHUB_URL}/users/${username}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const body = await response.json();

    return body;
  } catch (error) {
    console.log("@@ error", error);
  }
};
