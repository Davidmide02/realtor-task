import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Nextcount from "@/components/nextcount";
import Pagewrapper from "@/components/pagewrapper";
import Footer from "@/components/footer";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const secondSectionData = [
  { title: "500K+", descr: "Premium properties" },
  { title: "100K+", descr: "Premium buyers" },
  { title: "70K+", descr: "Sellers" },
];

const cardData = [
  {
    img: "/Rectangle 5.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "3 Bedroom" },
      { icon: "/image 14.png", text: "4 Baths" },
      { icon: "/image 15.png", text: "4 Toilets" },
      { icon: "/location.png", text: "Surulere, Lagos." },
      { icon: "/favicon.ico", text: "1,200,000/Month" },
    ],
  },

  {
    img: "/Rectangle 6.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "1 Bedroom" },
      { icon: "/image 14.png", text: "2 Baths" },
      { icon: "/image 15.png", text: "2 Toilets" },
      { icon: "/location.png", text: "Portharcourt, Lagos." },
      { icon: "/House.png", text: "800,000/Month" },
    ],
  },

  {
    img: "/Rectangle 7.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "4 Bedroom" },
      { icon: "/image 14.png", text: "5 Baths" },
      { icon: "/image 15.png", text: "5 Toilets" },
      { icon: "/location.png", text: "Lekki, Lagos." },
      { icon: "/House.png", text: "5,000,000/Month" },
    ],
  },

  {
    img: "/Rectangle 8.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "2 Bedroom" },
      { icon: "/image 14.png", text: "3 Baths" },
      { icon: "/image 15.png", text: "3 Toilets" },
      { icon: "/location.png", text: "Wuse, Abuja." },
      { icon: "/House.png", text: "3,000,000/Month" },
    ],
  },

  {
    img: "/Rectangle 7.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "4 Bedroom" },
      { icon: "/image 14.png", text: "5 Baths" },
      { icon: "/image 15.png", text: "5 Toilets" },
      { icon: "/location.png", text: "Lekki, Lagos." },
      { icon: "/House.png", text: "5,000,000/Month" },
    ],
  },
  {
    img: "/Rectangle 8.png",
    title: "Funtime homes",
    descr: [
      { icon: "/image 12.png", text: "2 Bedroom" },
      { icon: "/image 14.png", text: "3 Baths" },
      { icon: "/image 15.png", text: "3 Toilets" },
      { icon: "/location.png", text: "Wuse, Abuja." },
      { icon: "/House.png", text: "3,000,000/Month" },
    ],
  },
];

