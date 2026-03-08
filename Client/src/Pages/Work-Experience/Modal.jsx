import Modal from "react-modal";

Modal.setAppElement("#root"); // required for accessibility

const WorkModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Work Details</h2>
      <p>This is modal content.</p>

      <button onClick={() => setShowModal(false)}>
        Close
      </button>
    </Modal>
  );
};

export default WorkModal;