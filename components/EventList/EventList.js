import { EventItem } from "./EventItem/EventItem";

import style from "./EventList.module.css";

export function EventList({ items }) {
  return (
    <ul className={style.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
