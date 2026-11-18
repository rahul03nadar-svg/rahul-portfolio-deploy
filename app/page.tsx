
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  BrainCircuit,
  Database,
  GraduationCap,
  ExternalLink,
  MapPin,
  Sparkles,
  Mail,
  Briefcase,
  Cpu,
  Award,
  Download,
  CheckCircle2,
  Terminal,
  Globe2,
  Monitor,
} from "lucide-react";

const profile = {
  name: "Rahul Annapandi",
  role: "IT Graduate | Software Developer | AI Enthusiast",
  location: "Mumbai, India",
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/rahul-annapandi-3310302b8",
  github: "https://github.com/YOUR_USERNAME",
  resume: "/Rahul_cv.pdf",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Training", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "AI-Based DeepFake Identification",
    category: "AI / Deep Learning",
    description:
      "Developed a video classification system to identify manipulated media. Combined ResNeXt50 feature extraction and LSTM sequence learning to analyze video frames and predict real or fake with a confidence score.",
    technologies: [
      "Python",
      "PyTorch",
      "ResNeXt50",
      "LSTM",
      "OpenCV",
      "Django",
    ],
    image: "/projects/deepfake.png",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "IPL Analytics Pro",
    category: "Data Analytics / Dashboard",
    description:
      "Built an interactive cricket analytics dashboard to explore IPL 2023 data, team performance, match insights and statistics using data processing and visualization.",
    technologies: [
      "Python",
      "Streamlit",
      "SQLite",
      "Pandas",
      "Data Visualization",
    ],
    image: "/projects/ipl-analytics.png",
    icon: Database,
  },
  {
    number: "03",
    title: "CineEase",
    category: "Application Development",
    description:
      "Developing a movie ticket booking application featuring movie discovery, location and theatre selection, seat booking, offers, food add-ons and booking summaries.",
    technologies: [
      "Python",
      "Streamlit",
      "SQLite",
      "TMDB API",
    ],
    image: "/projects/cineease.png",
    icon: Monitor,
  },
  {
    number: "04",
    title: "TrackAlert",
    category: "IoT / Embedded Systems",
    description:
      "Created a track monitoring prototype using an ultrasonic sensor and NodeMCU with LED indicators and buzzer alerts. Connected sensor data with a ThingSpeak monitoring dashboard.",
    technologies: [
      "NodeMCU ESP8266",
      "Arduino IDE",
      "Ultrasonic Sensor",
      "ThingSpeak",
    ],
    image: "/projects/trackalert.png",
    icon: Cpu,
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "PyTorch",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Matplotlib",
    ],
  },
  {
    title: "Web & Backend",
    icon: Globe2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "REST API",
      "JSON",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Terminal,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "MySQL",
      "SQLite",
      "Streamlit",
    ],
  },
];

