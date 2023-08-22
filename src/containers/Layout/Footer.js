import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import DownloadButton from 'Components/Download';

const Footer = (props) => {
  const { t } = useTranslation();
  const handleLangChange = (e) => i18n.changeLanguage(e.target.value);
  const getLanguage = i18n.language;
  console.log(getLanguage, i18n.language);
  const shareUrl = 'https://xponend.com';
  const title = 'Xponend - экспресс разработка приложений';

  return (
    <>
      <footer
        className="rounded-t-lg bg-gray-800"
        aria-labelledby="footerHeading"
      >
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:py-6 lg:px-8">
          <div className=" pt-2 lg:flex lg:items-center lg:justify-between xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                {t('main.mission')}
              </h3>
              <p className="mt-2 text-base text-gray-300">
                {t('main.address')}
              </p>
            </div>
            <div className="mt-3 xl:mt-0">
              {/* <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                {t('main.language')}
              </h3> */}
              <form className="mt-4 sm:max-w-xs">
                <fieldset className="w-full">
                  <label htmlFor="language" className="sr-only">
                    {t('main.language')}
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      name="language"
                      defaultValue={getLanguage}
                      onChange={(e) => handleLangChange(e)}
                      className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                    >
                      <option value="en">{t('main.en')}</option>
                      <option value="kk">{t('main.kk')}</option>
                      <option value="ru">{t('main.ru')}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg
                        className="h-4 w-4 text-white"
                        data-todo-x-description="Heroicon name: solid/chevron-down"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-2 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a
                href="https://t.me/sultandelux"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Telegram</span>
                <svg
                  width="24px"
                  height="24px"
                  className="text-white-600 fill-current"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="telegram-5"
                    d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/xponendcom/?hl=ru"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://github.com/sultandelux"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* <DownloadButton /> */}
            </div>
            <p className="mt-4 text-base text-gray-400 md:order-1 md:mt-0">
              ©2018-2023 Xponend
            </p>
          </div>
        </div>
        <a href="https://www.digitalocean.com/?refcode=539f54b5cf46&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
          <img
            src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
            alt="DigitalOcean Referral Badge"
          />
        </a>
      </footer>
    </>
  );
};
export default Footer;
