import { SessionDataType } from "@/types";
import { create } from "zustand";

type SessionStore = {
  sessionUserData: SessionDataType | null;
  setSessionUserData: (data: SessionDataType) => void;
};

export const useSessionUserDataStore = create<SessionStore>((set) => ({
  sessionUserData: null,
  setSessionUserData: (data) =>
    set({
      sessionUserData: data as SessionDataType,
    }),
}));
