import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const EditModal = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [toggle, setToggle] = useState()
    useEffect(()=> {
        setOpen(props.open)
    },[])

    const toggleClose = () => 
    {
        setOpen(!isOpen)
    }

    return (
        <Modal isOpen={isOpen} toggle={isOpen} backdrop={true}>
            
            <ModalHeader toggle={toggle}>Edit Details <span style={{paddingRight: '320px'}}></span><Button color="danger" onClick={toggleClose}>X</Button></ModalHeader>
            <ModalBody>
                Add your controls here for editing
            </ModalBody>
            <ModalFooter>
            <Button color="primary">Update</Button>
            <Button color="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default EditModal