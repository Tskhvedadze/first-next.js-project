import { PropsWithChildren } from "react";
import s from "./ErrorAlert.module.css";

export const ErrorAlert = ({ children }: PropsWithChildren) => (
  <div className={s.alert}>{children}</div>
);
