import React from "react";
import { auth, signIn } from "@/auth";
import { Button } from "./ui/button";

export default async function UserButton() {
  const session = await auth();

  return <div>{session ? session?.user?.name : <SignInButton />}</div>;
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
