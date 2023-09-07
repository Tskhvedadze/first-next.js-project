import { content } from "./EventContent.module.css";

export function EventContent({ children }) {
  return <section className={content}>{children}</section>;
}
