import { Flex, Metric } from '@tremor/react';
import { QueryResult } from './types';

export default function Counter({
  queryResult,
  options
}: {
  queryResult: QueryResult['query_result'];
  options: any;
}) {
  return (
    <>
      {queryResult.data.rows.map((row: any, index: number) => (
        <Flex
          key={index}
          justifyContent="center"
          alignItems="baseline"
          className="space-x-2"
        >
          <Metric
            className={
              index === 0 && queryResult.data.rows[1]
                ? row[options.targetColName] >
                  queryResult.data.rows[1][options.targetColName]
                  ? 'text-green-500'
                  : 'text-orange-500'
                : 'text-neutral-700'
            }
          >
            {index === 1 && '('}
            {options.stringPrefix}
            {row[options.targetColName]}
            {index === 1 && ')'}
          </Metric>
        </Flex>
      ))}
    </>
  );
}
