import React from 'react';

export default function SolutionInfo({
  imgLeft = true,
  imgUrl,
  title,
  text,
  children,
}) {
  console.log(imgLeft);
  function getDivImage() {
    return (
      <div className="info-img w-full md:w-2/3 relative">
        <img className="w-full" src={imgUrl} alt="" />
        <div className="absolute top-2 text-center w-full font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl p-0 sm:p-2 md:p-4 bg-teal-500">
          {title}
        </div>
      </div>
    );
  }

  function getDivText() {
    return (
      <div className="w-full md:w-1/3 flex flex-col">
        {/* <div className="font-bold text-2xl md:text-3xl lg:text-4xl bg-teal-500 p-4 mb-2">
          {title}
        </div> */}
        <div className="text px-5 pb-3 h-full flex items-center justify-center text-xl sm:text-xl md:text-xl lg:text-2xl">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center border-0">
        {imgLeft ? (
          <>
            {getDivImage()} {getDivText()}
          </>
        ) : (
          <>
            {getDivText()} {getDivImage()}
          </>
        )}
      </div>
    </>
  );
}
