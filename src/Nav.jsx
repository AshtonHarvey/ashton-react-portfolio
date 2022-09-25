import home_icon from "./icons/home.svg";
import folder_icon from "./icons/folder.svg";
import envelope_icon from "./icons/envelope.svg";

function Nav() {
  const elements = [
    { icon: home_icon, Name: "Home" },
    { icon: folder_icon, Name: "Projects" },
    { icon: envelope_icon, Name: "Contact" },
  ];

  return (
    <nav className="fixed flex bg-slate-800 text-white w-screen bottom-0 items-center justify-center sm:static fixed">
      <ul className="flex space-x-10">
        {elements.map((element) => (
          <a
            href="#"
            className="flex border-box p-1 text-xl font-bold text-center space-x-1 transition-all duration-300 ease-in-out hover:bg-green-500 hover:p-2 hover:text-2xl"
          >
            <img
              className="w-6 sm:hidden"
              src={element.icon}
              alt="icon of a house"
            />
            <p className="hidden sm:block">{element.Name}</p>
          </a>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
