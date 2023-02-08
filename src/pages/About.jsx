import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="w-full px-5 py-16 pt-28 flex justify-center align-center min-h-[100vh]">
        <div className="w-full max-w-[1080px] text-very-dark-grey items-center">
          <div className="text-[24px] md:text-[40px] font-semibold">
            About - Airiuz
          </div>
          <div className="text-[18px] md:text-[22px] text-soft-blue">
            Last updated: 8 February 2023
          </div>
          <div className="flex flex-col mt-5 gap-5 text-[14px] md:text-[16px]">
            <div>
              At Airiuz, our passion is to improve the quality of life for
              people everywhere through greater access to information about air
              quality. We believe that knowledge is power, and that by providing
              accurate and real-time air quality information, we can help
              individuals make informed decisions about their health and
              well-being.
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Our Mission:</div>
              <div>
                Our mission is to be the leading source of air quality
                information, empowering people to understand the impacts of air
                pollution and take action to protect themselves and their
                communities. We aim to increase public awareness about the
                importance of air quality, and provide actionable tips to help
                improve it.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Our Vision:</div>
              <div>
                Our vision is a world where everyone has the knowledge and tools
                they need to breathe clean air and live healthy, fulfilling
                lives. We believe that by working together, we can create a
                healthier and more sustainable future for all.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Our Approach:</div>
              <div>
                At Airiuz, we are committed to providing reliable and
                user-friendly air quality information to the public. We gather
                data from the leading air quality index, WAQI API, and
                constantly monitor and update the information to ensure
                accuracy. Our website is designed to be easily accessible and
                easy to use, so that everyone can have access to the information
                they need.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Disclaimer:</div>
              <div>
                While we strive to provide the most accurate information on air
                quality, we cannot guarantee the accuracy of the data presented
                on our website. The information on Airiuz is obtained from
                leading air quality index, WAQI API, but we cannot be held
                responsible for any inaccuracies or damages that may arise from
                using this information.
              </div>
              <div>
                We understand the importance of trust and reliability when it
                comes to air quality information and we are committed to
                delivering the best possible experience for our users. Our team
                constantly monitors the data and updates the website to ensure
                that you have access to the latest information.
              </div>
              <div>
                Please use the information on Airiuz as a general guideline and
                not as a substitute for professional advice. We encourage you to
                take necessary precautions and follow guidelines from relevant
                authorities to protect your health and well-being.
              </div>
              <div>
                Thank you for choosing Airiuz, where our commitment to providing
                the most comprehensive and up-to-date information on air quality
                remains unwavering.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
