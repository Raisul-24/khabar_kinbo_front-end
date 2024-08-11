import React from 'react';

const ArieasCard = ({ name, resturent , image }) => {

    return (
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
    );
};

export default ArieasCard;
