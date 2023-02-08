import { footerdata, links } from "./footerData";
function Footer() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h1>
            <a href="/">FURNITURE</a>
          </h1>
          <ul className=" basis-2/4 mt-1 flex space-x-4 mx-auto xxs:mx-[initial] w-[fit-content] ">
            {links.map((item, key) => (
              <li
                key={key}
                className="gap-4 flex items-center justify-center border-solid border-2 w-6 h-6 rounded-full border-red-500"
              >
                <a href={item.url} className="">
                  <svg
                    className="w-3 h-3 text-[#afb5bd] fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={item.box}
                  >
                    {item.title}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 justify-between basis-[60%]">
          {footerdata.map((item, key) => (
            <div key={key}>
              <h2>
                <a href="">{item.heading.id}</a>
              </h2>
              <div>
                {item.name.map((item, key) => (
                  <h3 key={key}>
                    <a href="">{item.id}</a>
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Footer;
