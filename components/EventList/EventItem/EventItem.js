import Link from "next/link";

import { Button } from "../../UI";
import style from "./EventItem.module.css";

export function EventItem({ id, title, location, date, image }) {
  const formattedeDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={style.item}>
      <img src={`/${image}`} alt={title} />
      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <time>{formattedeDate}</time>
          </div>
          <div className={style.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button
            link={{
              pathname: "/events/[id]",
              query: {
                id,
              },
            }}
          >
            Explore Event
          </Button>
        </div>
      </div>
    </li>
  );
}
