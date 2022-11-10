import { TableProps } from '../types';
import { TableLoading, TableNoData } from './components';
import * as S from './styles';

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  isLoading,
  ...rest
}) => {
  return (
    <S.Table
      columns={columns}
      data={data}
      pagination
      noDataComponent={<TableNoData />}
      progressComponent={<TableLoading />}
      progressPending={isLoading}
      paginationComponentOptions={{
        noRowsPerPage: true,
        rangeSeparatorText: 'de',
      }}
      {...rest}
    />
  );
};
