import Link from "next/link";
import { ModeToggle } from "./toggle_theme";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <Link href={"/"} className="text-lg font-semibold">
        Fumi Mel
      </Link>

      <ModeToggle />
    </div>
  );
};

export default Header;
