export const RUFlagRound = ({ width = '32px', height = '32px' }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        version="1"
        viewBox="0 0 30 30"
      >
        <defs>
          <clipPath id="cf3ed89e72">
            <path d="M1.102 9H28.68v11H1.102zm0 0"></path>
          </clipPath>
          <clipPath id="1afd182517">
            <path d="M1.102 19H28v9.2H1.102zm0 0"></path>
          </clipPath>
          <clipPath id="fd87c318a0">
            <path d="M1.102.617H28V10H1.102zm0 0"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#cf3ed89e72)">
          <path
            fill="#00f"
            d="M28.68 14.406c0 1.614-.278 3.16-.785 4.598H1.887a13.775 13.775 0 01-.785-4.598c0-1.61.277-3.156.785-4.597h26.008a13.71 13.71 0 01.785 4.597zm0 0"
          ></path>
        </g>
        <g clipPath="url(#1afd182517)">
          <path
            fill="#d7210a"
            d="M27.895 19.004c-1.891 5.36-7 9.195-13.004 9.195-6 0-11.114-3.836-13.004-9.195zm0 0"
          ></path>
        </g>
        <g clipPath="url(#fd87c318a0)">
          <path
            fill="#dadada"
            d="M27.895 9.809H1.887C3.777 4.453 8.89.617 14.89.617c6.004 0 11.113 3.836 13.004 9.192zm0 0"
          ></path>
        </g>
      </svg>
    </>
  );
};
