import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
const Navbar = async () => {
  const session = await auth();

  // const signOut = () => {
  //   console.log("Signing out");
  // };
  // const signIn = (provider: string) => {
  //   console.log("Signing in with provider:", provider);
  // };
  return (
    <header className="px-5 py-3">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startups/create" className=" ">
                {" "}
                Create
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                {" "}
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              className=""
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Log in</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
