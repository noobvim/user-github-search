import { getUserByUsername } from "@/app/actions/get-user-by-username";
import { Main } from "@/app/ui/main";
import { Header } from "@/app/ui/header";

export default async function Home() {
  // make server request before client resources are loaded to ensure the initial GitHub user loads quickly
  const user = await getUserByUsername("octocat");

  return (
    <main className="p-24 max-w-5xl m-auto">
      <Header />
      <Main defaultUser={user} />
    </main>
  );
}
