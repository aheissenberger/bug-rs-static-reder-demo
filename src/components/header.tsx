import { Link } from "@lazarv/react-server/navigation";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold"><Link to="/">T-Shirts & Mugs Shop</Link></h1>
        </header>
  );
};
