import { AutovertLogo } from "./svg-assets/asset";


const Footer = () => {
  return (
    <section className="bg-[#056C50] font-poppins font-[300] text-white">
      <div className="w-[95%] mx-auto flex justify-between flex-col sm:flex-row sm:justify-between">
        <ul className="text-[.9rem] pt-[.6rem] ">
          <li>
            <AutovertLogo className="h-20 stroke-white" />
          </li>
          <li className="pb-4">Autovert Technologies Pvt. Ltd</li>
          <li className="pb-4">1082, 2nd Floor, 12th Main Rd</li>
          <li className="pb-4">Indiranagar, Bangalore 560008</li>
        </ul>
        <div className="flex justify-between md:w-[30%] ">
          <ul className="text-[1rem] pt-8">
            <li className="text-[.8rem] pb-7">Catalog</li>
            <li className="pb-4">About us</li>
            <li className="pb-4">FAQ</li>
            <li className="pb-4">Career</li>
            <li className="pb-4">Blog</li>
            <li className="pb-4">Contact</li>
          </ul>
          <ul className="pt-8 ">
            <li className="text-[.8rem] pb-7">Contact us</li>
            <li className="pb-4">+91 8875430167</li>
            <li className="pb-4">care@autovert.in</li>
          </ul>
        </div>
        <div className="pt-8 ">
          <span className="text-[.8rem] pb-6 block">Follow us</span>
          <h4 className="">
            Instagram &nbsp;/ &nbsp; LinkedIn / &nbsp; X &nbsp; /&nbsp; Facebook
          </h4>
        </div>
      </div>

      <div className="font-redhat overflow-x-hidden py-4">
        <div className="whitespace-nowrap flex animate-infinite-scroll">
          <h1 className="text-[9.8rem] font-[645] inline-block mr-8">
            From Dreams to DriveWays - your EV journey starts here.
          </h1>
          <h1 className="text-[9.8rem] font-[645] inline-block mr-8">
            From Dreams to DriveWays - your EV journey starts here.
          </h1>
        </div>
      </div>

      <div className="flex justify-between w-[95%] mx-auto text-[.62rem] py-3  sm:flex-row sm:py-4">
        <p>&copy; 2024 — Copyright</p>
        <p>Privacy</p>
        <p>All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer