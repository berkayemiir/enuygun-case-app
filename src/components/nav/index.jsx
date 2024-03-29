"use client";

import styled from "styled-components";
import { useState } from "react";
import {
  HiHome,
  HiMiniUserGroup,
  HiMiniChartBar,
  HiMiniQuestionMarkCircle,
  HiMiniChatBubbleLeftRight,
  HiMiniBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: #2dc44d;
    border-radius: 20px;
    padding: 30px 20px;

    @media only screen and (min-width: 991px) {
      height: 100%;
      max-height: 100%;
      width: 200px;
      gap: 100px;
    }
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: center;
  `;

  const NavMenu = styled.ul`
    width: 100%;
    display: ${open ? "flex" : "none"};
    justify-content: center;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    @media only screen and (min-width: 991px) {
      display: flex;
    }
  `;

  const NavItem = styled.li`
    width: 100%;
  `;

  const NavMenuWrapper = styled.div`
    display: flex;
  `;

  const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const LogoLabel = styled.div`
    color: white;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 12px;
    text-align: center;

    @media only screen and (min-width: 991px) {
      text-align: left;
    }
  `;

  const MobileMenu = styled.button`
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: white;
    background-color: transparent;
    border: none;
    pointer-events: cursor;
    margin-top: 20px;
    margin-bottom: ${open ? "20px" : "0"};

    @media only screen and (min-width: 991px) {
      display: none;
    }
  `;

  const StyledLink = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    color: white;
    border-radius: 10px;
    transition: 0.3s;
    margin-bottom: 10px;

    &:hover {
      background-color: #1d9b40;
    }

    &.active {
      background-color: #1d9b40;
    }
  `;

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <Navbar>
      <LogoWrapper>
        <Logo>
          <svg
            width="162"
            height="23"
            viewBox="0 0 162 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="white" fillRule="evenodd">
              <path d="M0 0v23h15.907v-6.284H8.525V14.46h6.517V8.48H8.525V6.283h7.136V0M56.935 0v12.61c0 1.773-.06 3.334-2.288 3.334-2.226 0-2.287-1.56-2.287-3.333V0H44v13.39C44 20 48.21 23 54.647 23s10.647-3.002 10.647-9.61V0h-8.36zM139 23h8.093v-7.473c0-1.526-.247-3.02-.525-4.607h.247L154.26 23H162V0h-7.74v6.893c0 1.953.37 3.936.71 5.857h-.247L147.123 0H139v23zM127.935 0v12.61c0 1.773-.06 3.334-2.288 3.334-2.226 0-2.287-1.56-2.287-3.333V0H115v13.39C115 20 119.21 23 125.647 23s10.647-3.002 10.647-9.61V0h-8.36zM100.176 9.52v5.262h3.736c-.39 1.36-2.05 1.95-3.344 1.95-2.683 0-4.25-2.305-4.25-4.76 0-2.69 1.628-5.172 4.58-5.172 1.327 0 2.502.59 3.134 1.714l7.717-2.78C109.97 1.923 104.544 0 100.596 0 93.455 0 88 4.376 88 11.648 88 18.802 93.606 23 100.537 23c3.526 0 7.234-1.39 9.643-3.96 2.683-2.84 2.683-5.885 2.743-9.52h-12.747zM66 0l8.124 13.086V23h8.278v-9.914L90.372 0h-9.515L79.19 3.843c-.31.702-.526 1.434-.773 2.166h-.247L75.575 0H66zM18 23h8.093v-7.473c0-1.526-.247-3.02-.525-4.607h.247L33.26 23h8.092V0H33.26v6.893c0 1.953.37 3.936.71 5.857h-.248L26.124 0H18v23z"></path>
            </g>
          </svg>
        </Logo>
        <LogoLabel>OYLAMA SİSTEMİ</LogoLabel>
      </LogoWrapper>
      <MobileMenu onClick={() => setOpen(!open)}>
        {open ? <HiOutlineXMark /> : <HiMiniBars3 />}
      </MobileMenu>
      <NavMenuWrapper>
        <NavMenu>
          <NavItem onClick={handleCloseMenu}>
            <Link href={"/"} passHref legacyBehavior>
              <StyledLink className={pathname === "/" ? "active" : ""}>
                <HiHome />
              </StyledLink>
            </Link>
          </NavItem>
          <NavItem onClick={handleCloseMenu}>
            <Link href={"/personal"} passHref legacyBehavior>
              <StyledLink className={pathname === "/personal" ? "active" : ""}>
                <HiMiniUserGroup />
              </StyledLink>
            </Link>
          </NavItem>
          <NavItem onClick={handleCloseMenu}>
            <Link href={"/statistic"} passHref legacyBehavior>
              <StyledLink className={pathname === "/statistic" ? "active" : ""}>
                <HiMiniChartBar />
              </StyledLink>
            </Link>
          </NavItem>
          <NavItem onClick={handleCloseMenu}>
            <Link href={"/info"} passHref legacyBehavior>
              <StyledLink className={pathname === "/info" ? "active" : ""}>
                <HiMiniQuestionMarkCircle />
              </StyledLink>
            </Link>
          </NavItem>
          <NavItem onClick={handleCloseMenu}>
            <Link href={"/faq"} passHref legacyBehavior>
              <StyledLink className={pathname === "/faq" ? "active" : ""}>
                <HiMiniChatBubbleLeftRight />
              </StyledLink>
            </Link>
          </NavItem>
        </NavMenu>
      </NavMenuWrapper>
    </Navbar>
  );
}

export default Nav;
