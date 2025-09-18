import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-900 rounded-2xl p-1 m-3 mb-0">
      <footer className="w-full ">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around p-4">
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://github.com/SaiCharan963"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-black transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/Orange__369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-blue-500 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-charan-garapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-blue-700 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <p className="text-sm mt-2 md:mt-0">
            Made with ❤️ by <span className="font-medium">Sai Charan</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

