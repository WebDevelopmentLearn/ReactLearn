import {useState, useRef, useEffect} from "react";
import {Navbar} from "../Navbar/Navbar";
import styles from "./Modal.module.css";
export function Modal() {

    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {

        if (isOpen && modalRef.current) {
           setTimeout(() => {
               modalRef.current.classList.add("opening");
           }, 1000);
        }
    }, [isOpen]);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
       modalRef.current.classList.add("closing");
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    }

    return (
        <div>
            <Navbar/>
            <h1 style={{color: "#8a61ea"}}>Modal page</h1>
            <button className={styles.btn} onClick={openModal}>Open modal</button>
            {isOpen && (
                <div className="modal-overlay">
                    <div ref={modalRef} className="modal">
                        <h1>Title</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, modi. Officia iusto at ipsam odit nemo in, odio
                            consequuntur, sed asperiores unde est eum quibusdam voluptate
                            voluptatem enim totam alias.
                        </p>
                        <button className={styles.btn} onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}