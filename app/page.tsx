import { getUserByUsername } from "@/app/actions/get-user-by-username";
import { Main } from "@/app/ui/main";
import { Header } from "@/app/ui/header";

export default async function Home() {
  let user = null;
  try {
    // make server request before client resources are loaded to ensure a fast initial responsiveness to the user
    user = await getUserByUsername("octocat");
  } catch (error) {
    console.log("@@ error", error);
  }

  return (
    <main className="p-24 max-w-5xl m-auto">
      <Header />
      <Main defaultUser={user} />
    </main>
  );
}
