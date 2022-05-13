
import "./App.css";

function App() {
  return (
    <div className="">
      <header className="container  flex h-20 py-6 mb-16 sticky  bg-white top-0 border-gray-200 border-b-2  md:border-none md:p-10">
        {/*nav*/}
        <nav className="flex flex-1 justify-between  items-center ">
          {/*logo*/}
          <div className="container">
              <img
                className=" w-40 md:w-auto z-10 absolute top-7 left-2 transform translate-x-3"
                src="https://leonidasesteban.github.io/bookmark-landing/static/images/logo-bookmark.svg"
                alt="logo website"
              ></img>
          </div>
          {/*lists*/}
          <div className="">
            <ul className=" invisible fixed top-0 left-0  w-full h-screen justify-center space-y-12 flex flex-col  items-center bg-gray-500 bg-opacity-90  text-slate-900 md:bg-transparent   md:visible md:flex-row md:justify-center md:static md:items-center space-x-6  py-10 md:space-y-0 cursor-pointer">
              <li class="list ml-8">Features</li>
              <li class="list">Pricing</li>
              <li class="list">contact</li>
              {/*button*/}
              <li class="btn-red w-28 uppercase font-semibold tracking-widest text-center">
                login
              </li>
            </ul>
          </div>
        </nav>
        {/*logo menu*/}
        <div className="flex items-start mb-3 z-20 visible md:invisible cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-center"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </header>
      {/*container*/}
      <section className="container mx-auto ">
        <div className="flex flex-col-reverse  lg:flex lg:flex-row  justify-center items-center ">
          {/*content*/}
          <div className=" text-center md:text-left md:max-w-lg md:p-7">
            <h1 className="text-4xl font-bold mb-5 mt-10 leading-tight md:max-w-sm">
              A Simple Bookmark Manager
            </h1>
            <p class="text">
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            {/*button*/}
            <div className="my-10">
              <button class="btn-softBlue">Get it on Chrome</button>
              <button class="btn-white">Get it on Firefox</button>
            </div>
          </div>
          {/*image*/}
          <div>
            <img src="https://leonidasesteban.github.io/bookmark-landing/static/images/illustration-hero.svg" alt="sadsa"></img>
          </div>
        </div>
      </section>
      {/*Features*/}
      <section className="container mx-auto p-1 mt-20">
        {/*title*/}
        <div className="px-1 text-center mx-auto max-w-xl">
          <h1 className=" text-3xl font-semibold">Features</h1>
          {/*desc*/}
          <p class="text ">
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go.
          </p>
        </div>
        {/*list*/}
        <div className=" flex flex-col lg:flex lg:flex-row">
          <ul className="mb-12 mt-10 text-center lg:flex lg:flex-row lg:space-x-12 lg:justify-center lg:items-center lg:mx-auto lg:border-b-2 lg:border-black md:py-4">
            <li className="text-xl py-4 border-t-2 border-black lg:border-none">
              Simple Bookmarking
            </li>
            <li className="text-xl  py-4   border-t-2 border-black lg:border-none">
              Speedy Searching
            </li>
            <li className="text-xl  py-4 border-y-2 border-black lg:border-none">
              Easy Sharing
            </li>
          </ul>
        </div>
      </section>
      {/*Container*/}
      <section className=" container mx-auto p-1 ">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center">
          {/*image*/}
          <div className="">
            <img src="https://leonidasesteban.github.io/bookmark-landing/static/images/illustration-features-tab-1.svg" alt="adsa"></img>
          </div>
          {/*content*/}
          <div className=" text-center mx-8 max-w-xl md:text-left md:max-w-lg md:p-7 ">
            <h1 className="text-4xl font-bold mb-5 mt-10 leading-tight md:max-w-sm">
              Bookmark in one click
            </h1>
            <p class="text">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            {/*button*/}
            <button class="btn-softBlue mt-4">More Info</button>
          </div>
        </div>
      </section>
      {/*Download the extension*/}
      <section>
        <div className="container mx-auto p-2 text-center mt-28">
          {/*Content*/}
          <div className="md:max-w-md mx-auto">
            <h1 className=" text-3xl font-semibold">Download the extension</h1>
            <p class="text">
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favorite you’d like us to prioritize.
            </p>
          </div>
          {/*card*/}
          <div className=" container mx-auto p-1 flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:space-x-8 lg:flex-row  lg:flex-wrap lg:mt-6 ">
            {/*card 1*/}
            <div className="  flex flex-col justify-start items-center border-x-2 border-b-2 shadow-2xl rounded-xl w-96 h-96 mb-12 ">
              {/*logo*/}
              <div className="my-8">
                <img
                  src="https://leonidasesteban.github.io/bookmark-landing/static/images/logo-chrome.svg"
                  alt="logo chrome"
                ></img>
              </div>
              {/*content*/}
              <h1 className="text-2xl font-semibold">Add to Chrome</h1>
              <p className="text-gray-400 text-md font-semibold  border-b-2 mt-2 border-gray-400 px-8 pb-12">
                Minimum version 62
              </p>
              {/*button*/}
              <button class="btn-softBlue w-auto mt-6">
                Add & Install Extension
              </button>
            </div>
            {/*card 2*/}
            <div className=" flex flex-col justify-start items-center border-x-2 border-b-2 shadow-2xl rounded-xl h-96 w-96 mb-12 2xl:mt-20">
              {/*logo*/}
              <div className=" my-8">
                <img
                  src="https://leonidasesteban.github.io/bookmark-landing/static/images/logo-firefox.svg"
                  alt="logo chrome"
                ></img>
              </div>
              {/*content*/}
              <h1 className="text-2xl font-semibold">Add to Firefox</h1>
              <p className="text-gray-400 text-md font-semibold  border-b-2 mt-2 border-gray-400 px-8 pb-12">
                Minimum version 55
              </p>
              {/*button*/}
              <button class="btn-softBlue w-auto mt-6">
                Add & Install Extension
              </button>
            </div>
            {/*card 3*/}
            <div className=" flex flex-col justify-start items-center border-x-2 border-b-2 shadow-2xl rounded-xl h-96 w-96 mb-12 2xl:mt-32">
              {/*logo*/}
              <div className=" my-8">
                <img
                  src="https://leonidasesteban.github.io/bookmark-landing/static/images/logo-opera.svg"
                  alt="logo chrome"
                ></img>
              </div>
              {/*content*/}
              <h1 className="text-2xl font-semibold">Add to Opera</h1>
              <p className="text-gray-400 text-md font-semibold  border-b-2 mt-2 border-gray-400 px-8 pb-12">
                Minimum version 46
              </p>
              {/*button*/}
              <button class="btn-softBlue w-auto mt-6">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ*/}
      <section>
        {/*content*/}
        <div className=" text-center my-12 container mx-auto p-1 max-w-lg">
          <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
          <p class="text">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        {/*Question*/}
        <div className="container mx-auto max-w-2xl">
          {/*Question 1*/}
          <div className="flex justify-start items-center p-6 space-x-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3>What is Bookmark?</h3>
          </div>
          <hr></hr>
          {/*Question 2*/}
          <div className="flex justify-start items-center p-6 space-x-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3>How can I request a new browser?</h3>
          </div>
          <hr></hr>
          {/*Question 3*/}
          <div className="flex justify-start items-center p-6 space-x-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3>Is there a mobile app?</h3>
          </div>
          <hr></hr>
          {/*Question 4*/}
          <div className="flex justify-start items-center p-6 space-x-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3>What about other Chromium browsers?</h3>
          </div>
          <hr></hr>
          {/*button*/}
          <div className="text-center mt-6 mb-28">
            <button class="btn-softBlue">More Info</button>
          </div>
        </div>
      </section>
      {/*Email*/}
      <section className="bg-softBlue text-center h-80 ">
        {/*Container*/}
        <div className=" text-white  p-8 max-w-lg mx-auto ">
          <h2 className="lg:text-xl">35,000+ ALREADY JOINED</h2>
          <h1 className=" text-xl font-semibold lg:text-4xl lg:mt-6">
            Stay up-to-date with what we’re doing
          </h1>
        </div>
        {/*Email & button*/}
        <div className="container mx-auto p-1 flex flex-col lg:flex lg:flex-row  lg:justify-center ">
          {/*email*/}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" outline-none w-auto  p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            ></input>
          </div>
          {/*button*/}
          <div className="">
            <button class="btn-red w-auto lg:w-full lg:h-14  mb-12">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      {/*footer*/}
      <footer className=" bg-darkBlue text-white">
        {/*container*/}
        <div className="container mx-auto p-1">
          {/*lists*/}
          <div className="flex flex-col justify-center items-center flex-1 lg:flex lg:flex-row lg:justify-between">
            {/*logo*/}
            <img
              src="https://leonidasesteban.github.io/bookmark-landing/static/images/logo-bookmark-footer.svg"
              alt="logo bookmark"
            />

            <ul className=" mt-12 space-y-8 lg:ml-6 p-2 cursor-pointer lg:flex lg:flex-1 lg:justify-start lg:items-center lg:space-x-8 lg:mt-0 lg:space-y-0">
              <li class="list">Features</li>
              <li class="list">Pricing</li>
              <li class="list">contact</li>
            </ul>
            {/*Social*/}
            <div className="flex space-x-4 py-10 max-auto mr-4 ">
              <svg
                class="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                class="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
