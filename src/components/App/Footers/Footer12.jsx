import CodeBox from "@/components/Shared/Codebox/CodeBox";

const Footer12 = () => {
  return (
    <>
      <CodeBox
        stringCode={`
 <div className=" bg-violet-900 pt-9">
  <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
      <div className="md:w-[316px]">
        <p className="text-[18px] font-medium text-white"></p>
        <h1 className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl">
          Soft
          <span className="text-pink-700"> UI </span>
        </h1>
        <p />
        <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
          odio facere officiis enim animi placeat eaque nesciunt alias
          beatae id, at dicta.
        </p>
        <div className="mt-[18px] flex gap-4">
          <a className="hover:scale-110" target="_blank" href="#!">
            <button
              className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white"
              style={{ backgroundColor: "#4267B2" }}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </button>
          </a>
          <a className="hover:scale-110" target="_blank" href="/">
            <button
              className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#0E76A8] text-white"
              style={{ backgroundColor: "#0E76A8" }}
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </a>
          <a className="hover:scale-110" target="_blank" href="/">
            <button className="m-2  w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
          </a>
          <a className="hover:scale-110" target="_blank" href>
            <button
              className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white"
              style={{ backgroundColor: "#1DA1F2" }}
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
          </a>
          <a
            className="hover:scale-110"
            target="_blank"
            href="https://www.youtube.com/"
          >
            <button
              className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#FF0000] text-white"
              style={{ backgroundColor: "#FF0000" }}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-[316px]">
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-[18px]">
            <a
              href="tel:+911800123444"
              className="font-Inter text-[14px] font-medium text-white"
            >
              +880 1719-68 1150
            </a>
            <p className="font-Inter text-[12px] font-medium text-white">
              Support Number
            </p>
          </div>
        </div>
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg
              width={20}
              height={15}
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-[18px]">
            <a
              href="mailto:help@lorem.com"
              className="font-Inter text-[14px] font-medium text-[#fff]"
            >
              contact@softui.com
            </a>
            <p className="font-Inter text-[12px] font-medium text-[#fff]">
              Support Email
            </p>
          </div>
        </div>
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg
              width={18}
              height={21}
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-[18px]">
            <a
              href="mailto:help@lorem.com"
              className="font-Inter text-[14px] font-medium text-[#fff]"
            >
              Dhaka Bangladesh
            </a>
            <p className="font-Inter text-[12px] font-medium text-white">
              Address
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
        <div className>
          <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
            Pages
          </p>
          <ul>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="#!"
              >
                Home
              </a>
            </li>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/our-tutors"
              >
                News
              </a>
            </li>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/become-a-tutor"
              >
                Contact
              </a>
            </li>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/plans-and-pricing"
              >
                Plans and pricing
              </a>
            </li>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/terms-and-conditions"
              >
                Terms and conditions
              </a>
            </li>
            <li className="mt-[15px]">
              <a
                className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/privacy-policy"
              >
                Privcay policy
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:mt-0">
          <p className="text-deutziawhite font-inter text-[18px] font-medium">
            Download the app
          </p>
          <div className="flex gap-4 sm:flex-col">
            <button
              className="flex items-center justify-center w-40 px-5 py-3 text-center text-white bg-white rounded-2xl sm:rounded-2xl md:w-auto"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="0 0 40 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width={40} height={45} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  App Store
                </span>
              </div>
            </button>
            {/* Google Store Button */}
            <button
              className="flex items-center justify-center w-40 px-5 py-3 text-center text-white bg-white rounded-2xl sm:rounded-2xl md:w-auto"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="-9 0 274 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                    fill="#FFD900"
                  />
                  <path
                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                    fill="#F43249"
                  />
                  <path
                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                    fill="#00EE76"
                  />
                  <path
                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                    fill="#00D3FF"
                  />
                </g>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  Play Store
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-[30px] text-white" />
    <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
      <p className="text-[10px] font-normal text-white md:text-[12px]">
        © Copyright
        {/* */}2024
        {/* */}, All Rights Reserved by Soft UI. PVT. LTD
      </p>
    </div>
  </div>
</div>
`}
      >
        <div className=" bg-violet-900 pt-9">
          <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
            <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
              <div className="md:w-[316px]">
                <p className="text-[18px] font-medium text-white"></p>
                <h1 className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl">
                  Soft
                  <span className="text-pink-700"> UI </span>
                </h1>
                <p />
                <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
                  odio facere officiis enim animi placeat eaque nesciunt alias
                  beatae id, at dicta.
                </p>
                <div className="mt-[18px] flex gap-4">
                  <a className="hover:scale-110" target="_blank" href="#!">
                    <button
                      className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white"
                      style={{ backgroundColor: "#4267B2" }}
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                      </svg>
                    </button>
                  </a>
                  <a className="hover:scale-110" target="_blank" href="/">
                    <button
                      className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#0E76A8] text-white"
                      style={{ backgroundColor: "#0E76A8" }}
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </a>
                  <a className="hover:scale-110" target="_blank" href="/">
                    <button className="m-2  w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </button>
                  </a>
                  <a className="hover:scale-110" target="_blank" href>
                    <button
                      className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white"
                      style={{ backgroundColor: "#1DA1F2" }}
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                  </a>
                  <a
                    className="hover:scale-110"
                    target="_blank"
                    href="https://www.youtube.com/"
                  >
                    <button
                      className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-[#FF0000] text-white"
                      style={{ backgroundColor: "#FF0000" }}
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:w-[316px]">
                <div className="mt-[23px] flex">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="ml-[18px]">
                    <a
                      href="tel:+911800123444"
                      className="font-Inter text-[14px] font-medium text-white"
                    >
                      +880 1719-68 1150
                    </a>
                    <p className="font-Inter text-[12px] font-medium text-white">
                      Support Number
                    </p>
                  </div>
                </div>
                <div className="mt-[23px] flex">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                    <svg
                      width={20}
                      height={15}
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="ml-[18px]">
                    <a
                      href="mailto:help@lorem.com"
                      className="font-Inter text-[14px] font-medium text-[#fff]"
                    >
                      contact@softui.com
                    </a>
                    <p className="font-Inter text-[12px] font-medium text-[#fff]">
                      Support Email
                    </p>
                  </div>
                </div>
                <div className="mt-[23px] flex">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                    <svg
                      width={18}
                      height={21}
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="ml-[18px]">
                    <a
                      href="mailto:help@lorem.com"
                      className="font-Inter text-[14px] font-medium text-[#fff]"
                    >
                      Dhaka Bangladesh
                    </a>
                    <p className="font-Inter text-[12px] font-medium text-white">
                      Address
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
                <div className>
                  <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                    Pages
                  </p>
                  <ul>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="#!"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="/our-tutors"
                      >
                        News
                      </a>
                    </li>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="/become-a-tutor"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="/plans-and-pricing"
                      >
                        Plans and pricing
                      </a>
                    </li>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="/terms-and-conditions"
                      >
                        Terms and conditions
                      </a>
                    </li>
                    <li className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href="/privacy-policy"
                      >
                        Privcay policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                  <p className="text-deutziawhite font-inter text-[18px] font-medium">
                    Download the app
                  </p>
                  <div className="flex gap-4 sm:flex-col">
                    <button
                      className="flex items-center justify-center w-40 px-5 py-3 text-center text-white bg-white rounded-2xl sm:rounded-2xl md:w-auto"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-7"
                        viewBox="0 0 40 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={40} height={45} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                        <span className="text-sm text-black">Get it on</span>
                        <span className="text-base font-semibold text-black">
                          App Store
                        </span>
                      </div>
                    </button>
                    {/* Google Store Button */}
                    <button
                      className="flex items-center justify-center w-40 px-5 py-3 text-center text-white bg-white rounded-2xl sm:rounded-2xl md:w-auto"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-7"
                        viewBox="-9 0 274 274"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                            fill="#FFD900"
                          />
                          <path
                            d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                            fill="#F43249"
                          />
                          <path
                            d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                            fill="#00EE76"
                          />
                          <path
                            d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                            fill="#00D3FF"
                          />
                        </g>
                      </svg>
                      <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                        <span className="text-sm text-black">Get it on</span>
                        <span className="text-base font-semibold text-black">
                          Play Store
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-[30px] text-white" />
            <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
              <p className="text-[10px] font-normal text-white md:text-[12px]">
                © Copyright
                {/* */}2024
                {/* */}, All Rights Reserved by Soft UI. PVT. LTD
              </p>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Footer12;
