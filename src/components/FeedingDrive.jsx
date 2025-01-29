import React from "react";
import feeding1 from "../assets/images/feeding1.jpg";
import feeding2 from "../assets/images/feeding2.jpg";
import treatment1 from "../assets/images/treatment1.jpg";
import treatment2 from "../assets/images/treatment2.jpg";
import treatment3 from "../assets/images/treatment3.jpg";
import adoption1 from "../assets/images/adoption1.jpg";
import adoption2 from "../assets/images/adoption2.jpg";
import adoption3 from "../assets/images/adoption3.jpg";
import adoption4 from "../assets/images/adoption4.jpg";

const FeedingDrive = () => {
  return (
    <div className="">
      {/* first */}
      <section class="relative bg-gray-100">
        <div class="relative">
          {/* <!-- Background Image --> */}
          <img
            src={feeding1}
            alt="Pet Care"
            class="h-[40vh] w-full object-cover"
          />

          {/* <!-- Overlay and Content --> */}
          <div class="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div class="container mx-auto px-6 text-white md:px-10 lg:px-20">
              {/* <!-- Text Section --> */}
              <div class="max-w-lg">
                <h1 class="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  Feeding Drive
                </h1>
                <p class="mb-6 text-lg md:text-xl">
                  where compassion meets excellence!
                </p>
                {/* <!-- Button --> */}
                <a
                  href="https://pages.razorpay.com/mh14animalhospital"
                  target="_blank"
                  class="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-600"
                >
                  Donate Now
                  <span class="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Text Content --> */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Providing best services <br />
                for your pets
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At Pawcare, our in-clinic consultations offer comprehensive care
                to ensure your pet's health and well-being. Our experienced
                veterinarians conduct thorough physical examinations, use
                advanced diagnostic tools, and create personalized treatment
                plans tailored to your pet's unique needs.
              </p>
            </div>
            {/* <!-- Image --> */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/veterinarian-checking-dog-medium-shot_23-2149143871.jpg?t=st=1737631658~exp=1737635258~hmac=b61177b31f88940e72892a99fb0f98f11412b2d6acff6f6d30eba185a69391b0&w=1060"
                alt="Veterinarian caring for a pet"
                className="rounded-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* third */}
      <div class="w-full columns-3xs p-5">
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={feeding2}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={feeding1}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={treatment1}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={treatment2}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={treatment3}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={adoption1}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={adoption2}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={adoption3}
          alt=""
        />
        <img
          class="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={adoption4}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeedingDrive;
