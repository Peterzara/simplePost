import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const navigate = useNavigate();
  function cancelModalHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={cancelModalHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
