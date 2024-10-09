export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Follow us on:</p>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
          </div>
          <p className="mt-6">&copy; 2024 TechStartup. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  