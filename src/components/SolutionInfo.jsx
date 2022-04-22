import React from 'react';
import useBreakpoints from '../custom/useBreakpoint';

export default function SolutionInfo({
  imgLeft = true,
  imgUrl,
  title,
  text,
  children,
}) {
  const point = useBreakpoints();

  function getLabelBg(left) {
    if (left) {
      return 'bg-amber-500';
    } else {
      return 'bg-teal-500';
    }
  }

  function getDivImage() {
    return (
      <div className="info-img w-full md:w-2/3 relative drop-shadow-xl">
        <img className="w-full rounded-3xl" src={imgUrl} alt="" />
        <div
          className={`absolute top-4 text-slate-100 text-center w-full font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-0 sm:p-2 md:p-4 ${getLabelBg(
            imgLeft
          )}`}
        >
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
        <div className="text pb-20 md:pb-0 pt-1 md:pt-0 h-full flex items-center justify-center text-xl sm:text-xl md:text-xl lg:text-2xl">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${imgLeft ? 'bg-odd' : 'bg-odd'}`}>
      <div className="flex flex-wrap justify-center border-0 pt-10">
        {imgLeft || point === 'sm' || point === 'xs' ? (
          <>
            {getDivImage()} {getDivText()}
          </>
        ) : (
          <>
            {getDivText()} {getDivImage()}
          </>
        )}
      </div>
    </div>
  );
}
