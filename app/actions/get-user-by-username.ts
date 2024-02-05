import type { GitHubUser } from "@/app/types";

export const getUserByUsername = async (
  _prev,
  formData
): Promise<GitHubUser | undefined> => {
  const username = formData?.get("username") || "octocat";
  try {
    const response = await fetch(
      `${process.env.GITHUB_REST_URL}/users/${username}`,
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
