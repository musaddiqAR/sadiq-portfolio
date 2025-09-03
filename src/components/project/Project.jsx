import React, { useState } from 'react';

const projects = [
  {
    title: "Hospital Management System (OHMS)",
    subtitle: "Full Stack Development Project",
    image: "/hms.jpg",
  },
  {
    title: "(CRUD) Employee Management System",
    subtitle: "Back-end Development Project",
    image: "/ems.jpg",
  },
  {
    title: "Portfolio using JavaScript & ReactJS",
    subtitle: "Front-end Development Project",
    image: "/portfolio.jpg",
  },
  {
    title: "Java Full Stack Development Certificate",
    subtitle: "Full Stack Certificate",
    image: "/certificate.jpg",
  },
  {
    title: "Internship Project (OHMS) Certificate",
    subtitle: "Internship Certificate",
    image: "/intership.jpg",
  },
];

const filters = ["All", "Front-end Development Project", "Back-end Development Project", "Full Stack Development Project"];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((proj) => proj.subtitle === activeFilter);

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "40px",
          fontWeight: "bold",
          color: "#ccc",
        }}
      >
        PROJECTS
      </h2>

      {/* Filter Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        {filters.map((filter) => (
          <span
            key={filter}
            style={{
              fontWeight: activeFilter === filter ? 700 : 500,
              color: activeFilter === filter ? "#6fffe9" : "#fff",
              cursor: "pointer",
              padding: "8px 16px",
              borderRadius: "8px",
              background:
                activeFilter === filter ? "rgba(111,255,233,0.1)" : "transparent",
              transition: "0.3s ease",
            }}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "82px",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {filteredProjects.map((proj, i) => (
          <div
            key={i}
            style={{
              background: "#11152b",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                background: "#111",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "#fff",
                }}
              >
                {proj.title}
              </h3>
              <span style={{ color: "#bdbdbd", fontSize: "14px" }}>
                {proj.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
