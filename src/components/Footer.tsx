import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-white dark:text-gray-100">SmartStudy</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Empowering the next generation of tech professionals.
            </p>
          </div>
          <div>
            <h4 className="text-white dark:text-gray-100 mb-4">Learning</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("roadmaps")}
                  className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  All Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("roadmaps")}
                  className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Learning Paths
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
                  Career Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white dark:text-gray-100 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white dark:text-gray-100 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-500">© 2025 SmartStudy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}