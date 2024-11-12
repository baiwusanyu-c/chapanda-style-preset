import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

    return (
      <>
          <Button type="primary" onClick={showModal}>
              Open Modal
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
        <Button type="primary" onClick={showModal2}>
          Open Modal2
        </Button>
        <Modal title="Basic Modal" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} footer={null}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
};

export default App;
