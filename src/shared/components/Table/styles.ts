import DataTable from 'react-data-table-component';
import styled from 'styled-components';

export const Table = styled(DataTable)`
  .rdt_Table {
    background-color: transparent;

    .rdt_TableHead {
      font-size: 1rem;

      .rdt_TableHeadRow {
        background: transparent;
        border: 0;
        font-size: 0.95rem;
        color: #7c7c8a;
      }
    }

    .rdt_TableBody {
      display: flex;
      gap: 0.5rem;

      .rdt_TableRow {
        background-color: #29292e !important;
        border-radius: 4px;
        padding: 0.75rem 0;
        font-size: 0.85rem;
        color: #c4c4c6;
        border: 0;

        .rdt_TableCell {
          div:first-child {
            white-space: break-spaces;
            line-height: 150%;
            text-align: center;
            width: 300px;
          }
        }
      }
    }
  }

  .rdt_Pagination {
    background-color: #000;
  }
` as typeof DataTable;
