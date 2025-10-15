import { motion, useTransform, useScroll } from "framer-motion";

const Parallax = ({ children, speed = 0.3 }) => {
  const { scrollY } = useScroll(); // updated hook
  const y = useTransform(scrollY, [0, 1000], [0, speed * 1000]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export default Parallax;
