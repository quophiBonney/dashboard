import React, {useState} from "react";
import {BsFilter, BsPencil, BsPersonFillCheck, BsTrash} from "react-icons/bs";
import {Table as AntdTable, Button, Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
const Contractors = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
      key: "registrationDate",
    },
    {
      title: "Contractor ID",
      dataIndex: "contractorID",
      key: "contractorID",
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
      title: "View Profile/Action",
      key: "action",
      render: () => (
        <span>
          <Button variant="primary" onClick={handleShow}>
            <BsPersonFillCheck classNameName="m-2" />
            View Profile
          </Button>
          <Button classNameName="btn btn-danger m-1">
            <BsTrash classNameName="mb-2" />
          </Button>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      id: 1,
      firstName: "Mr. Solomon",
      lastName: "Bonney",
      status: "Verified",
      registrationDate: "21/03/23",
      contractorID: 237545,
      nationality: "Ghanaian",
      contact: "545455454545",
    },
    {
      key: "2",
      id: 2,
      firstName: "Mr. Bright",
      lastName: "Nuhu",
      status: "Not Verified",
      registrationDate: "21/03/23",
      contractorID: 432265,
      nationality: "Ghanaian",
      contact: "545455454545",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mt-2">
            <div className="ms-auto" style={{float: "right"}}>
              <select className="form-control">
                <option value="" selected disabled>
                  --- Choose Status ---
                </option>
                <option value="">Verified</option>
                <option value="">Non-Verified</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <AntdTable columns={columns} dataSource={data} scroll={{x: true}} />
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contractor's Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Avatar icon={<UserOutlined />} size={70} />
              <p>Full Name: Solomon Bonney</p>
              <p>Registration ID: 23443323</p>
              <p>Contact: 45454545454</p>
              <p>Contactor's ID: 3999435</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Contractors;
