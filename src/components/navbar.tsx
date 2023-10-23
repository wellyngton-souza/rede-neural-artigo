import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface ThemeProps{
    theme: string,
    mudarDark: Function
}

const NavBar: React.FC<ThemeProps> = ({ theme, mudarDark }) =>{
    const toggleTheme = () =>{
        mudarDark();
    }

    return(
        <div className={`h-16 flex items-center justify-between px-8 font-bold`}>
            <div className='flex'>
                <p className="text-xl">Wellyngton Souza</p>
                <button className='mx-4 hidden md:block' onClick={toggleTheme}>{theme}</button>
            </div>
            <div className="flex items-center">
                <a className="px-2 hover:text-red-500" href="https://www.instagram.com/wellyngtoonsouza/" target="_blank" rel="noreferrer">
                    <FaInstagram size={20} />
                </a>
                <a className="px-2 hover:text-blue-500" href="https://linkedin.com/in/wellyngton-de-souza/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={20} />
                </a>
                <a className="px-2 hover:text-gray-500" href="https://github.com/wellyngton-souza" target="_blank" rel="noreferrer">
                    <FaGithub size={20} />
                </a>
                <input className={`px-2 py-1 ml-2 hidden md:block rounded-md bg-transparent font-medium border-2 outline-none ${theme === "dark" ? "border-white" : "border-black"}`} type="text" />
            </div>
        </div>
    )
}

export default NavBar;