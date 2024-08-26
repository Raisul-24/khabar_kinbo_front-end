"use client"
import React from 'react';
import Reg_Input from './reg_Input';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import GoogleLoginBtn from '@/app/components/googleLoginBtn/googleLoginBtn';
import Link from 'next/link';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //   const { createUser } = UseAuth();
    // const axiosPublic = useAxiosPublic();
    //   const navigate = useNavigate();
    //   const location = useLocation();

    //   const onSubmit = async (data) => {
    //     const toastId = toast.loading("Logging In...");
    //     try {
    //       await createUser(data.email, data.password);
    //       //    const userInfo = {
    //       //       email: data.email,
    //       //       name: data.name,
    //       //       phone: data.phone
    //       //    }
    //       //   axiosPublic.post('/users', userInfo)
    //       //console.log("created");
    //       toast.success("Register In Successfully!!", { id: toastId });
    //       if (location.state && location.state.from) {
    //         navigate(location.state.from.pathname);
    //       } else {
    //         navigate("/");
    //       }
    //     } catch (error) {
    //       //console.log(error)
    //       toast.error(error.message, { id: toastId });
    //     }
    //   };
    return (
        <div className="flex flex-col md:flex-row h-full py-16 md:py-40 lg:py-32 items-center bg-[url(https://i.ibb.co/17R85wC/authentication.png)]">
            <div className="w-1/2 flex justify-center md:justify-end md:mx-3">
                <img
                    src="https://i.ibb.co/mNJj89X/login.gif"
                    className="rounded-xl hidden md:flex"
                    alt=""
                />
            </div>
            <div className="w-5/6 md:w-1/2 flex justify-center md:mx-3">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-r from-amber-100 to-red-50">
                        <h3 className="block  text-3xl antialiased font-extrabold leading-snug tracking-normal text-red-900 hover:text-amber-700">
                            Register Now!!
                        </h3>
                    </div>
                    <form //onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-8 p-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                                />
                                {errors.email && (
                                    <span className="text-red-600 text-xs font-medium">
                                        Email is required
                                    </span>
                                )}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    {...register("phone", { required: true })}
                                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                                />
                                {errors.phone && (
                                    <span className="text-red-600 text-xs font-medium">
                                        Phone Number is required
                                    </span>
                                )}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                                    Phone Number
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    {...register("address", { required: true })}
                                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                                />
                                {errors.address && (
                                    <span className="text-red-600 text-xs font-medium">
                                        Address is required
                                    </span>
                                )}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                                   Address
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">
                                        Password must have one Uppercase one lower case, one number
                                        and one special character.
                                    </p>
                                )}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                                    Password
                                </label>
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <Button className='w-full bg-gradient-to-r from-yellow-50 to-red-50 focus:bg-amber-100 text-red-900'
                            >Register</Button>
                            <p className="flex justify-center my-3  text-medium antialiased font-light leading-normal text-inherit">
                                Or, Sign In with
                            </p>
                            <GoogleLoginBtn></GoogleLoginBtn>
                            <p className="flex justify-center mt-5  text-sm antialiased font-light leading-normal text-inherit">
                                Already have an account?
                                <Link
                                    href="/login"
                                    className="block ml-1  text-sm antialiased font-bold leading-normal text-red-900"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
