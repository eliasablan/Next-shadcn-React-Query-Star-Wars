import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Fragment>
      {/*  Cambiar la variable 'REPETICIONES' por el numero de veces que deseamos repetir 
      el codigo devuelto en el map "Array.from(Array(REPETICIONES), (_, i) => i + 1)" */}
      {Array.from(Array(50), (_, i) => i + 1).map((i) => {
        return (
          <div className="block" key={i}>
            <VariantButton variant="default" />
            <VariantButton variant="destructive" />
            <VariantButton variant="outline" />
            <VariantButton variant="secondary" />
            <VariantButton variant="ghost" />
            <VariantButton variant="link" />
          </div>
        );
      })}
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
