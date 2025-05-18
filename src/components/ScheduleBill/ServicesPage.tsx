import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";
import TemplatePage from "../../pages/Template";

const services = [
  { name: "Electricity", icon: "💡", path: "/electricity" },
  { name: "Shop Online", icon: "🛒", path: "/jumia" },
  { name: "School Fees", icon: "🎓", path: "/school-fees" },
  { name: "House Rent", icon: "🏠", path: "/house-rent" },
  { name: "Airtime", icon: "📞", path: "/airtime" },
  { name: "Food", icon: "🍽️", path: "/food" },
  { name: "Data Top-Up", icon: "📶", path: "/data-top-up" },
  { name: "Transfer", icon: "💳", path: "/transfer" },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <TemplatePage>
      <div className="services-container">
        <h2>Most Popular</h2>
        <div className="services-grid">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.name}
              className="service-item"
              onClick={() => handleClick(service.path)}
            >
              <div className="icon">{service.icon}</div>
              <p>{service.name}</p>
            </div>
          ))}
        </div>

        <h2>All Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-item"
              onClick={() => handleClick(service.path)}
            >
              <div className="icon">{service.icon}</div>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </TemplatePage>
  );
};

export default ServicesPage;
