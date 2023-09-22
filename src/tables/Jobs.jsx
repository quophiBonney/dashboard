import React, {useState} from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {BsBell, BsEye, BsThreeDots} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
import {BiSolidUserAccount} from "react-icons/bi";
const Jobs = () => {
  //Modal state
  const [show, setShow] = useState(false);
  //Button to close modal
  const handleClose = () => setShow(false);
  //Button to show modal
  const handleShow = () => setShow(true);
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = value => {
    setSelectedStatus(value);
  };
  const data = [
    {
      key: "1",
      idNumber: "238482",
      title: "Plumber",
      descriptions: "I am almost through with the first phase.",
      startDate: "04/10/1996",
      endDate: "08/10/1996",
      budget: "100,000",
      address: "B/W 4449 N",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: "20302",
      status: "Active",
      category: "Construction",
      duration: "2 weeks",
      skills: "Plumbing",
      acceptedBid: "Yes",
      open: "Yes",
      closedDate: "20/07/2023",
      createdAt: "10/11/2022",
      updatedAt: "12/01/2023",
    },
    {
      key: "2",
      idNumber: "238482",
      title: "Plumber",
      descriptions: "I am almost through with the first phase.",
      startDate: "04/10/1996",
      endDate: "08/10/1996",
      budget: "100,000",
      address: "B/W 4449 N",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: "20302",
      status: "Active",
      category: "Construction",
      duration: "2 weeks",
      skills: "Plumbing",
      acceptedBid: "Yes",
      open: "Yes",
      closedDate: "20/07/2023",
      createdAt: "10/11/2022",
      updatedAt: "12/01/2023",
    },
    {
      key: "3",
      idNumber: "238482",
      title: "Plumber",
      descriptions: "I am almost through with the first phase.",
      startDate: "04/10/1996",
      endDate: "08/10/1996",
      budget: "100,000",
      address: "B/W 4449 N",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: "20302",
      status: "Active",
      category: "Construction",
      duration: "2 weeks",
      skills: "Plumbing",
      acceptedBid: "Yes",
      open: "Yes",
      closedDate: "20/07/2023",
      createdAt: "10/11/2022",
      updatedAt: "12/01/2023",
    },
  ];
  const filteredData = data.filter(record => {
    if (selectedStatus === "") {
      return true;
    }
    return record.status === selectedStatus;
  });

  const columns = [
    {
      title: "ID NO:",
      dataIndex: "idNumber",
      key: "idNumber",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "DESCRIPTIONS",
      dataIndex: "descriptions",
      key: "description",
    },
    {
      title: "START DATE",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "END DATE",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "BUDGET",
      dataIndex: "budget",
      key: "budget",
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
      title: "STATE",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "REGION",
      dataIndex: "region",
      key: "region",
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
      title: "CATEGORY",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "DURATION",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "SKILLS",
      dataIndex: "skills",
      key: "skills",
    },
    {
      title: "ACCEPTED BID",
      dataIndex: "acceptedBid",
      key: "acceptedBid",
    },
    {
      title: "OPEN",
      dataIndex: "open",
      key: "open",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CLOSED DATE",
      dataIndex: "closedDate",
      key: "closedDate",
    },
    {
      title: "CREATED AT",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "UPDATED AT",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "ACTION",
      key: "action",
      render: () => (
        <span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              className="border-0"
              style={{color: "teal"}}
              icon={<BsThreeDots />}
            />
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
          <Link to="/verified" className="text-decoration-none text-dark">
            <BiSolidUserAccount className="m-2" /> Verified
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link onClick={handleShow} className="text-decoration-none text-dark">
            <BsBell className="m-2" /> Messages
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/review" className="text-decoration-none text-dark">
            <BiSolidUserAccount className="m-2" /> View Reviews
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/non-verified" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> View Portfolio
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
    </Menu>
  );
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-2 mb-2">
          <div className="hide">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  style={{borderRadius: "5px"}}
                  placeholder="Search eg country, region, city"
                />
                <div className="input-group-append">
                  <input
                    type="submit"
                    className="form-control text-light"
                    style={{background: "teal", marginLeft: "5px"}}
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="">
            <select
              className="w-100 py-2"
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
            className="zebra-table"
          />
        </div>
        {/* {Modal to send message} */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Send Message</Modal.Title>
          </Modal.Header>
          <div className="container">
            <form>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="form-control px-2"
              />
              <div className="d-flex justify-content-between mt-3 mb-3">
                <div>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn"
                    style={{background: "teal", color: "#fff"}}
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Jobs;
