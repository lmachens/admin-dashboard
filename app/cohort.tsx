import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text
} from '@tremor/react';
import { QueryResult } from './types';

export default function Cohort({
  data
}: {
  data: { app: string; queryResult: QueryResult['query_result'] }[];
  options: any;
}) {
  return (
    <div className="max-h-48 overflow-hidden">
      <Text>In Development</Text>
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
    </div>
  );
}
