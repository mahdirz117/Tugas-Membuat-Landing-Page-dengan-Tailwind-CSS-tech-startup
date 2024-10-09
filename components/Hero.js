export default function Hero() {
    return (
      <section className="h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Innovating the Future</h1>
            <p className="text-xl text-gray-200 mt-4">Join us to revolutionize technology for the better world.</p>
            <button className="mt-6 bg-white text-purple-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200">
              Get Started
            </button>
          </div>
          <img src="/hero-image.svg" alt="Technology Illustration" className="w-1/2 md:w-1/3 mt-6 md:mt-0" />
        </div>
      </section>
    );
  }
  