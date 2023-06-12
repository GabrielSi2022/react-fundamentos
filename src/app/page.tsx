import Feed from "./feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
    
       
      <Header />
    
      <div className="max-w-[1120px]  mx-auto my-8 px-8  
                      grid  grid-cols-[256px_minmax(0,_1fr)] gap-8
                      max-[768px]:grid-cols-1 ">

        <div>
        <Sidebar />
        </div>
        <div>
        <Feed />
        <Feed />
        <Feed />
        </div>
      </div>
     
     
      
    </>
  );
}
