"use client";

import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center">
        <div className="w-full flex items-center gap-x-10 ">
          <p className="font-semibold shrink-0">Stream Key</p>
          <div className=" w-full flex items-center gap-x-2">
            <Input
              type={show ? "text" : "password"}
              value={value || ""}
              disabled
              placeholder="Stream key"
            />
            <CopyButton value={value || ""} />
          </div>
        </div>
        <Button
          onClick={() => setShow((prev) => !prev)}
          size="xs"
          variant="link"
          className="w-4 mx-2"
        >
          {show ? <EyeOff /> : <Eye />}
        </Button>
      </div>
    </div>
  );
};
