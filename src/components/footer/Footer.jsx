import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black dark:bg-gray-800 w-full py-8">
      <div class="max-w-screen-xl px-4 mx-auto">
        <ul class="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Home
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Hotels
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Tour Packages
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              ContactUs
            </a>
          </li>
        </ul>
        <div class="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="#"
            class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </a>

          <a
            href="#"
            class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
            </svg>
          </a>
        </div>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div class=" relative ">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <button
              class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#008080] rounded-lg shadow-md hover:bg-[#008080] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div class="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Copyright &copy; 2023&2024 InTournetExplorer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
