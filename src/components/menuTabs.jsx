import { Dialog, DialogPanel } from "@tremor/react";
import Actions from "./actions";
import { AreaChartHero } from "./areaChat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cx } from "../lib/utils";
import { useContext } from "react";
import { PriceContext } from "../App";

export const MenuTabs = () => {
  const { fullScreen } = useContext(PriceContext);

  return (
    <Tabs defaultValue="ChartTab">
      <TabsList className="flex flex-wrap gap-5">
        <TabsTrigger value="SummaryTab">
          <p className="tab-title">Summary</p>
        </TabsTrigger>
        <TabsTrigger value="ChartTab">
          <p className="tab-title">Chart</p>
        </TabsTrigger>
        <TabsTrigger value="StatisticsTab">
          <p className="tab-title">Statistics</p>
        </TabsTrigger>
        <TabsTrigger value="AnalysisTab">
          <p className="tab-title">Analysis</p>
        </TabsTrigger>
        <TabsTrigger value="SettingsTab">
          <p className="tab-title">Settings</p>
        </TabsTrigger>
      </TabsList>
      <div className="ml-2 mt-4">
        <TabsContent
          value="ChartTab"
          className=""
        >
          <div
            className={cx("space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500 flex flex-col gap-8",
              fullScreen &&
                "w-full h-full lg:w-[80%] lg:h-[80%] p-10 bg-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 tra lg:shadow-lg rounded-lg flex flex-col justify-center items-start"
            )}
          >
            <Actions />
            <AreaChartHero />
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};
