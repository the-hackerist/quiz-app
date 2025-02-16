// eslint-disable-next-line react/prop-types
function ListItem({ setActiveLink, activeLink, value }) {
  return (
    <li
      className={`cursor-pointer text-lg font-bold text-[#7c4e9b] transition-all hover:text-[#57376d] ${activeLink === `${value}` ? "text-[#57376d]" : ""}`}
      onClick={() => setActiveLink(value)}
    >
      <a>{value}</a>
    </li>
  );
}

export default ListItem;
