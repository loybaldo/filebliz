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

export default function Modal(props: ModalProps) {
    if (!props.isOpen) return null;

    return (
        <div className="f-modal" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            
            <div className="f-modal-wrapper card">
                {/* 
                    HEADER
                */}
                <div className='f-modal-header'>
                    <h1>{props.modalTitle}</h1>
                    <Button classItem={'ctrl'} onclick={props.onClose}><Close /></Button>
                </div>

                {/* 
                    MODAL CONTENT
                */}
                {props.children}
            </div>

            <div className="f-modal-background" onClick={props.onClose} />
        </div>
    );
};


/*=======================[ INTERNAL USAGE ]=======================*/

/********/  // /***************[ TO USE THE MODAL ]***************/
/********/  // insert <Modal></Modal> with the necessarry parameters
/********/  // and copy and paste the following code inside your 
/********/  // component below:

/********/  // /***************[ COPY THESE CODES ]***************/
/********/  //
/********/  // const [showModal, setShowModal] = useState(false);
/********/  //
/********/  // // Open Modal
/********/  // function openModal() {
/********/  //     setShowModal(true);
/********/  //     document.body.classList.add('disable-events');
/********/  //     document.addEventListener('keydown', handleEscapeKeyPress);
/********/  //
/********/  //     // you could also add other selectors e.g.; ...rAll('button, div, a, ...');
/********/  //     const outsideElements = document.querySelectorAll('button');
/********/  //     outsideElements.forEach((element) => {
/********/  //         element.setAttribute('tabindex', '-1');
/********/  //     });
/********/  // };
/********/  //
/********/  // function handleMouseEnter() {
/********/  //     document.body.classList.remove('disable-events');
/********/  // };
/********/  //
/********/  // // Keybind Listner
/********/  // function handleEscapeKeyPress(event: KeyboardEvent) {
/********/  //     if (event.key === 'Escape') {
/********/  //         closeModal();
/********/  //     }
/********/  // };
/********/  //
/********/  // // Closes Modal
/********/  // function closeModal() {
/********/  //     setShowModal(false);
/********/  //     document.removeEventListener('keydown', handleEscapeKeyPress);
/********/  //
/********/  //     const outsideElements = document.querySelectorAll('button');
/********/  //     outsideElements.forEach((element) => {
/********/  //         element.removeAttribute('tabindex');
/********/  //     });
/********/  // };
/********/  //
/*===============================[]===============================*/