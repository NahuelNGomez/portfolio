export default function Navegation(){
    return (
        <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-dark0 border-b-4 border-b-solid border-b-dark1">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between" aria-label="Global">
          <a href="#">
            <svg className="sm:w-8 sm:h-8 h-4 w-4 text-gray-600 dark:text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 justify-end mt-0 pl-5">
            <a className="text-sm md:text-sm lg:text-base xl:text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#about" aria-current="page">About</a>
            <a className="text-sm md:text-sm lg:text-base xl:text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#work">Work</a>
            <a className="text-sm md:text-sm lg:text-base xl:text-xl text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Contact</a>
          </div>
        </nav>
      </header>
    )

}