"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../darcKmod";
import Link from "next/link";
import { Search } from "lucide-react";
import { UserLoginType, UserType } from "@/app/types";

function Navbar() {
  const userData: UserLoginType = JSON.parse(
    localStorage.getItem("login") || "{}"
  );

  const userRegisterData: UserType[] = JSON.parse(
    localStorage.getItem("register") || "[]"
  );

  console.log(userData, "userData");
  console.log(userRegisterData, "userRegisterData");

  return (
    <section className="sticky top-0 z-50 dark:bg-[rgb(10,10,10)] bg-[#FFF] ">
      <div className="w-[90%] m-auto">
        <div className=" flex items-center justify-between py-4 ">
          <div className="flex  flex-col items-center gap-1 justify-center ">
            <Image
              className="rounded-[100%]"
              src="/user1.jpg"
              alt="this is image"
              width={70}
              height={70}
            />
            <h3 className="text-[1rem] font-bold">Jakbaraliyev29</h3>
          </div>
          <div className="flex  items-center w-[50%] h-[2.5rem] rounded-[20px] border border-gray-300 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition">
            <input
              className=" w-full  border-none dark:text-[#FFF] text-[#333] text-[1rem] outline-none bg-transparent"
              type="search"
              placeholder="Qidiruv..."
            />
            <Search className="  text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            {!userData || Object.keys(userData).length === 0 ? (
              <Link href={"/login"}>
                <Button className="text-[1rem] font-medium">Sign In</Button>
              </Link>
            ) : (
              userRegisterData.map((value, index) => (
                <Button key={index} className="text-[1rem] font-medium">
                  {value.name}
                </Button>
              ))
            )}

            <ModeToggle />
          </div>
        </div>
        <div className="flex hidden items-center w-[50%] h-[2.5rem] rounded-[20px] border border-gray-300 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition">
          <input
            className=" w-full  border-none text-[#FFF] text-[1rem] outline-none bg-transparent"
            type="search"
            placeholder="Qidiruv..."
          />
          <Search className="  text-gray-400" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
