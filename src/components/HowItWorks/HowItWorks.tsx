import { serviceFlowData } from "./data";
function HowItWorks() {
  return (
    <section className="px-10">
      <div className="text-center">
        <h3>Inspiration Collection</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-[40px] justify-center">
        {serviceFlowData.map((item, key) => (
          <div className="w-[455px]">
            <div className="relative">
              <img
                key={key}
                src={
                  item.imgUrl === ""
                    ? "https://source.unsplash.com/random"
                    : item.imgUrl
                }
                alt="clothe"
                className="h-[300px] w-full"
              />
              <div className="absolute bottom-[-30px] mx-auto right-0 left-0 bg-[#ffffff] rounded-full p-2 w-[60px] flex justify-center items-center">
                <div className="text-white bg-[#333333] rounded-full w-12 h-12 flex justify-center items-center">
                  <h3>{key}</h3>
                </div>
              </div>
            </div>
            <h4 className="mt-10">{item.service}</h4>
            <h5>{item.info}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
