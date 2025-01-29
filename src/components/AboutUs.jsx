import React from "react";
import adoption1 from "../assets/images/adoption1.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";
const AboutUs = () => {
  return (
    <div className="">
      {/* first */}
      <section className="relative bg-gray-100">
        <div className="relative">
          {/* <!-- Background Image --> */}
          <img
            src="https://img.freepik.com/free-photo/handsome-doctor-veterinarian-holding-syringe-standing-near-cute-black-pug-vaccinating-dog-white_1258-180886.jpg?t=st=1737632038~exp=1737635638~hmac=d10784a723f2c131df259503b95a9338db8bae4322c9cc5948025f75b0316d3b&w=1380"
            // src={adoption1}
            alt="Pet Care"
            className="h-[40vh] w-full object-cover"
          />

          {/* <!-- Overlay and Content --> */}
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div className="container mx-auto px-6 text-white md:px-10 lg:px-20">
              {/* <!-- Text Section --> */}
              <div className="max-w-lg">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  Visit us for expert pet care
                </h1>
                <p className="mb-6 text-lg md:text-xl">
                  where compassion meets excellence!
                </p>
                {/* <!-- Button --> */}
                {/* <a
                  href="https://pages.razorpay.com/mh14animalhospital" target="_blank"
                  className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-600"
                >
                  Donate Now
                  <span className="ml-2">→</span>
                </a> */}
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
                className=" drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* third */}

      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Image --> */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/veterinarian-checking-dog-medium-shot_23-2149143871.jpg?t=st=1737631658~exp=1737635258~hmac=b61177b31f88940e72892a99fb0f98f11412b2d6acff6f6d30eba185a69391b0&w=1060"
                alt="Veterinarian caring for a pet"
                className="rounded-3xl drop-shadow-2xl"
              />
            </div>
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
          </div>
        </div>
      </section>
      {/* fourth */}
      <h1 className="text-slate-800 font-serif font-extrabold text-center text-[40px] p-4">
        Meet Our team
      </h1>
      <div className="flex overflow-x-scroll gap-3 space-x-4 scrollbar-hide px-4">
        <a
          className="m-auto "
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div className="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            <img
              className="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://img.freepik.com/premium-vector/business-man-character-profession-avatar-mascot_186868-298.jpg?w=740"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="py-3 text-center text-2xl text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="pb-4 text-center text-sm text-white">
                Founder, Earth Charitable Foundation .
              </p>
            </div>
          </div>
        </a>
        <a
          className="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div className="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            <img
              className="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://img.freepik.com/premium-vector/business-man-character-profession-avatar-mascot_186868-298.jpg?w=740"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="py-3 text-center text-2xl text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="pb-4 text-center text-sm text-white">
                Founder, Earth Charitable Foundation .
              </p>
            </div>
          </div>
        </a>
        <a
          className="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div className="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            <img
              className="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://img.freepik.com/premium-vector/prototypical-female-teacher-character-delicate-colored-background_331474-215.jpg?w=740"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="py-3 text-center text-2xl text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="pb-4 text-center text-sm text-white">
                Founder, Earth Charitable Foundation .
              </p>
            </div>
          </div>
        </a>
        <a
          className="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div className="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            <img
              className="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://img.freepik.com/premium-vector/business-man-character-profession-avatar-mascot_186868-298.jpg?w=740"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="py-3 text-center text-2xl text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="pb-4 text-center text-sm text-white">
                Founder, Earth Charitable Foundation .
              </p>
            </div>
          </div>
        </a>
        <a
          className="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div className="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            <img
              className="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://img.freepik.com/premium-vector/prototypical-female-teacher-character-delicate-colored-background_331474-215.jpg?w=740"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="py-3 text-center text-2xl text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="pb-4 text-center text-sm text-white">
                Founder, Earth Charitable Foundation .
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* fifth */}
      {/* Testimonials */}
      <section class=" h-fit">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Testimonials
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-10">
            <div class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-3xl border-b border-gray-200 md:p-12 lg:border-r drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <div class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Lorem ipsum dolor.
                </h3>
                <p class="my-4">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  officiis sapiente velit facilis aliquam perspiciatis ducimus
                  doloribus, atque sit nisi aspernatur magni voluptatem illo
                  officia incidunt vero ad, ipsa eius".
                </p>
                <p class="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </div>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </div>
            <div class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-3xl border-b border-gray-200 md:p-12 lg:border-r drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <div class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Lorem ipsum dolor.
                </h3>
                <p class="my-4">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  officiis sapiente velit facilis aliquam perspiciatis ducimus
                  doloribus, atque sit nisi aspernatur magni voluptatem illo
                  officia incidunt vero ad, ipsa eius".
                </p>
                <p class="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </div>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
