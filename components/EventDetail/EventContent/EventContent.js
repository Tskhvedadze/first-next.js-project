import style from "./EventContent.module.css";

export function EventContent({ children }) {
  return <section className={style.content}>{children}</section>;
}
