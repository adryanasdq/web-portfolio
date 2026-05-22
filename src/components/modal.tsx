interface ModalProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({ id, children, className = "max-w-4xl" }) => {
    return (
        <dialog id={id} className="modal">
            <div className={`modal-box p-0 w-11/12 ${className}`}>
                {children}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Modal;
