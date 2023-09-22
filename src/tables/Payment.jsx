import React, {useState} from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {BsBell, BsEye, BsThreeDots} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
import {BiSolidMessage, BiSolidUserAccount} from "react-icons/bi";
import { AiFillRightCircle, AiFillWarning } from "react-icons/ai";
const Payment = () => {
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
      contractID: 238482,
      amount: "4500",
      currency: "Dollar",
      paymentDate: "20/03/2023",
      paymentMethod: "Paypal",
      status: "Verified",
      created: "23/04/2023",
      updated: "24/04/2023"
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
      title: "CONTRACT ID",
      dataIndex: "contractID",
      key: "contractID",
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
      title: "PAYMENT DATE",
      dataIndex: "paymentDate",
      key: "paymentDate",
    },
    {
      title: "PAYMENT METHOD",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CREATED AT",
      dataIndex: "created",
      key: "created"
    },
    {
      title: "UPDATED AT",
      dataIndex: "updated",
      key: "updated"
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
          <Link onClick={handleShow} className="text-decoration-none text-dark">
            <BiSolidMessage className="m-2" /> Message Client
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/review" className="text-decoration-none text-dark">
            <AiFillRightCircle className="m-2" /> Mark Payment
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/non-verified" className="text-decoration-none text-dark">
            <AiFillWarning className="m-2" /> Mark Payment Pending
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/activate" className="text-decoration-none text-dark">
            <AiFillRightCircle className="m-2" /> Mark Payment Paid
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link to="/non-verified" className="text-decoration-none text-dark">
            <AiFillWarning className="m-2" /> Overdue
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

export default Payment;
