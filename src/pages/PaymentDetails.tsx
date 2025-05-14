import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isAfter, sub } from "date-fns";
// import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes, FaSearch, FaArrowLeft } from "react-icons/fa";
import womanProfile from "../assets/Doctor.png";
import icon2 from "../assets/Icon2.png";
import calendar from "../assets/calendar.png";
import clipcheck from "../assets/clipboard-check.png";
import "./GenerateRequest.css";
import "./relationship.css";

type Bundle = {
  _id: string;
  title: string;
};

const PaymentDetails: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterType, setFilterType] = useState("days");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Bundle[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `http://localhost:500/api/bundles/search?name=${encodeURIComponent(
          query.trim()
        )}`
      );
      const data = await res.json();

      if (res.ok) {
        setResults(data.bundles);
      } else {
        setError(data.message || "Search failed 😞");
      }
    } catch (err) {
      setError("Network error");
      console.error("Server side error: ", err);
    }
  };

  const data = [
    {
      id: 1,
      name: "Monthly Essentials",
      amount: "\u20A632,500",
      date: new Date(),
      time: "12:00am",
      status: "Paid",
      action: "View details",
    },
    {
      id: 2,
      name: "Monthly Essentials",
      amount: "\u20A632,500",
      date: sub(new Date(), { days: 3 }),
      time: "11:00am",
      status: "Pending",
      action: "View details",
    },
    {
      id: 3,
      name: "Monthly Essentials",
      amount: "\u20A632,500",
      date: sub(new Date(), { weeks: 2 }),
      time: "12:00am",
      status: "Declined",
      action: "View details",
    },
  ];

  const getFilteredData = () => {
    let rangeDate;
    switch (filterType) {
      case "days":
        rangeDate = sub(selectedDate, { days: 1 });
        break;
      case "weeks":
        rangeDate = sub(selectedDate, { weeks: 1 });
        break;
      case "months":
        rangeDate = sub(selectedDate, { months: 1 });
        break;
      case "years":
        rangeDate = sub(selectedDate, { years: 1 });
        break;
      default:
        return data;
    }
    return data.filter((entry) => isAfter(entry.date, rangeDate));
  };

  // Just to use the `result` variable properly
  // const today = new Date();
  // const oneWeekAgo = sub(today, { days: 7 });
  // const result = isAfter(today, oneWeekAgo); // result is true, since today is obviously after last week

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-section">
        <Header />
        <main className="main-content main3">
          <button className="back-nav">
            <FaArrowLeft /> Back
          </button>

          <div className="payment-body">
            <h4>Payment Details/Mother</h4>

            <div className="sponsor-body-top">
              <div className="display-relationship sponsor-payment-body-card">
                <h3>Sponsor</h3>
                <div className="mother2">
                  <img src={womanProfile} alt="doctor" className="rel-doctor" />
                  <div className="mother">
                    <p>Mrs. Kansi</p>
                    <span>Mother</span>
                  </div>
                </div>
              </div>

              <div className="amount-card-body">
                <div className="card1">
                  <p>Total Amount Sponsored:</p>
                  <div className="amount-subcard">
                    <img src={icon2} alt="icon" />
                    <h4>&#8358;32,500</h4>
                  </div>
                </div>
                <div className="card2">
                  <p>Number of Bundles Paid:</p>
                  <div className="bundle-subcard">
                    <img src={clipcheck} />
                    <h4>1</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="payment-overview-div">
              <div className="overview-top">
                <div className="top-overview-left">
                  <p>Recent Payments</p>
                  <form onSubmit={handleSearch} className="search-container">
                    <FaSearch className="payment-search-icon" />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search"
                    />
                  </form>
                </div>

                <div className="top-overview-right">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => {
                      if (date) setSelectedDate(date);
                    }}
                    className="hide-date-picker"
                  />
                  <img src={calendar} alt="calendar icon" />
                  <select
                    className="select-date-input"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="days">Last 24 Hours</option>
                    <option value="weeks">Last 7 Days</option>
                    <option value="months">Last 30 Days</option>
                    <option value="years">Last 1 Year</option>
                  </select>
                </div>
              </div>

              <div className="search-results">
                {error && <p className="error-text">{error}</p>}
                {results.map((bundle) => (
                  <div key={bundle._id} className="bundle-name">
                    {bundle.title}
                  </div>
                ))}
                {!error && results.length === 0 && query && (
                  <p>No bundles found 😞</p>
                )}
              </div>

              <div className="overview-bottom">
                <table cellPadding="10" className="payment-table">
                  <thead>
                    <tr>
                      <th>Bundle Name</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getFilteredData().map((person) => (
                      <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.amount}</td>
                        <td>{format(person.date, "dd MMM yyyy")}</td>
                        <td>{person.time}</td>
                        <td>{person.status}</td>
                        <td>
                          <a href="#">{person.action}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default PaymentDetails;
