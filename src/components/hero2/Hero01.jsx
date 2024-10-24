import React from "react";

const image = {
  backgroundImage:
    "url('https://www.slhcpakistan.org/wp-content/uploads/2019/12/sri-lanka5-1024x576.jpg')",
  height: "500px",
  backgroundPosition: "50%",
};

const Hero01 = () => {
  return (
    <div class="relative overflow-hidden bg-no-repeat bg-cover " style={image}>
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-[#008080] sm:text-4xl">
          <span class="block">Explore the Wonders in Sri Lanka</span>
        </h2>
        <p class="text-xl mt-4 max-w-md mx-auto text-black-400">
          Wanna heal yourself with the nature & people, You came to choose the
          right place. It's Sri Lanka
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-4 px-6  bg-[#008080] hover:bg-[#008080] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
