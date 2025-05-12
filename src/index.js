import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Reacty from "./Reacty";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Reacty />
  </StrictMode>
);
