import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="container mx-auto flex max-w-7xl items-center justify-end p-4 md:justify-between md:px-6">
          <nav className="hidden items-center space-x-4 text-sm md:flex">
            <Link className="text-gray-900" href={"#"} key={"NutriTrack"}>
              <Image
                src="/logo.png"
                width={92}
                height={92}
                alt="Login Picture"
                className="logoImg mr-2"
              />
            </Link>
          </nav>
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              className="rounded-md border px-4 py-1.5 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
              href="/auth"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto mt-36 flex max-w-7xl justify-center">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to our Platform
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The all-in-one platform for building an healthful diet for you.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/auth"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
