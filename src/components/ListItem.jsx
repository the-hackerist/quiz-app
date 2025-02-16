/* eslint-disable react/prop-types */
function ListItem({ setActiveLink, activeLink, value }) {
  return (
    <li
      className={`cursor-pointer border-b-[#7c4e9b] font-bold text-[#444444] uppercase transition hover:border-b-2 hover:text-[#7c4e9b]`}
      // ${activeLink === `${value.toString().toLowerCase()}` ? "border-b-2 border-[#7C4E9B] text-[#7C4E9B]" : "text-[#444444]"}
      // onClick={() => setActiveLink(value.toString().toLowerCase())}
    >
      <a>{value}</a>
    </li>
  );
}

export default ListItem;
