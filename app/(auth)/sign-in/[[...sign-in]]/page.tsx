"use client";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const { systemTheme, theme } = useTheme();
  return (
    <>
      <SignIn
        appearance={{
          baseTheme:
            theme === "dark" || (theme === "system" && systemTheme === "dark")
              ? dark
              : undefined,
        }}
      />
    </>
  );
}
