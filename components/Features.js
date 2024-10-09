export default function Features() {
    const features = [
      { icon: '🚀', title: 'Fast Performance', description: 'Experience the blazing speed of our platform.' },
      { icon: '🔒', title: 'Secure', description: 'Your data is safe with us, with top-notch security measures.' },
      { icon: '📱', title: 'Responsive Design', description: 'Seamlessly access our platform on any device.' },
      { icon: '🤝', title: '24/7 Support', description: 'We provide round-the-clock support to assist you.' },
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  