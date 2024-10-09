export default function Testimonials() {
    const testimonials = [
      {
        name: 'Jane Doe',
        title: 'CEO, TechCorp',
        quote: 'This platform has been instrumental to our success.',
        img: '/jane.jpg',
      },
      {
        name: 'John Smith',
        title: 'CTO, InnovateX',
        quote: 'Incredible performance and support.',
        img: '/john.jpg',
      },
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
                <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                <p className="mt-4 text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  