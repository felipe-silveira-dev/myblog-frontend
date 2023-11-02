import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/felipesilveirasp/" target="_blank" rel="noreferrer">
          <LinkedinLogo className="w-8 h-8" />
        </a>
        <a href="https://github.com/felipe-silveira-dev" target="_blank" rel="noreferrer">
            <GithubLogo className="w-8 h-8" />
        </a>
      </div>
      <div className="mt-4 border-t border-white/10 pt-8 sm:mt-6 lg:mt-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {dayjs().year()} Felipe Silveira, Inc. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
