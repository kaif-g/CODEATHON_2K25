// filepath: src/components/HackathonLayout.tsx
import React, { ReactNode } from "react";
import { HackathonNavbar } from "./HackathonNavbar";
import Footer from "./Footer";
import Sidebar from "./HackFestSidebar";


interface HackathonLayoutProps {
  children: ReactNode;
}

export const HackathonLayout: React.FC<HackathonLayoutProps> = ({
  children,
}) => {
  const [mobileDrawer, setMobileDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <div>
      <HackathonNavbar mobileDrawer={mobileDrawer} toggleDrawer={toggleDrawer} />
      <Sidebar isOpen={mobileDrawer} setMobileDrawer={setMobileDrawer} />

      <main>{children}</main>
      <Footer />
    </div>
  );
};