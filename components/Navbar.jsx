//components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow-lg">
      <h1 className="text-xl font-bold">Softcore Studio</h1>
      <ul className="flex gap-6">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
