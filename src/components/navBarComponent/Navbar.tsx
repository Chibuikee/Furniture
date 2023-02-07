import { data } from "./navHeroData";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
export const Navbar = () => {
  const [navBarToggle, setNavBarToggle] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-20 bg-white">
      <div className="flex justify-between p-5">
        <h1 className="basis-[10%] mt-3">LOGO</h1>
        <div className="s450:basis-[80%] absolute s450:static right-0 top-5">
          <input type="checkbox" id="check" className="hidden" />
          <label
            htmlFor="check"
            className="navdrop-ctn block s450:hidden w-[16px] mx-auto"
            onClick={() => setNavBarToggle(!navBarToggle)}
          >
            {navBarToggle ? (
              <FaBars className="navdrop-1" />
            ) : (
              <RiCloseFill className="navdrop-2" />
            )}
          </label>

          <ul className="s450:flex w-[200px] s450:w-[initial] mt-7 s450:mt-[initial]  p-4 s450:p-[initial] justify-between menu-main bg-[#edf5fa] s450:bg-[initial] s450:h-[initial] h-[60vh]">
            {data.map((item, key) => (
              <li key={key} className="my-3">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
