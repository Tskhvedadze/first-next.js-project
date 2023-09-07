import { item, icon, content } from "./LogisticsItem.module.css";

export function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className={style.item}>
      <span className={style.icon}>
        <Icon />
      </span>
      <span className={style.content}>{children}</span>
    </li>
  );
}
