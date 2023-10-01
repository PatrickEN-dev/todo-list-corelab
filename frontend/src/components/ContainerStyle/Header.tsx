import { TChildrenProps } from "@/@types/global";

export default function HeaderContainer({ children }: TChildrenProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-[1470px] px-[15px]">
      {children}
    </div>
  );
}
