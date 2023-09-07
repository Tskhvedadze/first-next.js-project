import s from "./EventSummary.module.css";

export function EventSummary({ title }: { title: string }) {
  return (
    <section className={s.summary}>
      <h1>{title}</h1>
    </section>
  );
}
