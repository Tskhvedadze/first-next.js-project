import Link from "next/link";

import s from "./MainHeader.module.css";

export function MainHeader() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
