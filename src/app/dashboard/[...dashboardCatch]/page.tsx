import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="w-full h-full flex-1 flex-center flex-col gap-4 mt-40">
      <Image src={"/images/not-found.png"} alt="Not Found" width={156} height={156} className="block md:hidden" />
      <Image src={"/images/not-found.png"} alt="Not Found" width={256} height={256} className="hidden md:block" />

      <span className="mt-10 text-sm md:text-lg text-center font-semibold text-primary">
        {`Oops! It seems you've reached a page that doesn't exist.`}
      </span>

      <span className="max-sm:max-w-[280px] text-xs md:text-sm text-secondary text-center">
        This page is currently under construction and cannot be viewed at the moment.
        <br />
        You can return to the <Link href="/dashboard" className="text-primary font-medium underline">Dashboard</Link> to continue navigating the platform.
      </span>
    </div>
  );
}

export default NotFoundPage;
