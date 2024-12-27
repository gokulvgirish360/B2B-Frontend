import { BatteryChargingIcon, BatteryIcon, ChargingIcon } from "./svg-assets/asset";

interface Vehicle{
    img:string;
    name:string;
}

const BikePortfolioCards = ({ vehiclesData }: { vehiclesData: Vehicle[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {vehiclesData.map(({ img, name }) => (
        <div className="flex flex-col" key={name}>
          <img
            src={img}
            className="w-full h-60 rounded-lg object-cover"
            alt={name}
          />

          <div className="border-x border-b border-x-[#6c6c6c] border-opacity-15 px-6 border-b-[#6c6c6c] rounded-b-lg mt-[-.4rem] py-5">
            <div className=" mb-5">
              <div className="flex justify-between items-center text-[1.2rem]">
                <h3 className="font-medium">{name}</h3>
                <button className="text-[#056C50] font-[500] text-[.8rem]">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-[#6c6c6c] ">
              <div className="flex items-center gap-3">
                <BatteryIcon color="#6c6c6c" />
                <span className="text-sm">2.9kwh</span>
              </div>
              <div className="flex items-center gap-3">
                <ChargingIcon color="#6c6c6c" />
                <span className="text-sm">100 kms</span>
              </div>
              <div className="flex items-center gap-3">
                <BatteryChargingIcon color="#6c6c6c" />
                <span className="text-sm">5hr 15 min</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikePortfolioCards;
