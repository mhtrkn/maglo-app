import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="w-full h-full flex-1 flex-center flex-col gap-4 mt-40">
      <Image src={"/images/not-found.png"} alt="Not Found" width={256} height={256} />

      <span className="text-lg font-semibold text-primary">
        {`Oops! It seems you've reached a page that doesn't exist.`}
      </span>

      <span className="text-sm text-secondary text-center">
        This page is currently under construction and cannot be viewed at the moment.
        <br />
        You can return to the <Link href="/dashboard" className="text-primary font-medium underline">Dashboard</Link> to continue navigating the platform.
      </span>
    </div>
  );
}

export default NotFoundPage;