const whyUs = [
  {
    img: "/droneview.png",
    title: "Drone view technology",
    descr:
      "A drone view feature has been implemented to give our potential clients a realistic depiction of the property surroundings, landscape and the overall interior for a more immersive and engaging user experience. ",
  },

  {
    img: "/realtor.png",
    title: "Smart pictures realtor",
    descr:
      "Our smart picture realtor adds a layer of interactivity, personalization, and visualization to property images in order to save time for our clients who may need to physically visit multiple properties for inspection.",
  },

  {
    img: "/realtor.png",
    title: "Blockchain-embedded land verification",
    descr:
      "Conventional land verification systems frequently encounter issues like inefficiency, fraud, and a lack of transparency. We have adopted the use of blockchain as a decentralized and tamper-proof ledger to strictly protect our clients from fraudulent documentation processes.",
  },
];
const revieWsTexts = [
  {
    img: "/quote-up.png",
    text: "Viverra sed egestas id nec dolor amet. Eleifend sed nisl nunc dolor et urna amet hendrerit. Praesent quis auctor eu massa in. Sed id in tortor scelerisque dolor erat elit. Id arcu nunc turpis odio.",
  },
  {
    img: "/quote-up.png",
    text: "Viverra sed egestas id nec dolor amet. Eleifend sed nisl nunc dolor et urna amet hendrerit. Praesent quis auctor eu massa in. Sed id in tortor scelerisque dolor erat elit. Id arcu nunc turpis odio.",
  },
  {
    img: "/quote-up.png",
    text: "Viverra sed egestas id nec dolor amet. Eleifend sed nisl nunc dolor et urna amet hendrerit. Praesent quis auctor eu massa in. Sed id in tortor scelerisque dolor erat elit. Id arcu nunc turpis odio.",
  },
];
const brands = [
  "/image 16.png",
  "/image 17.png",
  "/image 18.png",
  "/image 19.png",
  "/image 20.png",
  "/image 21.png",
  "/image 22.png",
];
const subNavs1 = ["House", "Apartment"];
const subNavs2 = ["Land", "View all"];

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
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main py-2 mt-4 font-lato">
        <Pagewrapper>
          <section className="intro flex md:flex-row px-4  flex-col-reverse items-center justify-between">
            <div className="intro-text flex flex-col justify-between">
              <div className="text-4xl font-bold leading-10">
                <p>
                  Discover your dream
                  <span className="text-home-text-color pb-2 mb-4"> home</span>
                </p>
                <p className=" text-3xl mt-3">
                  Where <span className="text-home-text-color">comfort</span>
                  meets
                  <span className="text-home-text-color">convenience</span>
                </p>
              </div>

              <div className="intro-text-image flex flex-col justify-center items-center">
                <Image
                  src={"/image 11.png"}
                  width={400}
                  height={300}
                  alt="img"
                />
                <div className="btn">
                  <button className="rent bg-rent-color text-bg-1 px-6 py-2 rounded-full mr-2">
                    Rent
                  </button>

                  <button className="buy bg-transparent border border-black text-black px-6 py-2 rounded-full mr-2">
                    Buy
                  </button>
                  <button className="sell bg-transparent border border-black text-black px-6 py-2 rounded-full">
                    Sell
                  </button>
                </div>
              </div>
            </div>

            <div className="intro-img relative">
              <Image
                src={"/House.png"}
                width={500}
                height={500}
                className="z-0 bg-gradient-to-bl from-bg-grad"
                alt="img"
              />
            </div>
          </section>
        </Pagewrapper>

        {/* bg-gradient-to-br from-transparent to-blue-300 */}

        {/* second section */}
        <Pagewrapper>
          <section className="second-section bg-bg-2 flex flex-col px-4 justify-center items-center">
            <div className="search-v flex justify-between bg-bg-1 items-center p-8 w-[50%]">
              <div className="input p-2 flex border rounded-full border-black w-1/3">
                <Image
                  src={"/location.png"}
                  width={24}
                  height={24}
                  alt="search"
                />
                <input
                  type="text"
                  value=""
                  placeholder="Search location"
                  onChange={(e) => e}
                  className="p-2 w-[80%] bg-bg-1 outline-none"
                />
              </div>

              <div className="v bg-footer-bg hover:cursor-pointer hover:bg-bg-1 rounded-md p-2">
                <GiSettingsKnobs />
              </div>

              <div className="search hover:bg-gray rounded-[50%] hover:cursor-pointer p-2 bg-bg-btn">
                <IoIosSearch />
              </div>
            </div>

            <div className="second-section-div flex justify-between p-4 w-[80%] gap-2">
              {secondSectionData.map((db) => {
                return (
                  <div
                    className="second-section-div  flex-col text-center"
                    key={secondSectionData.indexOf(db)}
                  >
                    <h4 className="text-2xl font-bold">{db.title}</h4>
                    <p className="font-normal">{db.descr}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </Pagewrapper>

        {/* third section/subsection */}
        <Pagewrapper>
          <section className="third-section p-8 mt-4">
            <div className="sub-nav flex justify-between p-4">
              <ul className="sub-nav-links flex justify-between border-b-4 border-gray">
                {subNavs1.map((navlink) => (
                  <li
                    key={subNavs1.indexOf(navlink)}
                    className="link hover:border-b-2 text-lg hover:border-black hover:p-2 p-2"
                  >
                    {navlink}
                  </li>
                ))}
              </ul>
              <h4 className="px-2 font-bold text-lg">Featured homes</h4>
              <ul className="sub-nav-links flex justify-between border-b-4 border-gray">
                {subNavs2.map((navlink) => (
                  <li
                    key={subNavs2.indexOf(navlink)}
                    className="link hover:border-b-2 text-lg hover:border-black hover:p-2 p-2"
                  >
                    {navlink}
                  </li>
                ))}
              </ul>
            </div>
            <Card cardData={cardData} />
            <div className="control flex w-[90%] justify-end">
              <Nextcount />
            </div>
          </section>
        </Pagewrapper>

        <Pagewrapper>
          <section className="fourth why-us bg-bg-2 mt-4 p-4">
            <h4 className="title p-4 text-center text-lg font-semibold">
              Why choose us?
            </h4>
            <div className="flex flex-col items-center md:items-stretch md:flex-row md:justify-between">
              {whyUs.map((text) => {
                return (
                  <div
                    className="card-container mb-2 rounded-md p-4 md:mr-2 bg-bg-1 w-80"
                    key={whyUs.indexOf(text)}
                  >
                    <Image
                      src={`${text.img}`}
                      width={342}
                      height={426}
                      alt="img"
                    />
                    <div className="why-us-text">
                      <h6 className=" font-semibold pb-2 pt-3">{text.title}</h6>
                      <p>{text.descr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </Pagewrapper>

        <Pagewrapper>
          <section className="firth review p-4 mt-4 flex flex-col justify-center items-center">
            <h4 className=" p-4 text-lg font-semibold text-center">Reviews</h4>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="show"
              className="contianer flex flex-col md:flex-row justify-between  w-[80%] px-4 py-8 bg-bg-3 rounded-lg"
            >
              {revieWsTexts.map((review) => {
                return (
                  <motion.div
                    key={revieWsTexts.indexOf(review)}
                    variants={imageAni}
                    className="text-review-colo"
                  >
                    <Image
                      src={`${review.img}`}
                      width={50}
                      height={40}
                      alt="img"
                    />
                    <p className="p-2">{review.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </Pagewrapper>

        <Pagewrapper>
          <section className="trusted-partner p-4 mt-4">
            <div className="text flex flex-col justify-center">
              <h4 className="font-semibold text-lg text-center">
                Trusted partners
              </h4>
              <div className="logos flex flex-wrap justify-between">
                {brands.map((brand) => {
                  return (
                    <Image
                      src={`${brand}`}
                      width={100}
                      height={100}
                      key={brands.indexOf(brand)}
                      className=""
                      alt="img"
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </Pagewrapper>
      </main>

      <Footer />
    </>
  );
}
