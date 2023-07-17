'use client';
import { AreaChart } from '@tremor/react';
import { QueryResult } from './types';

export default function Chart({
  queryResult
}: {
  queryResult: QueryResult['query_result'];
}) {
  if (!queryResult) {
    return null;
  }
  return (
    <AreaChart
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
  );
}
