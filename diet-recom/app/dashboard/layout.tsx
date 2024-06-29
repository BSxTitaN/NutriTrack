import { cn } from "@/lib/utils";
import { getUser } from "../_data/user";
import Header from "@/components/ui/navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <section className="flex flex-1 flex-col items-center">
      <Header />

      <main className={cn("pb-[200px] pt-4 flex-1 md:pt-10")}>{children}</main>
    </section>
  );
}
