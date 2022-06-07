import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Modal, Input, Select, Radio, RadioChangeEvent } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface infoProps {
  name: string;
  field: string;
  color: string;
}
const Company = () => {
  const [information, setInformation] = useState<infoProps>({
    name: "",
    color: "",
    field: "",
  });
  const [modal, setModal] = useState(false);
  const { Option } = Select;
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInformation((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInformation((prev) => ({ ...prev, field: event.target.value }));
  };
  const handleColor = (event: ChangeEvent<HTMLInputElement>) => {
    setInformation((prev) => ({ ...prev, color: event.target.value }));
  };
  //console.log(information);
  return (
    <div>
      <Modal
        visible={modal}
        title="Company information"
        onCancel={() => {
          setModal(!modal);
          setInformation({
            name: "",
            color: "",
            field: "",
          });
        }}
        okText="Submit"
        onOk={() => setModal(!modal)}
        data-testid="modal"
      >
        <h3>Name</h3>
        <Input
          data-testid="name"
          placeholder="Company name..."
          size="large"
          onChange={changeName}
        />
        <br />
        <br />
        <h3>Company Type</h3>

        <Input
          data-testid="field"
          placeholder="Type..."
          size="large"
          onChange={handleChange}
        />
        <br />
        <br />
        <h3>Color representation</h3>
        <Input
          data-testid="color"
          placeholder="Color..."
          size="large"
          onChange={handleColor}
        />
      </Modal>
      <h1 style={{ color: "white" }}>Add a company</h1>
      <Button
        type="ghost"
        icon={<PlusOutlined />}
        color="white"
        block
        style={{ color: "white" }}
        onClick={() => setModal(!modal)}
        data-testid="open-button"
      />
      <div data-testid="company">
        {information.color && information.field && information.name && (
          <h1
            data-testid="company-info"
            style={{
              backgroundColor: `${information.color}`,
              width: "500px",
              marginTop: "40px",
            }}
          >
            {information.name} - {information.field}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Company;
