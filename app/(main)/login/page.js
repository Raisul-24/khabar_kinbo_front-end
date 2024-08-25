import Image from 'next/image';
import Login_input from './login_input';
import GoogleLoginBtn from '@/app/components/googleLoginBtn/googleLoginBtn';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const Login = () => {
    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm();
    // const { signIn } = UseAuth();
  
    // const navigate = useNavigate();
    // const location = useLocation();
  
    // const from = location.state?.from?.pathname || "/";
  
    // const onSubmit = async (data) => {
    //   const toastId = toast.loading("Logging In....");
    //   try {
    //     await signIn(data.email, data.password);
    //     toast.success("LogIn Successfully!!", { id: toastId });
  
    //     if (location.state && location.state.from) {
    //       navigate(location.state.from.pathname);
    //     } else {
    //       navigate(from, { replace: true });
    //     }
    //   } catch (error) {
    //     toast.error(error.message, { id: toastId });
    //   }
    // };
  
    return (
      <div className="flex flex-col md:flex-row h-full py-16 md:py-40 lg:py-32 items-center bg-[url(https://i.ibb.co/17R85wC/authentication.png)]">
        <div className="w-1/2 flex justify-center md:justify-end md:mx-3">
          <img
            src="https://i.ibb.co/6wPjzpn/user-login.gif"
            className="rounded-xl hidden md:flex"
            alt=""
          />
        </div>
        <div className="w-5/6 md:w-1/2 flex justify-center md:mx-3">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-r from-yellow-50 to-red-50">
              <h3 className="block  text-3xl antialiased font-extrabold leading-snug tracking-normal text-red-900">
                LogIn Now!!
              </h3>
            </div>
            <form //onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-8 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    // {...register("email", { required: true })}
                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                  />
                  {/* {errors.email && (
                    <span className="text-red-600 text-xs font-medium">
                      Email is required
                    </span>
                  )} */}
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    // {...register("password", { required: true })}
                    className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-red-200 border-t-transparent text-amber-700 outline outline-0 placeholder-shown:border placeholder-shown:border-amber-200 placeholder-shown:border-t-amber-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-amber-200"
                  />
                  {/* {errors.password && (
                    <span className="text-red-600 text-xs font-medium">
                      Password is required
                    </span>
                  )} */}
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-amber-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-amber-500">
                    Password
                  </label>
                </div>
              </div>
  
              <div className="p-6 pt-0">
                {/* <Btn className="w-full">LogIn</Btn> */}
                <p className="flex justify-center mb-6  text-medium antialiased font-light leading-normal text-inherit">
                  Or, Sign In with
                </p>
                <GoogleLoginBtn></GoogleLoginBtn>
                {/* <SocialLogin></SocialLogin> */}
                <p className="flex justify-center mt-5  text-sm antialiased font-light leading-normal text-inherit">
                  Don't have an account?
                  <Link
                    href="/register"
                    className="block ml-1  text-sm antialiased font-bold leading-normal text-red-900"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
// export default function login() {
//    return (
//     <section className="flex mt-5 bg-white flex-col md:flex-row h-screen items-center">

//     <div className="bg-white hidden lg:block h-full w-full md:w-1/2 xl:w-2/3 rounded-lg">
//         <Image
//         className='rounded-lg'
//         src="https://i.ibb.co/3Sk354G/image.png"
//         alt="image"
//         width={500}
//         height={600}
//         layout="responsive" // Ensures the image fits responsively
//     />
     

//     </div>

//     <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//         <div className="w-full h-100 ">
//             <h1 className="text-xl md:text-2xl font-bold leading-tight  ">Log in to your account</h1>

//             <Login_input></Login_input>

//             <hr className="my-6 border-gray-300 w-full" />

//             <GoogleLoginBtn></GoogleLoginBtn>

//             <p className="mt-8">Need an account?  <Link href="/regestation">Create an account</Link> </p>
//         </div>
//     </div>

// </section>
//    );
//  }


