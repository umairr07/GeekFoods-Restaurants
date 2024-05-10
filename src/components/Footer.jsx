import {
  INSTA_LOGO,
  LOGOISPIUM_SVG,
  FB_LOGO,
  X_LOGO,
  GIT_LOGO,
  DRIBBLE_LOGO,
} from "../utils/utils";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-24 pt-5 bg-[#F3F4F6]">
      <div className="text-center">{LOGOISPIUM_SVG}</div>
      <div>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>
      <ul className="flex gap-5 cursor-pointer">
        <li href="#" className="hover:text-[#939497]">
          About
        </li>
        <li href="#" className="hover:text-[#939497]">
          Careers
        </li>
        <li href="#" className="hover:text-[#939497]">
          History
        </li>
        <li href="#" className="hover:text-[#939497]">
          Services
        </li>
        <li href="#" className="hover:text-[#939497]">
          Projects
        </li>
        <li href="#" className="hover:text-[#939497]">
          Blog
        </li>
      </ul>
      <div>
        <ul className="flex gap-5 pb-10 cursor-pointer ">
          <li className="hover:text-[#939497]">{FB_LOGO}</li>
          <li className="hover:text-[#939497]">{INSTA_LOGO}</li>
          <li className="hover:text-[#939497]">{X_LOGO}</li>
          <li className="hover:text-[#939497]">{GIT_LOGO}</li>
          <li className="hover:text-[#939497]">{DRIBBLE_LOGO}</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
