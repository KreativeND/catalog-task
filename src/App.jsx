import { MenuTabs } from "./components/menuTabs";
import PriceDisplay from "./components/priceDisplay";
import prices from "./assets/data/price.json";
import { createContext, useState } from "react";
import { cx } from "./lib/utils";

export const PriceContext = createContext();

function App() {
  const [active, setActive] = useState("1d");
  const [fullScreen, setFullScreen] = useState(false);

  const updateActive = (newActive) => {
    setActive(newActive);
  };
  const updateFullScreen = () => {
    setFullScreen((prev) => !prev);
  };

  return (
    <>
      <PriceContext.Provider value={{ prices, active, updateActive, fullScreen, updateFullScreen }}>
        <main className={cx("px-10 lg:w-3/4 mx-auto")}>
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
