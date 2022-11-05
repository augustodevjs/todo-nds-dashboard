import { TableProps } from '../types';
import { TableNoData } from './components';
import * as S from './styles';

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <S.Table
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      noDataComponent={<TableNoData />}
      paginationComponentOptions={{
        noRowsPerPage: true,
        rangeSeparatorText: 'de',
      }}
    />
  );
};
