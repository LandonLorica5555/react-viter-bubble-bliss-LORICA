import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1f2937] p-6">
        <div className="container">
          <div className="flex flex-col items-center md:flex-row justify-between gap-4">
            <div className="">
              <div className="title flex flex-row gap-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  Bubble Bliss
                </h1>
                <p className="text-lg">🧋</p>
              </div>
              <p className="text-[#9ca394]">Sip happiness in every cup</p>
            </div>
            <div className="">
              <ul className="flex gap-4">
                <li>
                  <a href="#">📱</a>
                </li>
                <li>
                  <a href="#">📷</a>
                </li>
                <li>
                  <a href="#">🐦</a>
                </li>
                <li>
                  <a href="#">📘</a> 
                </li>
              </ul>
            </div>
          </div>
           <div className="border-t border-gray-500 mt-12 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Bubble Bliss. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
