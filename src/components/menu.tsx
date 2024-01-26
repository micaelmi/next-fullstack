import { UserButton } from "@clerk/nextjs";

export default function Menu() {
  return (
    <header className="bg-orange-500 py-2 mb-8 border-b border-amber-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <img src="/icon.png" alt="Ícone" width={64} />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
}
