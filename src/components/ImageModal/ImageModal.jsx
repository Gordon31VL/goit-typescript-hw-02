import Modal from 'react-modal';

export default function ImageModal({onOpen, close, image}) {
    Modal.setAppElement('#root');
    return (
    <Modal
        isOpen={onOpen}
        onRequestClose={close}
        shouldCloseOnOverlayClick={true}    
        contentLabel="Image Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', cursor: 'pointer'
                },
                content: { maxWidth: '70vw', maxHeight: '80vh', margin: 'auto', textAlign: 'center', backgroundColor: 'transparent', border: 'none', padding: '0', cursor: 'auto'}
        }}
      >
        {image && (
          <div>
            <img src={image.urls.regular} alt={image.alt_description} style={{maxWidth: '100%', maxHeight: '70vh'}} />
          </div>
        )}
        </Modal>
    )
}