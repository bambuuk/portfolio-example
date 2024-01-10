'use client';

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setMenuOpen(true)
    document.body.classList.add("no-scroll");

  }

  const handleClose = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="block lg:hidden">
      <RxHamburgerMenu
        color="white"
        className="text-3xl"
        onClick={handleOpen}
      />

      <Menu open={isMenuOpen} onClose={handleClose} />
    </div>
  )
}

export default Sidebar;
