"use client";
import Navbar from '@/Component/Nav';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../Component/style.css';
import ComponentA from '@/Component/ComponentA';
import ComponentB from '@/Component/ComponentB';
import ComponentC from '@/Component/ComponentC';

const Home = () => {
  
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp',
    'https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp',
    'https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp',
  ];

  const names = ['Arian', 'Amanda', 'Paul'];
  const handleOptionClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Navbar />
      <div className='bg-accentBorderInverseSecondary full-hero'>
        <section className="section bg-accentPrimary">
          <div className="m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
            <h1 className="font-bold leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter top-32  z-20 pt-12 leading-small text-center text-[50px] text-textInverseHighlight md:relative md:top-[72px] lg:top-32 md:p-0 md:text-4xl lg:text-[118px]">
              Mortgages<br />made simple
            </h1>
            <div className="relative flex flex-col items-center justify-center md:flex-row">
              <div className="w-80 md:w-auto">
                <Link href="/start"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-graphTertiary text-interactiveForegroundInversePrimary hover:bg-green-950 hover:text-white h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit">
                  Start my approval

                </Link>
                <div className="mt-3 flex items-center justify-center gap-1 text-sm text-accentSecondary">
                  <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-accentSecondary" d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"></path>
                  </svg>
                  <span className="mr-1">3 min</span>
                  <span>| No credit impact</span>
                </div>
              </div>
              <div className="mt-5 md:mb-[-36px] md:mt-0">
                <Image
                  alt="Better Mortgage"
                  src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
                  width={510}
                  height={810}
                  priority
                />
              </div>
              <div className="rounded-base absolute z-10 bottom-8  px-3 py-2.5 md:relative md:bg-transparent md:mt-lg">
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_328_5133)">
                      <path
                        d="M23.9998 12.2755C23.9998 11.4598 23.9324 10.6397 23.7884 9.83716H12.2405V14.4581H18.8534C18.579 15.9485 17.6973 17.2669 16.4062 18.1047V21.103H20.3515C22.6683 19.013 23.9998 15.9264 23.9998 12.2755Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2394 24.0003C15.5414 24.0003 18.326 22.9377 20.3549 21.1034L16.4096 18.1051C15.3119 18.837 13.8949 19.2515 12.2439 19.2515C9.04991 19.2515 6.34175 17.1394 5.37006 14.2998H1.29883V17.3907C3.37718 21.4429 7.61036 24.0003 12.2394 24.0003Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.36724 14.299C4.8544 12.8086 4.8544 11.1948 5.36724 9.70447V6.61353H1.30051C-0.435945 10.0043 -0.435945 13.9992 1.30051 17.3899L5.36724 14.299Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2394 4.74868C13.9849 4.72223 15.6718 5.36599 16.9359 6.54769L20.4314 3.12164C18.218 1.08453 15.2805 -0.0354426 12.2394 -0.000167897C7.61036 -0.000167897 3.37718 2.55725 1.29883 6.61383L5.36556 9.70477C6.33276 6.86075 9.04541 4.74868 12.2394 4.74868Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_328_5133">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex items-center">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z"
                        fill="#FFBC14"
                      />
                    </svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z" fill="#FFBC14"></path></svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z" fill="#FFBC14"></path></svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z" fill="#FFBC14"></path></svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0307 1.75142C12.2762 1.5878 12.5647 1.50049 12.8598 1.50049V3.0078V7.94151V8.82243L12.8595 9.37512V9.75012L12.8598 11.2501L12.8595 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8532 18.6266L8.072 21.5328C7.81941 21.685 7.52755 21.7594 7.23291 21.7467C6.93827 21.7339 6.65393 21.6346 6.41543 21.4611C6.17693 21.2877 5.99486 21.0477 5.89198 20.7713C5.7891 20.495 5.76998 20.1944 5.837 19.9072L7.1045 14.4191L2.87544 10.7234C2.65176 10.5305 2.49001 10.2758 2.41049 9.99138C2.33096 9.7069 2.3372 9.40528 2.42841 9.12434C2.51962 8.8434 2.69175 8.59564 2.92321 8.41213C3.15467 8.22862 3.43516 8.11754 3.7295 8.0928L9.30387 7.60999L11.4798 2.41999C11.5934 2.14766 11.7851 1.91504 12.0307 1.75142Z" fill="#FFBC14"></path><path d="M13.6873 1.75142C13.4418 1.5878 13.1533 1.50049 12.8582 1.50049V3.0078V7.94151V8.82243L12.8585 9.37512V9.75012L12.8582 11.2501L12.8585 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8648 18.6266L17.646 21.5328C17.8986 21.685 18.1905 21.7594 18.4851 21.7467C18.7797 21.7339 19.0641 21.6346 19.3026 21.4611C19.5411 21.2877 19.7232 21.0477 19.826 20.7713C19.9289 20.495 19.948 20.1944 19.881 19.9072L18.6135 14.4191L22.8426 10.7234C23.0663 10.5305 23.228 10.2758 23.3075 9.99138C23.3871 9.7069 23.3808 9.40528 23.2896 9.12434C23.1984 8.8434 23.0263 8.59564 22.7948 8.41213C22.5633 8.22862 22.2829 8.11754 21.9885 8.0928L16.4141 7.60999L14.2382 2.41999C14.1246 2.14766 13.9329 1.91504 13.6873 1.75142Z" fill="#E8EAE6"></path></svg>
                  </div>
                </div>
                <div className="mt-1 text-xs text-interactiveSecondary">
                  4.6 Stars | 3177 Google reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section m-auto flex max-w-screen-2xl flex-col justify-between gap-x-3xl p-base px-lg py-4xl md:px-10 md:flex-row-reverse xl:p-[120px]'>
          <div className="flex flex-col justify-center md:max-w-[507px]">
            <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-lg text-3xl leading-small md:text-3xl lg:text-[88px] font">Find out why we’re better.</h2>
            <a className="inline-flex mb-3 text-white hover:bg-green-700 items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-accentPrimary text-interactiveForegroundPrimary hover:bg-backgroundInverseSecondary h-16 px-12 py-5 mb-sm w-full md:w-fit" href="/about-us/">See all our stories</a>
            <div className="mb-2xl flex items-end justify-center gap-sm leading-small text-textSecondary md:justify-start">
              <svg

                width="90"
                height="23"
                viewBox="0 0 90 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_328_4813"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: 'luminance' }}
                  x="0"
                  y="0"
                  width="90"
                  height="23"
                >
                  <path d="M89.5 0.343384H0.5V22.3434H89.5V0.343384Z" fill="white" />  </mask>
                <g mask="url(#mask0_328_4813)">
                  <path d=" M23.8906 8.13831H32.9052V9.83207H29.3651V19.3455H27.4151V9.83207H23.8906V8.13831ZM32.5147 11.2301H34.1834V12.7997H34.2148C34.2722 12.5673 34.3751 12.3487 34.5173 12.1569C34.6739 11.9414 34.8589 11.7486 35.0673 11.5836C35.281 11.4102 35.5194 11.27 35.7744 11.1676C36.0268 11.0641 36.2968 11.0104 36.5695 11.0095C36.7127 11.0067 36.8558 11.0117 36.9984 11.0245C37.077 11.0356 37.1555 11.0459 37.2404 11.0561V12.7831C37.1155 12.7618 36.9882 12.7435 36.8578 12.7277C36.7311 12.7121 36.6036 12.7042 36.4759 12.7041C36.1829 12.7023 35.8931 12.7641 35.6259 12.8852C35.3576 13.0079 35.1205 13.1901 34.9322 13.418C34.7214 13.6751 34.5613 13.9704 34.4608 14.2878C34.3403 14.6738 34.2825 15.0766 34.2895 15.4811V19.3423H32.5147V11.2301ZM45.3993 19.3455H43.6521V18.2139H43.6207C43.3959 18.6281 43.0574 18.9685 42.6457 19.1945C42.2463 19.4316 41.7918 19.559 41.3282 19.5637C40.2675 19.5637 39.5007 19.3002 39.0278 18.7729C38.5548 18.2458 38.3191 17.448 38.3207 16.3794V11.2301H40.0954V16.2062C40.0954 16.9178 40.2306 17.4187 40.5008 17.7086C40.7711 17.9986 41.1506 18.1452 41.6393 18.1483C41.96 18.1592 42.2793 18.1006 42.5757 17.9767C42.8117 17.8721 43.0199 17.7134 43.1838 17.5133C43.3457 17.3085 43.4603 17.07 43.5193 16.8151C43.5887 16.5273 43.6228 16.232 43.6207 15.9358V11.2301H45.3986L45.3993 19.3455ZM48.4233 16.74C48.4757 17.2634 48.6731 17.6295 49.0158 17.8383C49.3892 18.0567 49.8158 18.1662 50.2476 18.1546C50.4381 18.1531 50.6283 18.1402 50.8172 18.1159C51.0228 18.0917 51.2244 18.0414 51.4175 17.9664C51.5953 17.9 51.7534 17.7893 51.8771 17.6445C52.0017 17.4873 52.0606 17.2874 52.0412 17.0871C52.0394 16.981 52.0163 16.8762 51.9734 16.7792C51.9304 16.6822 51.8686 16.5949 51.7914 16.5225C51.617 16.3651 51.4129 16.2449 51.1911 16.1691C50.9189 16.0728 50.6401 15.9967 50.3568 15.9413C50.0426 15.8791 49.7254 15.8111 49.4054 15.7374C49.0809 15.6665 48.7606 15.5775 48.4461 15.4709C48.151 15.3722 47.8724 15.2293 47.6196 15.047C47.3745 14.8682 47.1744 14.6342 47.0351 14.3638C46.8802 14.0442 46.8051 13.6913 46.8167 13.3359C46.8032 12.942 46.9153 12.5541 47.1364 12.2288C47.3508 11.929 47.6295 11.6817 47.952 11.5053C48.2924 11.3173 48.6614 11.1872 49.044 11.1202C49.422 11.0495 49.8057 11.013 50.1902 11.0111C50.5916 11.0095 50.9917 11.054 51.3828 11.1439C51.748 11.2272 52.0962 11.3732 52.4121 11.5757C52.7199 11.7758 52.9808 12.0411 53.1765 12.353C53.3897 12.7031 53.5202 13.0977 53.5583 13.5066H51.6987C51.6154 13.0771 51.4206 12.7892 51.1142 12.6431C50.7839 12.4919 50.4242 12.4168 50.0614 12.4233C49.9126 12.4248 49.7642 12.4354 49.6167 12.4549C49.4515 12.4741 49.2892 12.5137 49.1336 12.5728C48.9887 12.6259 48.8579 12.7116 48.7509 12.8234C48.6438 12.9407 48.5872 13.096 48.5939 13.2552C48.5902 13.3554 48.6087 13.4552 48.6478 13.5475C48.6869 13.6398 48.7457 13.7222 48.8201 13.789C48.9943 13.9385 49.1954 14.053 49.4125 14.1266C49.6846 14.2229 49.9634 14.2987 50.2468 14.3535C50.5611 14.4167 50.8835 14.485 51.214 14.5584C51.5354 14.6311 51.8529 14.7201 52.1653 14.8248C52.4633 14.9223 52.7448 15.0653 52.9997 15.2487C53.244 15.4273 53.4463 15.6578 53.5922 15.924C53.7518 16.2336 53.8297 16.5794 53.8184 16.9282C53.8184 17.4095 53.7092 17.8175 53.4908 18.1523C53.2734 18.4864 52.9825 18.7656 52.6407 18.9683C52.2805 19.1827 51.8881 19.3364 51.4787 19.4238C51.0639 19.5166 50.6403 19.5641 50.2153 19.5653C49.7385 19.5698 49.2632 19.5115 48.8013 19.3921C48.3971 19.2903 48.0161 19.1118 47.6785 18.8662C47.3649 18.6356 47.1085 18.3349 46.9298 17.9877C46.7387 17.6 46.6401 17.1727 46.6415 16.74H48.4233ZM54.2866 11.2301H55.6277V8.79779H57.4057V11.2301H59.0123V12.5649H57.4065V16.8965C57.4051 17.0592 57.413 17.2219 57.43 17.3837C57.441 17.5052 57.4783 17.6229 57.5392 17.7284C57.5994 17.8254 57.6897 17.8999 57.7961 17.9403C57.9473 17.9941 58.1073 18.0182 58.2676 18.0115C58.3925 18.0115 58.5174 18.0115 58.6415 18.0035C58.7679 17.9979 58.8935 17.9794 59.0162 17.9482V19.3297C58.8183 19.3502 58.6234 19.3716 58.4388 19.3921C58.2473 19.4136 58.0548 19.4241 57.8621 19.4238C57.4808 19.4349 57.1 19.3898 56.7315 19.2901C56.4775 19.2196 56.2461 19.0833 56.0606 18.8947C55.8943 18.7118 55.781 18.4865 55.733 18.2432C55.6718 17.9489 55.6378 17.6495 55.6316 17.3488V12.5649H54.2874L54.2866 11.2301ZM60.2576 11.2301H61.9443V12.3292H61.9758C62.2004 11.8827 62.5687 11.5259 63.0207 11.3171C63.4766 11.1111 63.9713 11.0068 64.471 11.0111C65.0425 10.9981 65.6099 11.1131 66.1319 11.3479C66.5903 11.5612 66.9936 11.8781 67.3104 12.2739C67.6298 12.682 67.868 13.1484 68.0119 13.6473C68.1714 14.1927 68.2507 14.7585 68.2476 15.3269C68.2482 15.8612 68.1773 16.3931 68.037 16.9084C67.9083 17.3965 67.6915 17.8568 67.3976 18.2661C67.1115 18.6584 66.7408 18.9804 66.3134 19.2079C65.8776 19.4435 65.363 19.5613 64.7695 19.5613C64.5081 19.5613 64.2473 19.5374 63.9902 19.4901C63.7327 19.4442 63.4814 19.368 63.2414 19.2632C63.0039 19.1596 62.7809 19.0247 62.5783 18.8623C62.3777 18.7026 62.2062 18.5089 62.0717 18.2898H62.0402V22.3392H60.2607L60.2576 11.2301ZM66.4642 15.2961C66.4649 14.9355 66.4176 14.5765 66.3236 14.2286C66.2385 13.9006 66.097 13.5902 65.9056 13.3113C65.7216 13.0477 65.482 12.8281 65.204 12.6685C64.9088 12.5025 64.575 12.4184 64.2368 12.425C63.4884 12.425 62.9246 12.6864 62.5454 13.2093C62.1662 13.7323 61.9763 14.4279 61.9758 15.2961C61.9727 15.6804 62.0227 16.0634 62.1243 16.434C62.2105 16.7611 62.3603 17.0677 62.565 17.3362C62.7566 17.5827 62.9975 17.7858 63.2721 17.9324C63.5687 18.0843 63.898 18.1599 64.2306 18.1523C64.5898 18.1636 64.9455 18.0771 65.2598 17.9015C65.536 17.7383 65.7731 17.5159 65.9543 17.25C66.1411 16.9742 66.2744 16.6655 66.3471 16.3399C66.4263 15.9976 66.4667 15.6475 66.4673 15.2961H66.4642ZM69.599 8.13831H71.38V9.83207H69.6021L69.599 8.13831ZM69.599 11.2301H71.38V19.3455H69.6021L69.599 11.2301ZM72.9655 8.13831H74.7434V19.3455H72.9686L72.9655 8.13831ZM80.1855 19.5653C79.5966 19.5746 79.0117 19.4646 78.4657 19.2419C77.9813 19.0415 77.5452 18.739 77.1868 18.3546C76.8314 17.966 76.5608 17.5067 76.3924 17.0064C76.0289 15.8899 76.0289 14.6856 76.3924 13.5691C76.5608 13.0682 76.8316 12.6083 77.1876 12.2193C77.5464 11.8364 77.9821 11.5348 78.4657 11.3345C79.5753 10.9064 80.8029 10.9064 81.9124 11.3345C82.3961 11.5357 82.8319 11.8381 83.1907 12.2217C83.5467 12.6108 83.8179 13.0705 83.9865 13.5715C84.35 14.688 84.35 15.8923 83.9865 17.0089C83.8179 17.5098 83.5467 17.9696 83.1907 18.3586C82.832 18.7414 82.3961 19.0425 81.9124 19.2419C81.3653 19.465 80.779 19.5749 80.1887 19.5653H80.1855ZM80.1855 18.1523C80.5446 18.1612 80.8996 18.0747 81.2148 17.9015C81.5005 17.739 81.746 17.5136 81.9328 17.2421C82.123 16.9628 82.2628 16.652 82.3461 16.324C82.5221 15.6421 82.5221 14.9263 82.3461 14.2443C82.2649 13.9154 82.1249 13.6041 81.9328 13.3255C81.7443 13.0579 81.499 12.8356 81.2148 12.6748C80.8966 12.5095 80.5436 12.4233 80.1855 12.4233C79.8275 12.4233 79.4746 12.5095 79.1564 12.6748C78.8724 12.8356 78.6274 13.0579 78.439 13.3255C78.2468 13.6038 78.1067 13.9153 78.0258 14.2443C77.8487 14.9262 77.8487 15.6423 78.0258 16.324C78.1087 16.6522 78.2486 16.9629 78.439 17.2421C78.6258 17.5136 78.8709 17.739 79.1564 17.9015C79.4725 18.0753 79.8287 18.1617 80.1887 18.1523H80.1855ZM84.7707 11.2301H86.1117V8.79779H87.8896V11.2301H89.4955V12.5649H87.8896V16.8965C87.8884 17.0592 87.8963 17.2219 87.9132 17.3837C87.9241 17.5052 87.9614 17.6229 88.0224 17.7284C88.0824 17.8256 88.1728 17.9002 88.2794 17.9403C88.4306 17.9941 88.5906 18.0182 88.7507 18.0115C88.8756 18.0115 88.9997 18.0115 89.1246 18.0035C89.2509 17.998 89.3762 17.9794 89.4987 17.9482V19.3297C89.3014 19.3502 89.1058 19.3716 88.922 19.3921C88.7305 19.4136 88.5379 19.4241 88.3453 19.4238C87.9637 19.4348 87.5827 19.3897 87.214 19.2901C86.96 19.2196 86.729 19.0833 86.5439 18.8947C86.3774 18.7118 86.2641 18.4865 86.2162 18.2432C86.155 17.9489 86.1211 17.6495 86.1149 17.3488V12.5649H84.7738L84.7707 11.2301Z" fill="#292B29"></path><path d="M21.8162 8.1385L13.6738 8.13691L11.1581 0.343384L8.6425 8.13612L0.5 8.13454L7.08766 12.9533L4.57203 20.7485L11.1589 15.9312L17.7443 20.7485L15.2285 12.9557L21.8162 8.1385Z" fill="#23AD7A" />
                  <path d="M15.8002 14.7214L15.2298 12.955L11.1602 15.9305L15.8002 14.7214Z" fill="#00532C" />
                </g>
              </svg>
              <span className='ml-1'>Excellent</span>
              <span>4.4 out of 5</span>
            </div>
          </div>

          <div className='flex flex-col gap-lg md:flex-col-reverse'>
            <div className="flex justify-center gap-x-base overflow-hidden rounded-lg">

              <div style={{ textAlign: 'center' }}>
                <div>
                  <img
                    src={images[activeIndex]}
                    alt={`Slide ${activeIndex + 1}`}
                    style={{ width: '341px', height: '606px' }}
                  />
                </div>
                <div className="flex mt-4 ml-3 gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
                  {names.map((name, index) => (
                    <button className='inline-flex  border border-gray-500 hover:border-green-950 items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200  hover:shadow-[0_0_0_4px_inset]  h-12 px-6 py-3 w-auto  shadow-[0_0_0_4px_inset] '
                      key={index}
                      onClick={() => handleOptionClick(index)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

            </div>


          </div>
        </section>

        <section className="section w-full pb-base lg:pb-12">
          <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
            <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
              <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
                Got questions?<br />We've got answers
              </h2>
              <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                <button onClick={() => handleButtonClick('A')} className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary">
                  Our products
                </button>
                <button onClick={() => handleButtonClick('b')} className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                  Calculators
                </button>
                <button onClick={() => handleButtonClick('c')} className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                  Guides & FAQs
                </button>
              </div>
            </div>


            <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
              <ComponentA />
              {activeComponent === 'B' && <ComponentB />}
              {activeComponent === 'C' && <ComponentC />}
            </div>
          </div>
        </section>
        <hr className='border-t border-strokeDivider my-0 pb-lg' />
        <footer className='bg-accentBorderInverseSecondary section flex'>
          <div className="m-auto px-6 py-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
            <svg
              role="img"
              className="icon icon-LogoBetter2021"
              width="85px"
              height="35px"
              viewBox="0 0 495 133"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Better</title>
              <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="#017848"></path>
            </svg>
            <div className="mt-6 flex flex-col gap-y-8 md:flex-row md:gap-16">
              <div className="flex-shrink flex-grow basis-1/6">
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                  Better is a family of companies serving all your homeownership needs.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="mt-4">
                    <a href="/mortgage/">
                      <Image
                        alt="better mortgage homepage"
                        loading="lazy"
                        width={150}
                        height={23}
                        src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg"
                      />
                    </a>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                      We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                    </p>
                  </li>
                  <li>
                    <a href="/b/realestate/">
                      <Image
                        alt="better real estate page"
                        loading="lazy"
                        width={160}
                        height={21}
                        src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg"
                      />
                    </a>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                      Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.bettercover.com/">
                      <Image
                        alt="better cover page"
                        loading="lazy"
                        width={115}
                        height={21}
                        src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg"
                      />
                    </a>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                      Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                    </p>
                  </li>
                  <li>
                    <a href="/content/home-inspection-checklist/">
                      <Image
                        alt="better inspect page"
                        loading="lazy"
                        width={130}
                        height={23}
                        src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg"
                      />
                    </a>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                      Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                    </p>
                  </li>
                  <li>
                    <a href="/title/">
                      <Image
                        alt="better settlement services page"
                        loading="lazy"
                        width={240}
                        height={21}
                        src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg"
                      />
                    </a>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                      Get transparent rates when you shop for title insurance all in one convenient place.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex-shrink flex-grow basis-0">
                <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                  Resources
                </h4>
                <ul className="mt-2 space-y-4 md:mt-6">
                  <li>
                    <a href="/how-much-house-can-i-afford" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">
                      Home affordability calculator
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator/">
                      Mortgage calculator
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/free-mortgage-calculator/">
                      Free mortgage calculator
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator-with-taxes/">
                      Mortgage calculator with taxes
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator-with-pmi/">
                      Mortgage calculator with PMI
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/rent-vs-buy-calculator/">
                      Rent vs buy calculator
                    </a>
                  </li>
                  <li>
                    <a href="/heloc-calculator" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">
                      HELOC payment calculator
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/heloc-vs-cashout-refi-calculator/">
                      HELOC vs cash-out refinance calculator
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/buying-a-house-online/">
                      Buy a home
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/buying-and-selling-a-home-at-the-same-time/">
                      Sell a home
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/home-inspection-checklist/">
                      Get home inspection
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink flex-grow basis-0">
                <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                  Company
                </h4>
                <ul className="mt-2 space-y-4 md:mt-6">
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/careers/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/media/">
                      Media
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/partnerships/">
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/">
                      Learning Center
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/faq/">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="styles_hover-gradient-effect__AIX_8" href="https://investors.better.com">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink flex-grow basis-0">
                <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                  Contact Us
                </h4>
                <ul className="mt-2 space-y-4 md:mt-6">
                  <li>
                    <a className="styles_hover-gradient-effect__AIX_8" href="mailto:hello@better.com">
                      hello@better.com
                    </a>
                  </li>
                  <li>
                    <a className="styles_hover-gradient-effect__AIX_8" href="tel:415-523-8837">
                      415-523-8837
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/faq/">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/glossary">
                      Glossary
                    </a>
                  </li>
                </ul>

                <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mt-6">
                  Legal
                </h4>
                <ul className="mt-2 space-y-4 md:mt-6">
                  <li>
                    <a className="styles_hover-gradient-effect__AIX_8" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">
                      NMLS Consumer Access
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/terms-of-use/">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/licensing-disclosure/">
                      Disclosures & Licensing
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/affiliated-business/">
                      Affiliated Business
                    </a>
                  </li>
                  <li>
                    <a className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/browser-support">
                      Browser Disclaimer
                    </a>
                  </li>
                  <li>
                    <div className="mt-8 flex gap-4">
                      {/* SVG logos */}
                      <svg
                        data-qa="ehl-logo"
                        aria-label="Ehl logo"
                        role="img"
                        fill="none"
                        height="40"
                        width="41"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path clipRule="evenodd" d="M33.047 25.681H8.24V11.733l12.54-7.416 12.268 7.416v13.948zM20.78.106L1.292 11.287v4.04h2.986V29.22h32.516V15.328h3.04v-3.93L20.78.106z" fill="#6F7672" fillRule="evenodd"></path>
                        {/* Other paths omitted for brevity */}
                      </svg>
                      <svg
                        aria-label="Eho logo"
                        data-qa="eho-logo"
                        fill="none"
                        height="40"
                        role="img"
                        width="43"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex gap-x-4 md:mt-60">
              <div>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/better/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#313131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/betterdotcom/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#313131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/betterdotcom/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#313131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1  hover:text-interactivePrimary text-inherit" href="/with/one-day-mortgage-terms/">One Day Mortgage™ Terms and Conditions.</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
                <sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions/">One Day HELOC™ Terms and Conditions.</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
                <sup>3</sup> Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
              </p>
              <hr className="my-xl border-strokeBorder" />
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                © 2024 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a className="underline" data-qa="nmls-link" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">NMLS Consumer Access</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s <a className="underline" href="/with/better-realestate-license/">license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                <a className="underline" href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf">New York State Housing and Anti-Discrimination Notice</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                <a className="underline" href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf">New York Standard Operating Procedures</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Texas Real Estate Commission: <a className="underline" href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=645736">Information About Brokerage Services</a> | <a className="underline" href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf">Consumer Protection Notice</a>
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <a className="underline" href="https://www.bettercover.com/licenses">license numbers</a>.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &amp; Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
              </p>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home &amp; Finance Holding Company. Better Home &amp; Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
              </p>
            </div>


          </div>

        </footer>
      </div>


    </>
  );
};

export default Home;
