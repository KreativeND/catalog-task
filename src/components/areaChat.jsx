import { useContext } from "react";
import { PriceContext } from "../App";
import { AreaChart } from "./ui/charts";

export const AreaChartHero = () => {
  const { pricesData, active } = useContext(PriceContext);

  return (
    <section>
      <AreaChart
        className="h-96"
        data={pricesData}
        index="date"
        categories={[...active]}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  );
};
