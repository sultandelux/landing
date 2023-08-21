import React from "react";
import { saveAs } from 'file-saver';
import { useTranslation } from 'react-i18next'

const DownloadButton = () => {
  const { t } = useTranslation()

  // const downloadFile = async () => {
  //   // fetch PDF
  //   const response = await fetch('@/assets/agreement.pdf'); // Provide the correct path to your file
  //   const blob = await response.blob();
  //   // download file
  //   saveAs(blob, 'agreement.pdf');
  // };

  return (
    <a href='http://localhost:3001/assets/agreement.pdf' className='text-gray-400 hover:text-gray-300'>
      <button className="flex items-center space-x-2 appearance-none bg-gray-700 border border-transparent rounded-md py-2 px-3 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm">
        <svg className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path
            fillRule='evenodd'
            d="M3 3h18v18H3V3zm5.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM8 12h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1zm0 3h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1zm0 3h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1z"
            clipRule='evenodd'
          ></path>
        </svg>
        <span> {t('main.hero.agreement')}</span>
      </button>
    </a>
  );
};

export default DownloadButton;
