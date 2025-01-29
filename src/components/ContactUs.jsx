import React from "react";

import { InstagramEmbed } from "react-social-media-embed";
const ContactUs = () => {
  return (
    <div>
      <section class="relative bg-gray-100">
        <div class="relative">
          {/* <!-- Background Image --> */}
          <img
            src="https://img.freepik.com/free-photo/vet-doing-routine-examination_329181-14490.jpg?uid=R183894146&ga=GA1.1.788078180.1731050377&semt=ais_incoming"
            alt="Pet Care"
            class="h-[40vh] sm:h-[40vh] lg:h-[40vh] w-full object-cover"
          />

          {/* <!-- Overlay and Content --> */}
          <div class="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div class="container mx-auto px-6 text-white md:px-10 lg:px-20">
              {/* <!-- Text Section --> */}
              <div class="max-w-lg">
                <h1 class="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  Visit us for expert pet care
                </h1>
                <p class="mb-6 text-lg md:text-xl">
                  Where compassion meets excellence!
                </p>
                {/* <!-- Button --> */}
                {/* <a
                  href="https://pages.razorpay.com/mh14animalhospital" target="_blank"
                  class="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-600"
                >
                  Donate Now
                  <span class="ml-2">→</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-10 md:py-16">
        <div class="container mx-auto px-6 md:px-10 lg:px-20">
          <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Text Content --> */}
            <div>
              <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Providing best services <br />
                for your pets
              </h2>
              <p class="text-lg leading-relaxed text-gray-600">
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
                class="rounded-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="bg-gray-100 font-sans leading-normal tracking-normal p-3">
          <section class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>

            <div class="space-y-4">
              {/* <!-- Question 1 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>What is Tailwind CSS?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vehicula mauris eu arcu malesuada, at sodales sapien
                  tincidunt.
                </p>
              </details>

              {/* <!-- Question 2 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Is Tailwind CSS free to use?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae eros eu purus efficitur varius. Integer ac magna non
                  augue gravida laoreet.
                </p>
              </details>

              {/* <!-- Question 3 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Can I customize Tailwind CSS?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lacinia eros ac diam aliquet, vitae posuere lorem ultricies.
                  Fusce sed magna nec arcu tempus feugiat.
                </p>
              </details>
              {/* <!-- Question 1 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>What is Tailwind CSS?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vehicula mauris eu arcu malesuada, at sodales sapien
                  tincidunt.
                </p>
              </details>

              {/* <!-- Question 2 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Is Tailwind CSS free to use?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae eros eu purus efficitur varius. Integer ac magna non
                  augue gravida laoreet.
                </p>
              </details>

              {/* <!-- Question 3 --> */}
              <details class="group border-b border-gray-200 pb-4">
                <summary class="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Can I customize Tailwind CSS?</span>
                  <span class="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lacinia eros ac diam aliquet, vitae posuere lorem ultricies.
                  Fusce sed magna nec arcu tempus feugiat.
                </p>
              </details>
            </div>
          </section>
        </div>
      </section>

      {/* MAP  */}
      <div className="mt-4">
        <h1 className="text-center text-3xl">Happy To Meet You At</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.532298735622!2d73.7576292!3d18.5951129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9663d6aaaab%3A0xd8eb4467c3a2cd0b!2sMH14%20Animal%20Hospital!5e0!3m2!1sen!2sin!4v1736576483524!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          className="w-screen h-96 rounded-md p-5"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
