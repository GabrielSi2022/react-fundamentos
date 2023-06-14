"use client";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Avatar from "./avatar";
import Comment from "./comment";
import { IAuthor, IContent } from "./page";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IProps {
  author: IAuthor;
  content: IContent[];
  publishedAt: Date;
}

export interface IComments {
  id?: string;
  author?: string;
  publishedAt?: Date;
  content: string;
}

export default function Feed({ author, content, publishedAt }: IProps) {
  const [comments, setComments] = useState<IComments[]>([
    {
      id: uuidv4(),
      author: "",
      publishedAt: new Date(),
      content: "Hello Word",
    },
  ]);

  const [newCommentText, setNewCommentText] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newComment = {
      id: uuidv4(),
      author: "",
      publishedAt: new Date(),
      content: newCommentText,
    };

    setComments([...comments, newComment]);
    setNewCommentText("");
  }
  return (
    <article className="bg-gray-900 rounded-lg p-10 [&+article]:mt-8">
      <header className="flex items-start justify-between max-[430px]:flex-col max-[430px]:items-start">
        <div className="flex items-center gap-4  ">
          <Avatar src="Profile.svg" />
          <div className="flex flex-col  ">
            <strong className="text-base leading-6 text-gray-100">
              {author.name}
            </strong>
            <span className="text-sm text-gray-400 leading-6">
              {author.role}
            </span>
          </div>
        </div>

        <time
          className="text-sm text-gray-400  max-[430px]:mt-5"
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="leading-6 text-gray-300 mt-6">
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p className="mt-4">{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p className="mt-4 ">
                <a
                  className="font-bold text-green-500 hover:text-green-300"
                  href="#"
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="w-full mt-6 pt-6 
                       border-t-[1px] border-gray-600
                       flex flex-col"
      >
        <strong className="leading-6 text-gray-100">Deixe seu Feedback</strong>
        <textarea
          className="w-full h-24 p-4 mt-4
                 bg-gray-950 border-[1px] 
                 border-none rounded-lg  focus:outline-none focus:shadow-[0_0px_0px_2px_rgba(0,179,126,1)]
                 resize-none text-gray-100 leading-[1.4rem]
                  "
          name="comment"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Deixe um comentario"
        />
        <div className="flex items-start ">
          <button
            className="text-base text-gray-300 font-bold
                          px-6 py-[14px] mt-4
                          bg-green-500 rounded-lg hover:bg-green-400 
                          ease-in-out duration-150
                          "
            type="submit"
          >
            Comentar
          </button>
        </div>
      </form>
      <div className="mt-8">
        {comments.map((comments) => {
          return <Comment content={comments.content} />;
        })}
      </div>
    </article>
  );
}
