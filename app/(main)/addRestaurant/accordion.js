import React from 'react';

const accordion = () => {
   return (
      <div className=' my-10'>
         <h2 className='font-bold mb:font-extrabold text-2xl mb:text-9xl my-5 text-center'>Frequently asked questions</h2>
         <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What will Khabar-Kinbo charge me for creating a page on its platform?</div>
            <div className="collapse-content">
               <p>Creating a restaurant page on Khabar Kinbo is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
            </div>
         </div>
         <div className="collapse collapse-arrow bg-base-200 my-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What all documents are required for registering on online ordering?</div>
            <div className="collapse-content">
               <p>Registration for online ordering requires: <br></br>

                  a: Login with phone no or google or any social media.<br></br>

                  b: Bank Account or Mobile Banking<br></br>

                  c: BDS certificate (if applicable)</p>
            </div>
         </div>
         <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">I have a large fleet of delivery boys, why should I use Khabar-kinbo’s delivery service?</div>
            <div className="collapse-content">
               <p>You can use your and Khabar-kinbo’s delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.</p>
            </div>
         </div>
         <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What happens if the average order value of Khabar-kinbo orders is very low</div>
            <div className="collapse-content">
               <p>Average order value from our platform is generally more than 200 BDT. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.</p>
            </div>
         </div>
      </div>
   );
};

export default accordion;