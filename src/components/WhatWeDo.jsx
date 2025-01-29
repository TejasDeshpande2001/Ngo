import React from 'react'

const WhatWeDo = () => {
  return (
    <div className="">
      {/* first */}
      <section className="relative bg-gray-100">
        <div className="relative">
          {/* <!-- Background Image --> */}
          <img
            src="https://img.freepik.com/free-vector/young-woman-giving-cat-veterinarian-doctor_33099-2433.jpg?t=st=1737736868~exp=1737740468~hmac=3548ee8a8050a9dc28833800d962682d69270cad90ef0073167614cab4a74a21&w=1380"
            alt="Pet Care"
            className="h-[40vh] w-full object-cover"
          />

          {/* <!-- Overlay and Content --> */}
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div className="container mx-auto px-6 text-white md:px-10 lg:px-20">
              {/* <!-- Text Section --> */}
              <div className="max-w-lg">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  What We Do
                </h1>
                <p className="mb-6 text-lg md:text-xl">
                  where compassion meets excellence!
                </p>
                {/* <!-- Button --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Text Content --> */}
            <div>
              <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Advocating for Animal Rights <br />
                and Protection
              </h2>
              <p class="text-lg leading-relaxed text-gray-600">
                At Pawcare, we work tirelessly to ensure the rights and welfare
                of animals are protected. Through advocacy campaigns, we raise
                awareness about animal cruelty and promote humane treatment for
                all living beings.
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
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Image --> */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/veterinarian-checking-dog-medium-shot_23-2149143871.jpg?t=st=1737631658~exp=1737635258~hmac=b61177b31f88940e72892a99fb0f98f11412b2d6acff6f6d30eba185a69391b0&w=1060"
                alt="Veterinarian caring for a pet"
                className="rounded-lg drop-shadow-2xl"
              />
            </div>
            {/* <!-- Text Content --> */}
            <div>
              <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Rescuing and Rehabilitating <br />
                Stray Animals
              </h2>
              <p class="text-lg leading-relaxed text-gray-600">
                Our rescue teams are dedicated to saving stray animals from
                dangerous or neglected environments. We provide medical
                treatment, rehabilitation, and a safe haven until they find
                their forever homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* <!-- Text Content --> */}

            <div>
              <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Educating the Community <br />
                on Animal Care
              </h2>
              <p class="text-lg leading-relaxed text-gray-600">
                We believe education is key to creating a compassionate society.
                Our workshops and outreach programs teach pet care, the
                importance of sterilization, and how to foster a harmonious
                relationship with animals.
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
    </div>
  );
}

export default WhatWeDo
