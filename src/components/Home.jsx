import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Instagram from "./Instagram";
import roadmap2 from "../assets/images/roadmap2.png";
import roadmap1 from "../assets/images/roadmap1.png";
import team2 from "../assets/images/team2.jpg";
import team4 from "../assets/images/team4.jpg";
import feeding1 from "../assets/images/feeding1.jpg";
import "animate.css";
const Home = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100180.jpg?t=st=1737632169~exp=1737635769~hmac=585f8d0f34798c7dcaa2479ac66ad9152531c78984bd021ac240021f66149dbd&w=1060"
              // src={team3}
              className="d-block w-full h-[40vh] object-cover"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block ">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-smiley-dog-vet-clinic_23-2149304333.jpg?t=st=1737632220~exp=1737635820~hmac=25c654545017aba677bd76354674a446aa76f7f98452c1c945ced962a23a0df7&w=1060"
              // src={team4}
              className="d-block w-screen h-[40vh] object-cover"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={team2}
              className="d-block w-full h-[40vh] object-cover"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 pb-5 ">
          <div className="mx-5 mt-5 flex flex-col md:flex-row items-center rounded-lg bg-white p-2 shadow-md">
            {/* <!-- Image Section --> */}
            <img
              src={feeding1}
              alt="Online Consultation"
              className="mb-4 md:mb-0 md:mr-6 h-40 w-full md:w-auto rounded-lg object-cover drop-shadow-2xl"
            />

            {/* <!-- Text Content --> */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">One Day Meal</h3>
              <p className="mb-4 text-gray-600 ">
                Get expert veterinary care from the comfort of your home. Book
                your online appointment today for hassle-free pet care.
              </p>
              <a
                href="/onedaymeal"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                learn More 
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-5 mt-5 flex flex-col md:flex-row items-center rounded-lg bg-white p-2 shadow-md">
            {/* <!-- Image Section --> */}
            <img
              src="https://pictographic.azureedge.net/previews/cartoon-cute/64d435ba80dde78ad03d234f.png"
              alt="Online Consultation"
              className="mb-4 md:mb-0 md:mr-6 h-40 w-full md:w-auto rounded-lg object-cover drop-shadow-2xl"
            />

            {/* <!-- Text Content --> */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold ">
                Virtual Adoption
              </h3>
              <p className="mb-4 text-gray-600">
                Get expert veterinary care from the comfort of your home. Book
                your online appointment today for hassle-free pet care.
              </p>
              <a
                href="/donation"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                learn More 
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-5 mt-2 flex flex-col md:flex-row items-center rounded-lg bg-white p-2 shadow-md drop-shadow-2xl">
            {/* <!-- Image Section --> */}
            <img
              src={team4}
              alt="Online Consultation"
              className="mb-4 md:mb-0 md:mr-6 h-40 w-full md:w-auto rounded-lg object-cover"
            />

            {/* <!-- Text Content --> */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">Sponsour Treatment</h3>
              <p className="mb-4 text-gray-600 ">
                Get expert veterinary care from the comfort of your home. Book
                your online appointment today for hassle-free pet care.
              </p>
              <a
                href="/sponsortreatment"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                learn More 
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-5 mt-2 flex flex-col md:flex-row items-center rounded-lg bg-white p-2 shadow-md drop-shadow-2xl">
            {/* <!-- Image Section --> */}
            <img
              src="https://pictographic.azureedge.net/previews/flat-modern/l8NoJWQgf6odTYYr4VbG.png"
              alt="Online Consultation"
              className="mb-4 md:mb-0 md:mr-6 h-40 w-full md:w-auto rounded-lg object-cover"
            />

            {/* <!-- Text Content --> */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">Virtual Adoption</h3>
              <p className="mb-4 text-gray-600 ">
                Get expert veterinary care from the comfort of your home. Book
                your online appointment today for hassle-free pet care.
              </p>
              <a
                href="/virtualadoption"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                learn More 
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src={roadmap1}
        alt=""
        className="sm:w-full sm:h-screen w-fit object-cover "
      />
      <img
        src={roadmap2}
        alt=""
        className="sm:w-full sm:h-screen w-fit object-cover "
      />

      <Instagram />

      {/* Testimonials */}
      <section className=" h-fit">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-3xl border-b border-gray-200 md:p-12 lg:border-r drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <div className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lorem ipsum dolor.
                </h3>
                <p className="my-4">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  officiis sapiente velit facilis aliquam perspiciatis ducimus
                  doloribus, atque sit nisi aspernatur magni voluptatem illo
                  officia incidunt vero ad, ipsa eius".
                </p>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </div>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </div>
            <div className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-3xl border-b border-gray-200 md:p-12 lg:border-r drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <div className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lorem ipsum dolor.
                </h3>
                <p className="my-4">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  officiis sapiente velit facilis aliquam perspiciatis ducimus
                  doloribus, atque sit nisi aspernatur magni voluptatem illo
                  officia incidunt vero ad, ipsa eius".
                </p>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </div>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="bg-gray-100 font-sans leading-normal tracking-normal p-3">
          <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {/* <!-- Question 1 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>What is Tailwind CSS?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vehicula mauris eu arcu malesuada, at sodales sapien
                  tincidunt.
                </p>
              </details>

              {/* <!-- Question 2 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Is Tailwind CSS free to use?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae eros eu purus efficitur varius. Integer ac magna non
                  augue gravida laoreet.
                </p>
              </details>

              {/* <!-- Question 3 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Can I customize Tailwind CSS?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lacinia eros ac diam aliquet, vitae posuere lorem ultricies.
                  Fusce sed magna nec arcu tempus feugiat.
                </p>
              </details>
              {/* <!-- Question 1 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>What is Tailwind CSS?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vehicula mauris eu arcu malesuada, at sodales sapien
                  tincidunt.
                </p>
              </details>

              {/* <!-- Question 2 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Is Tailwind CSS free to use?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae eros eu purus efficitur varius. Integer ac magna non
                  augue gravida laoreet.
                </p>
              </details>

              {/* <!-- Question 3 --> */}
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  <span>Can I customize Tailwind CSS?</span>
                  <span className="group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lacinia eros ac diam aliquet, vitae posuere lorem ultricies.
                  Fusce sed magna nec arcu tempus feugiat.
                </p>
              </details>
            </div>
          </section>
        </div>
      </section>

      {/* instagram single single posts  */}
      <div className="flex  flex-wrap justify-center gap-10 p-5 ">
        

        <InstagramEmbed
          url="https://www.instagram.com/p/DErqmyuSa-Q/?img_index=1" // Replace POST_ID with the specific post ID
          // Full width for responsiveness
          hideCaption={false}
          containerTagName="div"
          injectScript
          onLoading={() => console.log("Loading...")}
          onSuccess={() => console.log("Success!")}
          onAfterRender={() => console.log("Rendered")}
          onFailure={() => console.error("Failed to load post")}
          className="rounded-lg shadow-md"
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/DFRv0EvNMA7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" // Replace POST_ID with the specific post ID
          // Full width for responsiveness
          hideCaption={false}
          containerTagName="div"
          injectScript
          onLoading={() => console.log("Loading...")}
          onSuccess={() => console.log("Success!")}
          onAfterRender={() => console.log("Rendered")}
          onFailure={() => console.error("Failed to load post")}
          className="rounded-lg shadow-md"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DErqmyuSa-Q/?img_index=1" // Replace POST_ID with the specific post ID
          // Full width for responsiveness
          hideCaption={false}
          containerTagName="div"
          injectScript
          onLoading={() => console.log("Loading...")}
          onSuccess={() => console.log("Success!")}
          onAfterRender={() => console.log("Rendered")}
          onFailure={() => console.error("Failed to load post")}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
