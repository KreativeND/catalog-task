import { MenuTabs } from "./components/menuTabs";
import PriceDisplay from "./components/priceDisplay";
import pricesData from "./assets/data/price.json";
import { createContext, useEffect, useState } from "react";
import { cx } from "./lib/utils";

export const PriceContext = createContext();

function App() {
  const [active, setActive] = useState(["1d"]);
  const [fullScreen, setFullScreen] = useState(false);
  const [compare, setCompare] = useState(false);

  useEffect(() => {

  },[active])

  const updateActive = (newActive) => {
    if(compare)
    {
      setActive((prev) => prev.includes(newActive) ? prev.filter(p => p!== newActive) : [...prev, newActive]);
    }
    else {
      setActive([newActive])
    }
  };
  const updateFullScreen = () => {
    setFullScreen((prev) => !prev);
  };
  const updateCompare = () => {
    if(compare)
    {
      setActive(prev => prev.length > 0 ? [prev[0]]: [])
    }
    setCompare(prev => !prev);
  }

  return (
    <>
      <PriceContext.Provider value={{ pricesData, active, updateActive, fullScreen, updateFullScreen, compare, updateCompare  }}>
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
