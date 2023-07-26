import {
  BadgeDelta,
  Bold,
  Flex,
  List,
  ListItem,
  Metric,
  Text
} from '@tremor/react';
import { QueryResult } from './types';

const deltaTypeValues = [
  'increase',
  'moderateIncrease',
  'decrease',
  'moderateDecrease',
  'unchanged'
] as const;

function Delta({
  title,
  metricPrev,
  metric,
  options,
  inList = false
}: {
  title: string;
  metricPrev?: number;
  metric: number;
  options: any;
  inList?: boolean;
}) {
  if (metricPrev === undefined) {
    return (
      <div>
        <Text>{title}</Text>
        <Metric>
          {options.stringPrefix}
          {metric}
        </Metric>
      </div>
    );
  }
  const delta = metric - metricPrev;
  const deltaPercentage = ((delta / metricPrev) * 100).toFixed(2);
  let deltaType: (typeof deltaTypeValues)[number] = 'unchanged';
  if (delta > 0) {
    deltaType = +deltaPercentage > 10 ? 'increase' : 'moderateIncrease';
  } else if (delta < 0) {
    deltaType = +deltaPercentage < -10 ? 'decrease' : 'moderateDecrease';
  }
  if (inList) {
    return (
      <>
        <Flex justifyContent="start" className="truncate space-x-2.5">
          <BadgeDelta deltaType={deltaType} />
          <div className="truncate">
            <Text className="truncate">
              <Bold>{title}</Bold>
            </Text>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="truncate space-x-1"
            >
              <Metric className="text-md">
                {options.stringPrefix}
                {metric}
              </Metric>
              <Text className="truncate">
                from {options.stringPrefix}
                {metricPrev}
              </Text>
            </Flex>
          </div>
        </Flex>
        <Text>{deltaPercentage}%</Text>
      </>
    );
  }
  return (
    <>
      <Flex alignItems="start">
        <Text>{title}</Text>
        <BadgeDelta deltaType={deltaType}>{deltaPercentage}%</BadgeDelta>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3"
      >
        <Metric>
          {options.stringPrefix}
          {metric}
        </Metric>
        <Text className="truncate">
          from {options.stringPrefix}
          {metricPrev}
        </Text>
      </Flex>
    </>
  );
}
export default function Counter({
  data,
  options
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  const colName = options.targetColName ?? options.counterColName;

  const total = +data
    .reduce((acc, result) => {
      return acc + (result.queryResult.data.rows[0]?.[colName] || 0);
    }, 0)
    .toFixed(2);
  const prevTotal =
    data[0]?.queryResult.data.rows.length > 1
      ? +data
          .reduce((acc, result) => {
            if (!result.queryResult.data.rows[1]) {
              return acc;
            }
            return acc + result.queryResult.data.rows[1][colName];
          }, 0)
          .toFixed(2)
      : undefined;

  return (
    <>
      <Delta
        title="Total"
        metricPrev={prevTotal}
        metric={total}
        options={options}
      />
      <Flex className="mt-6">
        <Text>
          <Bold>App</Bold>
        </Text>
        {prevTotal !== undefined && (
          <Text>
            <Bold>Delta (%)</Bold>
          </Text>
        )}
      </Flex>
      <List className="mt-1">
        {data
          .sort(
            (a, b) =>
              (b.queryResult.data.rows[0]?.[colName] || 0) -
              (a.queryResult.data.rows[0]?.[colName] || 0)
          )
          .map(({ app, queryResult }) => (
            <ListItem key={app}>
              <Delta
                key={app}
                title={app}
                metricPrev={queryResult.data.rows[1]?.[colName]}
                metric={queryResult.data.rows[0]?.[colName]}
                options={options}
                inList
              />
            </ListItem>
          ))}
      </List>
    </>
  );
}
