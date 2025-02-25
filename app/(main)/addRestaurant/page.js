import Banner1 from './banner'
import Banner2 from './banner2'
import Cards from './cards'
import Accordion from './accordion';
import ChooseUs from './chooseus';
import Works from './works';
const addRestaurant = () => {
   return (
      <div>
         <Banner1></Banner1>
         <ChooseUs></ChooseUs>
         <div className='mx-auto max-w-5xl'>
         <Works></Works>
         <Cards></Cards>
         <Banner2></Banner2>
         <Accordion></Accordion>
         </div>
         
      </div>
   );
};

export default addRestaurant;