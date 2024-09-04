import { PropsWithChildren } from "react";

export function NameVariableSecond({ children }: PropsWithChildren) {
  return <span className="text-[#9cdcfe]">{children}</span>;
}
export function Function({ children }: PropsWithChildren) {
  return <span className="text-[#dcdcaa]">{children}</span>;
}
export function AspFunc({ children }: PropsWithChildren) {
  return <span className="text-[#da70d6]">{children}</span>;
}
export function AspFuncBlue({ children }: PropsWithChildren) {
  return <span className="text-[#179fff]">{children}</span>;
}
export function Comment({ children }: PropsWithChildren) {
  return <span className="text-[#6a9955]">{children}</span>;
}
export function Variable({ children }: PropsWithChildren) {
  return <span className="text-[#569cd6]">{children}</span>;
}
export function NameVariable({ children }: PropsWithChildren) {
  return <span className="text-[#44c1ff]">{children}</span>;
}
export function White({ children }: PropsWithChildren) {
  return <span className="text-white">{children}</span>;
}
export function Strings({ children }: PropsWithChildren) {
  return <span className="text-[#ce9178]">&quot;{children}&quot;</span>;
}
export function Type({ children }: PropsWithChildren) {
  return <span className="text-[#46c9b0]">{children}</span>;
}
export function Yellow({ children }: PropsWithChildren) {
  return <span className="text-[#ffd700]">{children}</span>;
}
export function Param({ children }: PropsWithChildren) {
  return <span className="text-[#b5cea8]">{children}</span>;
}
