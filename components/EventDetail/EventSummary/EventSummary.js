import style from "./EventSummary.module.css";

export function EventSummary({ title }) {
  return (
    <section className={style.summary}>
      <h1>{title}</h1>
    </section>
  );
}
