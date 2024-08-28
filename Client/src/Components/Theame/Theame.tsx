import { createContext } from "react";

// Create a context for theme
type ContexType = {
  lightMode: boolean;
  setLightMode: (lightMode: boolean) => void;
};

const TheameContex = createContext<ContexType>({
  lightMode: false,
  setLightMode: () => {},
});

export default TheameContex;
