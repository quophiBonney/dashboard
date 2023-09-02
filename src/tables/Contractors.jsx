import React, {useState} from "react";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {BsBell, BsEye, BsThreeDots} from "react-icons/bs";
import {Table as AntdTable, Button} from "antd";
import {BiSolidUserAccount} from "react-icons/bi";
const Contractors = () => {
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
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Male",
      name: "Stephan Bosu",
      dob: "04/10/1996",
      insurance: "23949293",
      certificate: "Diploma",
      yib: 2,
      website: "www.myown.com",
      primaryPhone: "4934584330",
      secondaryPhone: "334338483",
      services: "Graphic Designing",
      license: "A",
      address: "B/A 78",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: "20302",
      status: "Active",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
    },
    {
      key: "2",
      idNumber: "238482",
      idType: "NHIS",
      idIssuer: "NHIA",
      idExpiration: "20/03/2023",
      gender: "Female",
      name: "Gifty Nyame",
      dob: "11/08/1995",
      insurance: "23949293",
      certificate: "Phd",
      yib: 2,
      website: "www.myown.com",
      primaryPhone: "4934584330",
      secondaryPhone: "334338483",
      services: "Plumbing",
      license: "B",
      address: "B/A 78",
      city: "Accra",
      region: "G. Accra",
      state: "Accra",
      country: "Ghana",
      zip: "20302",
      status: "Non-verified",
      dateCreated: "10/11/2022",
      dateUpdated: "12/01/2023",
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
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "INSURANCE",
      dataIndex: "insurance",
      key: "insurance",
    },
    {
      title: "CERTIFICATE",
      dataIndex: "certificate",
      key: "certificate",
    },
    {
      title: "YIB",
      dataIndex: "yib",
      key: "yib",
    },
    {
      title: "WEBSITE",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "P.PHONE",
      dataIndex: "primaryPhone",
      key: "primaryPhone",
    },
    {
      title: "S.PHONE",
      dataIndex: "secondaryPhone",
      key: "secondaryPhone",
    },
    {
      title: "SERVICES",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "LINCENSE NO:",
      dataIndex: "license",
      key: "license",
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

export default Contractors;
