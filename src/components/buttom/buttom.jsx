import Link from "next/link";
import sytles from "./button.module.css"

const Buttom = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={sytles.container}>{text}</button>
    </Link>
  );
};

export default Buttom;