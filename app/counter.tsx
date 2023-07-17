import { Flex, Metric, Text } from '@tremor/react';
import { QueryResult } from './types';

export default function Counter({
  data,
  options
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  const total = +data
    .reduce((acc, result) => {
      return acc + result.queryResult.data.rows[0][options.targetColName];
    }, 0)
    .toFixed(2);
  const prevTotal = +data
    .reduce((acc, result) => {
      if (!result.queryResult.data.rows[1]) {
        return acc;
      }
      return acc + result.queryResult.data.rows[1][options.targetColName];
    }, 0)
    .toFixed(2);

  return (
    <>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
        <Metric
          className={
            prevTotal
              ? total > prevTotal
                ? 'text-green-500'
                : 'text-orange-500'
              : 'text-neutral-700'
          }
        >
          {options.stringPrefix}
          {total}
          {prevTotal && (
            <span className="text-neutral-400 ml-2">(${prevTotal})</span>
          )}
        </Metric>
        <Text>Total</Text>
      </Flex>
      {data.map(({ app, queryResult }) => (
        <Flex
          key={app}
          justifyContent="start"
          alignItems="baseline"
          className="space-x-2"
        >
          <Metric
            className={
              queryResult.data.rows[1]
                ? queryResult.data.rows[0][options.targetColName] >
                  queryResult.data.rows[1][options.targetColName]
                  ? 'text-green-500'
                  : 'text-orange-500'
                : 'text-neutral-700'
            }
          >
            {options.stringPrefix}
            {queryResult.data.rows[0][options.targetColName]}
            {queryResult.data.rows[1] && (
              <span className="text-neutral-400 ml-2">
                (${queryResult.data.rows[1][options.targetColName]})
              </span>
            )}
          </Metric>
          <Text>{app}</Text>
        </Flex>
      ))}
    </>
  );
}