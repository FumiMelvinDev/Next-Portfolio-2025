import { ModeToggle } from "./toggle_theme";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>Fumi Mel</div>
      <div className="flex space-x-4 body-2 text-custom-700">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
