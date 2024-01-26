import Menu from "@/components/menu";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // const { userId } = auth();
  console.log(user);
  return (
    <div className="h-screen bg-orange-100">
      <Menu />
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold">Olá, {user?.firstName}</h1>
      </main>
    </div>
  );
}
