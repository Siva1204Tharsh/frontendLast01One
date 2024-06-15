import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="bg-[#F5F5F5]  lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                {/* <span className="text-[#008080] mb-2 block text-lg font-bold">
                  Trvel with us
                </span> */}
                <h2 className="text-[#008080] mb-8 text-3xl font-semibold sm:text-4xl">
                  TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                </h2>
                <p className="text-body-color mb-8 text-base">
                  It's all about about giving & getting back. The trip starts
                  with giving love, GDP & marking your footprints and ends with
                  getting love, worthy holidays & memory prints of beautiful
                  nature & people.
                </p>
                <p className="text-body-color mb-12 text-base">
                  We, Intournet provide services to plan and proceed your trips
                  with trustworthyness. From choosing places, exploring
                  packages, making reservations to finding suitable guides, we
                  offer transparent services.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://image.lexica.art/full_webp/4dccf88a-737f-4db1-998e-586067aaf0e0"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://image.lexica.art/full_webp/4d35f01b-47a2-4ef6-abea-c818d51f2a44"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://image.lexica.art/full_webp/189699fb-1669-401e-bbfb-f6946b5a73c3"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
