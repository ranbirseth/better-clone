import React from 'react';
import Image from 'next/image';
import '../../component/style.css'

import { Phone, PhoneCallIcon } from 'lucide-react';
const Start = () => {
  return (
    <>
<div className='pr-16 pl-16 pt-10'>
<nav className='flex p-7 text-black justify-between  pb-5 '>
  <div>
  <svg
      className="icon icon-logo-mortgage"
      height="100%"
      role="img"
      version="1.1"
      viewBox="0 0 62 31"
      width="67px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Better Mortgage</title>
      <path d="M42.26 12.43h2.975V6.652c.277-.872 1.574-1.687 3.446-1.28V2.541c-1.556 0-2.895 1.009-3.446 2.618V2.735h-2.974v9.695Zm-4.843-7.774c.906 0 1.359.484 1.359.95 0 .679-.552 1.359-3.624 1.706 0-1.59 1.025-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.984.816-2.304 1.262-3.368 1.262-1.103 0-1.988-.581-2.423-1.511 3.9-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.198 2.074-5.198 5.1 0 2.85 2.382 4.962 5.376 4.962 1.282-.002 2.581-.369 3.526-1.029ZM30.15 9.425V4.656h2.027v-1.9l-2.027.021V.45l-5.633 3.917V.955l-4.707 3.49v.213h1.773V9.97c0 1.687 1.261 2.58 2.975 2.58.748 0 1.38-.136 1.95-.465v-1.998a2.01 2.01 0 0 1-.985.273c-.63 0-1.004-.311-1.004-.854V4.658h2.698v5.294c0 1.705 1.26 2.597 2.992 2.597.769 0 1.398-.097 2.01-.464V10.07c-.257.155-.65.29-1.044.29-.632-.004-1.025-.332-1.025-.934ZM15.794 4.656c.907 0 1.36.484 1.36.95 0 .679-.552 1.359-3.625 1.706 0-1.59 1.023-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.983.816-2.303 1.262-3.367 1.262-1.103 0-1.988-.581-2.423-1.511 3.899-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.199 2.074-5.199 5.1 0 2.85 2.382 4.962 5.377 4.962 1.281-.002 2.58-.369 3.526-1.029ZM5.298 7.215c.924 0 1.693.563 1.693 1.512 0 .892-.769 1.435-1.693 1.435H3.052V7.215h2.245Zm-.158-4.963c.886 0 1.595.543 1.595 1.377 0 .892-.71 1.435-1.595 1.435H3.052V2.252H5.14ZM0 .002V12.43h5.947c2.283 0 4.077-1.376 4.077-3.471 0-1.338-.867-2.404-2.128-2.908 1.142-.505 1.91-1.494 1.91-2.677C9.807 1.338 7.996 0 5.692 0H0v.002Z" fill="#017848"></path>
      <path d="m5.613 24.595 3.682-5.75v8.345h1.192V16.567H9.4l-4.149 6.625-4.165-6.625H0V27.19h1.192v-8.344l3.682 5.749h.74ZM15.796 19.404c-2.248 0-3.908 1.75-3.908 3.984 0 2.233 1.66 3.983 3.908 3.983 2.233 0 3.893-1.75 3.893-3.983 0-2.234-1.66-3.984-3.893-3.984Zm0 1.102c1.584 0 2.701 1.312 2.701 2.882 0 1.569-1.117 2.882-2.7 2.882-1.6 0-2.717-1.313-2.717-2.882 0-1.57 1.117-2.882 2.716-2.882ZM29.519 26.073c-.332.181-.71.227-.92.227-.83 0-1.313-.453-1.313-1.373v-4.361h1.961v-.98h-1.961v-2.098h-1.162v7.56c0 1.478.875 2.323 2.248 2.323.483 0 .875-.09 1.147-.226v-1.072Zm-7.364-6.488h-1.131v7.605h1.162v-3.863c0-1.72.95-2.761 2.353-2.761.106 0 .242 0 .317.015V19.45a1.64 1.64 0 0 0-.422-.045c-1.026 0-1.886.573-2.279 1.645v-1.464ZM36.352 25.862v.95c0 1.585-1.071 2.52-2.565 2.52-1.117 0-2.067-.467-2.671-1.222l-.785.74c.77.966 1.992 1.539 3.456 1.539 2.112 0 3.681-1.373 3.681-3.456v-7.348h-1.161v1.298c-.453-.86-1.57-1.479-2.686-1.479-2.022 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.313 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM43.687 22.165v.363c-2.52-.197-4.994.347-4.994 2.625 0 1.313 1.04 2.218 2.43 2.218 1.146 0 2.096-.573 2.64-1.554v1.373h1.086v-4.934c0-1.765-1.177-2.852-3.018-2.852-1.313 0-2.293.558-2.942 1.328l.619.754c.497-.573 1.297-1.04 2.233-1.04 1.207 0 1.946.663 1.946 1.72Zm-2.399 4.21c-.845 0-1.464-.513-1.464-1.282 0-1.343 1.389-1.72 2.837-1.72.362 0 .724.015 1.072.06v.558c0 1.192-1.057 2.384-2.445 2.384ZM52.415 25.862v.95c0 1.585-1.072 2.52-2.566 2.52-1.116 0-2.067-.467-2.67-1.222l-.785.74c.77.966 1.992 1.539 3.455 1.539 2.113 0 3.682-1.373 3.682-3.456v-7.348H52.37v1.298c-.452-.86-1.569-1.479-2.685-1.479-2.023 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.312 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM58.53 19.404c-2.234 0-3.818 1.75-3.818 3.984 0 2.248 1.584 3.983 3.999 3.983 1.237 0 2.233-.422 3.063-1.328l-.725-.8a2.992 2.992 0 0 1-2.308 1.057c-1.494 0-2.671-.996-2.807-2.58h6.006c.03-.197.06-.468.06-.725 0-1.991-1.343-3.59-3.47-3.59Zm0 1.056c1.282 0 2.293.875 2.338 2.279v.03H55.95c.181-1.373 1.223-2.309 2.58-2.309Z" fill="#6F7672"></path>
    </svg>
  </div>

  <div className='flex items-center gap-5'>
    <span className='bg-green-300  p-2 rounded-full'><PhoneCallIcon className=' text-green-900'/></span>
    <span>Need help? Call (415) 523 8837</span>
  </div>
</nav>
<div className='h-[4px] opacity-10 bg-gray-600 w-full'></div>
<div className='font-bold flex justify-center text-center items-center text-2xl text-black mt-20'>
  <h1>Hi, I'm Betsy!       
 </h1>
 
  <h1>
  What can I help you with?       </h1>
</div>
</div>

<div>

<div role="radiogroup" className="grid justify-center items-center  ">
      <button aria-checked="false" role="radio" tabIndex="0" className=" rounded-md flex border border-gray-800 p-3 font-bold  hover:border-[3px] hover:border-green-800  mt-8 w-[35vw] text-center items-center ">
        <div className="css-1etrdwv">
          <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
            <title id="start-purchase-icon">Start Purchase</title>
            <path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848" />
            <path d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z" fill="#017848" />
          </svg>
        </div>
        <span className="css-8y1shf">Buying a home</span>
      </button>

      <button aria-checked="false" role="radio" tabIndex="-1" className=" rounded-md flex border border-gray-800 p-3 font-bold  hover:border-[3px] hover:border-green-800 rounde mt-8 w-[35vw] text-center items-center">
        <div className="css-1etrdwv">
          <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
            <title id="start-refinance-icon">Start Refinance</title>
            <path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848" />
            <path d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z" fill="#017848" />
            <path d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z" fill="#017848" />
          </svg>
        </div>
        <span className="css-8y1shf">Refinance my mortgage</span>
      </button>

      <button aria-checked="false" role="radio" tabIndex="-1" className=" flex border rounded-md border-gray-800 p-3 font-bold hover:border-[5px] hover: hover:bo rounderder-green-700 mt-8 w-[35vw] text-center items-center">
        <div className="css-1etrdwv">
          <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
            <title id="start-cashout-refinance-icon">Start Cashout Refinance</title>
            <path d="M2.25 18a.75.75 0 0 1 1.5 0h.75a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z" fill="#017848" />
            <path d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z" fill="#017848" />
          </svg>
        </div>
        <span className="css-8y1shf">Get cash from my home</span>
      </button>
    </div>
    <div className="css-1fm3nw5">
      <div className="css-1aw7eg5">
        <p className="css-dou93">$100B</p>
        <p className="css-1874ra6">home loans funded entirely&nbsp;online</p>
      </div>
      <div className="css-75sbof">
        <p className="css-dou93">400K</p>
        <p className="css-1874ra6">Customers who chose a Better&nbsp;Mortgage</p>
      </div>
    </div>


</div>
<div className="grid justify-center w-auto  p-6 bg-white rounded-md shadow-md">
  <p className="description text-center text-lg font-semibold text-gray-700 mb-4">After a few questions, you'll unlock:</p>
  <div className="features-list  gap-6 sm:flex items-center text-center justify-center">
    <div className="feature-item flex flex-row items-center w-auto space-x-2">
      <div className="h-[20px] w-[20px]">
        <svg fill="none" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
          <title id="percentage-outlined-icon">Percentage Outlined</title>
          <path clipRule="evenodd" d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z" fill="#017848" fillRule="evenodd" />
        </svg>
      </div>
      <div className="feature-description">
        <p className="text-gray-600">Custom mortgage rates</p>
      </div>
    </div>

    <div className="feature-item flex flex-row items-center w-auto space-x-2">
      <div className="h-[20px] w-[20px]">
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MonetizationOnOutlinedIcon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42" />
        </svg>
      </div>
      <div className="feature-description">
        <p className="text-gray-600">Exclusive offers</p>
      </div>
    </div>

    <div className="feature-item flex flex-row items-center w-auto space-x-2">
      <div className="h-[20px] w-[20px]">
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIphoneOutlinedIcon">
          <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z" />
        </svg>
      </div>
      <div className="feature-description">
        <p className="text-gray-600">A personalized dashboard</p>
      </div>
    </div>
  </div>
</div>


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

</>
  );
};

export default Start;
