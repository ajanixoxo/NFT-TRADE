import React from 'react'
import about from './assets/images/about.png'

function About() {
  return (
    <div className="bg-[#0D0519] text-white flex flex-col md:flex-row items-center justify-center p-6 ">
        <div className="about-left w-full md:w-1/2"
        
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000">
        <img src={about} alt=" " />
        </div>
        <div  className="about-right w-full md:w-1/2 mt-4 md:m-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="250"
          data-aos-duration="1000">
        <h1 className="h1 text-[25px] md:text-[32px] font-semibold">
        About <span className="second">NFTs</span>
        </h1>
        <p className="text-[16px] md:text-[20px] leading-10">
        Non-Fungible Tokens (NFTs) are unique digital assets verified with blockchain technology. They represent ownership of specific items like artwork, music, and more, offering artists and creators a new way to monetize their work.
        </p>
        </div>
    </div>
  )
}

export default About