"use client";

import { useSessionUserDataStore } from "@/stores/use-session-user-data-store";
import { SessionDataType } from "@/types";
import { useEffect } from "react";

type ClientSessionInitializerProps = {
  sessionUserData: SessionDataType;
};

export const ClientSessionInitializer = ({
  sessionUserData,
}: ClientSessionInitializerProps) => {
  const setSessionUserData = useSessionUserDataStore(
    (s) => s.setSessionUserData,
  );

  useEffect(() => {
    setSessionUserData(sessionUserData);
  }, [sessionUserData]);

  return null;
};
