import Button from "../Button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  return (
    <>
      <div className="w-full text-white">
        <div className="flex h-16 justify-between items-center px-6 border-b border-b-slate-800">
          <div className="flex gap-2">
            <span>
              <img
                src="./favicon.ico"
                alt="title-icon"
                className="w-6 h-6"
              ></img>
            </span>
            <p className="font-semibold text-xl z-10">Nowted App</p>
          </div>
          <div className="w-96">
            <motion.ul
              className="flex justify-between"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.a variants={item} href="">
                <li>Home</li>
              </motion.a>
              <motion.a variants={item} href="">
                <li>Product</li>
              </motion.a>
              <motion.a variants={item} href="">
                <li>Support</li>
              </motion.a>
              <motion.a variants={item} href="">
                <li>Contact Us</li>
              </motion.a>
            </motion.ul>
          </div>
          <div className="z-10">
            <Button className="bg-slate-800 border hover:bg-slate-500">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
