import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/blog">
        Blog
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
    </header>
  );
};

export default Header;
