import ArieasCard from "./arieasCard";

async function getArieas(params) {
  const res = await fetch('http://localhost:51000/api/locations')
  
  return res.json()
}
const Arieas = async() => {
  const arieas = await getArieas();
  

  return (
    <>
    <h2 className="mt-5 p-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Popular localities in and around Agartala</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
      {
        arieas.map((ariea)=>
        <ArieasCard 
        key={ariea?._id}
        name={ariea?.name}
        image={ariea?.image}
        resturent={ariea?.resturent}></ArieasCard>
        )
      }
    </div>
    {/* <ArieasCard ></ArieasCard> */}

    </>
  );
};

export default Arieas;
