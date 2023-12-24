import React from "react";
import MyGreeting from "../components/MyGreeting";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <MyGreeting  name="Chris" />
        <Link href="/foo">foo</Link>
      </div>
    </main>
  )
}
