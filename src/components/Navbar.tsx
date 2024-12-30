import AutovertLogo from "@/assets/icons/autovert.svg";
import sideMenuBtn from "@/assets/icons/menuBtn.svg";

const Navbar = ({
  drawerVisibility,
  setDrawerVisibility,
}: {
  drawerVisibility:boolean,setDrawerVisibility: (state:boolean) => void;
}) => {
  return (
    <header className="bg-[rgba(255,255,255,0.1)] fixed text-white h-[4.6rem] w-full flex justify-between items-center px-4 sm:px-[4%] z-10">
      <img
        src={AutovertLogo}
        className="h-[1rem] sm:h-[1.18rem] "
        alt="autovertlogo"
      />
      <nav className="flex items-center gap-4 sm:gap-9">
        <button className="bg-[#056c50] hidden sm:block  font-poppins px-5 py-2 sm:px-[1.8rem] sm:py-[.6rem] rounded-lg text-sm ">
          Get in touch
        </button>
        <img
          onClick={() => setDrawerVisibility(!drawerVisibility)}
          className="w-9 h-9  fill-black"
          src={sideMenuBtn}
          alt="menubtn"
        />
      </nav>
    </header>
  );
};
export default Navbar;
