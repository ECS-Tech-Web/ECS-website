import React, { useState } from "react";
import "./Message.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper Autoplay module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Message = () => {
  const [buttonImagePrev, setButtonImagePrev] = useState(
    "https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png"
  );
  const handleMouseEnterPrev = () => {
    setButtonImagePrev("https://i.postimg.cc/wMdD9x1k/Property-1-Variant2-1.png");
  };
  const handleMouseLeavePrev = () => {
    setButtonImagePrev("https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png");
  };

  const [buttonImageNext, setButtonImageNext] = useState(
    "https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png"
  );
  const handleMouseEnterNext = () => {
    setButtonImageNext("https://i.postimg.cc/hjm9FQtj/Property-1-Variant2.png");
  };
  const handleMouseLeaveNext = () => {
    setButtonImageNext("https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png");
  };

  const slides = [
    {
      image: "https://i.postimg.cc/QNTSqLNf/IMG-20250902-WA0034.jpg",
      name: "Dr. Wasim Arif",
      content: 'In the spirit of continuous learning, we extend a warm welcome to all the students in our beloved institution. The alumni of this esteemed establishment have already made us proud of their achievements since graduation. I have every confidence that, just like our accomplished graduates, our present batches will have a memorable and successful journey here at NIT Silchar. So, prepare yourself to be a valuable asset, the future eagerly anticipates Three things you should acquire as a student : Self- Motivation, Self- Regulation and Self- Confidence. Maintain a sense of joy and keep radiating your brilliance! Life is beautiful, so embrace it.'
      ,
      designation: "-FACULTY ADVISOR, ECS",
    },
    {
      image: "https://i.postimg.cc/nc14dpyG/IMG-20250902-WA0035.jpg",
      name: "Dr. Koushik Guha",
      content: "Dear aspiring engineers, It is with great pleasure that I extend a warm welcome to you as the HOD of the Electronics and Communication Engineering Department. Our department is a thriving hub of innovation and exploration dedicated to nurturing the talents of tomorrow's technological leaders.I have full confidence that together we will push our boundaries, create solutions and excel in all expects inspiring a change among all. The future of Electronics and Communication Engineering rests in your capable hands, and I am excited to see the innovations and breakthroughs you will bring to the  world. Your future begins here!",
      designation: "HOD",
    },
    {
      image: "https://i.postimg.cc/GtCpwt7p/Background-Eraser-20250903-025029873.png",
      name: "Chetan Singh Verma",
      content: "ECS has always stood at the heart of our branch’s progress, and as its President, I see it as our duty to push these boundaries even further. We are here to build more than just engineers — we are here to create leaders, innovators, and team players. Every event, every initiative, and every effort at ECS is aimed at preparing our students to excel beyond the classroom. I urge each of you to step forward, make your mark, and help us carry this society to greater heights.",
      designation: "PRESIDENT ECS",
    },
    {
      image: "https://i.postimg.cc/rFJ4QNDP/IMG-20250903-WA0004.jpg",
      name: "Jagatjyoti Deb",
      content: "ECS is more than a society — it’s a platform where ideas turn into action and students grow together as a community. As Vice President, I have seen firsthand how every event, workshop, and initiative creates opportunities to learn, lead, and collaborate. This is your space to explore, innovate, and make memories while building real skills. Let’s continue to raise the bar and ensure ECS remains a place where every student finds their spark.",
      designation: "VICE PRESIDENT ECS",
    },
    {
      image: "https://i.postimg.cc/1Xnp4S8L/IMG-20241026-WA0003-1.jpg",
      name: "Koustubh Mishra",
      designation: "GENERAL SECRETARY ECS",
      content: "As the General Secretary of ECS, I feel privileged to represent a society that thrives on innovation, teamwork, and excellence in the domain of electronics and communication. Our aim is to nurture a dynamic community where creativity is encouraged, knowledge is exchanged, and every member gets the opportunity to grow to their fullest potential. Together, we aspire to uplift our society by welcoming fresh challenges, driving forward with technological progress, and leaving a meaningful impact both on our campus and beyond. ECE forever!!!"
    },
  ];
  return (
    <div className="max-w-6xl mx-auto items-center p-2 mobile:-mt-10">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
        <div className="msgImg relative w-full h-full z-10 flex justify-center items-center mb-[70px]">
          <img src="https://i.postimg.cc/hGJ1bPRD/Group-15.png" alt="" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to the modules
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 3000,  // 3 seconds between each slide transition
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          loop
          className="rounded-lg !pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex space-x-4 mx-20 mobile:flex-col m-0">
                {/* Image */}
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className=" polygon image rounded-lg object-cover hover:scale-[103%] transition-transform duration-300 hover:shadow-2xl shadow-blue-700"
                />
                <div className="mt-4">
                  <h1 id="naam" className="name-text text-left text-blueNeon">
                    {slide.name}
                  </h1>
                  <p className="content-text text-justify mb-5">
                    {slide.content} 

                  </p>
                  <h1 id="naam2" className="name-text text-right">
                    {slide.name}
                  </h1>
                  <h2 className="designation-text text-right">
                    {slide.designation}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button
          className="swiper-button-prev-custom"
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
        >
          <img src={buttonImagePrev} alt="Prev" />
        </button>
        <button
          className="swiper-button-next-custom"
          onMouseEnter={handleMouseEnterNext}
          onMouseLeave={handleMouseLeaveNext}
        >
          <img src={buttonImageNext} alt="Next" />
        </button> */}
      </div>
    </div>
  );
};

export default Message;
