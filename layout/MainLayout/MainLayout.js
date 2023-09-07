import { MainHeader } from "./MainHeader/MainHeader";

export function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
