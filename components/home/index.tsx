import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../darcKmod";
import { Search } from "lucide-react";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react"; // Edit va Delete ikonkalari

import { Checkbox } from "@/components/ui/checkbox";
function HomeComponents() {
  return (
    <div className="flex flex-col gap-7 w-[80%] m-auto mt-5">
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-[24px] font-bold">Today’s tasks</h2>
        <div className="flex items-end justify-between border-[1px] gap-[1.5em] border-gray-500 p-5 rounded-lg">
          <div className=" flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <Checkbox className="w-[20px] h-[20px]" id="terms" />
              <p className="text-[1.3em]">22:29</p>
            </div>
            <h4 className="text-justify text-[1.em]">Kitob oqish</h4>
          </div>
          <div className="flex flex-col gap-4">
            <Edit className="cursor-pointer" />
            <Trash2 className="cursor-pointer" />
          </div>
        </div>
          </div>
      <Button className="fixed w-[50px] text-[25px] h-[50px]  bottom-8 right-8 -translate-x-1/2 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none">
        +
      </Button>
    </div>
  );
}

export default HomeComponents;
