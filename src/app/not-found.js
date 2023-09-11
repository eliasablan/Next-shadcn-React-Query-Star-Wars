import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="block">
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
