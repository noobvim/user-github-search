import { getUserByUsername } from "@/app/actions/get-user-by-username";
import { Main } from "@/app/ui/main";
import { Header } from "@/app/ui/header";

export default async function Home() {
  let user = null;
  try {
    user = await getUserByUsername("octfvfocat");
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
