import { LOGO_URl } from "../utils/utils";

const Header = () => {
  return (
    <div className="pb-28">
      <div className=" w-full fixed flex justify-around items-center bg-[#111827] text-[#fff] p-5">
        <div className="flex justify-center items-center gap-3">
          <img src={LOGO_URl} alt="" className="" />
          <a className="text-2xl font-bold cursor-pointer">GeekFoods</a>
        </div>

        <ul className="flex gap-8 text-xl items-center cursor-pointer">
          <li className="hover:text-[#2762D4] text-[#2762D4]">Home</li>
          <li className="hover:text-[#2762D4]">Quotes</li>
          <li className="hover:text-[#2762D4]">Restaurants</li>
          <li className="hover:text-[#2762D4]">Foods</li>
          <li className="hover:text-[#2762D4]">Contact</li>
        </ul>

        <button className="bg-[#2563EB] p-3 text-[#fff] font-bold rounded-lg hover:bg-[#4c79da]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
