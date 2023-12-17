import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Nextcount from "@/components/nextcount";

import nextLogo from "@/public/next.svg";
import nextLogo2 from "@/public/next.svg";

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
];

// C:\Users\DAVIDMIDE\Desktop\realtor\public\next.svg

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      > */}
      <main className="main py-2 px-4 mt-4 bg-bg-btn">
        <section className="intro border flex items-center justify-between">
          <div className="intro-text flex flex-col justify-between">
            <div>
              <p>
                Discover your dream <span className="text-bg-btn">home</span>
              </p>
              <p>
                Where <span className="text-bg-btn">comfort</span> meets{" "}
                <span className="text-bg-btn">convenience</span>{" "}
              </p>
            </div>

            <div intro-text-image>
              <Image src={"/image 11.png"} width={400} height={300} />
              <div className="btn">
                <button className="rent bg-black text-bg-1 px-6 py-2 rounded-full mr-2">
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

          <div className="intro-img">
            <Image src={"/House.png"} width={500} height={500} />
          </div>
        </section>
        {/* second section */}

        <section className="second-section bg-bg-2 flex flex-col justify-center items-center">
          <div className="search-v grid grid-cols-3 gap-2 items-center">
            <div className="input p-2 flex border rounded-full border-black ">
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
                onChange={(e) => "hello"}
                className="p-2 w-[80%] outline-none"
              />
            </div>
            <div className="voice rounded-md bg-green-400">voice icon</div>
            <div className="search">search icon</div>
          </div>

          <div className="second-section-div grid grid-cols-3 gap-2">
            {secondSectionData.map((db) => {
              return (
                <div
                  className="second-section-di"
                  key={secondSectionData.indexOf(db)}
                >
                  <h4>{db.title}</h4>
                  <p>{db.descr}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* third section/subsection */}
        <section className="third-section">
          <div className="sub-nav flex justify-between">
            <ul className="sub-nav-links flex justify-between border-b-2 border-gray-300">
              <li className="link hover:border-b-2 hover: border-black p-2">
                House
              </li>
              <li className="link hover:border-b-2 hover: border-black p-2">
                Apartment
              </li>
            </ul>
            <h4 className="p-2">Featured homes</h4>
            <ul className="sub-nav-links flex items-center justify-between border-b-2 border-gray-300">
              <li className="link hover:border-b-2 hover: border-black p-2">
                Land
              </li>
              <li className="link hover:border-b-2 hover: border-black p-2">
                View all
              </li>
            </ul>
          </div>
          
            <Card cardData={cardData} />
          
        </section>
        {/* <Card/> */}
        <Nextcount />
      </main>
    </>
  );
}
