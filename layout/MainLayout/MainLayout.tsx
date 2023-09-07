import { PropsWithChildren } from "react";
import { MainHeader } from "./MainHeader/MainHeader";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
