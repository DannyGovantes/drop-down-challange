import Styles from "../../styles/Button.module.css";

export function Button({ title, type }) {
  return (
    <>
      <button className={Styles.button_primary}>{title}</button>
    </>
  );
}
