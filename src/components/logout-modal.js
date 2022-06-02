import { Modal, Button } from 'react-bootstrap';

const LogoutModal = (props) => {   

  
    return (
      <>
        <Modal show={props.show}>
          <Modal.Header closeButton onClick={() => props.closeModal()}>
            <Modal.Title>Logout confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are confirm to logout? </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={() => props.closeModal()}>
              Cancel
            </Button>
            <Button variant="warning"  onClick={() => props.logOutee()}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default LogoutModal;