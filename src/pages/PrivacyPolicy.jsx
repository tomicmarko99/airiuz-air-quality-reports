import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-bgr-white px-5 py-16 pt-28 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey items-center">
        <div className="text-[24px] md:text-[40px] font-semibold">
          Privacy Statement - Airiuz
        </div>
        <div className="text-[18px] md:text-[22px] text-soft-blue">
          Last updated: 6 February 2023
        </div>
        <div className="flex flex-col mt-5 gap-5 text-[14px] md:text-[16px]">
          <div>
            Airiuz (“Airiuz”,“we” or “us”) is committed to protecting your
            privacy. This Privacy Policy sets out our privacy practices in
            relation to the information we collect when you use our website,
            located at airiuz.com (the “Site”).
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Information Collection</div>
            <div>
              Our Site does not require any form of login or registration for
              users. The Site is a simple frontend that provides air quality
              information and tips for various cities around the world through
              the use of APIs. The near city of the user is determined based on
              their internet provider and air quality information is displayed
              on the homepage.
            </div>
            <div>
              We may use Google Analytics to track traffic on our Site, but this
              information will not be used to identify individual users.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Use of Google Console</div>
            <div>
              We, Airiuz, plan to connect Google Console to our website for the
              purpose of tracking website traffic. This integration will allow
              us to collect anonymous information about website usage, including
              number of visits, session duration, and pages used. This
              information will help us improve the functionality and design of
              our website, as well as deliver more relevant content and features
              to our users.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Information Usage</div>
            <div>
              The information collected on our Site is solely used to provide
              air quality information and tips to users. We will not sell,
              share, or otherwise distribute any personal information collected
              through the Site to third parties.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Security</div>
            <div>
              Airiuz takes all necessary measures to ensure the security of user
              information. All information collected is stored in secure servers
              and access is restricted to authorized personnel only.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Changes to Privacy Policy</div>
            <div>
              Airiuz reserves the right to make changes to this Privacy Policy
              at any time. Any changes will be posted on this page and we
              encourage users to regularly review the Privacy Policy for any
              updates.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Contact Us</div>
            <div>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at info@airiuz.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
