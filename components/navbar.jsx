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
    <nav className=" bg-red-300 flex justify-between text-lg">
      <div className="logo bg-green-300">
        <p className="title bg-green-300 font-mtscript text-lg">R.O.N</p>
        <p className="title font-langar">Realtor Of Nigeria</p>
      </div>

      <div className="menu flex justify-between item-center">
        <ul className="link flex justify-evenly items-center  border mr-2">
          {links.map((link) => {
            return (
              <Link href={`${link.pageId}`} key={links.indexOf(link)}>
                <li className="px-2 bg-bg-3 ">{link.link}</li>
              </Link>
            );
          })}
        </ul>

        <div className="sign-search flex item-center justify-between border">
          <button className=" bg-bg-btn rounded-full h-[60%] mt-2 px-4">
            Sign up
          </button>
          <button className="search px-2">Search Icon</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
