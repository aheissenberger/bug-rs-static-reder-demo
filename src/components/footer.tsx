import { Link } from "@lazarv/react-server/navigation";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
 © 2024 T-Shirts & Mugs Shop | <Link to="/about" className="text-blue-500">About</Link> | <Link to="/prerender" className="text-blue-500">prerender</Link>
    </footer>
  );
};
