import { Palette, Video, Sparkles, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating eye-catching designs that communicate your brand message effectively.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing and production that tells compelling stories.',
    features: ['Commercial Videos', 'YouTube Content', 'Social Media Reels', 'Product Videos'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Visual Effects',
    description: 'Adding cinematic magic with stunning visual effects and motion graphics.',
    features: ['VFX Compositing', 'Color Grading'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Social Media Content',
    description: 'Engaging content optimized for maximum reach and engagement across platforms.',
    features: ['Instagram Posts', 'Story Templates', 'Thumbnails', 'Ad Creatives'],
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
