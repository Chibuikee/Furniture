import { ADdata } from "./navBarComponent/navHeroData";
type servicetype = {
  icon: string;
  name: string;
  info: string;
};
export function ServiceAd() {
  return (
    <div className="flex justify-between bg-[#F2F5FF] p-5">
      {ADdata.map((item: servicetype, key) => (
        <div key={key}>
          <h5>{item.name}</h5>
          <h2 className="text-[#054C73] mt-2">{item.info}</h2>
        </div>
      ))}
    </div>
  );
}
