"use client";

import { CardTitle, CardHeader as Header } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useUuidStore } from "@/libs/zustand/store";

import { AlertCircle, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const CardHeader = () => {
  const { uuid, setUuid } = useUuidStore();

  // localStorage에 UUID가 존재하는지 확인한 뒤 UUID가 존재하지 않으면 UUID 발급
  useEffect(() => {
    let storedUuid = localStorage.getItem("uuid");

    if (!storedUuid) {
      storedUuid = uuidv4();

      localStorage.setItem("uuid", storedUuid);
    }

    setUuid(storedUuid);

    // eslint-disable-next-line
  }, []);

  if (uuid) {
    return (
      <Header>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
          <h2>Define API Endpoints</h2>
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="max1304:hidden"
            >
              <HelpCircle className="text-red-500" />
            </HoverCardTrigger>
            <HoverCardContent
              className="absolute -left-32 w-[700px] text-red-500"
              asChild
            >
              <div
                className="mt-2 flex items-center rounded-lg border border-destructive/50 px-4 py-3
text-sm text-destructive dark:border-destructive [&>svg]:text-destructive"
              >
                <div className="space-y-2 font-light">
                  <p className="text-sm">
                    <span className="inline-flex items-center gap-1">
                      <AlertCircle className="inline-block h-4 w-4 text-destructive" />
                      <span>Your UUID:</span>
                      <span className="relative">
                        <span
                          aria-hidden="true"
                          className="font-bold underline underline-offset-2"
                        >
                          {uuid}
                        </span>

                        <span
                          className="sr-only"
                          style={{ userSelect: "text" }}
                        >
                          {uuid}
                        </span>
                      </span>
                    </span>
                  </p>

                  <p>
                    This website stores your UUID in your browser&apos;s local storage and uses it to
                    load the endpoints you have defined from the database.
                    <br />
                    Therefore, if the UUID is deleted from local storage, you will no longer be able to
                    access your endpoints.
                    <br />
                    To prevent this, please make sure to save your UUID somewhere safe.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardTitle>
      </Header>
    );
  }
};
