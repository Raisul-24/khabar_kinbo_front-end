import React from 'react';

const ArieasCard = ({ name, resturent , image }) => {

    return (
        <div className="bg-white relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 mt-5  pt-40 min-w-72 md:min-w-96 mx-auto hover:">
            <img
                src={image}
                alt="University of Southern California"
                className="skeleton absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-yellow-200 hover:text-amber-900">{name}</h3>
            <div className="z-10 pb-5 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-amber-900 hover:text-yellow-200">
                Total restaurant: {resturent}
            </div>
        </div>
    );
};

export default ArieasCard;
