import "./App.css";

import {
  FaDatabase,
  FaBroom,
  FaChartLine
} from "react-icons/fa";

function App() {
  const skills = [
    "SQL",
    "Python",
    "R",
    "Java",
    "JavaScript",
    "Advanced MS Excel",
    "Power BI",
    "Data Cleaning",
    "Exploratory Data Analysis (EDA)",
    "Statistical Analysis",
  ];
const projects = [
  {
    number: "01",
    title: "Sales Dashboard",
    description:
      "Analyzed Superstore sales data to evaluate sales trends, regional and category performance, and profitability. Developed an interactive Power BI dashboard to present key business metrics, sales performance, and analytical insights. Created visual reports to identify revenue patterns and support business-focused decision-making.",
    tools: "Power BI • Microsoft Excel",
    link: "https://github.com/BanothBharath/SalesDashboard-Task",
    color: "pink"
  },
  {
    number: "02",
    title: "Exploratory Data Analysis (EDA)",
    description:
      "Cleaned and analyzed dataset records using Python to prepare data for exploratory analysis and visualization. Used Pandas for data manipulation and Matplotlib and Seaborn for visual exploration of dataset patterns. Evaluated trends, relationships, and key observations through systematic exploratory data analysis.",
    tools: "Python • Pandas • Matplotlib • Seaborn",
    link: "https://github.com/BanothBharath/Exploratory-Data-Analysis-EDA",
    color: "blue"
  }
];


  const certifications = [
    { title: "Introduction to Business Intelligence", issuer: "Infosys Springboard", date: "Apr 2026" },
    { title: "Learning Microsoft Power BI", issuer: "Infosys Springboard", date: "Apr 2026" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia • Forage" },
    { title: "Power BI Workshop", issuer: "OfficeMaster", date: "Sep 2025" },
    { title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn" },
    { title: "Python & JavaScript Bootcamps", issuer: "LetsUpgrade" }
  ];

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Bharath<span>.</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="/Banoth-Bharath-DA-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-photo">
          <img src="/proff%20photo%20bablu.jpeg" alt="Bharath Banoth" />
        </div>

        <div className="hero-content">
          <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Bharath Banoth</span>
          </h1>

          <h2>Aspiring Data Analyst</h2>

          <p className="hero-description">
            Data Analyst with hands-on experience in data cleaning, data
            wrangling, exploratory data analysis, statistical analysis, and
            data visualization using R, Python, SQL, Excel, and Power BI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects →
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/BanothBharath"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bharath-banoth-40411a266/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-icon">in</span>
              LinkedIn
            </a>

            <a href="mailto:bharathbanoth471315@gmail.com">
              <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-container about-layout">
          <div className="about-content">
            <p className="section-label">ABOUT ME</p>
            <h2>Turning Data Into Insights</h2>

            <p className="about-text">
              Data Analyst with hands-on experience in data cleaning, data
              wrangling, exploratory data analysis, statistical analysis, and
              data visualization using R, Python, SQL, Excel, and Power BI.
            </p>

            <p className="about-text">
              Experienced in analyzing datasets, identifying trends and
              patterns, and generating actionable insights, with additional
              experience in full-stack web development using MERN technologies.
            </p>
          </div>

        
<div className="info-grid">
  <div className="info-card blue-card">
    <div className="info-icon">🎓</div>
    <div>
      <span>Education</span>
      <strong>B.Tech in Computer Science Engineering</strong>
    </div>
  </div>

  <div className="info-card green-card">
    <div className="info-icon">📍</div>
    <div>
      <span>Location</span>
      <strong>Hyderabad, India</strong>
    </div>
  </div>

  <div className="info-card pink-card">
    <div className="info-icon">📊</div>
    <div>
      <span>Career Goal</span>
      <strong>Data Analytics</strong>
    </div>
  </div>

  <div className="info-card yellow-card">
    <div className="info-icon">💼</div>
    <div>
      <span>Open To</span>
      <strong>Entry-Level Data Analyst Roles</strong>
    </div>
  </div>
</div>  
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <p className="section-label">MY SKILLS</p>
          <h2>Tools & Technologies</h2>

<div className="skills-grid">
  {skills.map((skill, index) => (
    <div className="skill-card" key={skill}>
      <div className={`skill-icon skill-${index}`}>
        {index === 0 && <FaDatabase />}


        {index === 1 && (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    alt="Python" />
                    )}

        {index === 2 && (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
    alt="R" />
        )}

        {index === 3 && (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    alt="Java" />
        )}

        {index === 4 && (
          <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    alt="JavaScript"/>
        )}

        {index === 5 && (
         <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg" alt="Excel" />
                    )}

        {index === 6 && (
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg" alt="Power BI" />
                    )}

        {index === 7 && <FaBroom />}

        {index === 8 && <FaChartLine />}

        {index === 9 && <FaDatabase />}
      </div>

      <span>{skill}</span>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <p className="section-label">EXPERIENCE</p>
          <h2>Professional Experience</h2>

          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>R Data Analyst Intern</h3>
                  
                  <p className="company">YuvaIntern – Henry Harvin Education</p>
                </div>
                <span className="duration">Jul 2026 – Aug 2026</span>
              </div>

              <ul className="experience-points">
                <li>
                  Analyzed and cleaned datasets using R, performing exploratory
                  and statistical analysis to identify trends and generate
                  actionable insights.
                </li>
                <li>
                  Created data visualizations and analytical summaries to
                  identify patterns and support data-driven decision-making.
                </li>
                <li>
                  Transformed raw datasets into analysis-ready data using
                  structured data-wrangling and cleaning techniques.
                </li>
              </ul>

              <div className="experience-tags">
                <span>R</span>
                <span>Data Cleaning</span>
                <span>EDA</span>
                <span>Statistical Analysis</span>
                <span>Data Visualization</span>
              </div>
            </div>

            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Full Stack Web Development Intern (MERN)</h3>
                  <p className="company">
                    EY Global Delivery Services & AICTE (Edunet Foundation)
                  </p>
                </div>
                <span className="duration">Feb 2025 – Mar 2025</span>
              </div>

              <ul className="experience-points">
                <li>
                  Built a full-stack Recipe Sharing Platform using MongoDB,
                  Express.js, React.js, and Node.js.
                </li>
                <li>
                  Integrated token-based authentication, authorization,
                  RESTful APIs, and responsive React components for secure
                  application workflows.
                </li>
                <li>
                  Managed MongoDB data operations and implemented content
                  retrieval and update workflows for the recipe-sharing
                  platform.
                </li>
              </ul>

              <div className="experience-tags">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="projects-heading">
            <div>
              <p className="section-label">MY WORK</p>
              <h2>Featured Projects</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <div className="project-icon">
                    {project.number === "01" && "📊"}
                    {project.number === "02" && "🗄️"}
                    {project.number === "03" && "🔐"}
                  </div>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tools">{project.tools}</div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
                </article>

            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section skills-section">
        <div className="section-container">
          <p className="section-label">CERTIFICATIONS</p>
          <h2>Courses & Certifications</h2>

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <article className="certification-card" key={certification.title}>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                {certification.date && <p>{certification.date}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="section resume-section">
        <div className="section-container">
          <div className="resume-box">
            <div className="resume-icon">📄</div>

            <div className="resume-content">
              <p className="section-label">RESUME</p>
              <h2>Interested in working together?</h2>

              <p>
                View my resume to learn more about my education, experience,
                skills, certifications, and data analytics projects.
              </p>

              <div className="resume-actions">
                <a
                  href="/Banoth-Bharath-DA-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary-btn"
                >
                  View Resume →
                </a>

                <a
                  href="/Banoth-Bharath-DA-Resume.pdf"
                  download
                  className="btn secondary-btn"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <p className="section-label">CONTACT</p>
          <h2>Let's Connect</h2>

          <p className="contact-text">
            Feel free to connect with me regarding data analytics and software
            development opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:bharathbanoth471315@gmail.com">
              ✉ Email
            </a>

           

            <a
              href="https://www.linkedin.com/in/bharath-banoth-40411a266/"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>

            <a
              href="https://github.com/BanothBharath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Bharath Banoth • Aspiring Data Analyst</p>
      </footer>
    </div>
  );
}

export default App;
