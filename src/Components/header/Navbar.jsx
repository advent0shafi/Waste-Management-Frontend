import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav>
        <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
          <div className="w-full max-w-[80vw]  h-full max-md:max-w-full max-md:my-10 ">
            <div className="w-full flex justify-between py-[15px] ">
              <div>
                <img src="/logo-01.png" alt="" className="w-12 h-12" />
              </div>
              <ul className="flex gap-[28px] justify-center items-center h-auto">
               
                <li className="text-[16px] leading-[19.36px] font-normal ">
Home                </li>
                <li className="text-[16px] leading-[19.36px] font-normal ">
                  
                  Solace Kids
                </li>
                <li className="text-[16px] leading-[19.36px] font-normal ">
                  Credibility
                </li>
                <li className="text-[16px] leading-[19.36px] font-normal ">
                  {" "}
                  Funding
                </li>
                <li>  <a href="/worker/login" >     
                  <button className="text-[16px] text-white leading-[19.36px] font-normal w-[102px] h-[38px] rounded-[44px] bg-[#028D6B]">
                               Login

                  </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
