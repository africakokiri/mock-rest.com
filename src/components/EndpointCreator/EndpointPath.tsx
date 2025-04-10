"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/libs/shadcn/utils";
import { useHttpStore } from "@/libs/zustand/store";

import { useEffect, useState } from "react";

export const EndpointPath = () => {
  const [isPathValid, setIsPathValid] = useState(false);

  const { endpointPath, setEndPointPath } = useHttpStore();

  // Endpoint path가 /api/로 시작하지 않으면 에러를 표시하는 로직
  useEffect(() => {
    const isEmpty = endpointPath === "";
    const isInvalid = !endpointPath.startsWith("/api/");

    setIsPathValid(!isEmpty && isInvalid);
  }, [endpointPath]);

  return (
    <div>
      <Label htmlFor="endpoint-path">Endpoint Path</Label>
      <Input
        placeholder="/api/data"
        id="endpoint-path"
        className={cn(
          "w-full",
          isPathValid && "border-[1px] border-red-500 !ring-red-500"
        )}
        value={endpointPath}
        onChange={(e) => setEndPointPath(e.target.value)}
      />

      {isPathValid && (
        <p className="text-xs text-red-500">
          Path must start with /api/ and not contain spaces
        </p>
      )}
    </div>
  );
};
