import React, { HTMLAttributes } from 'react';
import { Cell, Column, TableState, useTable } from 'react-table';
import './table.scss';

const defaultPropGetter = () => ({});

interface ITableProps<T extends object> extends HTMLAttributes<HTMLTableElement> {
  data: T[];
  columns: Column<T>[];
  initialState?: TableState<T>;
  parentClass?: string;
  row_height?: number;
  getCustomCellProps?: (cell: Cell<T, unknown>) => object;
}

const Table = <T extends object>({
  data,
  columns,
  initialState,
  getCustomCellProps = defaultPropGetter,
  parentClass,
  row_height,
  ...rest
}: ITableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({
    columns,
    data,
    initialState: initialState,
  });

  return (
    <table {...getTableProps()} className={`${parentClass}__table_container`} {...rest}>
      <tbody {...getTableBodyProps()} className={`${parentClass}__table_body`}>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={headerGroup.getHeaderGroupProps().key}
            className={`${parentClass}__table_header`}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                key={column.getHeaderProps().key}
                style={{
                  minWidth: column.minWidth === 0 ? 'auto' : column.minWidth,
                  maxWidth: column.maxWidth > 1000 ? 'auto' : column.maxWidth,
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...rest } = row.getRowProps();
          return (
            <tr style={{ height: `${row_height}px` }} key={key} {...rest}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={cell.getCellProps().key}
                    style={{
                      minWidth: cell.column.minWidth === 0 ? 'auto' : cell.column.minWidth,
                      maxWidth: cell.column.maxWidth > 1000 ? 'auto' : cell.column.maxWidth,
                    }}
                  >
                    {cell.render('Cell', getCustomCellProps(cell))}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
