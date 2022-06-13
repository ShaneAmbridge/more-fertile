import { useState } from "react";

const useModal = () => {
  const [showmodal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return {
    showmodal,
    setShowModal,
    openModal,
  };
};

export default useModal;
