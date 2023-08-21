import React from "react";
import {BsPencil, BsTrash} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
    key: "nationality",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button className="btn-success m-1">
          <BsPencil className="mb-2" />
        </Button>
        <Button className="btn btn-danger m-1">
          <BsTrash className="mb-2" />
        </Button>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    firstName: "Mr. Solomon",
    lastName: "Bonney",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "2",
    firstName: "Mr. Rex",
    lastName: "Ntow",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "3",
    firstName: "Miss Serwaa",
    lastName: "Ghansah",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "1",
    firstName: "Mr. Solomon",
    lastName: "Bonney",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "2",
    firstName: "Mr. Rex",
    lastName: "Ntow",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "3",
    firstName: "Miss Serwaa",
    lastName: "Ghansah",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "1",
    firstName: "Mr. Solomon",
    lastName: "Bonney",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "2",
    firstName: "Mr. Rex",
    lastName: "Ntow",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "3",
    firstName: "Miss Serwaa",
    lastName: "Ghansah",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "1",
    firstName: "Mr. Solomon",
    lastName: "Bonney",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "2",
    firstName: "Mr. Rex",
    lastName: "Ntow",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  {
    key: "3",
    firstName: "Miss Serwaa",
    lastName: "Ghansah",
    nationality: "Ghanaian",
    contact: "545455454545",
  },
  // ... other data rows ...
];

function Table() {
  return <AntdTable columns={columns} dataSource={data} scroll={{x: true}} />;
}

export default Table;