const training = [
  {
    title: "Python for Data Science",
    organization: "Reliance Foundation / Skill India Digital Hub",
    period: "Online Program",
    description:
      "Learning Python programming and its application in data science.",
  },
  {
    title: "Java Full Stack Training",
    organization: "The Kiran Academy",
    period: "June – July 2024",
    description:
      "Training in Java full-stack development and application development fundamentals.",
  },
  {
    title: "Full Stack Development Training",
    organization: "K. J. Somaiya Institute of Technology",
    period: "December 2023 – January 2024",
    description:
      "Foundational training in full-stack development concepts and technologies.",
  },
];

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "Reliance Foundation / Skill India Digital Hub",
    image: "/certificates/python-data-science.png",
  },
];

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "K. J. Somaiya Institute of Technology, Mumbai",
    period: "2021 – 2025",
    score: "CGPA: 9.12 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "SIES College of Arts, Science & Commerce, Mumbai",
    period: "2019 – 2021",
    score: "94.67%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Guru Nanak National High School, Mumbai",
    period: "2019",
    score: "84.40%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVBAR */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            RA<span>.</span>
          </a>

          <nav className="desktop-nav">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="availability-dot" />
            <span>OPEN TO ENTRY-LEVEL OPPORTUNITIES</span>
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="hero-name">Rahul</span>
            <br />
            <span className="hero-name">Annapandi.</span>
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            IT Graduate <span>·</span> Software Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build practical software solutions by combining
            programming, data and emerging AI technologies.
            Passionate about transforming ideas into meaningful
            digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="button button-primary">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Download Resume <Download size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <MapPin size={15} />
            {profile.location}
          </motion.div>
        </div>

        {/* HERO PHOTO */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="tech-ring ring-one" />
          <div className="tech-ring ring-two" />
          <div className="tech-ring ring-three" />

          <div
            className="photo-frame"
            style={{
              position: "relative",
              width: "min(350px, 85%)",
              height: "420px",
            }}
          >
            <Image
              src="/photo.jpeg"
              alt="Rahul Annapandi"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 350px"
              className="profile-photo"
            />
          </div>

          <div className="floating-card floating-card-top">
            <Sparkles size={18} />
            <div>
              <strong>Curious Mind</strong>
              <span>Always learning</span>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <Code2 size={19} />
            <div>
              <strong>Building Solutions</strong>
              <span>One project at a time</span>
            </div>
          </div>

          <div className="tech-chip chip-python">PYTHON</div>
          <div className="tech-chip chip-ai">AI / ML</div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* ABOUT */}
      <section className="section section-container" id="about">
        <SectionHeading
          eyebrow="01 / ABOUT ME"
          title="A little about my journey."
          description="A technology enthusiast focused on learning, building and solving problems."
        />

        <div className="about-grid">
          <motion.div
            className="about-main"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="about-label">WHO I AM</span>
            <h3>
              I believe good technology starts with{" "}
              <span>curiosity and problem-solving.</span>
            </h3>
            <p>
              I am an Information Technology graduate from
              K. J. Somaiya Institute of Technology. My interests
              include software development, Python programming,
              data analytics and artificial intelligence.
            </p>
            <p>
              Through academic and personal projects, I have
              explored how software can solve practical problems.
              I enjoy learning new technologies, understanding
              how systems work and improving my solutions through
              experimentation.
            </p>
            <p>
              I am currently looking for an opportunity where I
              can contribute, learn from experienced professionals
              and grow as a software developer.
            </p>
          </motion.div>

          <motion.div
            className="about-side"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="about-stat">
              <span className="stat-number">9.12</span>
              <span className="stat-label">B.Tech CGPA / 10</span>
            </div>
            <div className="about-divider" />
            <div className="about-stat">
              <span className="stat-number">04</span>
              <span className="stat-label">Featured Projects</span>
            </div>
            <div className="about-divider" />
            <div className="about-stat">
              <span className="stat-number">2025</span>
              <span className="stat-label">Graduation Year</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-container">
          <SectionHeading
            eyebrow="02 / SELECTED WORK"
            title="Projects I've built."
            description="Academic and personal projects that reflect my technical interests and hands-on learning."
          />

          <div className="projects-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-preview"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="project-image-overlay" />
                    <span className="project-number">{project.number}</span>
                    <ProjectIcon className="project-image-icon" size={36} />
                    <span className="project-category">{project.category}</span>
                  </div>

                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <ArrowUpRight size={20} />
                    </div>

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <span>
                        <CheckCircle2 size={15} />
                        {project.number === "03" ? "In Development" : "Project"}
                      </span>
                      <span className="project-footer-label">PORTFOLIO</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section-container" id="skills">
        <SectionHeading
          eyebrow="03 / TECHNICAL TOOLKIT"
          title="Tools I work with."
          description="Technologies and concepts explored through coursework, training and hands-on projects."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const SkillIcon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-card-heading">
                  <div className="skill-icon">
                    <SkillIcon size={22} />
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TRAINING */}
      <section className="section experience-section" id="experience">
        <div className="section-container">
          <SectionHeading
            eyebrow="04 / LEARNING & DEVELOPMENT"
            title="Training and certifications."
            description="Learning experiences that have helped me strengthen my technical foundation."
          />

          <div className="experience-grid">
            <div className="timeline">
              {training.map((item, index) => (
                <motion.div
                  className="timeline-item"
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <Briefcase size={17} />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.organization}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="certification-column">
              <div className="certification-heading">
                <Award size={22} />
                <h3>Certifications</h3>
              </div>

              {certifications.map((certificate) => (
                <div className="certificate-card" key={certificate.title}>
                  <div className="certificate-image">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="300px"
                      className="certificate-preview"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <Award size={35} />
                  </div>
                  <div className="certificate-info">
                    <h4>{certificate.title}</h4>
                    <p>{certificate.issuer}</p>
                  </div>
                </div>
              ))}

              <p className="certificate-note">
                Upload your certificate image to display it here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-container" id="education">
        <SectionHeading
          eyebrow="05 / EDUCATION"
          title="My academic background."
          description="The academic foundation behind my journey in technology."
        />

        <div className="education-list">
          {education.map((item, index) => (
            <motion.div
              className="education-item"
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="education-icon">
                <GraduationCap size={23} />
              </div>
              <div className="education-details">
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
              <strong className="education-score">{item.score}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-container">
          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">06 / GET IN TOUCH</span>

            <h2>
              Have an opportunity?
              <br />
              <span>Let's connect.</span>
            </h2>

            <p>
              I am open to entry-level opportunities in software
              development, Python, AI and data-related roles.
              Feel free to reach out.
            </p>

            <a href={`mailto:${profile.email}`} className="button button-primary contact-button">
              <Mail size={18} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-details">
              <div>
                <MapPin size={17} />
                {profile.location}
              </div>
              <div>
                <Mail size={17} />
                {profile.email}
              </div>
            </div>

            <div className="social-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkedin-text">in</span>
                LinkedIn
                <ExternalLink size={14} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="section-container footer-content">
          <a href="#home" className="brand">
            RA<span>.</span>
          </a>
          <p>Designed and developed by Rahul Annapandi.</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
  © 2026 Rahul Annapandi. All rights reserved.
</div>
      </footer>
    </main>
  );
}
