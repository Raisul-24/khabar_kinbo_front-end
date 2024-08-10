import React from 'react';
import Link from 'next/link'; 

const ArieasCard = ({ name, resturent , image }) => {

    return (
        <Link href={`/${name}`} className="block p-4 border rounded-lg shadow transition-transform duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-lg">
        <div className="bg-white relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 mt-5  pt-40 max-w-sm mx-auto w-[500px]">
            <img
                src={image}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{name}</h3>
            <div className="z-10 pb-5 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Total resturent: {resturent}
            </div>
        </div>
        </Link>
    );
};

export default ArieasCard;
