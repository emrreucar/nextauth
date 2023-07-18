"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();
  console.log(session);

  return (
    <section>
      <h1>Home Page</h1>
      <h2>Sign in with google account</h2>
      <button
        onClick={() => signIn("google")}
        className="border-2 p-2 bg-blue-50"
      >
        Sign In
      </button>
      <button
        onClick={() => signOut()}
        className="border-2 p-2 bg-blue-200"
      >
        Sign Out
      </button>
    </section>
  );
}
