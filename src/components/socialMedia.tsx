import { FaGithub, FaTwitter, FaYoutube, FaTwitch, FaEnvelope } from 'react-icons/fa';

const SocialMedia = () =>{
    return(
        <div className="flex justify-center md:gap-16 gap-2">
            <a href="https://github.com/wellyngton-souza" target="_blank" rel="noopener noreferrer">
                <div className="p-4 rounded-full bg-gray-700 transition-all text-yellow-500 hover:text-white">
                <FaGithub size="22" />
                </div>
            </a>
            <a href="https://twitter.com/well4551" target="_blank" rel="noopener noreferrer">
                <div className="p-4 rounded-full bg-gray-700 transition-all text-yellow-500 hover:text-white">
                <FaTwitter size="22" />
                </div>
            </a>
            <a href="https://www.youtube.com/@Wellyoza" target="_blank" rel="noopener noreferrer">
                <div className="p-4 rounded-full bg-gray-700 transition-all text-yellow-500 hover:text-white">
                <FaYoutube size="22" />
                </div>
            </a>
            <a href="https://www.twitch.tv/wellyoza" target="_blank" rel="noopener noreferrer">
                <div className="p-4 rounded-full bg-gray-700 transition-all text-yellow-500 hover:text-white">
                <FaTwitch size="22" />
                </div>
            </a>
            <a href="https://wellyngtonteixeira12@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className="p-4 rounded-full bg-gray-700 transition-all text-yellow-500 hover:text-white">
                    <FaEnvelope size="22" />
                </div>
            </a>
        </div>
    );
}

export default SocialMedia;