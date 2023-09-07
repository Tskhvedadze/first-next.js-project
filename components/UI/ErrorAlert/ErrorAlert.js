import { alert } from "./ErrorAlert.module.css";

export const ErrorAlert = ({ children }) => (
  <div className={alert}>{children}</div>
);
