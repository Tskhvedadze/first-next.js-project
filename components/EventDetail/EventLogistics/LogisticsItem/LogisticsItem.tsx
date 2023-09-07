import s from "./LogisticsItem.module.css";

type LogisticsItemProps = {
  children: React.ReactNode;
  icon: () => React.ReactNode;
};

export function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {
  return (
    <li className={s.item}>
      <span className={s.icon}>
        <Icon />
      </span>
      <span className={s.content}>{children}</span>
    </li>
  );
}
