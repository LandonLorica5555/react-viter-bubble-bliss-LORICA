import React from 'react'

const Toppings = () => {
  return (
    <>
        <section id="toppings" className="bg-purple-200/40 p-11">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <h2 className="text-4xl text-black font-bold mb-4">Delicious <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Toppings</span></h2>
                    <p className="">Customize your milk tea with these tasty additions that add texture and flavor.</p>
                </div>
                <div className="mx-auto grid grid-cols-2 justify-items-center gap-6 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-max lg:justify-center">
                    <div className="bg-white size-32 rounded-2xl shadow-md p-2 flex flex-col items-center">
                        <div className="bg-pink-100/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-2.5 left-2">🟤</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium">Boba Pearls</h4>
                        </div>
                    </div>
                    <div className="bg-white size-32 rounded-2xl shadow-md p-2 flex flex-col items-center">
                        <div className="bg-yellow-100/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-2.5 left-2">🍮</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium">Pudding</h4>
                        </div>
                    </div>
                    <div className="bg-white size-32 rounded-2xl shadow-md p-2 flex flex-col items-center">
                        <div className="bg-pink-100/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-2.5 left-2">🧊</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium">Jelly</h4>
                        </div>
                    </div>
                    <div className="bg-white size-32 rounded-2xl shadow-md p-2 flex flex-col items-center">
                        <div className="bg-green-100/80 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-1.5 left-2">🥥</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium">Coconut</h4>
                        </div>
                    </div>
                    <div className="bg-white size-32 rounded-2xl shadow-md p-2 flex flex-col items-center">
                        <div className="bg-blue-100/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-1 left-2">🧈</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium">Cheese Foam</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Toppings