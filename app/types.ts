export type GitHubUser = {
  avatar_url: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  html_url: string | null;
  twitter_username: string | null;
  created_at: string | null;
  name: string | null;
  login: string | null;
  followers: number | null;
  following: number | null;
  public_repos: number | null;
  total_private_repos: number | null;
};

export type GitHubUserResponse = {
  data: GitHubUser | null;
  error: string | null;
};
