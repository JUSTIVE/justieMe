import { createContext, useContext, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
