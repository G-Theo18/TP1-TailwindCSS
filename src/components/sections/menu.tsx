export default function Menu() {
  return (
    <nav className="container mx-auto px-6 flex items-center justify-center gap-15 my-10">
      <div className="hidden md:flex w-48 items-center justify-end gap-15">
        <a href="#" className="hover:font-bold">Activités</a>
        <a href="#" className="hover:font-bold">Expériences</a>
      </div>

      <a href="#" className="font-bold text-lg">Açores</a>

      <div className="hidden md:flex w-48 items-center justify-start gap-15">
        <a href="#" className="hover:font-bold">Hôtels</a>
        <a href="#" className="hover:font-bold">Spa</a>
      </div>
    </nav>
  );
}