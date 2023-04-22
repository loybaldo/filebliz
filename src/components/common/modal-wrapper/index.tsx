import { ReactComponent as Close } from '@material-design-icons/svg/filled/close.svg';
import React from 'react';
import Button from '../button';
import './modal.scss';

interface ModalProps {
    modalTitle: string
    isOpen: boolean
    children?: React.ReactNode
    onClose: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

const Modal = ({ modalTitle, isOpen, onClose, children, onMouseEnter, onMouseLeave }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="f-modal" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="f-modal-wrapper card">
                <div className='f-modal-header'>
                    <h1>{modalTitle}</h1>
                    <Button classItem={'ctrl'} onclick={onClose}><Close /></Button>
                </div>
                {children}
            </div>
            <div className="f-modal-background" onClick={onClose} />
        </div>
    );
};

export default Modal;


/*======================[ INTERNAL USAGE ]======================*/ 

/********/  // const [showModal, setShowModal] = useState(false);
/********/  //
/********/  // // Open Modal
/********/  // const openModal = () => {
/********/  //     setShowModal(true);
/********/  //     document.body.classList.add('disable-events');
/********/  //     document.addEventListener('keydown', handleEscapeKeyPress);
/********/  //
/********/  //     const outsideElements = document.querySelectorAll('button'); // you could also add other selectors
/********/  //     outsideElements.forEach((element) => {
/********/  //         element.setAttribute('tabindex', '-1');
/********/  //     });
/********/  // };
/********/  //
/********/  // const handleEscapeKeyPress = (event: KeyboardEvent) => {
/********/  //     if (event.key === 'Escape') {
/********/  //         closeModal();
/********/  //     }
/********/  // };
/********/  //
/********/  // const closeModal = () => {
/********/  //     setShowModal(false);
/********/  //     document.removeEventListener('keydown', handleEscapeKeyPress);
/********/  //
/********/  //     const outsideElements = document.querySelectorAll('button');
/********/  //     outsideElements.forEach((element) => {
/********/  //         element.removeAttribute('tabindex');
/********/  //     });
/********/  // };
/********/  //
/********/  // // Disable mouse events
/********/  // const handleMouseEnter = () => {
/********/  //     document.body.classList.remove('disable-events');
/********/  // };