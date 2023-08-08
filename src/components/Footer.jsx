import React from "react";
import { WebLogo } from "../assets";
import { FooterIcon, footerLinks,   } from '../constants/index'
import { Link } from "@mui/material";




const Footer = () => {
  return (
    <section className="bg-[#00ca72] flex flex-col justify-center items-center sm:py-6 py-6 sm:px-16 px-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-1 w-full ">

        {/* Logo footer  */}
        <div className="flex-1 flex flex-col justify-start">
          <img src={WebLogo} className="w-[130px] h-[72px] object-contain" />
          <p className="mt-1 max-w-[250px]">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="flex flex-row space-x-2">
            {FooterIcon.map((foot) => (
              <div key={foot.id} className="mt-5 mb-16">
                <img src={foot.icon} className="w-10" />
              </div>
            ))}
          </div>

          <p className="text-[14px] font-avenir text-black font-normal">Copyright Design Agency 2022</p>
        </div>



        {/* Quick Link  */}
        <div className="flex-[1.5] w-full flex md:flex-row flex-col gap-10 justify-between md:mt-8 mt-10">
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="max-w-[200px] mr-[150px] py-3">
              <h4 className="font-poppins font-semibold text-[14px] leading-[7px] text-black">{section.title}</h4>
              <ul className="list-none mt-4">
                {section.links.map((linkObj, linkIndex) => (
                  <li key={linkIndex} className="py-1">
                    <a href={linkObj.link}  >{linkObj.name}</a>
                </li>
                ))}
              </ul> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
