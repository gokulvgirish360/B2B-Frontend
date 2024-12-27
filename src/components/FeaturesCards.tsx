interface cardInfo{
    icon:string;
    heading:string;
    description:string;
}
const FeaturesCards = ({items}:{items:cardInfo[]}) => {
  return (
    <div className="flex flex-col xs:flex-row gap-4">
      {
        items.map(({icon,heading,description})=>{
            return (
              <div className="bg-[#FFFFFF] w-auto  flex-1 px-5 py-7 rounded-lg">
                {" "}
                <div className="bg-[#2F9E62] rounded-full p-2 inline-flex items-center justify-center mb-10">
                  {" "}
                  <img src={icon} alt="" className="h-5 w-5" />
                </div>
                <h4 className="font-medium mb-5">{heading}</h4>
                <p className="text-[.9rem] text-[#6C6C6C]">
                {description}
                </p>
              </div>
            );
        })
      }
    
    </div>
  );
}

export default FeaturesCards