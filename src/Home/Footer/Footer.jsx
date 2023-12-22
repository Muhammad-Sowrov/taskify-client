const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Taskify</p>
          <p>123 Main Street, City</p>
          <p>Email: info.taskify@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
          <p>Follow us on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
            Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
                Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400">
                Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Taskify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
