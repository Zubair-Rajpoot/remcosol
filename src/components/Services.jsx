import React from "react";

const Services = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgb(229 231 235 / 1) 50%, #261141 50%)",
        }}
      >
        <div className={`pt-[5%] px-[10%]`}>
          <div
            className={`flex flex-row justify-center flex-wrap space-x-4 to-[#261141] `}
          >
            <div
              className={`max-w-[23%] shadow-lg bg-white
            max-h-[50%] py-8 px-3 hover:bg-[#261141] group`}
            >
              <div
                className={`group-hover:bg-[#261141] group-hover:text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  style={{
                    fill: "currentcolor",
                    marginBottom: "14px",
                    width: "54px",
                    height: "54px",
                  }}
                >
                  <path
                    className="firstsvg"
                    d="M 5 4 C 3.347656 4 2 5.347656 2 7 L 2 47 C 2 48.652344 3.347656 50 5 50 L 24 50 L 24 52 L 16.660156 52 C 15.320313 52 14.070313 52.519531 13.121094 53.460938 L 8 58.589844 C 7.429688 59.160156 7.261719 60.019531 7.570313 60.769531 C 7.878906 61.519531 8.601563 62 9.410156 62 L 54.589844 62 C 55.398438 62 56.121094 61.519531 56.429688 60.769531 C 56.738281 60.019531 56.570313 59.160156 56 58.589844 L 50.878906 53.460938 C 49.929688 52.519531 48.679688 52 47.339844 52 L 40 52 L 40 50 L 59 50 C 60.652344 50 62 48.652344 62 47 L 62 7 C 62 5.347656 60.652344 4 59 4 Z M 5 6 L 59 6 C 59.550781 6 60 6.449219 60 7 L 60 47 C 60 47.550781 59.550781 48 59 48 L 5 48 C 4.449219 48 4 47.550781 4 47 L 4 7 C 4 6.449219 4.449219 6 5 6 Z M 9 10 C 8.449219 10 8 10.445313 8 11 L 8 43 C 8 43.554688 8.449219 44 9 44 L 55 44 C 55.550781 44 56 43.554688 56 43 L 56 11 C 56 10.445313 55.550781 10 55 10 Z M 10 12 L 54 12 L 54 42 L 10 42 Z M 24 16 C 23.746094 16 23.488281 16.097656 23.292969 16.292969 L 15.292969 24.292969 C 14.902344 24.683594 14.902344 25.316406 15.292969 25.707031 L 23.292969 33.707031 C 23.488281 33.902344 23.742188 34 24 34 C 24.257813 34 24.511719 33.902344 24.707031 33.707031 C 25.097656 33.316406 25.097656 32.683594 24.707031 32.292969 L 17.414063 25 L 24.707031 17.707031 C 25.097656 17.316406 25.097656 16.683594 24.707031 16.292969 C 24.511719 16.097656 24.253906 16 24 16 Z M 40 16 C 39.746094 16 39.488281 16.097656 39.292969 16.292969 C 38.902344 16.683594 38.902344 17.316406 39.292969 17.707031 L 46.585938 25 L 39.292969 32.292969 C 38.902344 32.683594 38.902344 33.316406 39.292969 33.707031 C 39.488281 33.902344 39.742188 34 40 34 C 40.257813 34 40.511719 33.902344 40.707031 33.707031 L 48.707031 25.707031 C 49.097656 25.316406 49.097656 24.683594 48.707031 24.292969 L 40.707031 16.292969 C 40.511719 16.097656 40.253906 16 40 16 Z M 12 36 C 11.449219 36 11 36.445313 11 37 L 11 39 C 11 39.554688 11.449219 40 12 40 C 12.550781 40 13 39.554688 13 39 L 13 37 C 13 36.445313 12.550781 36 12 36 Z M 17 36 C 16.449219 36 16 36.445313 16 37 L 16 39 C 16 39.554688 16.449219 40 17 40 C 17.550781 40 18 39.554688 18 39 L 18 37 C 18 36.445313 17.550781 36 17 36 Z M 22 36 C 21.449219 36 21 36.445313 21 37 L 21 39 C 21 39.554688 21.449219 40 22 40 C 22.550781 40 23 39.554688 23 39 L 23 37 C 23 36.445313 22.550781 36 22 36 Z M 27 36 C 26.449219 36 26 36.445313 26 37 L 26 39 C 26 39.554688 26.449219 40 27 40 C 27.550781 40 28 39.554688 28 39 L 28 37 C 28 36.445313 27.550781 36 27 36 Z M 32 36 C 31.449219 36 31 36.445313 31 37 L 31 39 C 31 39.554688 31.449219 40 32 40 C 32.550781 40 33 39.554688 33 39 L 33 37 C 33 36.445313 32.550781 36 32 36 Z M 37 36 C 36.449219 36 36 36.445313 36 37 L 36 39 C 36 39.554688 36.449219 40 37 40 C 37.550781 40 38 39.554688 38 39 L 38 37 C 38 36.445313 37.550781 36 37 36 Z M 42 36 C 41.449219 36 41 36.445313 41 37 L 41 39 C 41 39.554688 41.449219 40 42 40 C 42.550781 40 43 39.554688 43 39 L 43 37 C 43 36.445313 42.550781 36 42 36 Z M 47 36 C 46.449219 36 46 36.445313 46 37 L 46 39 C 46 39.554688 46.449219 40 47 40 C 47.550781 40 48 39.554688 48 39 L 48 37 C 48 36.445313 47.550781 36 47 36 Z M 52 36 C 51.449219 36 51 36.445313 51 37 L 51 39 C 51 39.554688 51.449219 40 52 40 C 52.550781 40 53 39.554688 53 39 L 53 37 C 53 36.445313 52.550781 36 52 36 Z M 26 50 L 38 50 L 38 56 L 26 56 Z M 16.660156 54 L 24 54 L 24 56 C 24 57.101563 24.898438 58 26 58 L 38 58 C 39.101563 58 40 57.101563 40 56 L 40 54 L 47.339844 54 C 48.128906 54 48.910156 54.320313 49.460938 54.878906 L 54.589844 60 L 9.410156 60 L 14.539063 54.878906 C 15.089844 54.320313 15.871094 54 16.660156 54 Z"
                  ></path>
                </svg>
                <h1 className="text-3xl pb-5 text-[#261141] font-semibold group-hover:text-white">
                  Web Development
                </h1>
                <p className="text-md mb-6">
                  We deliver the most scalable web development services
                  utilizing the latest tools and cutting-edge technologies for
                  your projects.
                </p>
              </div>
            </div>
            <div
              className={`max-w-[23%] shadow-lg bg-white hover:bg-[#261141] max-h-[50%] py-8 px-3 group`}
            >
              <div
                className={`group-hover:bg-[#261141] group-hover:text-white`}
              >
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="64"
                  height="64"
                  style={{
                    fill: "currentcolor",
                    marginBottom: "14px",
                    width: "54px",
                    height: "54px",
                  }}
                >
                  <path
                    id="Layer"
                    fillRule="evenodd"
                    className="s0"
                    d="m164.8-0.5q3.3 0 6.7 0 8.9-0.1 17.9 0 9.4 0 18.8 0 16.8-0.1 33.6 0 15.2 0 30.4 0 17.7-0.1 35.4 0 9.4 0 18.7 0 8.8-0.1 17.6 0 3.2 0 6.4 0c15.1-0.1 27.2 0.6 38.7 11.5 10.8 11.3 11.6 23.5 11.5 38.3q0 2.8 0 5.6 0 7.6 0 15.3 0 8.2 0 16.4 0.1 16.2 0 32.3 0 13.1 0 26.2 0 1.9 0 3.8 0 3.8 0 7.6 0.1 34.5 0 69 0 31.5 0 63 0.1 35.4 0 70.8 0 3.8 0 7.6c0 1.9 0 1.9 0 3.8q0 13 0 26.1 0.1 16 0 31.9 0 8.2 0 16.3 0 7.5 0 14.9 0 2.7 0 5.4c0.1 14-1.5 25.2-11.5 35.7-12.3 11.8-25.7 11.6-41.8 11.5q-3.3 0-6.7 0-8.9 0.1-17.9 0-9.4 0-18.8 0-16.8 0.1-33.6 0-15.2 0-30.4 0-17.7 0.1-35.4 0-9.4 0-18.7 0-8.8 0.1-17.6 0-3.2 0-6.4 0c-15.1 0.1-27.2-0.6-38.7-11.5-10.8-11.3-11.6-23.5-11.5-38.3q0-2.8 0-5.6 0-7.6 0-15.3 0-8.2 0-16.4-0.1-16.2 0-32.3 0-13.1 0-26.2 0-1.9 0-3.8 0-3.8 0-7.6-0.1-34.5 0-69 0-31.5 0-63-0.1-35.4 0-70.8 0-3.8 0-7.6 0-1.9 0-3.8 0-13 0-26.1-0.1-16 0-31.9 0-8.2 0-16.3 0-7.5 0-14.9 0-2.7 0-5.4c-0.1-14 1.5-25.2 11.5-35.7 12.3-11.8 25.7-11.6 41.8-11.5zm-29.8 23.5c-8.4 9.7-7.3 22.4-7.3 34.4q0 2.7 0 5.4 0 7.3 0 14.6 0 7.9 0 15.9 0 15.5 0 31 0 12.6 0 25.1 0 1.8 0 3.7 0 3.6 0 7.3 0 34.1 0 68.2 0.1 29.3 0 58.6 0 34.1 0 68.1 0 3.6 0 7.3 0 1.7 0 3.6 0 12.5 0 25.1 0 15.3 0 30.7 0 7.8 0 15.6 0 7.2 0 14.3 0 2.6 0 5.2c-0.3 17.1-0.3 17.1 7.3 31.9 7.4 6.4 16.5 7.3 25.9 7.3q1.3 0 2.6 0 4.2 0 8.5 0 3 0 6.1 0 8.2 0 16.5 0 8.7 0 17.3 0 14.6 0 29.2 0 16.8-0.1 33.6 0 14.4 0 28.9 0 8.6 0 17.2 0 8.1 0 16.2 0 3 0 6 0 4 0 8.1 0 1.1 0 2.3 0c8.9-0.1 16.7-1.4 23.2-7.9 6.5-7.3 7.5-14.3 7.5-23.9 0-1.1 0-1.1 0-2.2q0-3.7 0-7.4 0-2.6 0-5.3 0-7.3 0-14.7 0-7.9 0.1-15.8 0-15.5 0-31 0-12.7 0-25.3 0-35.7 0-71.4 0-2 0-3.9 0-1.9 0-3.9 0-31.3 0-62.6 0-32.1 0-64.2 0-18 0-36 0.1-15.4 0-30.7 0-7.9 0.1-15.7 0-7.2-0.1-14.3 0-2.6 0.1-5.2c0.3-17.1 0.3-17.1-7.3-31.9-9.8-7.6-19-7.1-30.9-7.1q-1.9 0-3.8 0.1-4.7 0-9.3 0-0.7 1.3-1.3 2.7-2.5 5.1-5 10.1-1.1 2.1-2.1 4.3-1.6 3.1-3.1 6.2-0.5 1-1 2c-2.3 4.6-2.3 4.6-4.5 5.7q-2.4 0.1-4.8 0.1-1.5 0-3 0.1-1.7 0-3.4 0c-1.7 0-1.7 0-3.5 0q-5.8 0-11.6 0-3 0-6.1 0-8.3 0-16.7 0-10.8 0-21.7 0.1-8.3 0-16.7 0-5 0-10 0-5.6 0.1-11.2 0.1c-1.6 0-1.6 0-3.3 0q-1.5 0-3.1 0c-1.3 0-1.3 0-2.7 0-2.7-0.5-3.5-1.2-5.2-3.4q-1.8-3.2-3.4-6.4-0.4-0.9-0.9-1.9-1.4-2.9-2.9-5.9-1-2-2-4-2.4-4.9-4.8-9.8-6.5-0.1-12.9-0.1-1.8-0.1-3.7-0.1c-10.1 0-19.4 0.3-27.4 7.2zm63-7c2.1 6.8 2.1 6.8 7 16 33.7 0 67.3 0 102 0 4.8-7.7 4.8-7.7 7-16-38.3 0-76.6 0-116 0z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m300 121c2.8 1.3 5.3 2.8 7.8 4.7q1.1 0.8 2.2 1.6 1.2 0.9 2.4 1.8c1.3 1 1.3 1 2.6 1.9 7.1 5.3 14.1 10.6 21.1 16q10.3 7.9 20.8 15.4c10.5 7.6 10.5 7.6 11.8 11.7q-0.1 0.9-0.1 1.9c0 1 0 1 0.1 1.9-2.1 6.3-10.3 10.8-15.3 14.5q-1.4 1.1-2.8 2.2-10.2 7.6-20.4 15.1-6.5 4.8-13 9.8-1.4 1.1-2.9 2.2-2.8 2.2-5.5 4.4-1.3 1-2.6 2-1.1 0.9-2.2 1.8-1 0.5-2 1.1c-3.9-1.3-4.8-3.2-7.2-6.6q-1.1-1.5-2.2-3-0.8-1.2-1.6-2.4c1.4-3.5 3.1-5.2 6.1-7.4q1.3-0.9 2.6-1.9 1.3-1 2.7-2.1c1.4-1 1.4-1 2.9-2.1q4.3-3.3 8.7-6.5 1.3-1 2.7-2c13.7-10.2 13.7-10.2 19.9-14.6q1.5-1 3.1-2.2 1.3-0.8 2.6-1.7c0.8-0.8 0.8-0.8 1.7-1.5q0-1 0-2c-1.5-1.3-1.5-1.3-3.4-2.7q-1.1-0.8-2.3-1.6-1.2-0.9-2.5-1.8-2.6-1.9-5.2-3.8-1.4-1-2.8-2c-5.5-4.1-11-8.3-16.4-12.5-3.8-2.8-7.5-5.7-11.4-8.5q-0.8-0.6-1.7-1.2-2.2-1.6-4.4-3.1-0.9-0.9-1.9-1.8c0-4.8 1.1-6 4-9.8q1.1-1.4 2.2-2.9 0.9-1.2 1.8-2.3z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m210 121c3.9 1.3 4.8 3.2 7.2 6.6q1.1 1.5 2.2 3 0.8 1.2 1.6 2.4c-1.4 3.5-3.1 5.2-6.1 7.4q-1.3 0.9-2.6 1.9-1.3 1-2.7 2.1-1.4 1-2.9 2.1-4.3 3.3-8.7 6.5-1.3 1-2.7 2c-13.7 10.2-13.7 10.2-19.9 14.6q-1.5 1-3.1 2.2-1.3 0.8-2.6 1.7-0.8 0.8-1.7 1.5 0 1 0 2c1.5 1.3 1.5 1.3 3.4 2.7q1.1 0.8 2.3 1.6 1.2 0.9 2.5 1.8 2.6 1.9 5.2 3.8 1.4 1 2.8 2c5.5 4.1 11 8.3 16.4 12.5 3.8 2.8 7.5 5.7 11.4 8.5q0.8 0.6 1.7 1.2 2.2 1.6 4.4 3.1 0.9 0.9 1.9 1.8c0 4.8-1.1 6-4 9.8q-1.1 1.4-2.3 2.9-0.8 1.2-1.7 2.3c-2.8-1.3-5.3-2.8-7.8-4.7q-1.1-0.8-2.2-1.6-1.2-0.9-2.4-1.8-1.3-0.9-2.6-1.9c-7.1-5.3-14.1-10.6-21.1-16q-10.3-7.9-20.8-15.4c-10.5-7.6-10.5-7.6-11.8-11.7 0.1-0.9 0.1-0.9 0.1-1.9q0-1-0.1-1.9c2.1-6.3 10.3-10.8 15.3-14.5q1.4-1.1 2.8-2.2 10.2-7.6 20.4-15.1 6.5-4.8 13-9.8c1.4-1.1 1.4-1.1 2.9-2.2q2.8-2.2 5.5-4.4 1.3-1 2.6-2 1.1-0.9 2.2-1.8 1-0.5 2-1.1z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m208 384c52.8 0 105.6 0 160 0 0 5.3 0 10.6 0 16-52.8 0-105.6 0-160 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m208 320c52.8 0 105.6 0 160 0 0 5.3 0 10.6 0 16-52.8 0-105.6 0-160 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m208 256c52.8 0 105.6 0 160 0 0 5.3 0 10.6 0 16-52.8 0-105.6 0-160 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m144 352c47.5 0 95 0 144 0 0 5.3 0 10.6 0 16-47.5 0-95 0-144 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m144 288c47.5 0 95 0 144 0 0 5.3 0 10.6 0 16-47.5 0-95 0-144 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m264 117c5.3 1.3 10.6 2.6 16 4-1.2 7.3-2.8 14.4-4.9 21.5q-0.4 1.5-0.8 3-1.4 4.8-2.8 9.7-1 3.3-2 6.7-2.5 8.8-5.1 17.7-2.6 9-5.2 18-5.1 17.7-10.2 35.4c-4.2 1-6.7 0.8-10.8-0.4-1.5-0.5-1.5-0.5-3-0.9q-1.1-0.3-2.2-0.7c-1-3.2-1-5.1 0-8.3q0.3-1.3 0.7-2.6c0.4-1.4 0.4-1.4 0.8-2.8q0.4-1.5 0.8-3 1.4-4.8 2.8-9.7 1-3.4 2-6.8 2-7.1 4-14.2 2.7-9.1 5.3-18.3 2-7 4-14 0.9-3.3 1.9-6.7 1.3-4.7 2.7-9.4 0.4-1.4 0.8-2.8c1.5-5.2 3.2-10.3 5.2-15.4z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m208 464c31.7 0 63.4 0 96 0 0 5.3 0 10.6 0 16-31.7 0-63.4 0-96 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m320 352c15.8 0 31.7 0 48 0 0 5.3 0 10.6 0 16-15.8 0-31.7 0-48 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m320 288c15.8 0 31.7 0 48 0 0 5.3 0 10.6 0 16-15.8 0-31.7 0-48 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m144 384c10.6 0 21.1 0 32 0 0 5.3 0 10.6 0 16-10.6 0-21.1 0-32 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m144 320c10.6 0 21.1 0 32 0 0 5.3 0 10.6 0 16-10.6 0-21.1 0-32 0 0-5.3 0-10.6 0-16z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m144 256c10.6 0 21.1 0 32 0 0 5.3 0 10.6 0 16-10.6 0-21.1 0-32 0 0-5.3 0-10.6 0-16z"
                  ></path>
                </svg>
                <h1 className="text-3xl pb-5 text-[#261141] font-semibold group-hover:text-white">
                  Mobile Development
                </h1>
                <p className="text-md mb-6">
                  We believe in leveraging the inherent strengths of Mobile Apps
                  Development to create highly scalable and efficient
                  applications.{" "}
                </p>
              </div>
            </div>
            <div
              className={`max-w-[23%] shadow-lg bg-white hover:bg-[#261141] max-h-[50%] py-8 px-3 group`}
            >
              <div
                className={`group-hover:bg-[#261141] group-hover:text-white`}
              >
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="64"
                  height="64"
                  style={{
                    fill: "currentcolor",
                    marginBottom: "14px",
                    width: "54px",
                    height: "54px",
                  }}
                >
                  <path
                    id="Layer"
                    fillRule="evenodd"
                    className="s0"
                    d="m426.5 107.8q1.8 0 3.6 0c1.9 0 1.9 0 3.8 0 1.9-0.1 1.9-0.1 3.9-0.1q4.1 0 8.2 0 5.3 0 10.5-0.1 5.1 0 10.1 0c1.9-0.1 1.9-0.1 3.8-0.1 11 0 11 0 15.6 4.5 3.6 4.5 4.6 7.9 4.5 13.6q0 1.1 0 2.3 0.1 3.7 0 7.4 0 2.7 0.1 5.4 0 7.2 0 14.5 0 6.1 0 12.1 0 14.3 0 28.6 0 14.8 0 29.6 0 12.6 0 25.3 0 7.6 0.1 15.1 0 7.2-0.1 14.3 0 2.6 0 5.2 0.1 3.6 0 7.1 0 1.1 0.1 2.1c-0.1 3.8-0.7 5.3-3 8.3-2.7 2.1-2.7 2.1-6.3 2.7-3.4-0.6-3.4-0.6-5.6-2.7-2.3-3.6-2.3-5.9-2.3-10.2q0-1.1 0-2.2 0-3.6 0-7.2 0-2.6 0-5.2 0-7.1 0.1-14.1 0-7.4 0-14.8 0-14 0.1-27.9 0.1-16 0.1-31.9 0.1-32.7 0.2-65.4c-15.5 0-31 0-47 0 0 123.1 0 246.2 0 373 15.5 0 31 0 47 0 0-5.1 0-10.1 0-15.4q-0.1-25-0.2-50.1 0-15.2 0-30.4-0.1-13.3-0.1-26.5 0-7 0-14.1 0-6.6 0-13.2 0-2.4-0.1-4.8 0-3.3 0-6.6 0-1.9 0-3.8c0.4-3.4 1-4.8 3.4-7.1 4-1.1 6.1-1.4 9.9 0.3 2.1 1.7 2.1 1.7 3.1 3.7q0.1 3.3 0.1 6.6c0 1.1 0 1.1 0 2.1q0 3.5 0 6.9 0 2.5 0 5 0 6.8 0 13.5 0 7.1 0 14.1 0 13.4 0 26.8 0 15.2 0 30.4-0.1 31.3-0.1 62.6 1.3-0.1 2.7-0.2 1.7 0 3.6-0.1 1.7-0.1 3.5-0.2c3.2 0.5 3.2 0.5 5.6 2.8 1.6 2.7 1.6 2.7 1.5 6.3-1.2 4.6-1.2 4.6-3.9 6.4-2.8 0.3-5.3 0.4-8.1 0.4q-1.2 0-2.5 0-4.2 0-8.5 0-3 0-6.1 0-8.4 0-16.9 0-9 0-18.1 0-17.8 0.1-35.6 0.1-14.5 0-28.9 0-2.1 0-4.2 0c-1 0-1 0-2 0-1.1 0-1.1 0-2.1 0q-1.1 0-2.1 0-29.1 0-58.2 0c-1.1 0-1.1 0-2.2 0q-5.5 0-11.1 0-1.1 0-2.2 0-2.3 0-4.5 0-34.8 0-69.5 0-39 0.1-78 0.1-4.2 0-8.4 0c-1 0-1 0-2 0q-15.5 0-31 0-17.6 0.1-35.2 0-9 0-17.9 0-8.3 0.1-16.5 0-3 0-5.9 0-4.1 0.1-8.1 0c-1.2 0-1.2 0-2.4 0.1-3.8-0.1-5.5-0.4-8.3-3-2-3.7-1.6-5.7-0.5-9.7 1.1-1.7 1.1-1.7 3-3 3.1-0.3 3.1-0.3 6.7-0.2q1.7 0.1 3.6 0.1c1.3 0 1.3 0 2.7 0.1q0-1 0-2.1-0.1-25-0.2-50 0-12.1 0-24.2-0.1-10.5-0.1-21.1 0-5.6 0-11.1 0-6.3 0-12.5-0.1-1.9-0.1-3.7c0.1-10.5 0.1-10.5 3.4-15.3 4.4-4.1 7.6-5.1 13.5-5.2q1.7 0 3.4 0c1.8 0 1.8 0 3.7 0q1.8 0 3.7 0 4 0 7.9 0 4.1 0 8.2-0.1 5.8 0 11.7 0 1.8 0 3.6-0.1c10.5 0.1 10.5 0.1 15.3 3.4 4.1 4.4 5.1 7.5 5.1 13.4 0 1.7 0 1.7 0 3.5 0 1.8 0 1.8 0 3.7q0 2 0 4 0 5.4 0 10.8 0 5.6 0 11.2 0 10.7 0 21.3 0 12.1 0 24.2-0.1 25-0.1 49.9c5.9 0 11.9 0 18 0 0-3.4 0-3.4 0-6.8q-0.1-31.8-0.2-63.6 0-16.4 0-32.7-0.1-14.3-0.1-28.5 0-7.6 0-15.1 0-7.1 0-14.2 0-2.7-0.1-5.3 0-3.5 0-7.1 0-1 0-2.1c0.1-5.8 1.6-10.2 5.2-14.9 6.1-4.6 13.7-4 21-4 1.7 0 1.7 0 3.4 0q3.5 0 7.1 0 5.4 0 10.9-0.1 3.4 0 6.9 0 1.6 0 3.2 0c6.3 0 11 0.7 16.7 3.4 4.7 4.8 5.1 8.9 5.1 15.3 0 1.1 0 1.1 0 2.3q0 3.8 0 7.5 0 2.7 0 5.4 0 7.4 0 14.8 0 7.6 0 15.3 0 14.6 0 29.1 0 16.6 0 33.1-0.1 34.1-0.1 68.2c6.3 0 12.5 0 19 0q0-2.2 0-4.4-0.1-51.5-0.2-103.1 0-6.3 0-12.7 0-1.2 0-2.5-0.1-20.5-0.1-40.9-0.1-21-0.1-42 0-12.9 0-25.9-0.1-8.8-0.1-17.7 0.1-5.1 0-10.3 0-5.5 0-11.1 0-1.6 0-3.2c0-6.1 0.5-9.6 4.5-14.2 3.7-2.9 6.4-3.4 11-3.4q1.7 0 3.6 0 1.9 0 3.8 0 2 0 4 0 4.1-0.1 8.3 0 5.3 0 10.6-0.1 5.1 0 10.2 0 1.9 0 3.8 0c11.1 0.1 11.1 0.1 15.7 4.5 4.1 4.9 3.4 10.3 3.4 16.3q0 1.7 0 3.5 0 4.8-0.1 9.6 0 5.2 0 10.4 0 9 0 18 0 12.9 0 25.9 0 21.1-0.1 42.2 0 20.4 0 40.9 0 1.2 0 2.5 0 6.4 0 12.7-0.1 52.5-0.2 105c6.3 0 12.5 0 19 0 0-2.9 0-5.8 0-8.8q-0.1-39.7-0.2-79.5 0-5.2 0-10.4 0-1.1 0-2.1-0.1-16.8-0.1-33.6-0.1-17.3-0.1-34.5 0-9.7 0-19.4-0.1-9.1-0.1-18.2 0-3.4 0-6.7 0-4.6 0-9.2 0-1.3 0-2.6c0-5.8 1.2-9.2 4.5-14 4-3.4 8-3.5 13-3.5q1 0 2.1-0.1c4 0 5.7 0.5 8.9 2.9 2 2.7 2 2.7 2 6.3-0.9 3.2-1.4 4.5-4 6.4-2 1-2 1-10 1 0 74.6 0 149.2 0 226 15.5 0 31 0 47 0 0-74.6 0-149.2 0-226-2.6 0-5.3 0-8 0-4.6-2.1-4.6-2.1-6-5-0.6-6.2-0.6-6.2 1.5-9.2 3.4-2.5 6.4-2.4 10.4-2.3 1 0 1 0 2.1 0 5.1 0 8 1.3 12 4.5 3.4 3.7 4.1 7.2 4.1 12.1q0 1.2 0 2.4 0 1.4 0 2.7c0 1.4 0 1.4 0 2.9q0 4.7 0 9.5 0 3.4 0 6.8 0 9.2 0 18.4 0 9.7 0 19.4 0 16.2 0 32.4 0 16.7 0 33.4c0 1 0 1 0 2q0 5.2 0 10.4-0.1 42.8-0.1 85.6c5.9 0 11.9 0 18 0q0-2.9 0-5.9-0.1-69.1-0.2-138.3 0-8.5 0-17 0-1.7 0-3.4 0-27.4 0-54.9-0.1-28.1-0.1-56.2 0-17.4 0-34.8 0-11.9 0-23.8 0-6.9-0.1-13.7 0-6.3 0-12.6 0-2.3 0-4.6 0-3.1 0-6.2c0-1.7 0-1.7 0-3.4 0.6-5 2.3-8.2 6-11.5 3.6-2.5 5.5-2.8 9.9-2.9zm-193.5 114.2c0 90.7 0 181.5 0 275 15.2 0 30.4 0 46 0 0-90.8 0-181.5 0-275-15.2 0-30.4 0-46 0zm-98 97c0 58.7 0 117.5 0 178 15.5 0 31 0 47 0 0-58.7 0-117.5 0-178-15.5 0-31 0-47 0zm-97 49c0 42.6 0 85.1 0 129 15.5 0 31 0 47 0 0-42.6 0-85.1 0-129-15.5 0-31 0-47 0z"
                  ></path>
                  <path
                    id="Layer"
                    fillRule="evenodd"
                    className="s0"
                    d="m468.5 4.2c7.2 5.1 10.8 12 13.3 20.4 0.9 9-0.2 17.1-5.5 24.7-5.3 6.4-11.9 11.4-20.3 12.7q-1.7-0.3-3.5-0.6c-4.5-0.6-8.2-1-12.5 0.6-6.1 5-9.8 12.6-13.7 19.3q-1.8 3-3.7 6-3.8 6.1-7.7 12.4c-5.7 9.3-11.9 18.3-18 27.4q-3.8 5.4-7.5 10.9-2.4 3.6-4.7 7.1-0.7 1-1.4 2-1.3 1.9-2.6 3.7c-0.9 1.3-1.8 2.8-2.7 4.2 0.6 2.6 1.7 4.5 3 6.8 4.4 8.2 4.7 17.8 1.9 26.7-4 8.6-9.3 14.3-18.1 17.9-8.7 2.8-17.1 2.7-25.5-1.1-8.1-4.6-13.2-11-16.6-19.6-0.6-3.3-0.8-6.1-0.7-9.4q0-1.5 0-3 0-1.1 0-2.3-7.5-3.8-15-7.5-2.5-1.3-5.1-2.6-3.7-1.8-7.3-3.7-1.2-0.5-2.3-1.1c-4.4-2.2-8.8-4.2-13.3-6.1-0.7 0.6-0.7 0.6-1.5 1.2-9.1 7.2-16.8 9.1-28.5 7.8-3-1-5.9-2-9-3-17.5 17.5-35 35-53 53 1 3.6 2 7.3 3 11 0.8 10.3-1 18.7-7.6 26.9-6.4 6.6-14.4 10.1-23.5 10.4-7.3-0.1-14.1-2.7-19.8-7.1-2.8-2.4-2.8-2.4-5.2-2.1-4.2 1.3-7.9 3.2-11.7 5.2-1.3 0.6-1.3 0.6-2.5 1.2q-4 2-8 4.1-2.7 1.3-5.4 2.7-6.7 3.3-13.3 6.7 0 0.9 0 1.9 0 1.2 0 2.4 0 1.2 0 2.5c-0.1 8.8-3.7 15.3-9.3 21.9-9 7.7-17.1 9.2-28.7 8.5-4.6-0.5-8.2-2.6-12-5.2q-1.6-1-3.2-2.1c-5.5-4.8-9.3-13.7-10-20.9-0.2-9.8 2.4-17.9 9.2-25 6.5-6.2 14-9 22.9-9.4 7.1 0.2 14.2 2.4 19.5 7.2 2.3 2.5 2.3 2.5 4.7 2.1 4.1-1.3 7.9-3.2 11.7-5.2 1.3-0.6 1.3-0.6 2.5-1.2q4-2 8-4.1 2.7-1.3 5.4-2.7 6.7-3.3 13.3-6.7c0-1.9 0-1.9 0-3.8-0.1-9.7 2.3-17.3 9.1-24.4 7.8-7.3 15.2-10.1 25.9-9.8q3.1 1.1 6.1 2.2c4.4 1 6.1 1.2 10.1-1 3.5-2.9 6.6-6.2 9.7-9.5q1.7-1.8 3.5-3.6 4.6-4.7 9.1-9.5c3-3.2 6.2-6.4 9.3-9.6q9.2-9.4 18.2-19-0.3-0.9-0.6-1.8-0.5-1.2-0.9-2.5-0.4-1.2-0.8-2.4c-2.4-7.8-1.4-17.1 2.3-24.3 4.7-7.6 10.1-12 18.3-15.3 9.6-1.8 18.6-1.5 27.1 3.8 7.1 5.1 11.3 11 13.6 19.5 0.2 3.6 0.2 3.6 0.1 7.4q0 1.8 0 3.7c-0.1 1.5-0.1 1.5-0.1 2.9q1.2 0.4 2.5 0.7c4.1 1.5 7.8 3.5 11.6 5.7q2.3 1.3 4.7 2.5 3.7 2 7.3 4c7.6 4.5 7.6 4.5 15.9 7.1 3.7-1.1 5.8-2.4 8.7-5 4.8-4.1 9.9-4.3 16-4.2q1.9 0 3.9 0c3.4 0.2 3.4 0.2 6.4 1.2q0.3-1 0.7-2c1.8-4.1 4.3-7.6 6.8-11.3q0.9-1.3 1.7-2.6 1.9-2.7 3.7-5.3 4.9-7.3 9.8-14.5c1-1.5 1-1.5 2-3 7.6-11.2 15.1-22.5 22.5-33.7q0.9-1.5 1.9-2.9 2.7-4.1 5.4-8.2 0.8-1.2 1.6-2.4 0.7-1.1 1.5-2.3 0.6-0.9 1.3-1.9c1.1-2 2.2-3.8 3.1-5.9-0.8-2.1-0.8-2.1-2.2-4.2-4.8-7.9-5.8-15.7-3.8-24.8 2.2-6 5.1-10.8 10-15 1.1-1.1 1.1-1.1 2.3-2.1 10.8-7.6 25-7.1 36.2-0.7zm-27.5 14.5c-3 3.1-4.8 5.6-6.1 9.8 0.2 5.7 1.4 9.8 5.5 13.9 5 3.1 8.5 4.1 14.4 3.2 5.1-1.4 7.6-4.5 10.1-8.9 1.7-5.8 1.2-9.7-1.6-15-3.1-3.7-5.6-5.2-10.2-6.5-4.8-0.3-8.3 0.3-12.1 3.5zm-197.3 99.8c-2.8 4.3-3.7 8.5-2.7 13.5 1.4 4 3.5 6.6 6.6 9.4 4.6 2.2 8.4 2.4 13.4 1.6 4.5-2.1 7.1-4.7 9.3-9.1 1.5-4.1 1.4-7.7 0-11.8-2.3-4.7-5.4-7.4-10.3-9.1-6.4-1.2-12 0.5-16.3 5.5zm96.9 49.2c-2.5 4.4-3.2 8.2-2.3 13.1 1.6 4.8 4.8 8.1 9.1 10.6 4.9 1.1 8.8 1.3 13.3-1 3.5-2.3 5.5-4.5 7.3-8.4 0.8-5 0.6-8.8-1.6-13.4-3.9-4.2-7-6.8-12.8-7.1-5.5 0.3-9.5 1.9-13 6.2zm-190.6 45.3c-4 3.9-6.2 7.2-6.3 12.8 0.1 4.9 0.8 7.5 4.3 11.2 4 3 7.6 4.3 12.6 4.1 4.8-0.9 7.1-2.6 10.4-6.1 3.1-4.4 3.4-7.7 2.6-12.8-1.2-4.4-3.4-7.2-6.9-10-6.3-2.8-10.7-2.6-16.7 0.8zm-101.4 52.8c-2.3 4.5-3.4 8.3-2 13.3 2.2 4.8 4.6 7.5 9.4 9.9 4.9 1.5 8.3 1 13-1 3.9-3.3 6.5-6.6 8.1-11.5-0.2-5.7-1.4-9.8-5.5-13.9-8.6-5.3-16.2-4.7-23 3.2z"
                  ></path>
                </svg>
                <h1 className="text-3xl pb-5 text-[#261141] font-semibold group-hover:text-white">
                  Analytics
                </h1>
                <p className="text-md mb-6">
                  Discover valuable insights into how organizations can leverage
                  this challenging environment to grow with our analyst reports.
                </p>
              </div>
            </div>
            <div
              className={`max-w-[23%] shadow-lg bg-white hover:bg-[#261141] max-h-[50%] py-8 px-3 group`}
            >
              <div
                className={`group-hover:bg-[#261141] group-hover:text-white`}
              >
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="64"
                  height="64"
                  style={{
                    fill: "currentcolor",
                    marginBottom: "14px",
                    width: "54px",
                    height: "54px",
                  }}
                >
                  <path
                    id="Layer"
                    fillRule="evenodd"
                    className="s0"
                    d="m305.4 15.4c5.2 3.9 9.9 8.2 14.6 12.6q1.3 1.2 2.6 2.4c13.2 12.4 22.6 27.9 31.4 43.6q1.1 2 2.3 4c0.8 1.5 0.8 1.5 1.7 3 1.2 0 1.2 0 2.4 0 32.2-0.6 64.7 1.2 92.2 20.1 4.3 2.4 5.7 1.9 10.4 0.9 12-0.9 21.7 1.1 31 8.9 7 7.2 10 15.5 10.4 25.3-0.2 10-3.5 18.5-10.4 25.8-3.6 3-3.6 3-6 3q0.3 1.2 0.5 2.5c3.4 25.4-9.8 55.6-23.1 76.7-0.6 1-0.6 1-1.3 2q-1.2 1.9-2.5 3.8c-1.3 2-1.3 2-2.6 5 1.1 3.4 2.7 6.4 4.5 9.4 13.3 22.5 23.4 45.8 25.2 72.1q0.1 1 0.1 2.1c0.2 3.2 0.2 5.4-0.8 8.4q0.9 0.4 1.8 0.8c6.2 3.4 10.3 9.5 12.7 16.1 2.7 9.3 2.4 18.2-1.5 27.1-5.1 8.7-12.4 15.2-22 18.4-6.5 1.4-13.2 1.3-19.6-0.3-4.9-0.1-7.5 2.2-11.4 4.9-22 14.5-49.5 16.9-75.1 17.6q-2.3 0-4.7 0.1-5.6 0.2-11.2 0.3-0.8 1.6-1.6 3.2c-15.6 30.6-38.5 60-71.4 72.8q-1.7 0.6-3.4 1.3c-19.9 6.5-42.3 4-60.9-5.1-10.5-5.4-19.2-12.1-27.7-20.2q-1.4-1.3-2.8-2.6c-14.9-13.9-25.2-31.3-34.2-49.4-1.3 0-1.3 0-2.7 0-34.4-0.7-34.4-0.7-51.3-4q-1.1-0.2-2.2-0.4c-14.2-2.9-27-8.6-39.3-16.2-4-2.3-6.2-2.6-10.5-1.4-9.9 0.8-18.5 0-26.7-6-8.4-7.2-13.6-14.5-14.5-25.6-0.4-10.5 2.2-18.6 9.2-26.4 1.3-1 1.3-1 2.6-2 3.7-4.6 3.4-9.3 3.8-15 2.5-26 11.9-48.9 25.3-71.1q1.2-1.9 2.3-3.9 0.8-1.3 1.6-2.6c0.7-3.8-1.4-6.2-3.5-9.2q-1.3-2-2.5-4-0.7-1.1-1.3-2.1c-12.8-20.9-20.3-44.1-22-68.4-0.4-6.2-0.4-6.2-3.7-11.1q-1.3-0.8-2.6-1.6c-7.5-9.8-10.1-18.7-9-31 1.9-8.7 6.2-16.4 13.4-21.8 9.1-5.7 17-6.8 27.6-6.2 1.8 0.5 1.8 0.5 3.6 0.9 4.8 0.1 7.3-2.2 11.2-4.9 26.7-17 59.6-17.6 90.2-17 0.9-1.7 0.9-1.7 1.9-3.5 9.7-17.8 20.3-34.5 35.1-48.5q1.2-1.2 2.5-2.5c31.1-30.7 75.5-35.5 111.9-11.1zm-96.4 21.6q-1.1 0.9-2.3 1.9c-11.5 9.7-19.9 22.3-27.6 35q-0.6 1-1.3 2c-2.2 3.8-2.2 3.8-2.8 8.1q1 0.2 2.1 0.3c23.6 3.8 47.3 8.6 69.5 17.7 9.4 3.6 17.1 0.7 26.2-2.6 20.9-7.2 42.3-12 64.2-15.4-0.5-4.9-2.8-8.4-5.4-12.5q-0.7-1-1.4-2.1c-4.3-6.8-9.1-13.2-14.2-19.4q-1.1-1.3-2.1-2.6c-11.7-13.8-29.5-27.1-47.9-29.4-22.3-1.7-40 4.3-57 19zm-138 78c1.1 3.3 2.2 6.3 3.6 9.4 2.9 7.8 2.6 17.3-0.2 25-4.9 10.2-11.2 15.5-21.5 19.9-3.9 0.9-7.9 1.4-11.9 1.7 2.3 22.5 9.3 42.7 19.9 62.5q0.5 0.9 1 1.8c1.2 1.9 2.5 3.2 4.1 4.7q1.1-1.3 2.2-2.6c10-11.8 20.4-23.1 31.3-34.1q1.3-1.3 2.6-2.7c6.5-6.4 13.3-13.1 21.1-18 2.5-2.3 2.7-4.2 3.3-7.5q0.3-1.8 0.6-3.7 0.2-1 0.4-2c0.6-3.4 1.2-6.8 1.9-10.2q0.2-1 0.4-2.1c3.9-19.9 10.3-39.1 17.2-58.1-27.5-0.8-51.7 2.8-76 16zm294-16q0.4 1.3 0.9 2.6c5.2 14.9 10.2 29.8 14 45.1q0.5 1.7 0.9 3.5c1.3 5.3 2.4 10.5 3.1 15.9 1.3 11.3 1.3 11.3 8 20q3.1 1.9 6.1 3.9c2 1.7 4 3.5 5.9 5.3q0.8 0.7 1.6 1.5c12.2 11.4 24.3 23 34.5 36.2q3 3.5 6 7c14.8-17.2 25.2-46.4 24-69q-1.1-0.1-2.2-0.2c-9.4-1.2-17.7-4-24.2-11.2-7.3-9.5-8.5-18.9-7.6-30.6 0.8-2.8 1.8-5.3 3-7.9 1-2.1 1.5-3.9 2-6.1-24.3-13.2-48.5-16.8-76-16zm-199 2c-3.8 7-6.3 14.3-8.8 21.8q-1 3.2-2.1 6.5c-6.1 16.5-6.1 16.5-8.1 33.7 4.4-2.5 8.7-5.1 12.9-8 22-15 45.6-28.6 70.1-39-0.8-2.2-0.8-2.2-3-2.8-1.3-0.4-1.3-0.4-2.7-0.8q-1.5-0.4-3-0.8-1.6-0.5-3.3-0.9c-1.7-0.5-1.7-0.5-3.4-0.9-15.8-4.3-32.2-8.4-48.6-8.8zm160.7 2.1q-1.8 0.3-3.6 0.6c-21.2 3.7-21.2 3.7-41.1 11.3 2.1 2.1 3.8 3 6.5 4.2q1.4 0.7 2.8 1.3 1.5 0.7 3.1 1.4c24.5 11.6 47.5 25.5 69.6 41.1 1.9-5.4-0.4-10.6-1.8-16-0.5-1.8-0.5-1.8-0.9-3.6-5.6-22.1-5.6-22.1-15.3-42.4-6.5-0.7-13 0.9-19.3 2.1zm-298.5 25.2c-2.6 3.7-2.6 7.3-2.2 11.7 1.9 5.8 4.5 9.1 10 12 4.6 1.5 8.7 1.9 13.2 0.1 4.7-2.7 8.1-5.8 9.8-11.1 0.9-5 0.4-8.9-2-13.3-2.9-4.1-6.2-6.3-11-7.7-8.2-1-12.7 2.2-17.8 8.3zm427.4-1.7c-3 4.5-3.5 9.1-2.6 14.4 1.7 5.3 5.1 8.4 9.9 11.1 4.6 1.9 8.5 1.5 13.2-0.2 4.5-3 8.2-6.7 9.9-11.9 0.4-5.3-0.1-8.6-3-13-4.3-4.3-7.5-6.7-13.7-7.4-5.7 0.1-10 2.8-13.7 7zm-206-0.3q-1.7 0.7-3.4 1.5-1.7 0.8-3.6 1.6-0.9 0.4-1.8 0.8c-32.2 14.4-62.6 31.8-90.7 53.1q-1 0.8-2.1 1.6c-5.1 3.9-5.1 3.9-7.5 9.8q-0.1 1.5-0.3 3.2c-0.2 1.7-0.2 1.7-0.4 3.5q-0.2 1.9-0.4 3.8-0.2 1.8-0.3 3.6c-1.6 15.3-2.3 30.6-2.3 45.9q-0.1 1.3-0.1 2.6c0 12.9 0.6 25.7 1.7 38.6q0.1 1.1 0.2 2.2c0.3 13.9 0.3 13.9 5.3 26.4q1.2 0.8 2.5 1.7c1.5 1.1 1.5 1.1 3 2.3q1.8 1.2 3.6 2.5 2.3 1.6 4.5 3.3c10.1 7.2 20.5 14 31.2 20.3q2.3 1.4 4.6 2.8c11.3 6.8 22.9 12.8 34.8 18.5q0.9 0.5 1.9 1 4.7 2.3 9.5 4.5 3.4 1.6 6.8 3.3c6.4 3.1 6.4 3.1 13.3 2.4q2.2-1 4.4-2.1 2.6-1.1 5.3-2.2 2.8-1.3 5.7-2.7 1.6-0.7 3.1-1.4c51.6-22.5 51.6-22.5 92.9-58.7 0.5-2.7 0.5-2.7 0.8-5.9 0.2-1.7 0.2-1.7 0.4-3.5q0.2-1.9 0.4-3.8 0.2-1.8 0.3-3.6c1.6-15.3 2.3-30.6 2.4-46q0-1.2 0-2.5c0-12.9-0.6-25.7-1.7-38.6q-0.1-1.1-0.2-2.2c-0.3-13.9-0.3-13.9-5.3-26.4q-1.2-0.8-2.5-1.8c-1.5-1.1-1.5-1.1-3-2.2-0.9-0.6-0.9-0.6-1.7-1.2q-3.1-2.1-6.1-4.4c-50.5-37.7-50.5-37.7-105.2-51.6zm-135.3 87.2q-0.8 0.9-1.7 1.8-1.9 1.8-3.7 3.6-2.8 2.8-5.6 5.5c-6.1 6.2-12 12.4-17.4 19.2-2.5 3.2-5.2 6.3-7.9 9.3-1.3 2.1-1.3 2.1-0.5 4.4 2 3.5 4.4 6.4 7.1 9.4q0.7 0.8 1.4 1.7 2.5 2.8 5 5.6c1 1.1 1 1.1 2 2.3 5.7 6.3 11.5 12.4 17.5 18.3q1.4 1.4 2.7 2.8c1.3 1.3 1.3 1.3 2.6 2.6q1.2 1.1 2.4 2.3c1.5 1.8 1.5 1.8 2.8 1.7-0.1-1.8-0.1-1.8-0.2-3.6-1.7-30.6-1.7-61.7 0.2-92.4-2.4 0-5 3.9-6.7 5.5zm276.7-5.5q0 0.8 0.1 1.7c1.6 31.4 1.6 62.9-0.1 94.3 5.9-4.9 11.4-10.2 16.9-15.7q1.3-1.3 2.7-2.7c5.9-5.9 11.3-11.9 16.4-18.6q2.3-2.8 4.6-5.7 1.7-2.1 3.4-4.3c-1.5-4.7-4.2-7.9-7.4-11.6-0.8-0.9-0.8-0.9-1.7-1.8q-2.4-2.8-4.9-5.6-1.3-1.5-2.6-2.9c-5.8-6.5-11.9-12.7-18-18.9q-1.2-1.2-2.5-2.4-1.1-1.1-2.3-2.3-1-1-2-2c-1.4-1.6-1.4-1.6-2.6-1.5zm-326 64c-12 20.5-24 44.5-24 69q1.2 0.1 2.5 0.2c9.7 1.2 18.2 3.8 24.9 11.2 7.3 9.5 8.5 18.9 7.6 30.6-0.8 2.8-1.8 5.3-3 7.9-1 2.1-1.5 3.9-2 6.1 24.3 13.2 48.5 16.8 76 16-0.5-1.4-0.5-1.4-1-2.8-5.7-16.3-11.2-32.6-15.1-49.5q-0.4-1.8-0.8-3.7c-1.1-5-2.2-10-2.8-15.1-0.9-6.9-1.7-11.2-7.2-15.7q-3.1-2.1-6.1-4.2c-7.9-6.7-15.3-14.2-22.7-21.5q-1.3-1.3-2.7-2.6c-5.9-6-11.3-12.3-16.6-18.9q-2.9-3.6-6-7-0.5 0-1 0zm381 0q-1.2 1.4-2.5 2.9c-35.4 41.1-35.4 41.1-54 53.8-3 2.8-3.4 4.3-4 8.2q-0.3 1.8-0.7 3.6-0.3 2-0.6 3.9-0.8 4.1-1.5 8.2-0.2 1.1-0.4 2.1c-3.9 19.9-10.3 39.3-17.3 58.3 26.4 0.7 53-1.8 76-16-1.1-3.3-2.2-6.3-3.6-9.4-3-8-2.7-18.7 0.5-26.5 4.9-9.3 11.7-14.4 21.2-18.4 3.6-0.9 7.2-1.3 10.9-1.7 0.5-21.1-7.8-52-22.6-67.7q-0.7-0.7-1.4-1.3zm-299 77c0.6 7.7 2.4 14.7 4.5 22.1q0.5 1.8 1.1 3.6c4.4 19.4 4.4 19.4 13.4 36.3 9.2-0.1 18.1-1.8 27-3.7q1.9-0.4 3.8-0.8c7.9-1.7 15.7-3.6 23.5-5.7q1.3-0.4 2.6-0.8c2.1-0.6 4.1-1.3 6.1-2 0.5-1 0.5-1 1-2q-1.1-0.5-2.3-1.1c-17.4-8.1-34.3-16.8-50.7-26.9q-1.2-0.7-2.4-1.4c-8.3-5.1-16.3-10.4-24.2-16-2.1-1.7-2.1-1.7-3.4-1.6zm217 0q-0.9 0.6-1.9 1.3c-25.2 17.1-51.7 34.2-80.1 45.7 0.8 2.2 0.8 2.2 3 2.8q1.3 0.4 2.7 0.8 1.5 0.4 3 0.8 1.6 0.5 3.3 0.9 1.7 0.5 3.4 0.9c15.8 4.3 32.2 8.4 48.6 8.8 3.9-7.1 6.4-14.6 8.9-22.3q0.4-0.9 0.7-1.9c2.8-8.4 5.4-16.9 7.6-25.4 0.3-1.2 0.3-1.2 0.6-2.5 0.9-3.7 1.3-6.3 0.2-9.9zm-335.4 17.1c-2.5 4.5-2.9 7.8-2.6 12.9 1.9 5.4 5.4 8.8 10 12 5 1.7 9.3 1.6 14.1-0.5 4.5-2.5 7.1-5.7 8.9-10.5 1-5.3 0.4-9.9-2.6-14.4-3.1-3.6-6.8-6-11.4-7-6.8-0.4-12.3 2.2-16.4 7.5zm427-0.5c-3 4.5-3.5 9.1-2.6 14.4 1.7 5.3 5.1 8.4 9.9 11.1 4.6 1.9 8.5 1.5 13.2-0.2 4.5-3 8.2-6.7 9.9-11.9 0.4-5.3-0.2-8.5-3-13-4.3-4.9-7.4-6.7-13.8-7.4-5.6 0.1-9.9 2.8-13.6 7zm-208.1 44.1q-1.6 0.6-3.2 1.1-1.7 0.6-3.4 1.3c-21.5 7.4-43.4 12.4-65.9 15.9 0.5 4.9 2.8 8.4 5.4 12.5q0.7 1 1.4 2.1c14.4 22.4 33.9 44.7 61 51 19.5 2.5 36.8-1 53-12.6 2.4-1.9 4.8-3.9 7.2-6q1-0.8 2.1-1.7c5.8-4.8 10.3-10.4 14.9-16.3q1-1.3 2-2.6c4-5.3 7.6-10.8 11-16.4 0.6-1 0.6-1 1.2-2 2.3-3.7 2.3-3.7 2.8-8-1-0.2-1-0.2-2.1-0.3-23.8-3.9-47.3-9-69.8-17.6q-1.1-0.4-2.2-0.9-0.9-0.3-1.9-0.7c-4.8-1.2-8.9-0.4-13.5 1.2z"
                  ></path>
                  <path
                    id="Layer"
                    fillRule="evenodd"
                    className="s0"
                    d="m214.9 195.4c3.3 0.9 4.8 3 7.1 5.6 1.3 2.5 2.5 5 3.5 7.6 0.5 1.2 0.5 1.2 1 2.3q1.6 3.8 3.1 7.5 1.1 2.7 2.2 5.3 3 7.2 6 14.3 1.8 4.6 3.7 9.1 6.7 16.1 13.3 32.2 2.6 6.4 5.3 12.6 0.5 1.2 1 2.3 0.9 2.2 1.9 4.3c1.7 4 2.4 7.2 2 11.5-2.3 4.6-2.3 4.6-5 6-5.7 0.6-5.7 0.6-8 0-3.9-3.4-6-6.5-7.9-11.3-0.7-1.8-0.7-1.8-1.4-3.6q-0.4-1-0.8-1.9-1.1-2.8-2.2-5.7c-3.7-9.2-3.7-9.2-3.7-11.5-14.8 0.3-29.7 0.7-45 1-3.7 9.4-3.7 9.4-7.4 18.7-0.8 1.8-0.8 1.8-1.5 3.6q-0.7 1.7-1.4 3.6c-1.9 3.4-3.5 5-6.7 7.1-4.4 0.7-6.2 0.5-9.9-2-2.6-3.8-2.7-6.6-2.1-11 1-3.3 2.3-6.4 3.7-9.6q0.6-1.4 1.2-2.8 1.9-4.6 3.8-9.1 1.4-3.2 2.7-6.4 2.9-6.6 5.7-13.3 4.3-10.2 8.5-20.4c0.7-1.6 0.7-1.6 1.4-3.3q2.7-6.3 5.3-12.7 1.8-4.4 3.6-8.8 0.6-1.3 1.1-2.6c7.6-18.2 7.6-18.2 15.9-18.6zm-1.9 33.6q-2.4 5.4-4.8 10.9-0.6 1.5-1.3 3c-5.3 10.2-5.3 10.2-7.9 21.1 9.6 0 19.1 0 29 0-4.3-11.8-9-23.4-14-35q-0.5 0-1 0z"
                  ></path>
                  <path
                    id="Layer"
                    className="s0"
                    d="m291.2 195.3q1.9 0 3.9 0 4.1 0 8.2 0 5.2 0 10.5-0.1 5 0 10 0 1.8 0 3.8 0c8.4 0.1 8.4 0.1 11.3 2.1 1.9 2.2 3 4.1 3.5 6.9-0.6 2.9-1.1 5.3-2.8 7.7-7 4.6-15.1 2.1-23.6 2.1 0 27.7 0 55.4 0 84 6.3 0 12.5 0 19 0 6.1 3.6 6.1 3.6 7 7-0.1 3.8-0.3 6.2-2.7 9.2-2.9 2.3-4.4 2.3-8.1 2.3-1.7 0.1-1.7 0.1-3.5 0.1q-1.9 0-3.8 0-1.9 0-3.9 0-4.1 0-8.2 0-5.3 0-10.5 0-5 0-10 0-1.9 0-3.8 0.1c-9.7-0.1-9.7-0.1-12.8-3.1-2.7-4-2.4-5.8-1.7-10.6 1.9-2.4 3.3-3.6 6-5 6.3 0 12.5 0 19 0 0-27.7 0-55.4 0-84-6.3 0-12.5 0-19 0-5-3-5-3-6-5-0.7-7-0.7-7 1.7-10.6 4.4-4.2 10.9-3.1 16.5-3.1z"
                  ></path>
                </svg>
                <h1 className="text-3xl pb-5 text-[#261141] font-semibold group-hover:text-white">
                  Generative AI
                </h1>
                <p className="text-md mb-6">
                  Our Generative AI solutions curate intelligent digital
                  products to modify, adapt, and automate complex processes and
                  expedite business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;