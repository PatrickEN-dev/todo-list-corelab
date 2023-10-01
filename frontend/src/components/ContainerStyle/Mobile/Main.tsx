import { TChildrenProps } from "@/@types/global";

export default function ContainerMainMobile({ children }: TChildrenProps) {
  return <div className="flex items-center justify-center flex-col w-full">{children}</div>;
}
