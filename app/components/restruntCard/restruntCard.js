import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const RestruntCard = ({ name, bio, img, rating, address, open_close_time, offer, locationRoute }) => {
    return (
        <div>
            <Link href={`/${locationRoute}/${name}`}>
                <div className="relative mt-5 flex w-[370px] h-[420px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                        <div className="relative w-full h-full">
                            <Image
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                                src={img}
                                alt={`${name} image`}
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL={img} // Use a low-quality image placeholder or a base64-encoded image
                            />
                            {offer && (
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                    {offer} OFF
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 px-5 pb-5">
                        <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                        <p>{bio}</p>
                        <p>
                            <span className="font-bold">{open_close_time}</span>
                        </p>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-xl font-bold text-slate-900">{address}</span>
                            </p>
                            <div className="flex items-center">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RestruntCard;
