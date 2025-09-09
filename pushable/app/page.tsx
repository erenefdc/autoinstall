"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { Github, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Comments from "@/components/comments";

export default function Home() {
  // Action links
  const github = process.env.NEXT_PUBLIC_GITHUB || "https://github.com/erenefdc";
  const email = process.env.NEXT_PUBLIC_EMAIL || "you@example.com";
  const intro =
    process.env.NEXT_PUBLIC_INTRO ||
    "Hii i am paxx a certified femmy and nerd i lowkey fw w C++, Python, little bit Node.js etc :3";

  const actions = useMemo(
    () => [
      { href: `mailto:${email}`, label: "Email me", icon: Mail },
      { href: github, label: "GitHub", icon: Github },
    ],
    [email, github]
  );

  // Motion variants
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  // JSX returned INSIDE the function
  return (
    <main className="min-h-screen gradient relative overflow-hidden">
      {/* Floating neon blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-pink-500 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-emerald-400 opacity-25 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <header className="max-w-5xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-lg">
          paxx<span className="opacity-50">.dev</span>
        </div>
        <ThemeToggle />
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-1 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent animate-text">
            Hey, I’m paxx
          </h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-200 dark:text-gray-300">
            {intro}
          </motion.p>

          <motion.div variants={container} initial="hidden" animate="show" className="flex gap-3 flex-wrap mt-6">
            {actions.map((a) => (
              <motion.a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="card px-5 py-3 flex items-center gap-2 font-medium hover:scale-105 hover:shadow-xl transition transform hover:text-white hover:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500"
                variants={item}
              >
                <a.icon className="w-5 h-5" />
                {a.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Comments Section */}
        <Comments />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {[
          { title: "About me", body: "just a nerdy and eepy femmy" },
          { title: "What I do", body: "i goon " },
          { title: "The shit i fw with", body: "C++, Python, Next.js and Node.js" },
        ].map((c) => (
          <div key={c.title} className="card p-6 hover:scale-105 transition transform hover:shadow-xl">
            <div className="font-semibold">{c.title}</div>
            <p className="text-gray-200 dark:text-gray-300 mt-2">{c.body}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} paxx</span>
        </div>
      </footer>
    </main>
  );
}
