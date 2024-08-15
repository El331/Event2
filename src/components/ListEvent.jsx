import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

export default function ListEvent() {
  return (
    <div>
      <div className="flex justify-start">
        <h1 className="text-lg font-bold mb-4 mt-4">Featured Events</h1>
      </div>
      <div class="container mx-auto px-4 py-8 flex space-x-4 overflow-x-auto snap-x">
        <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img1} alt="Product" class="w-full h-56 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
              <p class="text-gray-600">
                lorem ipsom kendrick lemar asnei laklerk seminen
              </p>
              <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
              <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
                Detail
                <svg
                  class="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img2} alt="Product" class="w-full h-56 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
              <p class="text-gray-600">
                lorem ipsom kendrick lemar asnei laklerk seminen
              </p>
              <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
              <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
                Detail
                <svg
                  class="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img3} alt="Product" class="w-full h-56 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
              <p class="text-gray-600">
                lorem ipsom kendrick lemar asnei laklerk seminen
              </p>
              <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
              <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
                Detail
                <svg
                  class="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img4} alt="Product" class="w-full h-56 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
              <p class="text-gray-600">
                lorem ipsom kendrick lemar asnei laklerk seminen
              </p>
              <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
              <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
                Detail
                <svg
                  class="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
