import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 px-10 py-[30px] flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
