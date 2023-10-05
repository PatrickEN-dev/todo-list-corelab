"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import SearchBar from "../SearchBar";
import HeaderContainer from "../ContainerStyle/Header";

export default function Header() {
  return (
    <header className="flex w-full h-20 border-b-2 justify-between">
      <HeaderContainer>
        <div className="flex items-center space-x-3 w-[50%]">
          <Image className="h-8 w-10" src={Logo} alt="logo" />
          <h5 className="text-lg">Corenotes</h5>
        </div>
        <div className="flex w-[100%] justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center justify-end w-[20%]">
          <button type="button" className="flex " style={{ marginLeft: "auto" }}>
            <span className="text-lg mr-1">X</span>
          </button>
        </div>
      </HeaderContainer>
    </header>
  );
}
