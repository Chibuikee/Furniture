import { data } from "./navHeroData";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
export const Navbar = () => {
  const [navBarToggle, setNavBarToggle] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-20 bg-white">
      <div className="flex justify-between p-5 items-center">
        <h1 className="basis-[10%] text-[2.125rem] font-semibold">Furniture</h1>
        <div className="s:basis-[60%] mmd:basis-[460px] absolute s:static right-0 top-[40px] s:top-[50px]">
          <input type="checkbox" id="check" className="hidden" />
          <label
            htmlFor="check"
            className="navdrop-ctn block s:hidden absolute right-5"
            onClick={() => setNavBarToggle(!navBarToggle)}
          >
            {navBarToggle ? (
              <FaBars size={25} className="navdrop-1" />
            ) : (
              <RiCloseFill size={25} className="navdrop-2" />
            )}
          </label>

          <ul className="s:flex w-[200px] s:w-[initial] mt-[51px] s:mt-[10px]  p-4 s:p-[initial] justify-between menu-main bg-[#edf5fa] rounded s:bg-[initial] s:h-[initial] h-[242px]">
            {data.map((item, key) => (
              <li key={key} className="my-3 s:my-[initial]">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
