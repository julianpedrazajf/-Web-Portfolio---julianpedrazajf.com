import React from "react";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", width: "100vw", background: "#f5f6fa" }}>
      {/* Hero Section */}
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Julian Pedraza</h1>
        <p style={{ fontSize: "1.25rem", margin: "1rem auto", maxWidth: 600 }}>
          Quick introduction about me goes here. (Replace this with your own intro!)
        </p>
        <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" style={{ color: "#24292f", fontWeight: 600 }}>
          Visit my GitHub
        </a>
      </section>

      {/* What I Can Offer */}
      <section style={{ padding: "2rem 1rem", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>What I Can Offer</h2>
        <p style={{ marginTop: 8 }}>
          (Describe your skills, services, or areas of expertise here)
        </p>
      </section>

      {/* Navigation Menu */}
      <nav style={{ padding: "2rem 1rem", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Navigation</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 16, listStyle: "none", justifyContent: "center", margin: 0, padding: 0 }}>
          <li>Work Experience
            <ul>
              <li>Full-Time</li>
              <li>Part-Time</li>
              <li>Personal References</li>
            </ul>
          </li>
          <li>Portfolio</li>
          <li>Diplomas
            <ul>
              <li>University Degrees</li>
              <li>Online Bootcamps</li>
            </ul>
          </li>
          <li>Education & Knowledge
            <ul>
              <li>Books</li>
              <li>Finance</li>
            </ul>
          </li>
          <li>Donations</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* AI Section */}
      <section style={{ padding: "2rem 1rem", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>🧠 AI Section</h2>
        <blockquote style={{ fontStyle: "italic", margin: "1rem auto", color: "#555" }}>
          “Have a quick question about Julian or any area of knowledge he has experience in?”
        </blockquote>
        {/* You can add a chatbot or FAQ search here */}
      </section>
    </main>
  );
}
