import React from "react";
import { FaHotel } from "react-icons/fa";
import { MdTour } from "react-icons/md";

import { BsCalendarEvent } from "react-icons/bs";

const categories = [
  {
    name: "Hotels",
    icon: <FaHotel />,
  },
  {
    name: "Tour Packages",
    icon: <MdTour />,
  },

  {
    name: "Events",
    icon: <BsCalendarEvent />,
  },
];
const Services = () => {
  return (
    <>
      <div class="bg-[#F5F5F5] lg:px-36 lg:pt-5 lg:pb-[90px]">
        <div class="container mx-auto">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20 pt-20">
            <h2 class="text-[#008080] mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Our Services
            </h2>
          </div>
          <div class="-mx-4 grid lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div class="mb-8 rounded-[20px] bg-white p-2 shadow-md  hover:shadow-lg md:px-7  grid grid-cols-2 justify-center">
                <div class=" text-black text-3xl mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  {category.icon}
                </div>
                <h4 class="text-dark mb-3 mt-5 text-lg font-semibold">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
