import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen flex-1">
      <Sidebar />

      <div className="flex-1 px-4 md:px-10 py-2 md:py-[30px] flex flex-col">
        <Header />
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
