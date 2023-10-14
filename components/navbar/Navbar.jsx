import Image from "next/image";
import Style from "../../styles/Navbar.module.css";
import { Button } from "../button";

export function Navbar() {
  return (
    <>
      <nav className={Style.navigation}>
        <div>
          <Image src={"/logo.svg"} alt="Snap" width={84} height={27} />
        </div>

        <ul role="list">
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li> About</li>
        </ul>

        <div>
          <Button title={"Login"} />
          <Button title={"Register"} />
        </div>
      </nav>
    </>
  );
}
