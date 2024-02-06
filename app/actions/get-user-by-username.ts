"use server";

import type { GitHubUserResponse } from "@/app/types";

export const getUserByUsernameFormAction = async (
  _prev: unknown,
  formData: FormData
): Promise<GitHubUserResponse> =>
  getUserByUsername(formData.get("username") as string);

export const getUserByUsername = async (
  username?: string
): Promise<GitHubUserResponse> => {
  try {
    const response = await fetch(
      `${process.env.GITHUB_URL}/users/${username || process.env.GITHUB_DEFAULT_USER}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const body = await response.json();
    const data = body.message !== "Not Found" ? body : null;
    const error = body.message === "Not Found" ? body.message : null;

    return { data, error };
  } catch (error) {
    return { data: null, error: "An unexpected error occurred" };
  }
};
