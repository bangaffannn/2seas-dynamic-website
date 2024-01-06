import ImageLogo from "../../images/2seas-nobg.jpeg";

export default function Header() {
  return (
    <header className="container relative mx-auto p-6">
      <div className="flex items-center justify-between space-x-20 mx-6 my-6">
        <div className="z-30">
          <img className="w-auto h-16" src={ImageLogo} alt="logo" id="logo" />
        </div>
        <div className="hidden items-center space-x-10 text-stone-600 md:flex">
          <a href="#about" className="tracking-widest hover:text-red-800">
            About
          </a>
          <a href="#features" className="tracking-widest hover:text-red-800">
            Features
          </a>
          <a href="#testimonials" className="tracking-widest hover:text-red-800">
            Testimonials
          </a>
          <a href="#contact" className="px-8 py-2 text-white bg-stone-800 border-2 border-stone-800 rounded-lg shadow-md hover:text-stone-800 hover:bg-white">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
