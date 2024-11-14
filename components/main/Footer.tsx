import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
    <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px] mb-[10px]">Community</div>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="button-style">
                    <FaYoutube />
                    <span>Youtube</span>    
                </a>
                <a href="https://github.com/ShashankRKumar" target="_blank" rel="noopener noreferrer" className="button-style">
                    <RxGithubLogo />
                    <span>Github</span>    
                </a>
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="button-style">
                    <RxDiscordLogo />
                    <span>Discord</span>    
                </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px] mb-[10px]">Social Media</div>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="button-style">
                    <RxInstagramLogo />
                    <span>Instagram</span>    
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="button-style">
                    <RxTwitterLogo />
                    <span>Twitter</span>    
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="button-style">
                    <RxLinkedinLogo />
                    <span>Linkedin</span>    
                </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px] mb-[10px]">About</div>
                <a href="mailto:mifwebchain@gmail.com" className="button-style">
                    <span>mifwebchain@gmail.com</span>    
                </a>
            </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
        </div>
    </div>
</div>

  )
}

export default Footer;
