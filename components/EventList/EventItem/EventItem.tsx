import { DummyTypes } from "../../../types";
import { Button } from "../../UI";
import { AddressIcon, DateIcon, ArrowRightIcon } from "../../icons";

import s from "./EventItem.module.css";

export function EventItem({ id, title, location, date, image }: DummyTypes) {
  const formattedeDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={s.item}>
      <img src={`/${image}`} alt={title} />
      <div className={s.content}>
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon />
            <time>{formattedeDate}</time>
          </div>
          <div className={s.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={s.actions}>
          <Button
            link={{
              pathname: "/events/[id]",
              query: {
                id,
              },
            }}
          >
            <span>Explore Event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
