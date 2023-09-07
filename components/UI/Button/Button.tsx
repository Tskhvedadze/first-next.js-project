import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  link?: { pathname: string; query: {} };
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

import s from "./Button.module.css";

export function Button({ children, link, type, onClick }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={s.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={s.btn}>
      {children}
    </button>
  );
}
