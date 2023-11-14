import { useState, useEffect} from "react";
import axios from "axios";
import Post from "../../components/post/Post";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
  const [user, setUser] = useState<IUser>();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get<IUser>('https://jsonplaceholder.typicode.com/users/1').
      then(response => {
        setUser(response.data);
      }).
      catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://myblog-backend.test/api/users').
      then(response => {
        setUsers(response.data);
        console.log(users);
      }).
      catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full max-w-4xl px-6 mx-auto lg:max-w-7xl">
      <div className="flex flex-col w-full">
        <div>
          <img
            alt="Profile picture"
            title="Profile picture"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/112597501?v=4"
          />
        </div>
        <h1 className="my-3 text-4xl font-bold">Software Engineer.</h1>
        <p className="text-md">
          Bem vindo ao meu blog! Eu sou Felipe Silveira, apaixonado por
          tecnologia, sempre buscando aprender algo novo todos os dias.
        </p>

        {users && (
          <div className="mt-3">
            {users.map((user) => (
              <div key={user.id}>
                <p className="text-md">
                  <strong>Nome:</strong> {user.name}
                </p>
                <p className="text-md">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            ))}
          </div>
        )}


        {user && (
          <div className="mt-3">
            <p className="text-md">
              <strong>Nome:</strong> {user.name}
            </p>
            <p className="text-md">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}
      </div>
      <div className="mt-12">
        <div className="w-full pb-12">
          <a
            className="flex flex-col w-full p-4 mb-3 shadow-2xl border transition-colors duration-300 rounded-lg hover:border hover:border-[#bb86fc] lg:flex-row"
            href="/"
          >
            <div className="relative w-full h-80 lg:mr-3">
              <img
                alt="Post Title"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center w-full transition-all duration-300 ease-in-out h-80 rounded-xl bg-primary group-hover:border-slate-900"
                src="https://miro.medium.com/v2/resize:fit:1200/1*V7jiZvQBIwUhUY_9VU8Jqg.jpeg"
              />
            </div>
            <div className="pt-3 lg:pt-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <a className="group" href="/">
                  <p className="rounded-2xl bg-gray-500 px-3 py-1 font-normal capitalize text-gray-200 transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-primary text-sm )}">
                    Laravel
                  </p>
                </a>
                <a className="group" href="/">
                  <p className="rounded-2xl bg-gray-500 px-3 py-1 font-normal capitalize text-gray-200 transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-primary text-sm )}">
                    Livewire
                  </p>
                </a>
              </div>
              <div className="text-gray-400">
                <time className="">
                  13 de junho de 2023 • 4 minutos de leitura
                </time>
              </div>
              <p className="max-w-md mt-2 text-2xl font-medium text-ellipsis text-gray-50">
                Post Title
              </p>
              <p className="mt-3 text-gray-300">
                Resumo do post em poucas palavras
              </p>
            </div>
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Post 
            title="O post title"
            image="https://miro.medium.com/v2/resize:fit:1200/1*V7jiZvQBIwUhUY_9VU8Jqg.jpeg"
            categories={['React', 'AlpineJS']}
            date="15 de maio de 2023 • 3 minutos de leitura"
            description="Vamos aprender React.js!"
          />
        </div>
      </div>
      <div className="flex justify-center w-full pb-8 mt-20">
        <button className="px-4 py-2 font-medium text-white transition-colors duration-300 rounded-md bg-primary hover:bg-link">
          Mais posts
        </button>
      </div>
    </div>
  );
};

export default Home;
