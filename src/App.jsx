import { MenuTabs } from "./components/menuTabs";
import PriceDisplay from "./components/priceDisplay";
import prices from "./assets/data/price.json";
import { createContext, useState } from "react";

export const PriceContext = createContext();

function App() {
  const [active, setActive] = useState("1d");

  const updateActive = (newActive) => {
    setActive(newActive);
  };

  return (
    <>
      <PriceContext.Provider value={{ prices, active, updateActive }}>
        <main className="px-10">
          <div className="mt-28 mb-12">
            <PriceDisplay />
          </div>
          <div>
            <MenuTabs />
          </div>
        </main>
      </PriceContext.Provider>
    </>
  );
}

export default App;
