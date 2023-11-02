const Navbar = () => {
  return (
    <header className="fixed z-40 flex flex-row items-center justify-between w-full h-16 p-5 transition-all duration-300 ease-in-out shadow-lg lg:px-10 bg-primary/50 backdrop-blur-lg">
      <nav className="flex items-center justify-between w-full">
        <div className="transition-colors duration-200 group hover:text-link">
          <a href="/">
            <div className="relative w-12 h-12">
              {/* <img
                alt="logo image"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center transition-all duration-300 ease-in-out filter group-hover:opacity-50"
                src="/img/logo.svg"
              /> */} Felipe Silveira
            </div>
          </a>
        </div>
        <ul className="justify-between hidden gap-6 lg:flex">
          <li className="relative font-light transition-colors hover:text-link text-md false">
            <a href="/">Home</a>
          </li>
          <li className="relative font-light transition-colors hover:text-link text-md false">
            <a href="/">Posts</a>
          </li>
          <li className="relative font-light transition-colors hover:text-link text-md false">
            <a href="/">Sobre mim</a>
          </li>
          <li className="relative font-light transition-colors hover:text-link text-md false">
            <a href="/">Contato</a>
          </li>
        </ul>
        <div className="z-50 flex transition-all duration-200 hover:text-link lg:hidden"></div>
      </nav>
    </header>
  );
};

export default Navbar;
