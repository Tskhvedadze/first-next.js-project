import { DateIcon, AddressIcon } from "../../icons";
import { LogisticsItem } from "./LogisticsItem/LogisticsItem";
import style from "./EventLogistics.module.css";

export function EventLogistics({ date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address?.replace(", ", "\n");

  return (
    <section className={style.logistics}>
      <div className={style.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={style.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
