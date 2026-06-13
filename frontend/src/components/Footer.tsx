import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-8 mb-8">
          {/* Logo */}
          <div 
            onClick={scrollToTop}
            className="flex items-center space-x-2 cursor-pointer group mb-6 md:mb-0"
          >
            <div className="bg-gradient-to-tr from-kidrove-purple to-kidrove-pink p-2 rounded-xl text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight">
              <span className="text-white">Kid</span>
              <span className="text-kidrove-pink">rove</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/kidrove"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-kidrove-purple hover:text-white rounded-full transition-all duration-300 flex items-center justify-center"
              title="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/kidrove"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-kidrove-pink hover:text-white rounded-full transition-all duration-300 flex items-center justify-center"
              title="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com/kidrove"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-sky-500 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center"
              title="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/kidrove"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Kidrove. All rights reserved. Designed for Future Innovators.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.kidrove.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Kidrove Main Site
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top floating bubble */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 md:right-12 md:bottom-12 bg-kidrove-purple hover:bg-kidrove-purple-dark text-white p-3 rounded-full shadow-lg shadow-purple-950/50 hover:-translate-y-1 transition-all cursor-pointer"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
