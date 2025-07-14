import React from 'react'

const Banner = () => {
  return (
    <>
      <section id="home" className="py-20 bg-pink-100">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl text-black font-bold mb-4">Discover the <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Joy</span> of Milk Tea </h1>
                    <p className="mb-6">Creamy, sweet, and refreshing - our milk tea will transport you to flavor paradise with every sip.</p>
                    <button className="bg-pink-500 px-4 py-2 rounded-full text-white font-bold">Explore Flavors</button>
                </div>
                <div className="justify-items-center items-center relative">
                  <p className="text-8xl z-10 absolute top-6">🧋</p>
                  <div className="bg-pink-200 size-72 blur-xl rounded-full"></div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
