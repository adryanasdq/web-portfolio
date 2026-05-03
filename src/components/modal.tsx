interface ModalProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, children }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box p-0">
                {children}
            </div>
        </dialog>
    )
}

export default Modal;
