'use client'
import { PencilLine } from "@phosphor-icons/react";
import Image from "next/image";
import Avatar from "./avatar";


export default function Sidebar() {
  return (
    <div className=" bg-gray-900 rounded-lg max-[768px]:w-64 max-[768px]:mx-auto">
       <Image className="w-full h-[72px] object-cover rounded-t-lg" src="sideImg.svg" width={50} height={50} alt="sidebar img" />
   
   

      <div className=" w-full">
        <div className=" flex flex-col items-center">
          
        <Avatar marginTop={true} src="Profile.svg"/> 
        <div className="mt-4 mb-6 flex flex-col">
        <strong className="text-base leading-6 text-gray-100 text-center ">Lara Lombardi</strong>
        <span className="text-sm text-gray-400 leading-6">Web Development</span>
        </div>
        </div>
      </div>

      <div className="border-t-[1px] border-gray-600
                      px-8 py-6 text-center flex justify-center">
       <button className="text-base text-green-500
                          border-[1px] border-green-500 rounded-lg
                          px-6 py-3
                          flex justify-center items-center gap-[8px]
                          hover:bg-green-500 hover:text-white ease-in-out duration-150"> <PencilLine size={20}/> <a href="#">Editar seu Perfil</a></button>    
     </div>
      
      
    </div>
  );
}
