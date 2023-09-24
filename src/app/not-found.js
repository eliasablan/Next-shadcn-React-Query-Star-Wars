import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-xl">Not Found</h1>
      <p className="py-5">Could not find requested resource</p>
      <div className="block py-10">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
