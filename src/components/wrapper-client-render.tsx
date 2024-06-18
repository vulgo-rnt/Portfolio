"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function WrapperClientRender({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return <>{pathname !== "/contact" && children}</>;
}
