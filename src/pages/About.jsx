import React from 'react';

export default function About() {
  return (
    <div className='py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto'>
      <div className='flex flex-col justify-between gap-8 lg:flex-row'>
        <div className='flex w-full flex-col justify-center lg:w-5/12'>
          <h1 className='pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl'>
            About Us
          </h1>
          <p className='text-base font-normal leading-6 text-gray-600 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            minima. Temporibus repellat praesentium tenetur maiores possimus
            totam molestias velit, similique aperiam molestiae, iusto explicabo,
            cupiditate quam. Odit sit corrupti sequi repudiandae nesciunt.
            Tempore, quo eius vitae non a maiores, unde perferendis voluptate
            numquam aliquam libero modi excepturi facere dolor voluptatibus!
          </p>
        </div>
        <div className='w-full lg:w-8/12 '>
          <img
            className='h-full w-full'
            src='https://via.placeholder.com/700x400'
            alt='A group of People'
          />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-8 pt-12 lg:flex-row'>
        <div className='flex w-full flex-col justify-center lg:w-5/12'>
          <h1 className='pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl'>
            Our Story
          </h1>
          <p className='text-base font-normal leading-6 text-gray-600 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quisquam iste, sed, quos quas, quaerat fuga qui nam ullam obcaecati
            illo et iusto aliquam! Iste illo facilis quo voluptate architecto ut
            molestias quae eligendi. Suscipit modi blanditiis esse debitis
            consectetur culpa iusto id earum repudiandae distinctio eius,
            necessitatibus ut veritatis!
          </p>
        </div>
        <div className='w-full lg:w-8/12 lg:pt-8'>
          <div className='grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2 md:grid-cols-4 lg:gap-4'>
            <div className='flex flex-col items-center justify-center p-4 pb-6'>
              <img
                className='hidden md:block'
                src='https://via.placeholder.com/150x180'
                alt='Fajar featured Img'
              />
              <img
                className='block md:hidden'
                src='https://via.placeholder.com/300x180'
                alt='Fajar featured Img'
              />
              <p className='mt-4 text-xl font-medium leading-5 text-gray-800'>
                Fajar
              </p>
            </div>
            <div className='flex flex-col items-center justify-center p-4 pb-6'>
              <img
                className='hidden md:block'
                src='https://via.placeholder.com/150x180'
                alt='Lidya featured Img'
              />
              <img
                className='block md:hidden'
                src='https://via.placeholder.com/300x180'
                alt='Lidya featured Img'
              />
              <p className='mt-4 text-xl font-medium leading-5 text-gray-800'>
                Lidya
              </p>
            </div>
            <div className='flex flex-col items-center justify-center p-4 pb-6'>
              <img
                className='hidden md:block'
                src='https://via.placeholder.com/150x180'
                alt='Kiki featued Img'
              />
              <img
                className='block md:hidden'
                src='https://via.placeholder.com/300x180'
                alt='Kiki featued Img'
              />
              <p className='mt-4 text-xl font-medium leading-5 text-gray-800'>
                Kiki
              </p>
            </div>
            <div className='flex flex-col items-center justify-center p-4 pb-6'>
              <img
                className='hidden md:block'
                src='https://via.placeholder.com/150x180'
                alt='Mada featured img'
              />
              <img
                className='block md:hidden'
                src='https://via.placeholder.com/300x180'
                alt='Mada featured img'
              />
              <p className='mt-4 text-xl font-medium leading-5 text-gray-800'>
                Mada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
