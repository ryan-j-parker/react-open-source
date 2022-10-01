import { Cell, Column, HeaderCell, Table } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import * as dataList from './dataList.json';

function DataTable() {
  return (
    <Table data={dataList}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      
      <Column width={100} sortable fixed resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="first_name" />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="last_name" />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      
      </Column><Column width={100} sortable fixed resizable>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      
      </Column><Column width={100} sortable fixed resizable>
        <HeaderCell>IP Address</HeaderCell>
        <Cell dataKey="ip_address" />
      </Column>

    </Table>
  );
}

export default DataTable;