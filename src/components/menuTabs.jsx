import Actions from "./actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export const MenuTabs = () => (
  <Tabs defaultValue="ChartTab">
    <TabsList>
      <TabsTrigger value="SummaryTab"><p className="tab-title">Summary</p></TabsTrigger>
      <TabsTrigger value="ChartTab"><p className="tab-title">Chart</p></TabsTrigger>
      <TabsTrigger value="StatisticsTab"><p className="tab-title">Statistics</p></TabsTrigger>
      <TabsTrigger value="AnalysisTab"><p className="tab-title">Analysis</p></TabsTrigger>
      <TabsTrigger value="SettingsTab"><p className="tab-title">Settings</p></TabsTrigger>
    </TabsList>
    <div className="ml-2 mt-4">
      <TabsContent
        value="ChartTab"
        className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
      >
       <Actions />
      </TabsContent>
    </div>
  </Tabs>
);