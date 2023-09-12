import React, {useState} from "react";
import {Menu, Dropdown, message} from "antd";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {BsBell, BsPerson, BsEye, BsThreeDots} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
const Messages = () => {
  //Modal state
  const [sender, setSender] = useState(false);
  const [recipient, setRecipient] = useState(false);
  //Button to close modal
  const handleClose = () => setRecipient(false);
  const handleCloseSender = () => setSender(false);
  //Button to show modal
  const messageToRecipent = () => setRecipient(true);
  const messageToSender = () => setSender(true);
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = value => {
    setSelectedStatus(value);
  };
  const data = [
    {
      key: "1",
      idNumber: 238482,
      senderID: 3945948,
      senderName: "John Doe",
      recipientName: "Hello World",
      recipientID: 434854,
      rtID: "John Wack",
      message: "Hello world, this is buildbridge",
      subject: "Buildbridge",
      isread: "Yes",
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
      title: "SENDER ID",
      dataIndex: "senderID",
      key: "senderID",
    },
    {
      title: "SENDER NAME",
      dataIndex: "senderName",
      key: "senderName",
    },
    {
      title: "RECIPIENT NAME",
      dataIndex: "recipientName",
      key: "recipientName",
    },
    {
      title: "RECIPIENT ID",
      dataIndex: "recipientID",
      key: "recipientID",
    },
    {
      title: "RTI",
      dataIndex: "rtID",
      key: "rtID",
    },
    {
      title: "MESSAGE",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "SUBJECT",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "IS READ",
      dataIndex: "isread",
      key: "isread",
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
          <Link
            onClick={messageToSender}
            className="text-decoration-none text-dark"
          >
            <BsEye className="m-2" /> Message To Sender
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Link
            onClick={messageToRecipent}
            className="text-decoration-none text-dark"
          >
            <BsEye className="m-2" /> Message To Recipient
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
        {/* {Modal to sender } */}
        <Modal show={sender} onHide={handleCloseSender}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Message To Sender</Modal.Title>
          </Modal.Header>
          <div className="container">
            <form>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="form-control px-2"
              />
              <div className="input-group mt-3">
                <input type="file" className="form-control px-2" />
              </div>
              <div className="d-flex justify-content-between mt-3 mb-3">
                <div>
                  <Button variant="secondary" onClick={handleCloseSender}>
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
        {/* {Modal To Recipient} */}
        <Modal show={recipient} onHide={handleClose}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Message To Recipient</Modal.Title>
          </Modal.Header>
          <div className="container">
            <form>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="form-control px-2"
              />
              <div className="input-group mt-3">
                <input type="file" className="form-control px-2" />
              </div>
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

export default Messages;
