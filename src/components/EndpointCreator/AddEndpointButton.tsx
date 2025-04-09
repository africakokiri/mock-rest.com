"use client";

import { Button } from "@/components/ui/button";
import { useHttpStore, useResponseStore } from "@/libs/zustand/store";

import { useEffect, useState } from "react";

export const AddEndpointButton = () => {
  const [pathStartWordAlert, setPathStartWordAlert] = useState(false);

  const { successResponse, errorResponse } = useResponseStore();
  const { endpointPath } = useHttpStore();

  useEffect(() => {
    if (!endpointPath || endpointPath[0] !== "/") {
      setPathStartWordAlert(true);
    } else {
      setPathStartWordAlert(false);
    }
  }, [endpointPath]);

  return (
    <Button
      disabled={pathStartWordAlert}
      className="w-full"
    >
      Add Endpoint
    </Button>
  );
};
