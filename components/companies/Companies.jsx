import Image from "next/image";
import Styles from "../../styles/Companies.module.css";
const images = [
  "client-audiophile.svg",
  "client-databiz.svg",
  "client-maker.svg",
  "client-meet.svg",
];
export function Companies() {
  return (
    <>
      <div className={Styles.companies}>
        {images.map((image) => (
          <Image
            key={image}
            src={`/${image}`}
            alt={`${image}`}
            width={30}
            height={30}
          />
        ))}
      </div>
    </>
  );
}
