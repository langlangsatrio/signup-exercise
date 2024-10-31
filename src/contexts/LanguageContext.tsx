"use client";

import { useState, createContext, FunctionComponent, ReactNode } from "react";

//Context Configuration
interface ILanguageContext {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  setLanguage: () => {},
});

//Provider Configuration
interface ILanguageProvider {
  children: ReactNode;
}

export const LanguageProvider: React.FC<ILanguageProvider> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {" "}
      {children}{" "}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
