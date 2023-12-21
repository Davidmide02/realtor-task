import { IoIosSearch } from "react-icons/io";

const { default: Link } = require("next/link");

const Navbar = () => {
  // const links = [{'Home''#'}, 'Apartments', 'Services', 'About us']
  const links = [
    { link: "Home", pageId: "#" },
    { link: "Apartments", pageId: "#" },
    { link: "Services", pageId: "#" },
    { link: "About us", page: "#" },
  ];

  return (
    <nav className="flex p-2 justify-between text-2xl">
      <div className="logo">
        <p className="title bg-green-300 font-mtscript text-lg">R.O.N</p>
        <p className="title font-langar">Realtor Of Nigeria</p>
      </div>

      <div className="menu flex justify-between item-center w-[50%]">
        <ul className="link flex justify-evenly items-center">
          {links.map((link) => {
            return (
              <Link href={`${link.pageId}`} key={links.indexOf(link)}>
                <li className="px-2 hover:bg-bg-3 hover:rounded-full">
                  {link.link}
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="sign-search flex justify-between items-center p-2 w-[30%]">
          <button className="bg-bg-btn rounded-full mr-2 py-1 px-4 hover:bg-gray">
            Sign up
          </button>
          <div className="search bg-gray ml-2 p-2 rounded-[50%] hover:cursor-pointer hover:bg-bg-btn">
            <IoIosSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
