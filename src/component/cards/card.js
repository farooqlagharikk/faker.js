import React from "react";
import Faker from "faker";

const card = () => {
  return (
    <div className="flex justify-center container my-[100px]">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-black text-xl font-medium mb-2">
            {" "}
            {Faker.Name.firstName()}
          </h5>
          <p className="text-black text-base mb-4">{Faker.Name.firstName()}</p>
          <p className="text-gray-800 text-xs">{Faker.Address.zipCode()}</p>
          <input type="text" placeholder={Faker.Name.firstName()} />
        </div>
      </div>
    </div>
  );
};

export default card;
