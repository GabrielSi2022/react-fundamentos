import Avatar from "./avatar";
import Comment from "./comment";

export default function Feed() {
  return (
    <article className="bg-gray-900 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
        <Avatar  src="Profile.svg" />
        <div className="flex flex-col text-center ">
          <strong className="text-base leading-6 text-gray-100">Lara Lombardi</strong>
          <span className="text-sm text-gray-400 leading-6">Development</span>
        </div>
        </div>

        <time className="text-sm text-gray-400" title="11 de junho ás 18:36" dateTime="11/06/2023 18:36:30">Publicado há 1h</time>
      </header>

      <div className="leading-6 text-gray-300 mt-6">
           <p className="mt-4">Fala galeraa 👋</p>
           <p className="mt-4">Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no curso ignite  ,  da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
           <p className="mt-4">👉<a className="font-bold text-green-500 hover:text-green-300" href="https://github.com/GabrielSi2022"> github.com/GabrielSi2022</a></p>
           <p className="mt-4">
            <a className="font-bold text-green-500 hover:text-green-300" href="#">#novoprojeto</a>
            <a className="font-bold text-green-500 hover:text-green-300" href="#"> #nlw </a>
            <a className="font-bold text-green-500 hover:text-green-300" href="#">#rocketseat</a>
            </p>
      </div>

      <form className="w-full mt-6 pt-6 
                       border-t-[1px] border-gray-600
                       flex flex-col">
        <strong className="leading-6 text-gray-100">Deixe seu Feedback</strong>
        <textarea
        className="w-full h-24 p-4 mt-4
                 bg-gray-950 border-[1px] 
                 border-none rounded-lg  focus:outline-none focus:shadow-[0_0px_0px_2px_rgba(0,179,126,1)]
                 resize-none text-gray-100 leading-[1.4rem]
                  "
        placeholder="Deixe um comentario"
        />
        <div className="flex items-start ">
        <button className="text-base text-gray-300 font-bold
                          px-6 py-[14px] mt-4
                          bg-green-500 rounded-lg hover:bg-green-400 
                          ease-in-out duration-150
                          " type="submit">Comentar</button>
        </div>
      </form>
      <div className="mt-8">
         <Comment/>
         <Comment/>
         <Comment/>
      </div>
    </article>
    
  );
}
