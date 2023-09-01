import React, {useState} from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {BsBell, BsEye, BsLock, BsThreeDots, BsUnlock} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
import {BiSolidUserAccount} from "react-icons/bi";
const Bids = () => {
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
  //Colums for table
  const columns = [
    {
      title: "JOB ID:",
      dataIndex: "idNumber",
      key: "idNumber",
    },
    {
      title: "CID:",
      dataIndex: "cidNumber",
      key: "cidNumber",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "CURRENCY",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "SUBMITTED",
      dataIndex: "submitted",
      key: "submitted",
    },
    {
      title: "ACCEPTED",
      dataIndex: "accepted",
      key: "accepted",
    },
    {
      title: "REJECTED",
      dataIndex: "rejected",
      key: "rejected",
    },
    {
      title: "CREATED",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "UPDATED",
      dataIndex: "updated",
      key: "updated",
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
  //Colums data
  const data = [
    {
      key: "1",
      idNumber: "3023",
      cidNumber: "238482",
      amount: "2200",
      currency: "Cedis",
      duration: "One month",
      status: "accepted",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
    {
      key: "2",
      idNumber: "5423",
      cidNumber: "238482",
      amount: "2200",
      currency: "Dollars",
      duration: "Two weeks",
      status: "submitted",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
    {
      key: "3",
      idNumber: "3123",
      cidNumber: "23433",
      amount: "4400",
      currency: "Cedis",
      duration: "One month",
      status: "accepted",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
    {
      key: "4",
      idNumber: "3223",
      cidNumber: "238482",
      amount: "2200",
      currency: "Euro",
      duration: "One month",
      status: "submitted",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
    {
      key: "5",
      idNumber: "5523",
      cidNumber: "248482",
      amount: "600",
      currency: "Dollars",
      duration: "One month",
      status: "rejected",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
    {
      key: "6",
      idNumber: "4523",
      cidNumber: "88982",
      amount: "800",
      currency: "Euro",
      duration: "One month",
      status: "submitted",
      submitted: "23/06/2023",
      accepted: "25/06/2023",
      rejected: "30/06/2023",
      created: "20/05/2023",
      updated: "01/07/2023",
    },
  ];
  const filteredData = data.filter(record => {
    if (selectedStatus === "") {
      return true;
    }
    return record.status === selectedStatus;
  });
  //View Details
  const menu = (
    <Menu style={{width: "250px"}}>
      <Menu.Item>
        <div>
          <Link to="/view-materials" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> View Materials
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
          <Link to="/activate-bid" className="text-decoration-none text-dark">
            <BsLock className="m-2" /> Activate Bid
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/deactivate-bid" className="text-decoration-none text-dark">
            <BsUnlock className="m-2" /> Deactivate Bid
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/view-job" className="text-decoration-none text-dark">
            <BsEye className="m-2" /> View Job
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-2 mb-2">
          <div>
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
              <option value="">All Bids</option>
              <option value="accepted">Accepted Bids</option>
              <option value="rejected">Rejected Bids</option>
              <option value="submitted">Submitted</option>
              <option value="idNumber">Job ID</option>
              <option value="conid">Contractor ID</option>
              <option value="cid">Client ID</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <AntdTable
            className="zebra-table"
            columns={columns}
            dataSource={filteredData}
            scroll={{x: true}}
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

export default Bids;
