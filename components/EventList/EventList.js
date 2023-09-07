import { EventItem } from "./EventItem/EventItem";

import { list } from "./EventList.module.css";

export function EventList({ items }) {
  return (
    <ul className={list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
