import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-4xl px-6 mx-auto lg:max-w-7xl">
        <div className="flex flex-col pt-6 pb-4 border-t border-white/10">
          <div className="flex justify-between w-full pb-10">
            <div className="flex flex-col gap-6 max-w-7xl sm:max-w-xs">
              <div className="transition-colors duration-200 group hover:text-link">
                <a
                  href="https://www.linkedin.com/in/felipesilveirasp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Felipe Silveira
                </a>
              </div>
              <p>Junior Software Engineer</p>
            </div>
            <div className="flex flex-col gap-6 max-w-7xl sm:max-w-xs">
              <p className="text-xl font-bold">Redes</p>
              <ul className="flex flex-col justify-between gap-4">
                <li className="relative font-light transition-colors hover:text-link text-md undefined">
                  <a
                    className="flex items-center"
                    href="https://www.linkedin.com/in/felipesilveirasp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinLogo className="w-8 h-8" />{" "}
                    <p className="ml-1">Linkedin</p>
                  </a>
                </li>
                <li className="relative font-light transition-colors hover:text-link text-md undefined">
                  <a
                    className="flex items-center"
                    href="https://github.com/felipe-silveira-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubLogo className="w-8 h-8" />{" "}
                    <p className="ml-1">Github</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 max-w-7xl sm:max-w-xs">
              <p className="text-xl font-bold">Sitemap</p>
              <nav className="flex flex-col gap-4 text-left">
                <ul className="flex flex-col justify-between gap-4">
                  <li className="relative font-light transition-colors hover:text-link text-md false">
                    <a href="/">Home</a>
                  </li>
                  <li className="relative font-light transition-colors hover:text-link text-md false">
                    <a href="/posts">Posts</a>
                  </li>
                  <li className="relative font-light transition-colors hover:text-link text-md false">
                    <a href="/about">Sobre mim</a>
                  </li>
                  <li className="relative font-light transition-colors hover:text-link text-md false">
                    <a href="/contact">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto border-t border-white/10 sm:mt-6 lg:mt-4 lg:max-w-7xl">
        <p className="mt-4 text-xs leading-5 text-gray-400">
          &copy; {dayjs().year()} Felipe Silveira, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
