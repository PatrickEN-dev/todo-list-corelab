import Image from "next/image";

import Logo from "@/assets/logo.svg";
import SearchBar from "../SearchBar";
import HeaderContainer from "../ContainerStyle/Header";

export default function Header() {
  return (
    <header className="flex w-full h-20 border-b-2 justify-between">
      <HeaderContainer>
        <div className="flex w-[10%] space-x-3">
          <Image className="h-8 w-10" src={Logo} alt="logo" />
          <h5>Corenotes</h5>
        </div>
        <div className="flex w-full justify-center mr-10">
          <SearchBar />
        </div>

        <button type="button">
          <span className="text-lg mr-1">X</span>
        </button>
      </HeaderContainer>
    </header>
  );
}
