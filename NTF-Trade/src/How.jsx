import React from 'react'
import Wallet from '/images/Wallet.png'
import Dis from '/images/dis.png'
import Trade from '/images/trade.png'

function How() {
  return (
    <div className="bg-[#150A32] flex flex-col justify-center items-center p-10 lg:p-36 gap-10"
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="250"
    data-aos-duration="1000">
        <h1 className="h1 text-[25px] md:text-[32px] font-semibold text-white">How it <span className="second">Works</span></h1>
       <div className="how-container flex flex-col md:flex-row justify-center items-center gap-10">
       <div className="how flex flex-col justify-center items-center gap-5 bg-[#303030] p-5 py-10 rounded-lg"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="250"
         data-aos-duration="1000">
            <img src={Wallet} alt="" />
            <h4 className="">Connect Your Wallet</h4>
            <p className="text-[16px] text-center text-white font-light">
            Securely link your digital wallet to start buying and selling NFTs on our platform.
            </p>
        </div>
       <div className="how flex flex-col justify-center items-center gap-5 bg-[#303030] p-5 py-10 rounded-lg"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="250"
         data-aos-duration="1000">
            <img src={Dis} alt="" />
            <h4 className="">Connect Your Wallet</h4>
            <p className="text-[16px] text-center text-white font-light">
            Securely link your digital wallet to start buying and selling NFTs on our platform.
            </p>
        </div>
       <div className="how flex flex-col justify-center items-center gap-5 bg-[#303030] p-5 py-10 rounded-lg"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="250"
         data-aos-duration="1000">
            <img src={Trade} alt="" />
            <h4 className="">Connect Your Wallet</h4>
            <p className="text-[16px] text-center text-white font-light">
            Securely link your digital wallet to start buying and selling NFTs on our platform.
            </p>
        </div>
       </div>
      
    </div>
  )
}

export default How