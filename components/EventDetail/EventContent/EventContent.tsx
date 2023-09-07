import { PropsWithChildren } from "react";
import s from "./EventContent.module.css";

export function EventContent({ children }: PropsWithChildren) {
  return <section className={s.content}>{children}</section>;
}
