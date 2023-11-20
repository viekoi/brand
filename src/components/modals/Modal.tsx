import Modal from "react-bootstrap/Modal";

const CustomModal = ({ children }: { children: React.ReactNode }) => {
  return <Modal>{children}</Modal>;
};

export default CustomModal;
