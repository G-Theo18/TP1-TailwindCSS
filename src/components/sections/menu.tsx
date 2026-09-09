export default function Menu() {
  return (
    <nav className="grid grid-cols-3 items-center my-10">
      <div className="hidden md:flex col-start-1 items-center gap-10">
        <a href="#" className="hover:font-bold">Activités</a>
        <a href="#" className="hover:font-bold">Expériences</a>
      </div>

      <div className="col-start-2 flex justify-center">
        <a href="#" className="font-bold text-lg">Açores</a>
      </div>

      <div className="hidden md:flex col-start-3 justify-end items-center gap-10">
        <a href="#" className="hover:font-bold">Hôtels</a>
        <a href="#" className="hover:font-bold">Spa</a>
      </div>
    </nav>
  );
}