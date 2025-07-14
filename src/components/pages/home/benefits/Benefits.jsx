import React from "react";

const Benefits = () => {
  return (
    <>
      <section id="benefits" className="bg-white p-4">
        <div className="container max-w-6xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div className="mb-10 md:mb-0">
            <h2 className="text-4xl text-black font-bold mb-6">
              Why{" "}
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Milk Tea
              </span>{" "}
              is Good For You
            </h2>
            <div className="grid grid-cols-1">
              <ul className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-pink-200 size-9 rounded-full p-2 text-center">
                    <p className="text-pink-500">✓</p>
                  </div>
                </li>
                <li>
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">Antioxidant Rich</h2>
                    <p className="">
                      Tea contains polyphenols that help fight free radicals.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-purple-200 size-9 rounded-full p-2 text-center">
                    <p className="text-purple-500">✓</p>
                  </div>
                </li>
                <li>
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">Energy Boost</h2>
                    <p className="">
                      Tea contains polyphenols that help fight free radicals.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-yellow-200 size-9 rounded-full p-2 text-center">
                    <p className="text-yellow-500">✓</p>
                  </div>
                </li>
                <li>
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">Mood Enhancer</h2>
                    <p className="">
                      The comforting warmth and sweetness can brighten your day.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-200/80 size-60 rounded-xl shadow-md justify-center">
            <div className="flex flex-col h-full items-center justify-items-center justify-center text-center">
              <p className="text-8xl mb-4">💖</p>
              <p className="font-bold max-w-48">
                "A cup of milk tea a day keeps the stress away!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
