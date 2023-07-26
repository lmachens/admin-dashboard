'use client';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TableBody,
  TableCell,
  Table as TableComponent,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { QueryResult } from './types';

export default function Table({
  data
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
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
            <TableComponent className="max-h-96">
              <TableHead>
                <TableRow>
                  {queryResult.data.columns.map((column: any) => (
                    <TableHeaderCell key={column.name}>
                      {column.friendly_name}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {queryResult.data.rows.map((row: any, index: number) => (
                  <TableRow key={`${app}-${index}`}>
                    {queryResult.data.columns.map((column: any) => (
                      <TableCell key={`${app}-${column.name}`}>
                        {row[column.name]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </TableComponent>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
