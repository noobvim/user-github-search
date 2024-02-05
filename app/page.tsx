import { getUserByUsername } from "@/app/actions/get-user-by-username";
import { Main } from "@/app/ui/main";
import { Header } from "@/app/ui/header";

export default async function Home() {
  let user = null;
  try {
    user = await getUserByUsername();
  } catch (error) {
    console.log("@@ error", error);
  }

  if (!user) {
    return null;
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center p-24"
      style={{ margin: "0 auto", maxWidth: 1000 }}
    >
      <Header />
      <Main defaultUser={user} />
    </main>
  );
}
