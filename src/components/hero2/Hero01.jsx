import React from "react";

const Hero01 = () => {
  return (
    <div class="bg-gradient-to-r from-gray-100 via-[#8FBC8F] to-gray-100 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">Explore the Wonders in Sri Lanka</span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
          The state of Utah in the united states is home to lots of beautiful
          National parks, Bryce national canion park ranks as three of the most
          magnificient &amp; awe inspiring.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s"
          class="w-1/2 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://i.pinimg.com/736x/d4/27/36/d427361c5d63b497a7c6912824bcfff7.jpg"
            class="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://wallpapersmug.com/large/a9b08f/mountains-stream-river-nature-landscape.jpg"
            class="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero01;
