import { useContext } from "react";
import { PriceContext } from "../App";
import { AreaChart } from "./ui/charts";

export const AreaChartHero = () => {
  const { prices, active } = useContext(PriceContext);

  return (
    <section>
      <AreaChart
        className="h-96"
        data={prices[active]}
        index="date"
        categories={["price"]}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  );
};
