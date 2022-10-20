import { TableProps } from '../../domain-types';
import * as S from './styles';

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <S.Table
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      paginationComponentOptions={{
        noRowsPerPage: true,
        rangeSeparatorText: 'de',
      }}
    />
  );
};
