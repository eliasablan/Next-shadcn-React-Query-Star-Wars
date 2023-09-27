import { Fragment } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Fragment>
      {/* <div className="block">
        <VariantButton variant="default" />
        <VariantButton variant="destructive" />
        <VariantButton variant="outline" />
        <VariantButton variant="secondary" />
        <VariantButton variant="ghost" />
        <VariantButton variant="link" />
      </div> */}
    </Fragment>
  );
}

function VariantButton({ variant }) {
  return (
    <Button className="m-2 inline" variant={variant}>
      Click
    </Button>
  );
}
