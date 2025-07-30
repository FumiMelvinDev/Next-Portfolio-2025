import { ModeToggle } from "./toggle_theme";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>Fumi Mel</div>

      <ModeToggle />
    </div>
  );
};

export default Header;
