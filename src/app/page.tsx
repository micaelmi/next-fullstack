import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();
  console.log(user);
  return (
    <div className="h-screen">
      <header className="flex items-center justify-around bg-primary py-2 mb-8">
        <img src="/icon.png" alt="Ícone" width={64} />
        <UserButton afterSignOutUrl="/" />
      </header>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold">Olá, {user?.firstName}</h1>
      </main>
    </div>
  );
}
