import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Creative Designer
              </span>
              <br />
              <span className="text-gray-800">& Video Editor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              Transforming ideas into stunning visual experiences. Specializing in graphic design and professional video production that captivates and inspires.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up animation-delay-400">
              <a
                href="https://www.instagram.com/danishijaz18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-pink-600 hover:text-pink-700"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/danish.ijax/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-500 hover:text-blue-600"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/danishijaz18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-600 hover:text-blue-700"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in-up animation-delay-600">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/assets/profile.jpg"
                  alt="Danish Ijaz - Creative Designer & Video Editor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
