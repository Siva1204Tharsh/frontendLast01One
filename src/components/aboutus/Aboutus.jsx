import React from "react";
import tourCategories from "../../assets/data/tourCategoris";

const Aboutus = () => {
  return (
    <>
      <div className="bg-[#F5F5F5]  lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20 pt-20">
            <h2 class="text-[#008080] mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Tour Categories
            </h2>
          </div>
        </div>
        <div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {tourCategories.map((tours) => (
              <button type="button">
                <div
                  key={tours.id}
                  className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 "
                >
                  <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl lg:aspect-none group-hover:opacity-40 lg:h-80">
                    <img
                      src={tours.photo}
                      alt={tours.imageAlt}
                      className="h-full w-full object-cover object-center rounded-3xl p-4 lg:h-full lg:w-full"
                    />
                  </div>

                  <h3 className="text-2xl p-6 font-bold text-gray-700 text-center">
                    {tours.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
