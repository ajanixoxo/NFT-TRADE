import React from 'react'
import AOS from 'aos/'
import logo from './assets/images/logo.png'
import brand from './assets/images/brand company.png'
function Hero() {
  return (
    <div className="main">
         <nav className="flex justify-between items-center pt-2">
        <div className="nav-left flex justify-center items-center gap-5 ml-5 "> 
            <img src={logo} className="w-10 md:w-auto" alt="" />
            <ul className="hidden md:flex gap-5 ">
                <li>Home</li>
                <li>Marketplace</li>
                <li>About</li>
                <li>Wallet</li>
            
            </ul>
        </div>
        <svg  width="256" height="256" className="md:hidden hambuger mr-2" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="white" d="M48.07 104H207.93C210.325 104.012 212.692 103.486 214.857 102.462C217.021 101.437 218.928 99.9395 220.437 98.0795C221.946 96.2195 223.018 94.0446 223.574 91.7151C224.13 89.3855 224.156 86.9609 223.65 84.62C216.22 49.5 176 24 128 24C80 24 39.78 49.5 32.35 84.62C31.844 86.9609 31.87 89.3855 32.4261 91.7151C32.9822 94.0446 34.0541 96.2195 35.5628 98.0795C37.0715 99.9395 38.9786 101.437 41.1433 102.462C43.308 103.486 45.6751 104.012 48.07 104ZM128 40C167.82 40 202.21 60.61 207.93 88H48.07L48 87.93C53.79 60.61 88.18 40 128 40ZM229.26 152.48L188.13 167.48L151 152.57C149.093 151.808 146.967 151.808 145.06 152.57L108.06 167.38L71 152.57C69.1755 151.841 67.1466 151.809 65.3 152.48L21.3 168.48C19.4404 169.299 17.9619 170.794 17.1646 172.663C16.3673 174.532 16.311 176.634 17.0071 178.543C17.7032 180.452 19.0995 182.024 20.9127 182.941C22.7259 183.858 24.82 184.051 26.77 183.48L40 178.69V184C40 194.609 44.2143 204.783 51.7157 212.284C59.2172 219.786 69.3913 224 80 224H176C186.609 224 196.783 219.786 204.284 212.284C211.786 204.783 216 194.609 216 184V174.33L234.73 167.52C235.78 167.213 236.756 166.693 237.598 165.993C238.439 165.294 239.128 164.429 239.622 163.452C240.116 162.476 240.404 161.408 240.469 160.316C240.534 159.223 240.374 158.129 239.999 157.101C239.624 156.073 239.042 155.133 238.289 154.339C237.536 153.544 236.629 152.913 235.622 152.484C234.616 152.054 233.532 151.836 232.437 151.842C231.343 151.848 230.262 152.079 229.26 152.52V152.48ZM200 184C200 190.365 197.471 196.47 192.971 200.971C188.47 205.471 182.365 208 176 208H80C73.6348 208 67.5303 205.471 63.0294 200.971C58.5286 196.47 56 190.365 56 184V172.88L67.87 168.56L105 183.43C106.907 184.192 109.033 184.192 110.94 183.43L147.94 168.62L184.94 183.43C186.764 184.159 188.793 184.191 190.64 183.52L199.91 180.15L200 184ZM16 128C16 125.878 16.8429 123.843 18.3431 122.343C19.8434 120.843 21.8783 120 24 120H232C234.122 120 236.157 120.843 237.657 122.343C239.157 123.843 240 125.878 240 128C240 130.122 239.157 132.157 237.657 133.657C236.157 135.157 234.122 136 232 136H24C21.8783 136 19.8434 135.157 18.3431 133.657C16.8429 132.157 16 130.122 16 128Z" />
</svg>

        <div className="nav-right md:flex items-center justify-center gap-10 hidden mr-10">
            <div className="flex bg-[#dfc] gap-5 nav2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.61522 0.25 1.25 4.61522 1.25 10C1.25 15.3848 5.61522 19.75 11 19.75C16.3848 19.75 20.75 15.3848 20.75 10C20.75 4.61522 16.3848 0.25 11 0.25ZM2.75 10C2.75 5.44365 6.44365 1.75 11 1.75C15.5563 1.75 19.25 5.44365 19.25 10C19.25 14.5563 15.5563 18.25 11 18.25C6.44365 18.25 2.75 14.5563 2.75 10Z" fill="#FAFAFA"/>
                    <path d="M19.5304 17.4698C19.2375 17.1769 18.7626 17.1769 18.4697 17.4698C18.1768 17.7626 18.1768 18.2375 18.4697 18.5304L22.4696 22.5304C22.7625 22.8233 23.2374 22.8233 23.5303 22.5304C23.8232 22.2375 23.8232 21.7626 23.5303 21.4697L19.5304 17.4698Z" fill="#FAFAFA"/>
                    </svg>
                    <input type="" placeholder="Search by creator" />
                    
            </div>
            <svg width="206" className="hambuger" height="84" viewBox="0 0 206 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_df_120_796)">
                <rect x="14" y="14" width="178" height="56" rx="28" fill="#5FECFC"/>
                </g>
                <g filter="url(#filter1_d_120_796)">
                <rect x="15" y="14" width="177" height="56" rx="28" fill="#0D0419" shape-rendering="crispEdges"/>
                <path d="M51.4884 50.291L51.0754 49.1748C52.1711 49.0049 52.8947 48.7236 53.2463 48.3311C53.4748 48.0674 53.6183 47.8359 53.6769 47.6367C53.7355 47.4375 53.7795 47.2676 53.8088 47.127C53.8439 46.9863 53.8673 46.8047 53.8791 46.582C53.9025 46.2773 53.9113 45.8467 53.9054 45.29V35.6221H55.5929V44.9824C55.5988 46.5176 55.4377 47.6426 55.1095 48.3574C54.8166 49.0137 54.4064 49.4854 53.8791 49.7725C53.258 50.1182 52.4611 50.291 51.4884 50.291ZM59.7234 43.1807C59.6648 43.5557 59.6355 43.957 59.6355 44.3848C59.6355 44.8125 59.6648 45.2139 59.7234 45.5889C59.782 45.9639 59.8846 46.333 60.0311 46.6963C60.1775 47.0537 60.3621 47.3613 60.5848 47.6191C61.0828 48.1875 61.7859 48.4717 62.6941 48.4717C64.0066 48.4775 64.8973 47.8887 65.366 46.7051C65.6238 46.0488 65.7527 45.2754 65.7527 44.3848C65.7527 42.334 65.1434 41.0391 63.9246 40.5C63.5672 40.3418 63.157 40.2627 62.6941 40.2627C62.2313 40.2627 61.8211 40.3418 61.4637 40.5C61.1063 40.6582 60.8133 40.8691 60.5848 41.1328C60.3621 41.3906 60.1775 41.7012 60.0311 42.0645C59.8846 42.4277 59.782 42.7998 59.7234 43.1807ZM58.326 46.4502C58.1326 45.8174 58.0359 45.1289 58.0359 44.3848C58.0359 43.6406 58.1326 42.9521 58.326 42.3193C58.5193 41.6807 58.8035 41.1152 59.1785 40.623C59.5535 40.1309 60.0398 39.7441 60.6375 39.4629C61.241 39.1816 61.9266 39.041 62.6941 39.041C63.4617 39.041 64.1473 39.1816 64.7508 39.4629C65.3543 39.7441 65.8436 40.1309 66.2186 40.623C66.5936 41.1094 66.8777 41.6719 67.0711 42.3105C67.2645 42.9492 67.3611 43.6406 67.3611 44.3848C67.3611 45.1289 67.2645 45.8174 67.0711 46.4502C66.8777 47.083 66.5936 47.6426 66.2186 48.1289C65.8436 48.6094 65.3543 48.9873 64.7508 49.2627C64.1473 49.5381 63.4617 49.6758 62.6941 49.6758C61.9266 49.6758 61.241 49.5381 60.6375 49.2627C60.0398 48.9873 59.5535 48.6094 59.1785 48.1289C58.8035 47.6426 58.5193 47.083 58.326 46.4502ZM71.562 49.5H69.9623V39.2256H71.562V49.5ZM69.8129 36.6592C69.8129 36.3779 69.9067 36.1377 70.0942 35.9385C70.2875 35.7393 70.5219 35.6396 70.7973 35.6396C71.0786 35.6396 71.3071 35.7393 71.4829 35.9385C71.6586 36.1318 71.7465 36.3691 71.7465 36.6504C71.7465 36.9316 71.6586 37.1719 71.4829 37.3711C71.3071 37.5645 71.0786 37.6611 70.7973 37.6611C70.5161 37.6611 70.2817 37.5645 70.0942 37.3711C69.9067 37.1719 69.8129 36.9346 69.8129 36.6592ZM75.9386 41.7656V49.5H74.2686V39.2256H75.4991L75.71 40.8691C76.1143 40.3594 76.7032 39.9316 77.4766 39.5859C78.2559 39.2344 78.9591 39.0586 79.586 39.0586C80.2188 39.0586 80.7491 39.167 81.1768 39.3838C81.6104 39.5947 81.9503 39.8906 82.1964 40.2715C82.6768 41.0156 82.9171 41.9619 82.9171 43.1104V49.5H81.2471V43.1104C81.2413 42.085 81.0567 41.3438 80.6934 40.8867C80.3829 40.5 79.9522 40.3066 79.4014 40.3066C78.8507 40.3008 78.2296 40.4561 77.5382 40.7725C76.8526 41.083 76.3194 41.4141 75.9386 41.7656ZM99.2816 36.4131L101.866 47.9619L104.59 35.6221H106.172L103.043 49.5H100.705L98.0775 37.7842L95.4496 49.5H93.1029L89.974 35.6221H91.5648L94.2894 47.9619L96.8734 36.4131H99.2816ZM111.841 48.4717C112.843 48.4717 113.827 48.0205 114.794 47.1182V44.499C114.026 44.376 113.367 44.3145 112.816 44.3145C112.266 44.3145 111.861 44.3291 111.604 44.3584C111.352 44.3877 111.097 44.4463 110.839 44.5342C110.587 44.6221 110.379 44.7393 110.215 44.8857C109.846 45.2139 109.661 45.7324 109.661 46.4414C109.661 47.1445 109.837 47.6602 110.188 47.9883C110.54 48.3105 111.091 48.4717 111.841 48.4717ZM114.794 43.6553V43.2334C114.788 41.9561 114.58 41.1416 114.17 40.79C113.783 40.4619 113.265 40.2979 112.614 40.2979C111.378 40.2979 110.244 40.626 109.213 41.2822L108.624 40.21C109.298 39.8291 109.922 39.5391 110.496 39.3398C111.076 39.1406 111.727 39.041 112.447 39.041C113.174 39.041 113.804 39.123 114.337 39.2871C114.87 39.4453 115.295 39.7119 115.611 40.0869C115.928 40.4619 116.147 40.916 116.271 41.4492C116.399 41.9824 116.464 42.6562 116.464 43.4707V49.5H115.233L114.987 47.9355C114.138 49.0957 112.951 49.6758 111.428 49.6758C110.35 49.6758 109.506 49.4092 108.896 48.876C108.287 48.3369 107.982 47.54 107.982 46.4854C107.982 45.3779 108.375 44.5459 109.16 43.9893C109.887 43.4736 110.795 43.2158 111.885 43.2158C112.289 43.2158 112.79 43.2598 113.388 43.3477C113.985 43.4297 114.454 43.5322 114.794 43.6553ZM120.717 49.5H119.118V39.2256H120.717V49.5ZM118.968 36.6592C118.968 36.3779 119.062 36.1377 119.25 35.9385C119.443 35.7393 119.677 35.6396 119.953 35.6396C120.234 35.6396 120.463 35.7393 120.638 35.9385C120.814 36.1318 120.902 36.3691 120.902 36.6504C120.902 36.9316 120.814 37.1719 120.638 37.3711C120.463 37.5645 120.234 37.6611 119.953 37.6611C119.672 37.6611 119.437 37.5645 119.25 37.3711C119.062 37.1719 118.968 36.9346 118.968 36.6592ZM129.506 49.1484C128.838 49.4648 128.12 49.623 127.353 49.623C126.585 49.623 125.967 49.3711 125.498 48.8672C125.03 48.3574 124.795 47.6895 124.795 46.8633V40.1396H123.187V39.2256H125.041V36.0527L126.465 35.6484V39.2256H129.392V40.1396H126.465V46.8809C126.465 47.3145 126.568 47.6777 126.773 47.9707C126.984 48.2578 127.306 48.4014 127.74 48.4014C128.173 48.4014 128.657 48.2725 129.19 48.0146L129.506 49.1484ZM131.835 49.5V35.6221L133.505 35.3145V49.5H131.835ZM137.811 49.5H136.211V39.2256H137.811V49.5ZM136.062 36.6592C136.062 36.3779 136.156 36.1377 136.343 35.9385C136.537 35.7393 136.771 35.6396 137.046 35.6396C137.328 35.6396 137.556 35.7393 137.732 35.9385C137.908 36.1318 137.996 36.3691 137.996 36.6504C137.996 36.9316 137.908 37.1719 137.732 37.3711C137.556 37.5645 137.328 37.6611 137.046 37.6611C136.765 37.6611 136.531 37.5645 136.343 37.3711C136.156 37.1719 136.062 36.9346 136.062 36.6592ZM140.307 48.6211L140.869 47.3467C141.244 47.6689 141.698 47.9385 142.232 48.1553C142.771 48.3662 143.225 48.4717 143.594 48.4717C143.963 48.4717 144.271 48.4453 144.517 48.3926C144.763 48.334 145.003 48.2461 145.238 48.1289C145.753 47.8652 146.014 47.4023 146.02 46.7402C146.02 46.0547 145.636 45.5537 144.868 45.2373C144.529 45.0967 144.151 44.9707 143.735 44.8594C143.324 44.7422 142.911 44.6104 142.495 44.4639C142.085 44.3174 141.71 44.1416 141.37 43.9365C141.03 43.7256 140.752 43.4297 140.535 43.0488C140.324 42.6621 140.219 42.2256 140.219 41.7393C140.219 41.2471 140.324 40.8281 140.535 40.4824C140.746 40.1309 141.025 39.8555 141.37 39.6562C142.068 39.2461 142.847 39.041 143.708 39.041C144.195 39.041 144.789 39.1494 145.492 39.3662C146.201 39.583 146.726 39.835 147.066 40.1221L146.521 41.3789C145.665 40.6875 144.76 40.3418 143.805 40.3418C142.352 40.3418 141.625 40.8164 141.625 41.7656C141.619 42.2695 142.009 42.665 142.794 42.9521C143.146 43.0811 143.529 43.21 143.946 43.3389C144.367 43.4619 144.786 43.6113 145.202 43.7871C145.624 43.9629 146.008 44.1709 146.354 44.4111C146.705 44.6455 146.989 44.9678 147.206 45.3779C147.423 45.7822 147.531 46.248 147.531 46.7754C147.531 47.2969 147.42 47.751 147.197 48.1377C146.969 48.5244 146.667 48.8262 146.292 49.043C145.554 49.4648 144.684 49.6758 143.682 49.6758C143.178 49.6758 142.577 49.5732 141.88 49.3682C141.189 49.1572 140.664 48.9082 140.307 48.6211ZM155.819 49.1484C155.151 49.4648 154.433 49.623 153.666 49.623C152.898 49.623 152.28 49.3711 151.811 48.8672C151.343 48.3574 151.108 47.6895 151.108 46.8633V40.1396H149.5V39.2256H151.354V36.0527L152.778 35.6484V39.2256H155.705V40.1396H152.778V46.8809C152.778 47.3145 152.881 47.6777 153.086 47.9707C153.297 48.2578 153.619 48.4014 154.053 48.4014C154.486 48.4014 154.97 48.2725 155.503 48.0146L155.819 49.1484Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_df_120_796" x="0" y="0" width="206" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.419608 0 0 0 0 0.937255 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_796"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_796" result="shape"/>
                <feGaussianBlur stdDeviation="7" result="effect2_foregroundBlur_120_796"/>
                </filter>
                <filter id="filter1_d_120_796" x="11" y="14" width="185" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_796"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_796" result="shape"/>
                </filter>
                </defs>
            </svg>

            {/* <button>
                  Join Waitlist
            </button> */}
            {/* <svg className="btn" width="206" height="84" viewBox="0 0 206 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_df_120_797)">
                <rect x="14" y="14" width="178" height="56" rx="28" fill="#5FECFC"/>
                </g>
                <defs>
                <filter id="filter0_df_120_797" x="0" y="0" width="206" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.419608 0 0 0 0 0.937255 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_797"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_797" result="shape"/>
                <feGaussianBlur stdDeviation="7" result="effect2_foregroundBlur_120_797"/>
                </filter>
                </defs>
                </svg> */}
                
      
                
                
        </div>
    </nav>
    <div className="hero display flex flex-col md:justify-start justify-center items-center md:items-start mt-[20%] md:mt-[10%] md:ml-[50px] gap-[20px] md:gap-[30px]">
        <h1 className="h1 text-[25px] md:text-[46px] text-center md:text-left"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">Discover and <span  className="second">Trade</span>  <br/>
            Extraordinary <span className="second">Digital Art</span> </h1>
        <p className="p text-[16px] md:text-[24px] text-center md:text-left "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
            Join the vibrant community of creators and collectors.
        </p>
        {/* <!-- <button>Exlpore Now</button> - */}
        <svg width="200"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
                        data-aos-once="false" height="78" viewBox="0 0 200 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_df_120_769)">
                <rect x="11" y="11" width="178" height="56" rx="28" fill="#5FECFC"/>
                </g>
                <g filter="url(#filter1_d_120_769)">
                <rect x="12" y="11" width="177" height="56" rx="28" fill="url(#paint0_radial_120_769)" shape-rendering="crispEdges"/>
                <path d="M54.1746 46.5H45.535V32.6221H54.0604V33.8789H47.24V38.6689H53.199V39.6797H47.24V45.2432H54.1746V46.5ZM56.3452 36.2256H58.2436L60.7221 40.3301L63.2709 36.2256H65.1166L61.5483 41.3672L65.0463 46.5H63.2534L60.7748 42.3076L58.2436 46.5H56.3803L59.9663 41.3672L56.3452 36.2256ZM72.2266 46.6758C71.6407 46.6758 71.0694 46.5293 70.5128 46.2363C69.9561 45.9375 69.4786 45.5449 69.0802 45.0586V50.5869L67.4102 50.7803V36.2256H68.6495L68.9395 37.9658C69.3555 37.4092 69.8507 36.9492 70.4249 36.5859C70.9991 36.2227 71.588 36.041 72.1915 36.041C72.8009 36.041 73.3399 36.1436 73.8087 36.3486C74.2833 36.5479 74.6759 36.8174 74.9864 37.1572C75.297 37.4971 75.5577 37.8984 75.7686 38.3613C76.1612 39.2227 76.3575 40.2246 76.3575 41.3672C76.3575 43.1426 75.8946 44.5371 74.9688 45.5508C74.2891 46.3008 73.3751 46.6758 72.2266 46.6758ZM74.4151 43.8545C74.544 43.5205 74.6319 43.1836 74.6788 42.8438C74.7315 42.498 74.7579 42.1465 74.7579 41.7891C74.7579 41.4258 74.7462 41.1006 74.7227 40.8135C74.7052 40.5205 74.6671 40.1953 74.6085 39.8379C74.5499 39.4805 74.4591 39.1611 74.336 38.8799C74.2188 38.5928 74.0723 38.3262 73.8966 38.0801C73.5157 37.5586 72.962 37.2979 72.2354 37.2979C71.7491 37.2979 71.1866 37.4385 70.5479 37.7197C69.9093 38.001 69.42 38.3203 69.0802 38.6777V43.9951C69.3673 44.3584 69.8243 44.6953 70.4513 45.0059C71.0841 45.3164 71.6143 45.4717 72.0421 45.4717C72.4698 45.4717 72.8419 45.4014 73.1583 45.2607C73.4805 45.1143 73.7384 44.9268 73.9317 44.6982C74.1309 44.4639 74.2921 44.1826 74.4151 43.8545ZM78.7829 46.5V32.6221L80.4529 32.3145V46.5H78.7829ZM84.5834 40.1807C84.5248 40.5557 84.4955 40.957 84.4955 41.3848C84.4955 41.8125 84.5248 42.2139 84.5834 42.5889C84.642 42.9639 84.7445 43.333 84.891 43.6963C85.0375 44.0537 85.222 44.3613 85.4447 44.6191C85.9427 45.1875 86.6459 45.4717 87.5541 45.4717C88.8666 45.4775 89.7572 44.8887 90.2259 43.7051C90.4837 43.0488 90.6127 42.2754 90.6127 41.3848C90.6127 39.334 90.0033 38.0391 88.7845 37.5C88.4271 37.3418 88.017 37.2627 87.5541 37.2627C87.0912 37.2627 86.681 37.3418 86.3236 37.5C85.9662 37.6582 85.6732 37.8691 85.4447 38.1328C85.222 38.3906 85.0375 38.7012 84.891 39.0645C84.7445 39.4277 84.642 39.7998 84.5834 40.1807ZM83.1859 43.4502C82.9925 42.8174 82.8959 42.1289 82.8959 41.3848C82.8959 40.6406 82.9925 39.9521 83.1859 39.3193C83.3793 38.6807 83.6634 38.1152 84.0384 37.623C84.4134 37.1309 84.8998 36.7441 85.4974 36.4629C86.1009 36.1816 86.7865 36.041 87.5541 36.041C88.3216 36.041 89.0072 36.1816 89.6107 36.4629C90.2142 36.7441 90.7035 37.1309 91.0785 37.623C91.4535 38.1094 91.7377 38.6719 91.931 39.3105C92.1244 39.9492 92.2211 40.6406 92.2211 41.3848C92.2211 42.1289 92.1244 42.8174 91.931 43.4502C91.7377 44.083 91.4535 44.6426 91.0785 45.1289C90.7035 45.6094 90.2142 45.9873 89.6107 46.2627C89.0072 46.5381 88.3216 46.6758 87.5541 46.6758C86.7865 46.6758 86.1009 46.5381 85.4974 46.2627C84.8998 45.9873 84.4134 45.6094 84.0384 45.1289C83.6634 44.6426 83.3793 44.083 83.1859 43.4502ZM99.0059 36.041C99.3398 36.041 99.6328 36.0762 99.8848 36.1465V37.4824C99.7676 37.459 99.5332 37.4473 99.1816 37.4473C98.8301 37.4473 98.3467 37.5703 97.7314 37.8164C97.1221 38.0566 96.6533 38.332 96.3252 38.6426V46.5H94.6553V36.2256H95.9121L96.1758 37.9131C97.1367 36.665 98.0801 36.041 99.0059 36.041ZM108.673 40.1982C108.673 39.3604 108.498 38.666 108.146 38.1152C107.759 37.5176 107.132 37.2158 106.265 37.21C104.548 37.21 103.596 38.3086 103.409 40.5059H108.673V40.1982ZM103.374 41.5518C103.397 43.5439 104.012 44.7803 105.219 45.2607C105.571 45.4014 105.978 45.4717 106.441 45.4717C107.431 45.4717 108.328 45.0996 109.131 44.3555L109.675 45.6299C109.242 45.9346 108.709 46.1865 108.076 46.3857C107.449 46.5791 106.807 46.6758 106.151 46.6758C105.501 46.6758 104.877 46.541 104.279 46.2715C103.675 45.9961 103.192 45.6182 102.829 45.1377C102.09 44.1709 101.724 42.9316 101.73 41.4199C101.736 39.9492 102.102 38.7041 102.829 37.6846C103.192 37.1807 103.667 36.7822 104.253 36.4893C104.839 36.1904 105.48 36.041 106.177 36.041C106.881 36.041 107.484 36.1611 107.988 36.4014C108.498 36.6357 108.908 36.9609 109.218 37.377C109.839 38.209 110.15 39.2695 110.15 40.5586C110.15 40.8223 110.118 41.1533 110.053 41.5518H103.374ZM127.016 45.2256V32.6221H128.439V46.5H126.137L118.851 33.8965V46.5H117.427V32.6221H119.729L127.016 45.2256ZM132.561 40.1807C132.503 40.5557 132.473 40.957 132.473 41.3848C132.473 41.8125 132.503 42.2139 132.561 42.5889C132.62 42.9639 132.722 43.333 132.869 43.6963C133.015 44.0537 133.2 44.3613 133.422 44.6191C133.92 45.1875 134.624 45.4717 135.532 45.4717C136.844 45.4775 137.735 44.8887 138.204 43.7051C138.461 43.0488 138.59 42.2754 138.59 41.3848C138.59 39.334 137.981 38.0391 136.762 37.5C136.405 37.3418 135.995 37.2627 135.532 37.2627C135.069 37.2627 134.659 37.3418 134.301 37.5C133.944 37.6582 133.651 37.8691 133.422 38.1328C133.2 38.3906 133.015 38.7012 132.869 39.0645C132.722 39.4277 132.62 39.7998 132.561 40.1807ZM131.164 43.4502C130.97 42.8174 130.874 42.1289 130.874 41.3848C130.874 40.6406 130.97 39.9521 131.164 39.3193C131.357 38.6807 131.641 38.1152 132.016 37.623C132.391 37.1309 132.878 36.7441 133.475 36.4629C134.079 36.1816 134.764 36.041 135.532 36.041C136.299 36.041 136.985 36.1816 137.588 36.4629C138.192 36.7441 138.681 37.1309 139.056 37.623C139.431 38.1094 139.715 38.6719 139.909 39.3105C140.102 39.9492 140.199 40.6406 140.199 41.3848C140.199 42.1289 140.102 42.8174 139.909 43.4502C139.715 44.083 139.431 44.6426 139.056 45.1289C138.681 45.6094 138.192 45.9873 137.588 46.2627C136.985 46.5381 136.299 46.6758 135.532 46.6758C134.764 46.6758 134.079 46.5381 133.475 46.2627C132.878 45.9873 132.391 45.6094 132.016 45.1289C131.641 44.6426 131.357 44.083 131.164 43.4502ZM148.847 37.7461L146.667 46.5H144.857L141.965 36.2256H143.582L145.779 45.1553L147.986 36.2256H149.761L152.072 45.1729L154.129 36.2256H155.702L152.89 46.5H151.079L148.847 37.7461Z" fill="black"/>
                </g>
                <defs>
                <filter id="filter0_df_120_769" x="0" y="0" width="200" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.419608 0 0 0 0 0.937255 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_769"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_769" result="shape"/>
                <feGaussianBlur stdDeviation="5.5" result="effect2_foregroundBlur_120_769"/>
                </filter>
                <filter id="filter1_d_120_769" x="8" y="11" width="185" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_769"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_769" result="shape"/>
                </filter>
                <radialGradient id="paint0_radial_120_769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.999997 67) rotate(-8.38325) scale(192.052 60.7622)">
                <stop offset="0.141667" stop-color="#2575FF"/>
                <stop offset="0.686328" stop-color="#5FECFC"/>
                <stop offset="0.930327" stop-color="#57E493"/>
                </radialGradient>
                </defs>
        </svg>

        <div className="box gap-[30px] md:gap-[70px] mt-2 "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
         <div>
            <h1 className="text-[20px] md:text-[30px]" >28K+</h1>
            <p className="text-[16px] md:text-[18px]">Satisfied User</p>
         </div>
         <div>
            <h1 className="text-[20px] md:text-[30px]">18K+</h1>
            <p className="text-[16px] md:text-[18px]">Artist</p>
         </div>
         <div>
            <h1 className="text-[20px] md:text-[30px]">20K+</h1>
            <p className="text-[16px] md:text-[18px]">Distributor</p>
        </div>
        </div>
    </div>
    <div className="brand">
        <img 
        src={brand} alt="" />
    </div>
    </div>
  )
}

export default Hero