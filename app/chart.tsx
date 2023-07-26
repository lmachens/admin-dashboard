'use client';
import {
  AreaChart,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@tremor/react';
import { QueryResult } from './types';

export default function Chart({
  data,
  options
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  const columnMapping = Object.entries(options.columnMapping);
  const x = columnMapping.find(([, value]) => value === 'x')![0];
  const categories = columnMapping
    .filter(([, value]) => value === 'y')
    .map(([key]) => key);

  return (
    <TabGroup>
      <TabList>
        {data.map(({ app }) => (
          <Tab key={app}>{app}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map(({ app, queryResult }) => (
          <TabPanel key={app} className="p-6">
            <AreaChart
              data={queryResult.data.rows.sort(
                (a: any, b: any) => a[x]?.localeCompare(b[x]?.toString() || '')
              )}
              categories={categories}
              index={x}
              showLegend={false}
              yAxisWidth={50}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
