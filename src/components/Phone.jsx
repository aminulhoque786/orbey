import React from 'react';
import Container from './Container';

const Phone = () => {
  return (
    <Container className="pt-10">
     <div className="bg-luika bg-cover bg-center bg-no-repeat h-60 flex flex-col justify-center text-left px-4 sm:px-10 lg:pl-[500px]">
  <div className="flex flex-col items-start md:pl[300px] sm:items-start">
    <h2 className="font-dn font-semibold text-2xl sm:text-3xl text-[#262626]">
      Phone of the Year
    </h2>
    <p className="w-full text-base sm:text-lg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..
    </p>
    <h4 className="mt-4 hover:bg-orange-500 ease-in-out duration-500 px-3 py-2 w-[100px] bg-black text-white text-center">
      Shop Now
    </h4>
  </div>
</div>

    </Container>
  );
};

export default Phone;
