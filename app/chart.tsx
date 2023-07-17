'use client';
import { AreaChart, Text } from '@tremor/react';
import { QueryResult } from './types';

export default function Chart({
  data
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  return (
    <div className="max-h-48 overflow-hidden">
      <Text>In Development</Text>
      {data.map(({ app, queryResult }) => (
        <AreaChart
          key={app}
          data={queryResult.data.rows}
          categories={queryResult.data.columns.map(
            (column: any) => column.friendly_name
          )}
          index={queryResult.data.columns[0].name}
          // colors={['indigo', 'fuchsia']}
          // valueFormatter={(number: number) =>
          //   `$ ${Intl.NumberFormat('us').format(number).toString()}`
          // }
          yAxisWidth={60}
        />
      ))}
    </div>
  );
}
