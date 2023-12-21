import Image from "next/image";
import { PiCurrencyNgnBold } from "react-icons/pi";
import Nextcount from "./nextcount";

const Card = ({ cardData }) => {
  // const

  return (
    <div className="card-container flex flex-col items-center">
      <div className="cont grid grid-cols-2">
        {cardData.map((db) => {
          return (
            <div className="card p-4 mb-2 bg-bg-1" key={cardData.indexOf(db)}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
