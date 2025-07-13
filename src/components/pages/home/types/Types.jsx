import React from 'react'

const Types = () => {
  return (
    <>
        <section id="types" className="py-10">
            <div className="container text-center mx-auto px-4">
                <p className="text-4xl text-black font-bold mb-6">Popular <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Milk Tea</span> Types</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                    <div className="bg-pink-100 h-52 w-full rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="bg-pink-300/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-2.5 left-2">🥛</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium mb-2">Classic Milk Tea</h4>
                            <p className="">The original blend of black tea milk, and sweetness that started it all.</p>
                        </div>
                        
                    </div>
                    <div className="bg-pink-100 h-52 w-full rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="bg-purple-300/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-2 left-2">🍯</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium mb-2">Honeydew Milk Tea</h4>
                            <p className="">Refreshing melon flavor combined with creamy milk for a summer favorite.</p>
                        </div>
                        
                    </div>
                    <div className="bg-pink-100 h-52 w-full rounded-2xl shadow-md p-6 flex flex-col items-center">
                        <div className="bg-yellow-300/40 size-16 relative rounded-full mb-4">
                            <p className="text-4xl items-center absolute top-1.5 left-2">🍵</p>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-medium mb-2">Matcha Milk Tea</h4>
                            <p className="">Earthy green tea powder blended with milk for an antioxidant boost.</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Types