import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-900 text-white p-8 sm:p-20 font-sans">
      <div className="grid grid-rows-[auto_1fr_auto] gap-16 items-center justify-items-center">
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Amrita MUN 2025
          </h1>
          <div className="mt-6">
            <Link href="/committee">
              <button className="bg-white text-[#001f3f] px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-all">
                Committees
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
