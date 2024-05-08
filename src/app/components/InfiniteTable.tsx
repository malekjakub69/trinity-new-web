import clsx from 'clsx';
import { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Column, Row, useTable } from 'react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './shadcn';

interface IProps<T extends object> {
    cols: Column<T>[];
    data: T[];
    className?: string;
    hasNextPage?: boolean;
    onRowClick?: (value: Row<T>) => void;
    fetchNextPage?: () => void;
}

export const InfiniteTable: <T extends object>(p: IProps<T>) => ReactElement<IProps<T>> = ({
    cols,
    data,
    className,
    onRowClick,
    hasNextPage = false,
    fetchNextPage = () => {}
}) => {
    const table = useTable({ columns: cols, data: data });
    let haveHeader = false;
    const { t } = useTranslation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    table.headers.forEach((item) => {
        if (item.Header) {
            haveHeader = true;
            return;
        }
    });

    return (
        <div className={clsx('overflow-auto', className)}>
            <Table className={'w-full'} {...table.getTableProps()}>
                {haveHeader && (
                    <TableHeader>
                        <TableRow>
                            {table.headers.map((column) => (
                                <TableHead
                                    {...column.getHeaderProps({
                                        style: { width: column.width }
                                    })}
                                >
                                    {column.render('Header')}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                )}
                <TableBody {...table.getTableBodyProps()}>
                    {table.rows.map((row) => {
                        table.prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()} onClick={() => (onRowClick ? onRowClick(row) : undefined)}>
                                {row.cells.map((cell) => (
                                    <TableCell
                                        {...cell.getCellProps({
                                            style: { width: cell.column.width }
                                        })}
                                    >
                                        {cell.render('Cell')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <div ref={ref}></div>
            {data.length == 0 && <div className={'text-center font-bold text-3xl mt-24 text-gray-200'}> {t('No data')} </div>}
        </div>
    );
};
