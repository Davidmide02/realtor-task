import Image from "next/image";
import { PiCurrencyNgnBold } from "react-icons/pi";
import Nextcount from "./nextcount";
import { motion } from "framer";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggeringChildren: 0.3,
    },
  },
};

const imageAni = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay:0.25
    },
  },
};

const Card = ({ cardData }) => {
  // const

  return (
    <div className="card-container flex flex-col items-center">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"show"}
        className="cont grid grid-cols-1 md:grid-cols-2"
      >
        {cardData.map((db) => {
          return (
            <motion.div
              variants={imageAni}
              className="card p-4 mb-2 bg-bg-1"
              key={cardData.indexOf(db)}
            >
              <div className="bg-gray-500 rounded-tl-4xl rounded-br-4xl">
                <Image src={`${db.img}`} width={543} height={427} alt="icon" />
              </div>

              <div className="texts p-2 bg-bg-1 rounded-tr-3xl shadow-md">
                <h4 className="font-bold">{db.title}</h4>
                <div className="descr grid grid-cols-3">
                  {/* <div className="descr-con"> */}
                  {db.descr.map((des) => {
                    return (
                      <div
                        className="icon-text flex items-center w-[100%]"
                        key={db.descr.indexOf(des)}
                      >
                        <Image
                          src={`${des.icon}`}
                          width={24}
                          height={24}
                          alt="icon"
                          className=" mr-2"
                        />

                        {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                            -&gt;
                                        </span> */}

                        <p>{des.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Card;
