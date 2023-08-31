import React, {useState} from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {BsEye, BsPrinter, BsThreeDots} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
const Clients = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = value => {
    setSelectedStatus(value);
  };
  const data = [
    {
      key: "1",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      dob: "04/10/1996",
      address: "B/A 78",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: 20302,
      status: "Active",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "2",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Female",
      dob: "04/10/1996",
      address: "B/A 78",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: 20302,
      status: "Non-verified",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "3",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      dob: "04/10/1998",
      address: "BW 88",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: 20302,
      status: "Verified",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "4",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      dob: "04/10/1998",
      address: "BW 88",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: 20302,
      status: "Verified",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "5",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      dob: "04/10/1998",
      address: "BW 88",
      city: "Accra",
      region: "N. Region",
      state: "Bawku",
      country: "Ghana",
      zip: 20302,
      status: "Verified",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "6",
      idNumber: 238482,
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      dob: "04/10/1998",
      address: "BW 88",
      city: "Accra",
      region: "E. Region",
      state: "Koforidua",
      country: "Ghana",
      zip: 20302,
      status: "Inactive",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
  ];
  const filteredData = data.filter(record => {
    if (selectedStatus === "") {
      return true; // Show all records if no filter is selected
    }
    return record.status === selectedStatus; // Show records based on selected filter
  });

  const columns = [
    {
      title: "ID NO:",
      dataIndex: "idNumber",
      key: "idNumber",
    },
    {
      title: "TYPE",
      dataIndex: "idType",
      key: "idType",
    },
    {
      title: "ISSUER",
      dataIndex: "idIssuer",
      key: "idIssuer",
    },
    {
      title: "ID EXP.",
      dataIndex: "idExpiration",
      key: "idExpiration",
    },
    {
      title: "GENDER",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "CITY",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "REGION",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "STATE",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "COUNTRY",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "ZIP",
      dataIndex: "zip",
      key: "zip",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CREATED",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    {
      title: "UPDATED",
      dataIndex: "dateUpdated",
      key: "dateUpdated",
    },
    {
      title: "ACTION",
      key: "action",
      render: () => (
        <span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              className="rounded-pill"
              style={{color: "teal"}}
              icon={<BsThreeDots />}
            ></Button>
          </Dropdown>
        </span>
      ),
    },
  ];

  //View Details
  const menu = (
    <Menu style={{width: "250px"}}>
      <Menu.Item>
        <div>
          <Link to="/details" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> View Details
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/activate" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> Activate
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/deactivate" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> Deactivate
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/contracts" className="text-decoration-none text-dark">
            <BsPrinter className="m-2" /> Print
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="container-fluid" style={{marginTop: "60px"}}>
        <div className="row justify-content-center">
          <div className="d-flex justify-content-between mt-2 mb-2">
            <div className="mt-3">
              <p className="text-secondary fs-6">Total Records: 4</p>
            </div>
            <div className="col-2 mt-2">
              <select
                className="w-100 py-2 px-3 text-center"
                style={{
                  outline: "none",
                  border: "0",
                  borderRadius: "5px",
                  focus: "none",
                }}
                onChange={e => handleStatusChange(e.target.value)}
                value={selectedStatus}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Verified">Verified</option>
                <option value="Non-verified">Non-Verified</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <AntdTable
              columns={columns}
              dataSource={filteredData}
              scroll={{x: true}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;