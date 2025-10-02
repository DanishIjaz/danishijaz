import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Danish Ijaz. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-pink-500 fill-current animate-pulse" />
            <span>by a passionate creator</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
