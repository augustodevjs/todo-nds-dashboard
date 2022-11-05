import { TableProps } from '../types';
import { TableNoData, TableLoading } from './components';
import * as S from './styles';

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  isLoading,
  ...rest
}) => {
  return (
    <S.Table
      striped
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
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
