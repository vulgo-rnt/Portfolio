"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

export function NumberedLines({ children }: PropsWithChildren) {
  const [lines, setLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calcLines = () => {
      const lineHeight = 24;
      const codeTableHeight = ref.current?.offsetHeight;
      if (codeTableHeight) {
        const newLines = Math.floor(codeTableHeight / lineHeight);
        if (lines !== newLines) setLines(newLines);
      }
    };
    const handleResize = () => {
      calcLines();
    };

    calcLines();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-[#1f1f1f] flex gap-4">
      <div className="text-[#6e7681] flex flex-col text-end">
        {Array.from({ length: lines }, (_, i) => {
          console.log(lines);
          return <span key={i + 1}>{i + 1}</span>;
        })}
      </div>
      <div ref={ref}>{children}</div>
    </main>
  );
}
