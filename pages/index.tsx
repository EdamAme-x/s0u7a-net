import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome to s0u7a.net!</h1>
        <h2>s0u7a@s0u7a.net &gt; ~/s0u7a.net $ bun dev</h2>
      </div>
    </main>
  );
}