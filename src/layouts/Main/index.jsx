import Button from "../../components/Button";
import { motion } from "framer-motion";

const bounce = {
  y: {
    duration: 0.8,
    repeat: Infinity,
  },
};

const Main = () => {
  return (
    <>
      <div className="flex text-white justify-center">
        <div className="flex flex-col px-24 w-full items-center">
          <motion.section
            className="text-center w-full lg:w-5/6 p-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl lg:text-4xl font-semibold mt-12">
              Boost your productivity with our streamlined note-taking solution
            </h1>
            <p className="text-sm font-normal my-6">
              Effortlessly access your note from any devices with our convenient
              cloud-bases solution
            </p>
            <motion.div
              className="flex justify-center mt-12"
              transition={bounce}
              animate={{
                y: ["30%", "0%"],
              }}
            >
              <Button className="font-semibold bg-secondary  w-30 lg:w-40 h-10 lg:h-12 hover:bg-blue-500 ">
                Try For Free
                <span className="inline-block">
                  <img
                    src="./right-arrow.svg"
                    alt="right-arrow"
                    className="w-4 h-6 inline ml-2"
                  />
                </span>
              </Button>
            </motion.div>
          </motion.section>

          <motion.section
            className="flex pt-12 pb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex pr-2 bg-white h-10 items-center">
              <img src="./lock.svg" alt="search-icon" className="w-12 h-6" />
              <input type="text" placeholder="https://nowted.app" />
            </div>
          </motion.section>

          <motion.section
            className="flex justify-center p-6 bg-slate-800"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="./thumbnail.png" alt="thumbnail" />
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Main;
