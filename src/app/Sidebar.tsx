'use client'
import { PencilLine } from "@phosphor-icons/react";
import Image from "next/image";


export default function Sidebar() {
  return (
    <div className=" bg-gray-900 rounded-lg ">
       <Image className="w-full h-[72px] object-cover rounded-t-lg" src="sideImg.svg" width={50} height={50} alt="sidebar img" />
   
      <div></div>

      <div className=" w-full">
        <div className=" flex flex-col items-center">
          
        <img className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] mt-[calc(0px-1.5rem-6px)]
                        rounded-lg border-[4px] border-gray-800 outline-2 outline-green-500" src="https://avatars.githubusercontent.com/u/107134438?v=4" alt="icone user" />
        <div className="mt-4 mb-6 flex flex-col">
        <strong className="text-base leading-6 text-gray-100 ">Gabriel Henrique</strong>
        <span className="text-sm text-gray-400 leading-6">Web Development</span>
        </div>
        </div>
      </div>

      <div className="border-t-[1px] border-gray-600
                      px-8 py-6 text-center">
       <button className="text-base text-green-500
                          border-[1px] border-green-500 rounded-lg
                          px-6 py-3
                          flex justify-center items-center gap-[8px]"> <PencilLine size={20}/> Editar seu Perfil</button>    
     </div>
      
      
    </div>
  );
}
