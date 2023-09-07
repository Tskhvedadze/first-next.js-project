import { EventItem } from "./EventItem/EventItem";
import { DummyTypes } from "../../types";

import s from "./EventList.module.css";

export function EventList({ items }: { items: Array<DummyTypes> }) {
  return (
    <ul className={s.list}>
      {items.map((event: DummyTypes) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
