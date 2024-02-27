import React from 'react'
import { Link } from 'react-router-dom';

export default function Homes() {
   
    
    
    return (
        <div className="mx-auto w-full max-w-7xl">

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h2 className="text-4xl font-bold sm:text-5xl animate__animated animate__zoomIn">
    Unlock your potential
    <span className="hidden sm:block text-3xl">Organize, prioritize, take control.</span>
</h2>


                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium  bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 rounded-lg hover:opacity-75 mx-40"
                            to="https://pythonchatbotz.streamlit.app/"
                        >
                            {/* <svg></svg> */}
                            &nbsp; Start For Free
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://img.freepik.com/premium-vector/done-correct-checklist-check-mark-concept-flat-graphic-design-cartoon-illustration_133260-3007.jpg?w=826" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-lg sm:text-4xl py-10 font-medium">From To-Dos to Ta-Da!</h1>
        </div>
    );
}

