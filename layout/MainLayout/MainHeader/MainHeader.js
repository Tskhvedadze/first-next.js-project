import Link from "next/link";

import style from "./MainHeader.module.css";

export function MainHeader() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
