"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-6 py-8 lg:px-12 lg:py-24 ">
          <div className="mx-auto max-w-screen-md text-center">
            <h1 className="dark:text-primary-500 mb-6 text-xl font-extrabold tracking-tight text-blue-600 lg:text-6xl">
              Something went wrong!
            </h1>
            <p className="mb-4 text-xl tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {error.message}
            </p>
            <button
              className="button-primary button-md"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
