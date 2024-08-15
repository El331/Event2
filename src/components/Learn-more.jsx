import React from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

export const LearnMore = () => {
  return (
    <div className="Learn-more mt-20 mr-40 mb-20 ml-20">
      <h1 className="text-5xl font-bold font-bond text-center mb-3">
        Learn More
      </h1>
      <div className="Welcome">
        <h1 className="font-semibold text-xl mb-5">Welcome To EventHub</h1>
        <p className="">
          Welcome to [Event Hub Name], your ultimate destination for
          discovering, promoting, and managing local events. Whether you're an
          event organizer, a performer, or an attendee, we provide the tools and
          information you need to make your event experience seamless and
          enjoyable.
        </p>
      </div>
      <div class="flex items-end justify-center pt-11">
        <div class="border-b-2 border-gray-400 w-[600px] inline-block"></div>
      </div>
      <div className="About-us">
        <h1 className="font-semibold text-xl mb-5">About Us</h1>
        <p className="">
          EventHub was founded in [Year] with the mission of connecting
          communities through events. We believe in the power of local
          gatherings to foster connections, celebrate culture, and create
          lasting memories. Our platform is designed to make it easy for
          everyone to find, share, and participate in events that matter to them
        </p>
      </div>
      <div class="flex items-end justify-center pt-11">
        <div class="border-b-2 border-gray-400 w-[600px] inline-block"></div>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-12 mt-20">Features</h1>

        {/* ----------------01-------------- */}

        <div className="one flex justify-between items-center m-0">
          <div className="one-text w-full md:w-1/2">
            <h1 className="text-8xl font-bold mb-7 text-[#0000002E]">01</h1>
            <h1 className="font-semibold text-2xl mb-5">Discover Events</h1>
            <p className="mb-2">
              Browse a comprehensive calendar of local events, including
              concerts, festivals, workshops, and more.
            </p>
            <p className="mb-2">
              Filter events by category, date, location, and popularity to find
            </p>
            <p>
              exactly what you're looking for. Get personalized recommendations
              based on your interests and past activities.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0000002E] rounded-full z-[-1]"></div>
            <img
              src={img4}
              alt=""
              className="w-full h-auto md:scale-150 lg:scale-150 relative z-[1]"
            />
          </div>
        </div>

        {/* ----------------02-------------- */}

        <div className="two flex justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#0000002E] rounded-full z-[-1]"></div>
            <img
              src={img2}
              alt=""
              className="w-full h-auto md:scale-50 lg:scale-50 relative z-[1]"
            />
          </div>
          <div className="one-text w-full md:w-1/2">
            <h1 className="text-8xl font-bold mb-7 text-[#0000002E]">02</h1>
            <h1 className="font-semibold text-2xl mb-5">
              Ticketing And Registration
            </h1>
            <p className="mb-2">
              Manage ticket sales and registrations seamlessly.
            </p>
            <p className="mb-2">
              Often Various Ticket Types, including Early Bird, Vip And Group
              Discounts.
            </p>
            <p>Track Sales And Attract</p>
          </div>
        </div>

        {/* ----------------03-------------- */}

        <div className="one flex justify-between items-centers">
          <div className="one-text w-full md:w-1/2">
            <h1 className="text-8xl font-bold mb-7 text-[#0000002E]">03</h1>
            <h1 className="font-semibold text-2xl mb-5">Promote Your Event</h1>
            <p className="mb-2">
              List your event on our platform to reach a wider audience
            </p>
            <p className="mb-2">
              Customize your event page with images, videos, and detailed
              descriptions.
            </p>
            <p>
              exactly what you're looking for. Get personalized recommendations
              based on your interests and past activities.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#0000002E] rounded-full z-[-1]"></div>
            <img
              src={img3}
              alt=""
              className="w-full h-auto md:scale-50 lg:scale-30 relative z-[1]"
            />
          </div>
        </div>
        <div class="flex items-end justify-center">
          <div class="border-b-2 border-gray-400 w-[600px] inline-block"></div>
        </div>
      </div>
    </div>
  );
};
