import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-900 h-[100px] flex justify-center">
      <div className="flex items-center gap-4">
        <div>
          <Image src="ignitelogo.svg" width={50} height={50} alt="logo" />
        </div>

        <div>
          <h1 className="text-white text-2xl">Ignite Feed</h1>
        </div>
      </div>
    </div>
  );
}
