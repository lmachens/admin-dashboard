'use client';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { QueryResult } from './types';

export default function Cohort({
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
            <Table className="max-h-96">
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
            </Table>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
