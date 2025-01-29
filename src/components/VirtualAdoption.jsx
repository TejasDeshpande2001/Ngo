import React from 'react'
import animal1 from "../assets/images/animal1.jpeg";
import chhiki from "../assets/images/chhiki.jpeg";
import animal3 from "../assets/images/animal3.jpeg";
import animal4 from "../assets/images/animal4.jpeg";
import animal5 from "../assets/images/animal5.jpeg";
import animal6 from "../assets/images/animal6.jpeg";
import animal7 from "../assets/images/animal7.jpeg";
import animal8 from "../assets/images/animal8.jpeg";
import animal9 from "../assets/images/animal9.jpeg";
import adoption4 from "../assets/images/adoption4.jpg";

const VirtualAdoption = () => {
  return (
    <div className="">
      {/* first */}
      <section className="relative bg-gray-100">
        <div className="relative">
          {/* <!-- Background Image --> */}
          <img
            src={adoption4}
            alt="Pet Care"
            className="h-[40vh] w-full object-contail"
          />

          {/* <!-- Overlay and Content --> */}
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div className="container mx-auto px-6 text-white md:px-10 lg:px-20">
              {/* <!-- Text Section --> */}
              <div className="max-w-lg">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  Virtual Adoption
                </h1>
                <p className="mb-6 text-lg md:text-xl">
                  where compassion meets excellence!
                </p>
                {/* <!-- Button --> */}
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-600"
                >
                  Adopt Virtualy Now
                  <span className="ml-2">→</span>
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
                Virtual Adoption 🐕
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Do you love animals but are unable to bring one home? With our
                Virtual Adoption program, you can still make a meaningful
                difference! Support one of our animals by virtually adopting
                them and covering their monthly care needs. This way, you
                provide them with food, shelter, and medical care, ensuring they
                live a happy and healthy life.
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
      
      {/* four */}
      <div className="w-full columns-2xs p-5">
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300 "
          src={animal1}
          alt=""
        />

        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal3}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal4}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal5}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal6}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal7}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal8}
          alt=""
        />
        <img
          className="mb-4 w-full rounded-md shadow-2xl hover:scale-105 duration-300"
          src={animal9}
          alt=""
        />
      </div>
    </div>
  );
}

export default VirtualAdoption
