import Link from "next/link";

import { btn } from "./Button.module.css";

export function Button({ children, link, type, onClick }) {
  if (link) {
    return (
      <Link href={link} className={btn}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btn}>
      {children}
    </button>
  );
}
