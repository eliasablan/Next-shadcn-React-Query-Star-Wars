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
            <Button className="m-2 inline" variant="default">
              Click
            </Button>

            <Button className="m-2 inline" variant="destructive">
              Click
            </Button>

            <Button className="m-2 inline" variant="outline">
              Click
            </Button>

            <Button className="m-2 inline" variant="secondary">
              Click
            </Button>

            <Button className="m-2 inline" variant="ghost">
              Click
            </Button>

            <Button className="m-2 inline" variant="link">
              Click
            </Button>
          </div>
        );
      })}
    </Fragment>
  );
}
