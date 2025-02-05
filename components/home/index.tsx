import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../darcKmod";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

function HomeComponents() {
  return (
    <section className="w-[40%] m-auto">
      <div className="flex items-center justify-between py-4">
        <div className="flex  flex-col items-center justify-center ">
          <Image
            className="rounded-[100%]"
            src="/user1.jpg"
            alt="this is image"
            width={70}
            height={70}
          />
          <h3>Jakbaraliyev29</h3>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/login"}>
            <Button>Sing In</Button>
          </Link>

          <ModeToggle />
        </div>
      </div>

      <div>
        <div className="flex items-center w-full h-[40px] rounded-[20px] border border-gray-300 px-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition">
          <Input
            className=" w-full !border-none !outline-none"
            type="search"
            placeholder="Qidiruv..."
          />
          <Search className="  text-gray-400" />
        </div>
      </div>
    </section>
  );
}

export default HomeComponents;
