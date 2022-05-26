import React from 'react';

const Blogs = () => {
    return (
        <div className='font-semibold mt-5 mb-12  w-4/6 mx-auto p-4'>
            <h1 className='text-4xl py-4'>Blogs</h1>
            <div className='text-justify bg-purple-200 p-4'>
              <h4 className='text-2xl'><span className='text-gray-500 text-2xl'>Question-1: </span>  How will you improve the performance of a React Application?</h4>
              <h6 className='pb-5'><span className='text-gray-500 text-xl pb-3'>Answer: </span>  To improve the performance of a react application, I will make the best use of react features and elements. For example, useState, useEffects , react custom hooks etc. These react elements make maintaining and spliting code in various files and creating a web application easier.</h6>
              <h4 className='text-2xl'><span className='text-gray-500 text-2xl'>Question-2: </span>  What are the different ways to manage a state in a React application?</h4>
              <h6 className='pb-5'><span className='text-gray-500 text-xl pb-3'>Answer: </span> There are some ways to manage a state in a React application react.  The different ways to manage a state in a React application are - data state, control state,Session State,Location State.</h6>
              <h4 className='text-2xl'><span className='text-gray-500 text-2xl'>Question-3: </span>  How does prototypical inheritance work?</h4>
              <h6 className='pb-5'><span className='text-gray-500 text-xl pb-3'>Answer: </span>  In  prototypical inheritance ork,  an object can inherit the properties and methods of another object.  We use Object. getPrototypeOf and Object to get the prototypical object.</h6>
              <h4 className='text-2xl'><span className='text-gray-500 text-2xl'>Question-4: </span>  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h4>
              <h6 className='pb-5'><span className='text-gray-500 text-xl pb-3'>Answer: </span> We can't set the state directly because of the following reasons: If we update it directly, calling the setState() afterward may just replace the update we made. So we use setProducts instead of products = [...] </h6>
              <h4 className='text-2xl'><span className='text-gray-500 text-2xl'>Question-5: </span>  What is a unit test? Why should write unit tests?</h4>
              <h6 className='pb-5'><span className='text-gray-500 text-xl pb-3'>Answer: </span>  Unit test is a kind of automated test. We should write unit tests so that a section of an application which is known as unit meets its design and also behaves as it was supposed to be.  </h6>
            </div>
        </div>
    );
};

export default Blogs;