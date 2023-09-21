import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const MyModal = ({ largeImageURL, tags, isOpenModal, isCloseModal }) => {
  return (
    console.log(largeImageURL),
    (
      <Modal
        isOpen={isOpenModal}
        onRequestClose={isCloseModal}
        style={customStyles}
        //   contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} width={300} height={300} />
      </Modal>
    )
  );
};

export default MyModal;
