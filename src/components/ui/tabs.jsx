import React, { createContext, forwardRef, useContext } from "react";
import * as TabsPrimitives from "@radix-ui/react-tabs";

import { cx, focusRing } from "../../lib/utils";

const Tabs = (props) => {
  return <TabsPrimitives.Root tremor-id="tremor-raw" {...props} />;
};

Tabs.displayName = "Tabs";

const TabsListVariantContext = createContext("line");

const variantStyles = {
  line: cx(
    // base
    "flex items-center justify-start",
  ),
  solid: cx(
    // base
    "inline-flex items-center justify-center rounded-md p-1",
    // background color
    "bg-gray-100 dark:bg-gray-900"
  ),
};

const TabsList = forwardRef(({ className, variant = "line", children, ...props }, forwardedRef) => (
  <TabsPrimitives.List
    ref={forwardedRef}
    className={cx(variantStyles[variant], className)}
    {...props}
  >
    <TabsListVariantContext.Provider value={variant}>
      {children}
    </TabsListVariantContext.Provider>
  </TabsPrimitives.List>
));

TabsList.displayName = "TabsList";

function getVariantStyles(tabVariant) {
  switch (tabVariant) {
    case "line":
      return cx(
        // base
        "-mb-px items-center justify-center whitespace-nowrap border-b-2 border-transparent px-4 pb-2 text-sm font-medium transition-all",
        // text color
        "text-[#6F7177] dark:text-[#6F7177] pb-6",
        // hover
        "hover:text-gray-700 hover:dark:text-gray-400 border-b-[3px]",
        // border hover
        "hover:border-gray-300 hover:dark:border-gray-400 border-b-[3px]",
        // selected
        "data-[state=active]:border-[#4B40EE] border-b-[3px] data-[state=active]:text-[#1A243A] data-[state=active]:pb-6",
        "data-[state=active]:dark:border-[#4B40EE] data-[state=active]:dark:text-[#1A243A] data-[state=active]:pb-6",
        // disabled
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:text-gray-300 data-[disabled]:dark:text-gray-700"
      );
    case "solid":
      return cx(
        // base
        "inline-flex items-center justify-center whitespace-nowrap rounded px-4 spy-1 text-sm font-medium ring-1 ring-inset transition-all",
        // text color
        "text-gray-500 dark:text-gray-400 pb-6",
        // hover
        "hover:text-gray-700 hover:dark:text-gray-200 border-b-[3px]",
        // ring
        "ring-transparent",
        // selected
        "data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow data-[state=active]:pb-6",
        "data-[state=active]:dark:bg-gray-950 data-[state=active]:dark:text-gray-50 data-[state=active]:pb-6",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:opacity-50 data-[disabled]:dark:text-gray-600"
      );
    default:
      return "";
  }
}

const TabsTrigger = forwardRef(({ className, children, ...props }, forwardedRef) => {
  const variant = useContext(TabsListVariantContext);
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={cx(getVariantStyles(variant), focusRing, className)}
      {...props}
    >
      {children}
    </TabsPrimitives.Trigger>
  );
});

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = forwardRef(({ className, ...props }, forwardedRef) => (
  <TabsPrimitives.Content
    ref={forwardedRef}
    className={cx("outline-none", focusRing, className)}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
