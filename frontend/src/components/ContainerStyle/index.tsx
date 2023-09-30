import { TChildrenProps } from "@/@types/global";

export default function ContainerStyle({ children }: TChildrenProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-[1417px] px-[15px] mx-auto ">
      {children}
    </div>
  );
}
