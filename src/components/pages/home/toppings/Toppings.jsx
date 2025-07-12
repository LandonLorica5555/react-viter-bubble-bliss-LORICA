import React from 'react'

const Toppings = () => {
  return (
    <>
        <section className="bg-purple-200/40 p-11">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-4xl text-black font-bold mb-4">Delicious <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Toppings</span></h2>
                    <p className="">Customize your milk tea with these tasty additions that add texture and flavor.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className=""></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Toppings