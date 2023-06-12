import { ThumbsUp, Trash } from "../Icon";
import Avatar from "./avatar";

export default function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <div>
        <Avatar src="https://avatars.githubusercontent.com/u/107134438?v=4" />
      </div>
      <div className=" flex-1">
        <div className="bg-gray-800 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col  ">
              <strong className="text-base leading-6 text-gray-100">
                Gabriel Henrique
              </strong>
              <time
                className="text-sm text-gray-400"
                title="11 de junho ás 18:36"
                dateTime="11/06/2023 18:36:30"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button
              className="text-gray-400 hover:text-red-600"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">Muito bem Lara, parabéns!! 👏👏</p>
        </div>

        <footer className="mt-4">
          <button
            className="text-gray-400 flex items-center 
                                               hover:text-green-500"
          >
            <ThumbsUp className="mr-2" size={20} />
            Aplaudir{" "}
            <span className="before:content-['\2022'] before:py-0 before:px-1">
              8
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
