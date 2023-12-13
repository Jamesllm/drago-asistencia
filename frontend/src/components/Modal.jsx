import { useState } from "react";
import { ModalAnimate } from "./PageAnimate";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        AGREGAR
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <ModalAnimate>
            <h3 className="modal-title">
              AGREGAR NUEVO PRODUCTO AL INVENTARIO
            </h3>
            <p className="modal-p">Producto</p>
            <input type="text" name="producto" id="producto" />
            <div className="modal-flex">
              <div>
                <p className="modal-p">Cantidad</p>
                <input id="cantidad" type="number" />
              </div>
              <div>
                <p className="modal-p">Precio</p>
                <input id="precio" type="number" />
              </div>
            </div>
            <p className="modal-p">Imagen</p>
            <input type="file" />
            <button className="modal-btn-add">AGREGAR</button>
          </ModalAnimate>
        </div>
      )}
    </>
  );
}

export default Modal;
