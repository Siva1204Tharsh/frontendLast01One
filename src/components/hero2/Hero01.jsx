import React from "react";

const Hero01 = () => {
  return (
    <div class=" bg-[#F5F5F5]  dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">Explore the Wonders in Sri Lanka</span>
        </h2>
        <p class="text-md mt-4 text-[#000000]-400">
          If you're looking to heal yourself with the nurturing power of nature
          and the warmth of people, you've chosen the right place. Welcome to
          Sri Lanka, where natural beauty and friendly faces await to rejuvenate
          your spirit.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-2 px-4  bg-[#008080] hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://www.tailwind-kit.com/images/landscape/3.jpg"
          class="w-1/2 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://www.tailwind-kit.com/images/landscape/2.jpg"
            class="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://www.tailwind-kit.com/images/landscape/4.jpg"
            class="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero01;
