import React from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {
  BsEye,
  BsFilter,
  BsPrinter,
  BsSearch,
  BsThreeDots,
} from "react-icons/bs";
import {Table as AntdTable, Button, Avatar} from "antd";
const Contractors = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Contractor",
      dataIndex: "contractor",
      key: "contractor",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Bids",
      dataIndex: "bids",
      key: "bids",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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

  const data = [
    {
      key: "1",
      id: 1,
      client: "Mr. Solomon",
      contractor: "Bonney",
      project: "Completed",
      bids: "In-progress",
      status: "Verified",
      contact: "545455454545",
    },
    {
      key: "2",
      id: 2,
      client: "Mr. Boateng",
      contractor: "Franca",
      project: "In-progres",
      bids: "Completed",
      status: "Active",
      contact: "545455454545",
    },
    {
      key: "3",
      id: 3,
      client: "Mr. Bos",
      contractor: "Francis",
      project: "In-progres",
      bids: "Completed",
      status: "Non-verified",
      contact: "545455454545",
    },
    {
      key: "4",
      id: 4,
      client: "Rigok",
      contractor: "Gokri",
      project: "Completed",
      bids: "In-progress",
      status: "Inactive",
      contact: "545455454545",
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
            <div class="col-6 mt-2">
              <form id="" action="" method="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="e.g. client, contract, bid or project"
                    style={{focus: "none", outline: "none"}}
                  />
                  <div class="input-group-append">
                    <input
                      type="submit"
                      className="form-control border-0 btn"
                      value="Search"
                      style={{background: "teal", color: "#fff"}}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <AntdTable columns={columns} dataSource={data} scroll={{x: true}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contractors;
