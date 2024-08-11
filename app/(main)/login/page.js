import Image from 'next/image';
import Login_input from './login_input';
import GoogleLoginBtn from '@/app/components/googleLoginBtn/googleLoginBtn';
import Link from 'next/link';
export default function login() {
   return (
    <section className="flex pt-16 bg-white flex-col md:flex-row h-screen items-center">

    <div className="bg-white hidden lg:block h-full w-full md:w-1/2 xl:w-2/3 rounded rounded-lg">
        <Image
        className='rounded rounded-lg'
        src="https://i.ibb.co/3Sk354G/image.png"
        alt="image"
        width={500}
        height={600}
        layout="responsive" // Ensures the image fits responsively
    />
     

    </div>

    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100 ">
            <h1 className="text-xl md:text-2xl font-bold leading-tight  ">Log in to your account</h1>

            <Login_input></Login_input>

            <hr className="my-6 border-gray-300 w-full" />

            <GoogleLoginBtn></GoogleLoginBtn>

            <p className="mt-8">Need an account?  <Link href="/regestation">Create an account</Link> </p>
        </div>
    </div>

</section>
   );
 }


