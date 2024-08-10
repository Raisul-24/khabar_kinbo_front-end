import LocationInput from "./locationInput";


const Hero = () => {
   
    return (
        <>
            <div 
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png) no-repeat center',
                    backgroundSize: 'cover'
                }}
                className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
            >
                <h1 className="pb-4">Search Resturent in your ariea</h1>
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                    <LocationInput></LocationInput>
                </div>
            </div>
        </>
    );
}

export default Hero;
