import React from "react";
import { WebLogo } from "../assets";
import { FooterIcon } from '../constants/index'


const Footer = () => {
  return (
    <section className="bg-[#00ca72] flex flex-col justify-center items-center sm:py-16 py-16 sm:px-16 px-6">
      <div className="flex justify-center md:flex-row flex-col mb-8 w-full ">
        <div className="flex-1 flex flex-col justify-start">
          <img src={WebLogo} className="w-[130px] h-[72px] object-contain" />
          <p className="mt-1 max-w-[250px]">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="flex flex-row space-x-2">
            {FooterIcon.map((foot) => (
              <div key={foot.id} className="mt-5">
                <img src={foot.icon} className="w-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
