import Link from "next/link";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/MickKrishtopa"
        target="blank"
        className={styles.link}
      >
        &#xa9; Mikhail Krishtopa
      </Link>
    </footer>
  );
};

export { Footer };
