export default function ContactForm() {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Name" className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2" />
            <input type="email" placeholder="Email" className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2" />
            <input type="text" placeholder="Subject" className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2" />
            <textarea placeholder="Message" className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2"></textarea>
            <button className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  