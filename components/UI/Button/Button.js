import Link from "next/link";

import { btn } from "./Button.module.css";

export function Button({ children, link }) {
  return (
    <Link href={link} className={btn}>
      {children}
    </Link>
  );
}
