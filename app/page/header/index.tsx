'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import Button from "@/app/components/button";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <ul>
        <Image src={Logo} alt="Logo" />
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="sign">
        <Button text="Login" className="Login" />
        <Button text="Sign up" />
      </div>
      <div className="dropdown-container" onClick={toggleDropdown}>
        <CiMenuBurger />
        
      </div>
      <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <hr />
        <Button text="Login" className="DropdownBtn" />
        <Button text="Sign up" />
      </div>
    </header>
  );
}
