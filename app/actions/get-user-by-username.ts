"use server";

import type { GitHubUser } from "@/app/types";

export const getUserByUsernameFormAction = async (
  _prev,
  formData
): Promise<GitHubUser | undefined> =>
  getUserByUsername(formData.get("username"));

export const getUserByUsername = async (
  username: string
): Promise<GitHubUser | undefined> => {
  try {
    const response = await fetch(
      `${process.env.GITHUB_URL}/users/${username}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.GITHUB_ACCCESS_TOKEN}`,
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
