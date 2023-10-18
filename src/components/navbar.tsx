import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () =>{
    return(
        <div className="h-16 flex items-center justify-between text-white px-8 bg-gray-800">
            <p>Wellyngton Souza</p>
            <div className="flex">
                <a className="px-2 hover:text-red-500" href="https://www.instagram.com/wellyngtoonsouza/" target="_blank" rel="noreferrer">
                <FaInstagram />
                </a>
                <a className="px-2 hover:text-blue-500" href="https://linkedin.com/in/wellyngton-de-souza/" target="_blank" rel="noreferrer">
                <FaLinkedin />
                </a>
                <a className="px-2 hover:text-gray-500" href="https://github.com/wellyngton-souza" target="_blank" rel="noreferrer">
                <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default NavBar;