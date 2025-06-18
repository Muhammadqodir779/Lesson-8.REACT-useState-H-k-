import React, { useState } from "react";
import './Header.css';
import { FiBarChart2, FiZap, FiUsers, FiCheckSquare, FiHelpCircle, FiSettings } from "react-icons/fi";
import analiz from "../../assets/Analiz.png"
import statistika from "../../assets/statistika.jpg"
import food from "../../assets/food.png"
import covid from "../../assets/covid.png"
import couple from "../../assets/couple.png"


const App = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <div className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="logo" onClick={toggleSidebar}>
          {open ? "TESLA" : "T"}
        </div>

        <div className="menu">
          <SidebarItem icon={<FiBarChart2 />} text="Reports" open={open} />
          <SidebarItem icon={<FiZap />} text="Library" open={open} />
          <SidebarItem icon={<FiUsers />} text="People" open={open} />
          <SidebarItem icon={<FiCheckSquare />} text="Activities" open={open} />
        </div>

        <div className="support">
          <SidebarItem text={"Support"} open={open} />
          <SidebarItem icon={<FiHelpCircle />} text="Get Started" open={open} />
          <SidebarItem icon={<FiSettings />} text="Settings" open={open} />
        </div>
      </div>

      <div className="main">
        <div className="main_text">
          <h2>Reports</h2>
          <p>Download</p>
        </div>
        <form className='main_form'>
          <select id="time">
            <option value="time">Timeframe: All-time</option>
            <option value="time">Timeframe: An hour</option>
            <option value="time">Timeframe: Two hours</option>
          </select>
          <select id="time">
            <option value="time">People: All</option>
            <option value="time">People: A person</option>
            <option value="time">People: A child</option>
          </select>
          <select id="time">
            <option value="time">Topic: All</option>
            <option value="time">Topic: A topic</option>
            <option value="time">Topic: Two topics</option>
          </select>
        </form>
        <div className="main_banner">
          <img src={analiz} alt="" />
          <img src={statistika} alt="" />
        </div>
        <div className="main_banner">
          <img src={food} alt="" />
          <img src={covid} alt="" />
        </div>
        <div className="main_banner">
          <img src={couple} alt="" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, open }) => (
  <div className="sidebar_items">
    <div className="icon">{icon}</div>
    {open && <span className="text">{text}</span>}
  </div>
);

export default App;
