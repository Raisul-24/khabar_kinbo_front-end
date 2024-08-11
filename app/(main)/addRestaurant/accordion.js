import React from 'react';

const accordion = () => {
   return (
      <div className=' my-5'>
         <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What will Khabar Kinbo charge me for creating a page on its platform?</div>
            <div className="collapse-content">
               <p>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
            </div>
         </div>
         <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
         <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
      </div>
   );
};

export default accordion;