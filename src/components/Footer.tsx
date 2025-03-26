
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Jane Researcher</h3>
            <p className="text-gray-600 mb-6">
              Advancing knowledge through rigorous research and meaningful collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Artificial Intelligence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Data Analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Neural Networks</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#publications" className="text-gray-600 hover:text-primary transition-colors">Publications</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-gray-600">jane.researcher@university.edu</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-gray-600">Department of Research<br />University Name<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div> */}
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <b>&copy; {new Date().getFullYear()} Istiaq Ahmed Fahad. All rights reserved.</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
