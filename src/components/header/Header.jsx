import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/logo.svg"
import MobileNav from './MobileNav';

const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]");
    const menuItems = ["recipes","resources","about", "contact"];

    const onOpen = () =>{
        setHideLeft("left-0");
    }
    const onClose = () =>{
        setHideLeft("-left-[1000px]");
    }
  return (
    <>
        <div className="desktop-dev">
            <DesktopNav menuItems={menuItems} logo = {logo}/>
        </div>
        <div className="mobile-dev">
            <MobileNav
            menuItems={menuItems}
            logo={logo}
            onOpen={onOpen}
            onClose={onClose}
            hideLeft={hideLeft}
            />
        </div>
    </>
  )
}

export default Header
