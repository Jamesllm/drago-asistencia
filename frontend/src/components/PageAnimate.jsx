import { motion } from "framer-motion";

const PageAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: 120,
        y: 0,
        scale: 1,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
      }}
      exit={{
        x: 120,
        y: 0,
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

const ModalAnimate = ({ children }) => {
  return (
    <motion.div
      className="modal-content"
      initial={{
        x: "-50%",
        y: "0%",
        scale: 1,
      }}
      animate={{
        x: "-50%",
        y: "-50%",
        scale: 1,
      }}
      exit={{
        x: 0,
        y: "50%",
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

const LoginAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 120,
        scale: 1,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
      }}
      exit={{
        x: 0,
        y: 0,
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export { PageAnimate, ModalAnimate, LoginAnimate };
