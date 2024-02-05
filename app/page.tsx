
import { getUserByUsername } from "@/app/actions/get-user-by-username";
import { Main } from "@/app/ui/main";

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
    <main className="flex min-h-screen flex-col items-center p-24">
      <Main defaultUser={user} />
    </main>
  );
}
