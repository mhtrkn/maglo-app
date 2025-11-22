import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="max-w-[calc(100vw-48px)] sm:max-w-none w-full px-4 md:px-10 py-2 md:py-[30px] flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
