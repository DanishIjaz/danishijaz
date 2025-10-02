import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PortfolioGallery from './PortfolioGallery';

const gfxCategories = [
  { name: 'Posters', folder: 'posters', count: 12, samples: ['sample1.jpg', 'sample2.jpg', 'sample3.jpg'] },
  { name: 'Banners', folder: 'banners', count: 8, samples: ['sample1.jpg', 'sample2.jpg'] },
  { name: 'Thumbnails', folder: 'thumbnails', count: 15, samples: ['sample1.jpg', 'sample2.jpg'] },
  { name: 'Business Cards', folder: 'business-cards', count: 6, samples: ['sample1.jpg'] },
  { name: 'Logos', folder: 'logos', count: 10, samples: ['sample1.jpg', 'sample2.jpg'] },
  { name: 'Social Media Posts', folder: 'social-posts', count: 50, samples: ['sample1.jpg', 'sample2.jpg'] },
];

const vfxCategories = [
  { name: 'YouTube Videos', count: 100 },
  { name: 'Commercial Videos', count: 5 },
  { name: 'Reels', count: 18 },
  { name: '1-Minute Shorts', count: 50 },
  { name: 'Product Videos', count: 8 },
  { name: 'Cinematic Edits', count: 7 },
];

export default function Portfolio() {
  const [gfxExpanded, setGfxExpanded] = useState(false);
  const [vfxExpanded, setVfxExpanded] = useState(false);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our creative work across design and video production
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div id="gfx">
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <button
                onClick={() => setGfxExpanded(!gfxExpanded)}
                className="w-full p-8 flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">GFX Design</h3>
                  <p className="text-blue-100">Graphic design projects</p>
                </div>
                {gfxExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
              </button>

              {gfxExpanded && (
                <div className="p-8 space-y-4 animate-fade-in">
                  {gfxCategories.map((category, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-sm text-gray-500">{category.count} projects</p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                          {category.count}
                        </div>
                      </div>
                      <PortfolioGallery
                        folder={category.folder}
                        samples={category.samples}
                        gradient="from-blue-500/50 to-cyan-500/50"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div id="vfx">
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <button
                onClick={() => setVfxExpanded(!vfxExpanded)}
                className="w-full p-8 flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">VFX Editing</h3>
                  <p className="text-purple-100">Video editing projects</p>
                </div>
                {vfxExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
              </button>

              {vfxExpanded && (
                <div className="p-8 space-y-4 animate-fade-in">
                  {vfxCategories.map((category, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl bg-gradient-to-r from-gray-50 to-purple-50 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-purple-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-sm text-gray-500">{category.count} projects</p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                          {category.count}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 italic">
            For video projects, full portfolios can be shared via Google Drive links upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
