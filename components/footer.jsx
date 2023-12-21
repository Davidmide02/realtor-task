const footertexts1 = [
  "19 Godwin Okigbo St, off Adelabu Street, Surulere 101283, Lagos",
];

const footertexts2 = ["Terms & conditions", "cookies", "Privacy policy"];

const footertexts3 = ["Home", "Our service", "FAQ"];

const Footer = () => {
  return (
    <footer className="bg-footer-bg-2 pb-10 flex flex-col items-center">
      <div className="container bg-black p-6 text-bg-1 w-[85%]">
        <div className="cove flex mb-8 justify-between p-4">
          <div className="dont-miss w-2/3">
            <h2 className=" text-4xl p-4 w-[40%]">
              <span className="pr-2">DON'T</span> MISS NEW LISTINGS
            </h2>

            <form action="" className="flex justify-between w-[50%]">
              <input
                type="text"
                name=""
                placeholder="Enter your email"
                id=""
                className="p-3 rounded-full outline-none bg-transparent border border-bg-1 text-bg-1"
                onChange={(e) => e}
              />
              <button
                type="submit"
                className=" rounded-md bg-bg-3 p-4 text-black"
              >
                GO
              </button>
            </form>
          </div>

          <div className="you">
            <div className="first mb-2">
              <p className="mb-2">YOU CAN FIND US</p>
              {footertexts1.map((text) => (
                <p key={footertexts1.indexOf(text)} className=" w-[40%]">
                  {text}
                </p>
              ))}
            </div>
            <div className="second mt-4 pt-4">
              <p className="mb-2">IN NEED OF HELP?</p>
              {footertexts2.map((text) => {
                return <p key={footertexts2.indexOf(text)}>{text}</p>;
              })}
            </div>
          </div>

          <div className="who-are">
            <p className="mb-2">WHO ARE WE?</p>
            <div className="third">
              {footertexts3.map((text) => {
                return <p key={footertexts3.indexOf(text)}>{text}</p>;
              })}
            </div>
          </div>
        </div>

        <div className="line mt-6 m-4 p-[0.2px] bg-footer-bg"></div>

        <div className="sub-footer flex justify-between items-center p-8">
          <div className="logo">
            <p className="title font-mtscript text-lg">R.O.N</p>
            <p className="title font-langar">Realtor Of Nigeria</p>
          </div>

          <p className="w-[40%]">
            Mi id auctor non nunc bibndeum volutpat eleifend sed. Metus sit
            rhoncus aliquet in enim. Nunc nec gravida massa sed donec odio donec
            rutrum in.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
