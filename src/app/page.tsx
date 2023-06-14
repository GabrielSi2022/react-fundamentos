import Feed from "./feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/107134438?v=4",
      name: "Gabriel Henrique",
      role: "dev @imédiacomunicacao",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que  fiz no curso ignite , da Rocketseat. O nome do projeto é Ignite Feed🚀",
      },
      { type: "link", content: "👉 https://github.com/GabrielSi2022" },
      { type: "link", content: " #novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("06/12/2023  13:16:30"),
  },
];

export interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface IContent {
  type: string;
  content: string;
}

export default function Home() {
  return (
    <>
      <Header />

      <div
        className="max-w-[1120px]  mx-auto my-8 px-8  
                      grid  grid-cols-[256px_minmax(0,_1fr)] gap-8
                      max-[768px]:grid-cols-1 "
      >
        <div>
          <Sidebar />
        </div>
        <div>
          {posts.map((post) => {
            return (
              <Feed
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
