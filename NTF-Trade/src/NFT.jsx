import React from 'react'
import nft1 from '/images/nft1.png'
import nft2 from '/images/nft2.png'
import nft3 from '/images/nft3.png'
import nft4 from '/images/nf4.png'
import nft5 from '/images/nft5.png'
import nft6 from '/images/nft6.png'
import Line from '/images/line.png'
import ETH from  '/images/ETH.png'

function NFT(){
    return(
        <div className="flex flex-col justify-center items-center bg-[#0D0519] p-4 "
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000">
            <h1 className="h1 text-[25px] md:text-[32px] font-semibold text-white">Featured NFTs</h1>
            <div className="nft-container grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">

                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10  " 
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000">
                   <div className="img-container relative">
                    <img src={nft1} alt="" />
                    <p className="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Eternal</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10 "
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000" >
                   <div className="img-container relative">
                    <img src={nft2} alt="" />
                    <p class="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Neon</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10 "
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000" >
                   <div className="img-container relative">
                    <img src={nft3} alt="" />
                    <p class="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Shadows</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
                
                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10" 
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000">
                   <div className="img-container relative">
                    <img src={nft4} alt="" />
                    <p class="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Griffin</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000" >
                   <div className="img-container relative">
                    <img src={nft5} alt="" />
                    <p class="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Cosmos</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
                <div className="nft bg-[#303030] p-2 rounded-md flex flex-col gap-10"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="250"
                 data-aos-duration="1000" >
                   <div className="img-container relative">
                    <img src={nft6} alt="" />
                    <p class="text-white absolute top-0 right-0 bg-black px-4 text-[15px] rounded-md">3h 25m 3s</p>
                   </div>
                   <div className="details flex justify-between items-center">
                     <div className="info ">
                      <h4 className="">Escape</h4>
                      <div className="flex justify-start items-center gap-[10px]"> <img src={ETH} alt="" className="w-[15px] h-[15px] " /> <span className="text-[15px] text-[#815EE3]">ETH</span></div>
                     </div>
                     <span className="text-white text-[15px]">1 of 12</span>
                   </div>
                   <img src={Line} alt="" />
                   <p className="text-[16px] text-center text-[#5FECFC]">Place Bet </p>
                </div>
            </div>
            <svg width="206" height="84" viewBox="0 0 206 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_df_120_937)">
                    <rect x="14" y="14" width="178" height="56" rx="28" fill="#5FECFC"/>
                    </g>
                    <g filter="url(#filter1_d_120_937)">
                    <rect x="15" y="14" width="177" height="56" rx="28" fill="#0D0419" shape-rendering="crispEdges"/>
                    <path d="M61.727 49.5L57.3676 35.6221H58.9848L62.7993 47.918L66.6137 35.6221H68.2133L63.8715 49.5H61.727ZM72.1768 49.5H70.5772V39.2256H72.1768V49.5ZM70.4278 36.6592C70.4278 36.3779 70.5216 36.1377 70.7091 35.9385C70.9024 35.7393 71.1368 35.6396 71.4122 35.6396C71.6934 35.6396 71.922 35.7393 72.0977 35.9385C72.2735 36.1318 72.3614 36.3691 72.3614 36.6504C72.3614 36.9316 72.2735 37.1719 72.0977 37.3711C71.922 37.5645 71.6934 37.6611 71.4122 37.6611C71.1309 37.6611 70.8966 37.5645 70.7091 37.3711C70.5216 37.1719 70.4278 36.9346 70.4278 36.6592ZM81.739 43.1982C81.739 42.3604 81.5632 41.666 81.2116 41.1152C80.8249 40.5176 80.198 40.2158 79.3308 40.21C77.614 40.21 76.6618 41.3086 76.4743 43.5059H81.739V43.1982ZM76.4392 44.5518C76.4626 46.5439 77.0779 47.7803 78.2849 48.2607C78.6364 48.4014 79.0437 48.4717 79.5066 48.4717C80.4968 48.4717 81.3933 48.0996 82.196 47.3555L82.7409 48.6299C82.3073 48.9346 81.7741 49.1865 81.1413 49.3857C80.5144 49.5791 79.8728 49.6758 79.2165 49.6758C78.5661 49.6758 77.9421 49.541 77.3445 49.2715C76.7409 48.9961 76.2575 48.6182 75.8943 48.1377C75.156 47.1709 74.7898 45.9316 74.7956 44.4199C74.8015 42.9492 75.1677 41.7041 75.8943 40.6846C76.2575 40.1807 76.7321 39.7822 77.3181 39.4893C77.904 39.1904 78.5456 39.041 79.2429 39.041C79.946 39.041 80.5495 39.1611 81.0534 39.4014C81.5632 39.6357 81.9734 39.9609 82.2839 40.377C82.905 41.209 83.2155 42.2695 83.2155 43.5586C83.2155 43.8223 83.1833 44.1533 83.1189 44.5518H76.4392ZM92.2504 40.7461L90.0707 49.5H88.2601L85.3685 39.2256H86.9857L89.183 48.1553L91.389 39.2256H93.1644L95.4759 48.1729L97.5326 39.2256H99.1058L96.2933 49.5H94.4828L92.2504 40.7461ZM112.122 49.5L107.613 36.5889V49.5H106.251V35.6221H108.808L112.983 47.9355L117.158 35.6221H119.715V49.5H118.353V36.5889L113.844 49.5H112.122ZM123.846 43.1807C123.787 43.5557 123.758 43.957 123.758 44.3848C123.758 44.8125 123.787 45.2139 123.846 45.5889C123.905 45.9639 124.007 46.333 124.154 46.6963C124.3 47.0537 124.485 47.3613 124.707 47.6191C125.205 48.1875 125.908 48.4717 126.817 48.4717C128.129 48.4775 129.02 47.8887 129.489 46.7051C129.746 46.0488 129.875 45.2754 129.875 44.3848C129.875 42.334 129.266 41.0391 128.047 40.5C127.69 40.3418 127.28 40.2627 126.817 40.2627C126.354 40.2627 125.944 40.3418 125.586 40.5C125.229 40.6582 124.936 40.8691 124.707 41.1328C124.485 41.3906 124.3 41.7012 124.154 42.0645C124.007 42.4277 123.905 42.7998 123.846 43.1807ZM122.449 46.4502C122.255 45.8174 122.158 45.1289 122.158 44.3848C122.158 43.6406 122.255 42.9521 122.449 42.3193C122.642 41.6807 122.926 41.1152 123.301 40.623C123.676 40.1309 124.162 39.7441 124.76 39.4629C125.364 39.1816 126.049 39.041 126.817 39.041C127.584 39.041 128.27 39.1816 128.873 39.4629C129.477 39.7441 129.966 40.1309 130.341 40.623C130.716 41.1094 131 41.6719 131.194 42.3105C131.387 42.9492 131.484 43.6406 131.484 44.3848C131.484 45.1289 131.387 45.8174 131.194 46.4502C131 47.083 130.716 47.6426 130.341 48.1289C129.966 48.6094 129.477 48.9873 128.873 49.2627C128.27 49.5381 127.584 49.6758 126.817 49.6758C126.049 49.6758 125.364 49.5381 124.76 49.2627C124.162 48.9873 123.676 48.6094 123.301 48.1289C122.926 47.6426 122.642 47.083 122.449 46.4502ZM138.268 39.041C138.602 39.041 138.895 39.0762 139.147 39.1465V40.4824C139.03 40.459 138.796 40.4473 138.444 40.4473C138.093 40.4473 137.609 40.5703 136.994 40.8164C136.385 41.0566 135.916 41.332 135.588 41.6426V49.5H133.918V39.2256H135.175L135.438 40.9131C136.399 39.665 137.343 39.041 138.268 39.041ZM147.936 43.1982C147.936 42.3604 147.76 41.666 147.409 41.1152C147.022 40.5176 146.395 40.2158 145.528 40.21C143.811 40.21 142.859 41.3086 142.671 43.5059H147.936V43.1982ZM142.636 44.5518C142.66 46.5439 143.275 47.7803 144.482 48.2607C144.834 48.4014 145.241 48.4717 145.704 48.4717C146.694 48.4717 147.59 48.0996 148.393 47.3555L148.938 48.6299C148.504 48.9346 147.971 49.1865 147.338 49.3857C146.711 49.5791 146.07 49.6758 145.414 49.6758C144.763 49.6758 144.139 49.541 143.542 49.2715C142.938 48.9961 142.455 48.6182 142.091 48.1377C141.353 47.1709 140.987 45.9316 140.993 44.4199C140.999 42.9492 141.365 41.7041 142.091 40.6846C142.455 40.1807 142.929 39.7822 143.515 39.4893C144.101 39.1904 144.743 39.041 145.44 39.041C146.143 39.041 146.747 39.1611 147.251 39.4014C147.76 39.6357 148.17 39.9609 148.481 40.377C149.102 41.209 149.413 42.2695 149.413 43.5586C149.413 43.8223 149.38 44.1533 149.316 44.5518H142.636Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_df_120_937" x="0" y="0" width="206" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.419608 0 0 0 0 0.937255 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_937" result="shape"/>
                    <feGaussianBlur stdDeviation="7" result="effect2_foregroundBlur_120_937"/>
                    </filter>
                    <filter id="filter1_d_120_937" x="11" y="14" width="185" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_937" result="shape"/>
                    </filter>
                    </defs>
            </svg>

        </div>
    )
}

export default NFT