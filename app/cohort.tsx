import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { QueryResult } from './types';

export default function Cohort({
  data,
  options
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  // Need to find a good way to display this data
  return (
    <>
      {data.map(({ app, queryResult }) => (
        <Table key={app}>
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
            {queryResult.data.rows.map((row: any) => (
              <TableRow key={row.date}>
                {queryResult.data.columns.map((column: any) => (
                  <TableCell key={column.name}>{row[column.name]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </>
  );
}
