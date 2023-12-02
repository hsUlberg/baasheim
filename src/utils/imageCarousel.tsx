import React, { useState } from 'react';

interface Props {
  urls: {
    url: string;
  }[];
}

export function ImageCarousel(Props: Props) {
  const { urls } = Props;
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div>
      <div className="relative w-full">
        <div>
          {urls.map((url, index) => {
            return (
              <div
                key={`${url}-${index}`}
                className={
                  index == activeImage
                    ? 'duration-700 ease-in-out'
                    : 'hidden duration-700 ease-in-out'
                }>
                <img src={url.url} alt="..." />
              </div>
            );
          })}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {urls.map((_, index) => {
            return (
              <button
                key={`dot-${index}`}
                type="button"
                className={
                  index == activeImage
                    ? 'w-3 h-3 rounded-full bg-black'
                    : 'w-3 h-3 rounded-full bg-white'
                }
                onClick={() => setActiveImage(index)}></button>
            );
          })}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => {
            console.log(activeImage);
            let newImage = activeImage - 1;
            if (newImage < 0) {
              newImage = urls.length - 1;
            }
            setActiveImage(newImage);
          }}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => {
            let newImage = activeImage + 1;
            if (newImage >= urls.length) {
              newImage = 0;
            }
            setActiveImage(newImage);
          }}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
