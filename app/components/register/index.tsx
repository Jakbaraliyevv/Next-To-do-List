import React from "react";
import { FaMobileAlt, FaRegEnvelope, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

function RegisterComponents() {
  const styleInputDiv =
    "flex items-center gap-2 border-[1px] border-gray-500  w-full h-[45px]  px-3 rounded-md ";
  const styleInput = "w-full h-full bg-transparent outline-none";

  return (
    <section className="w-[90%] m-auto h-screen flex items-center justify-center flex-col gap-5">
      <div>
        <h1 className="text-[25px]  font-bold tracking-widest">Register</h1>
      </div>
      <form className="flex flex-col gap-5 w-[30%]">
        <div className={styleInputDiv}>
          <input
            required
            className={styleInput}
            type="text"
            placeholder="Full name"
          />
          <FaUser className="text-[19px]" />
        </div>
        <div className={styleInputDiv}>
          <input
            className={styleInput}
            required
            type="email"
            placeholder="Valid email"
          />
          <FaRegEnvelope className="text-[19px]" />
        </div>

        <div className={styleInputDiv}>
          <input
            className={styleInput}
            required
            type="text"
            placeholder="Phone number"
          />
          <FaMobileAlt className="text-[19px]" />
        </div>

        <div className={styleInputDiv}>
          <input
            className={styleInput}
            required
            type="password"
            placeholder="Strong Password"
          />
          <MdLockOutline className="text-[19px]" />
        </div>

        <button className="flex items-center justify-center text-[19px] gap-2 bg-blue-500 h-[40px] rounded-md">
          Next <IoIosArrowForward className="text-[19px]" />
        </button>
      </form>
    </section>
  );
}

export default RegisterComponents;
