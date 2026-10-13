import React from "react";

const Footer = () => {
  return (
    <div className="text-[#737373] md:px-10">
      <div className="py-20">
        <p>Developed by Ikechukwu Michael</p>
        <p>
          Read about Netflix TV shows and movies and watch bonus videos on
          Tudum.com
        </p>
      </div>

      <div className="pb-5">
        <p>Questions? Contact us.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 text-sm pb-10 maw-w-5xl">
        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed test</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Help center</li>
          <li>Jobs</li>
          <li>Cookie preferrence</li>
          <li>Legal Notices</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed test</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
