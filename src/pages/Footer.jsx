import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 text-center py-6 mt-20 border-t">
      <div className="flex justify-center gap-6 text-lg">
        <a href="https://github.com/priyanshunaudiyal" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-naudiyal-2650bb203/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
      </div>
      <p className="mt-4 text-sm">© {new Date().getFullYear()} Priyanshu Naudiyal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
