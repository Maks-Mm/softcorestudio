// components/dashboard/page.tsx
"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Project } from '../types/project';
import styles from "../dashboard/Dashboard.module.css";

const Dashboard: React.FC = () => {
  // State
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeTechFilter, setActiveTechFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Your complete projects data (all 27 projects)
  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: "JS-Mantra",
      description: "Our project is a training platform designed to enhance programming skills. It helps users learn fundamental JavaScript methods, test functions, and apply Jest tests. The platform offers useful learning materials to expand programming knowledge.",
      techStack: ["JavaScript: 76.9%", "TypeScript: 21.7%", "CSS: 1.4%"],
      link: "https://js-mantra.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "UniStyle",
      description: "Modern styling application with TypeScript and API integration.",
      techStack: ["JavaScript 16.4%", "TypeScript 73.3%", "HTML: 8.2%", "CSS 10.3%", "API fetching: server.js"],
      link: "https://unistyle-6ek8.vercel.app/",
      github: "https://github.com/Maks-Mm/unistyle.git",
      demo: "",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1991&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Astral Technology",
      description: "Technology showcase website with API integration.",
      techStack: ["JavaScript: 83.9%", "HTML: 8.2%", "CSS: 7.9%", "API fetching: server.js"],
      link: "https://astral-innovation-xxg7.vercel.app/",
      github: "https://github.com/Maks-Mm/Astral-Innovation-.git",
      demo: "https://www.youtube.com/watch?v=Ss4JE0I7F8c&feature=youtu.be",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Curriculum Vitae",
      description: "Interactive CV with animations using GSAP.",
      techStack: ["JavaScript: 63.2%", "CSS: 21.4%", "HTML: 15.4%", "External Libraries: GSAP (for animations)", "Build Tool: Vite (for project bundling)"],
      link: "https://resume-mmpryshchepa.vercel.app/",
      github: "https://github.com/Maks-Mm/resume-mmpryshchepa.git",
      demo: "",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "WDW Shop",
      description: "Next.js e-commerce application using Redux, TypeScript, TailwindCSS, PayPal for payments, and Clerk for authentication.",
      techStack: ["TypeScript", "CSS", "developer.paypal.com", "react-paypal-js", "redux-toolkit.js", "clerk.com", "Fake Store API", "dummyjson.com API"],
      link: "https://www.youtube.com/watch?v=K2a6cXN3ks0",
      github: "https://github.com/Maks-Mm/NextReduxPayPalClerkTypeScriptTailwindCSS.git",
      demo: "https://www.youtube.com/watch?v=K2a6cXN3ks0",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "FurnitureWebsiteReactReduxToolkit",
      description: "The Furniture project represents a furniture store where users can select, filter, customize, and purchase furniture items.",
      techStack: ["JavaScript: 59.2%", "CSS: 39.7%", "HTML: 1.1%", "Bootstrap"],
      link: "https://furniture-website-react-redux-toolkit-oqx7-fg0wsle3g.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "SportWebApp",
      description: "This application tracks sports news and provides current information about various sports. It utilizes modern technologies to ensure a user-friendly experience.",
      techStack: ["TypeScript: 97.8%", "JavaScript: 1.5%", "Tailwind CSS: 0.7%", "Next.js"],
      link: "https://sport-web-app-jw9a.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Owner Avatar Analyzer",
      description: "Rendering projection from scraping (BackEnd).",
      techStack: ["TypeScript: 64.5%", "JavaScript: 31.8%", "CSS: 3.7%", "MongoDB", "BackEnd", "Database"],
      link: "https://analyzer-666.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Galerie",
      description: "The Galerie project is an interactive gallery application that fetches images using the Pixabay API.",
      techStack: ["JavaScript: 73.4%", "CSS: 25.2%", "HTML: 1.4%", "API: Pixabay"],
      link: "https://maks-mm.github.io/Galerie/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "MERN",
      description: "This project includes both backend and frontend. The code structure is available on GitHub, but the backend is not hosted. The client side is online, and there is a demo available on YouTube. Deployment is done through Vercel or Render.com.",
      techStack: ["JavaScript", "HTML", "CSS", "Client & Backend"],
      link: "https://experement-hosting.vercel.app/",
      github: "https://github.com/Maks-Mm/mern.git",
      demo: "https://www.youtube.com/watch?v=TNWSqf-Alpc",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Travel Booking",
      description: "The Travel Booking project simulates booking tickets with Deutsche Bahn, allowing users to select, search, and book tickets.",
      techStack: ["JavaScript: 90.8%", "CSS: 6.1%", "HTML: 3.1%", "Redux", "DaisyUI (for background themes)"],
      link: "https://travel-booking-b3q6dcxii-mms-projects-851b2bb9.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Portfolio in Portfolio",
      description: "The Skill Showcase project is an interactive web application for engagingly presenting personal skills.",
      techStack: ["TypeScript: 94.8%", "CSS: 4.6%", "JavaScript: 0.6%", "AOS (Animate On Scroll)"],
      link: "https://portfolio-5xdo.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 13,
      title: "Lending",
      description: "Bringing your event visions to life",
      techStack: ["TypeScript: 51.4%", "JavaScript: 15.1%", "CSS: 33.5%"],
      link: "https://lending-constructor-qx558hxcd-mms-projects-851b2bb9.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 14,
      title: "nextJSmongoDb",
      description: "Next.js application with MongoDB integration.",
      techStack: ["Next.js", "MongoDB"],
      link: "https://www.youtube.com/watch?v=Fgp0HSGyRtY",
      github: "https://github.com/Maks-Mm/nextJSmongoDb.git",
      demo: "https://www.youtube.com/watch?v=Fgp0HSGyRtY",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 15,
      title: "HostingWebsiteNext14TypeScript",
      description: "Premium Hosting Technologies",
      techStack: ["TypeScript: 97.0%", "JavaScript: 0.7%", "CSS: 2.3%", "swiper.js", "react-parallax-tilt"],
      link: "https://hosting-website-next14-type-script-bors.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 16,
      title: "Shopping Cart",
      description: "An online store where you can purchase a backpack.",
      techStack: ["React Toolkit", "Tailwind CSS / SCSS", "HTML"],
      link: "https://shopping-cart-jmgw.onrender.com/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: 17,
      title: "WebDAV",
      description: "Exploring Innovative Paths to Cultivate Your Business",
      techStack: ["TypeScript: 99.1%", "Other: 0.9%"],
      link: "https://agency-05kz.onrender.com",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 18,
      title: "React Redux Toolkit",
      description: "Knowledge refresh: In-depth understanding of Redux Toolkit and best practices.",
      techStack: ["JavaScript: 46.9%", "CSS: 30.9%", "HTML: 22.2%", "Redux Toolkit", "React", "Axios"],
      link: "https://react-redux-toolkit-nine.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 19,
      title: "Login & Register",
      description: "Registration template",
      techStack: ["JavaScript: 66.1%", "CSS: 27.5%", "HTML: 6.4%"],
      link: "https://axios-user-registration-z4kz.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 20,
      title: "Validation",
      description: "Form Validation using FORMIK in React",
      techStack: ["JavaScript: 69.7%", "HTML: 7.0%", "SCSS: 23.3%", "Formik", "Yup", "Final Form"],
      link: "https://validation-hx83.vercel.app/home",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 21,
      title: "Camp Putuk Truno Camp Area",
      description: "TravelProjekt",
      techStack: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind", "CodePen", "GitHub"],
      link: "https://nextreact-pi.vercel.app/",
      github: "",
      demo: "",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 22,
      title: "Car_Showcase",
      description: "The Car Showcase project enables users to explore, compare, and learn about various car models efficiently.",
      techStack: ["TypeScript", "CSS", "JavaScript"],
      link: "https://car-showcase-2.onrender.com/",
      github: "https://github.com/Maks-Mm/car_showcase.git",
      demo: "",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 23,
      title: "resume-rustamov",
      description: "A modern, interactive resume/CV website built with React and TypeScript, featuring smooth animations and a clean UI design. The project showcases professional skills, work experience, and portfolio projects in an engaging format.",
      techStack: ["TypeScript", "CSS", "JavaScript", "React", "Framer Motion (for animations)", "Vite (build tool)"],
      link: "https://resume-rustamov.vercel.app/",
      github: "https://github.com/Maks-Mm/resume-rustamov",
      demo: "",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 24,
      title: "Ecommerce Platform",
      description: "A modern eCommerce app built with Next.js, TypeScript, and Express. It features user authentication, product listings, PayPal integration, Google Ads, and Firebase backend for real-time data management.",
      techStack: ["Next.js", "TypeScript", "Express", "Firebase", "TailwindCSS", "Jest", "PayPal API"],
      link: "https://ecommerce-page-tau.vercel.app/",
      github: "https://github.com/Maks-Mm/ecommerce-page",
      demo: "",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 25,
      title: "Welcome to my WordPress page",
      description: "A professional WordPress website showcasing my portfolio and skills. This responsive site features clean design, easy content management, and demonstrates my ability to work with popular CMS platforms.",
      techStack: ["WordPress", "CMS", "Web Publishing"],
      link: "https://firstproduc.wordpress.com",
      github: "https://wordpress.com/me/account",
      demo: "",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 26,
      title: "Exercise of HR at Web Development",
      description: "A frontend development exercise completed as part of a recruitment process for Unlimitech. The project demonstrates my ability to build a responsive and visually clean web page using modern frontend tools.",
      techStack: ["HTML", "LESS", "Bootstrap", "JavaScript", "CSS (compiled)"],
      link: "https://test-frontend-eight-gamma.vercel.app/",
      github: "https://github.com/Maks-Mm/test-frontend.git",
      demo: "",
      image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/0a/0a3ec7e1-14a0-4d9c-94d4-8cd6ee37b7fe?rule=$_35.JPG"
    },
    {
      id: 27,
      title: "Interactive Resume",
      description: "A modern, interactive resume website with smooth animations and responsive design. Features a dynamic visitor counter, project showcase, and elegant UI with GSAP animations for enhanced user experience.",
      techStack: ["JavaScript: 63.2%", "CSS: 21.4%", "HTML: 15.4%", "GSAP (GreenSock Animation Platform)", "Vite (Build Tool)", "Responsive Design"],
      link: "https://resume-mmpryshchepa.vercel.app/",
      github: "https://github.com/Maks-Mm/resume-mmpryshchepa",
      demo: "",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 28,
      title: "Express.js WordPress Integration (Headless CMS)",
      description: "A backend integration project that connects Express.js with WordPress, creating a custom API bridge between the two platforms. This project demonstrates server-side WordPress functionality through a custom Express.js API.",
      techStack: ["JavaScript: 85.2%", "Express.js: Core framework", "WordPress REST API", "Node.js: Runtime environment", "API Integration", "Middleware Configuration", "Custom Endpoints", "MongooDB: Database management"],
      link: "https://github.com/Maks-Mm/Express.js-Wordpress",
      github: "https://github.com/Maks-Mm/Express.js-Wordpress",
      demo: "",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 29,
      title: "SoftCore Studio",
      description: "SoftCore Studio is a modern web application built with Next.js and TypeScript. The project features a client-focused HeroCarousel, a responsive navbar with a hamburger menu, and modular components using Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Components", "Responsive Design", "HeroCarousel", "Hamburger Menu"],
      link: "https://softcorestudio.vercel.app/",
      github: "https://github.com/Maks-Mm/softcorestudio",
      demo: "",
      image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?q=80&w=2070&auto=format&fit=crop"
    }
  ], []);

  // Initialize favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('portfolioFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const jsProjects = projects.filter(p => 
      p.techStack.some(tech => tech.toLowerCase().includes('javascript'))
    ).length;
    const tsProjects = projects.filter(p => 
      p.techStack.some(tech => tech.toLowerCase().includes('typescript'))
    ).length;
    const reactProjects = projects.filter(p => 
      p.techStack.some(tech => 
        tech.toLowerCase().includes('react') || 
        tech.toLowerCase().includes('next.js')
      )
    ).length;

    return { totalProjects, jsProjects, tsProjects, reactProjects };
  }, [projects]);

  // Get unique technologies for filtering
  const technologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.techStack.forEach(tech => {
        // Extract main tech name (before colon or space)
        const mainTech = tech.split(':')[0].split(' ')[0].toLowerCase();
        if (mainTech.length > 2) {
          techSet.add(mainTech);
        }
      });
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on active filter and search term
  useEffect(() => {
    let result = projects;

    // Apply technology filter
    if (activeTechFilter !== 'all') {
      result = result.filter(project => 
        project.techStack.some(tech => 
          tech.toLowerCase().includes(activeTechFilter)
        )
      );
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.techStack.some(tech => tech.toLowerCase().includes(term))
      );
    }

    setFilteredProjects(result);
  }, [activeTechFilter, searchTerm, projects]);

  // Get icon for technology
  const getTechIcon = (tech: string): string => {
    const icons: Record<string, string> = {
      'javascript': 'fab fa-js',
      'typescript': 'fab fa-ts',
      'react': 'fab fa-react',
      'next.js': 'fas fa-bolt',
      'next': 'fas fa-bolt',
      'html': 'fab fa-html5',
      'css': 'fab fa-css3-alt',
      'node': 'fab fa-node-js',
      'express': 'fas fa-server',
      'mongodb': 'fas fa-database',
      'redux': 'fas fa-code-branch',
      'tailwind': 'fas fa-wind',
      'bootstrap': 'fab fa-bootstrap',
      'jest': 'fas fa-vial',
      'vite': 'fas fa-bolt',
      'gsap': 'fas fa-play',
      'firebase': 'fas fa-fire',
      'wordpress': 'fab fa-wordpress',
      'api': 'fas fa-cloud',
      'formik': 'fas fa-file-signature',
      'mern': 'fas fa-layer-group',
      'axios': 'fas fa-exchange-alt'
    };

    return icons[tech] || 'fas fa-code';
  };

  // Get count of projects using a specific technology
  const getTechCount = (tech: string): number => {
    if (tech === 'all') return projects.length;
    return projects.filter(p => 
      p.techStack.some(t => t.toLowerCase().includes(tech))
    ).length;
  };

  // Toggle favorite
  const toggleFavorite = (title: string) => {
    const newFavorites = { ...favorites, [title]: !favorites[title] };
    setFavorites(newFavorites);
    localStorage.setItem('portfolioFavorites', JSON.stringify(newFavorites));
  };

  // Get filter title
  const getFilterTitle = (): string => {
    if (activeTechFilter === 'all') return 'All Projects';
    return activeTechFilter.charAt(0).toUpperCase() + activeTechFilter.slice(1);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.container}>
        {/* Left Sidebar with Header, Search and Tech Filter */}
        <nav className={styles.techSidebar}>
          <div className={styles.menuHeader}>
            <h1>Project Portfolio Dashboard</h1>
            <p>Explore my collection of web development projects showcasing various technologies and frameworks</p>
            
            <div className={styles.projectStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{stats.totalProjects}</div>
                <div className={styles.statLabel}>Total Projects</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{stats.jsProjects}</div>
                <div className={styles.statLabel}>JavaScript</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{stats.tsProjects}</div>
                <div className={styles.statLabel}>TypeScript</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{stats.reactProjects}</div>
                <div className={styles.statLabel}>React/Next.js</div>
              </div>
            </div>
          </div>
          
          <div className={styles.searchBox}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                id="searchInput" 
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div className={styles.techFilterSection}>
            <div className={styles.filterHeader}>
              <h2>Filter by Technology</h2>
              <p>Click on a technology to filter projects</p>
            </div>
            <div className={styles.techTags}>
              <button 
                className={`${styles.techTag} ${activeTechFilter === 'all' ? styles.active : ''}`}
                data-tech="all"
                onClick={() => setActiveTechFilter('all')}
              >
                <i className="fas fa-layer-group"></i>
                All Projects
                <span className={styles.techTagCount}>{projects.length}</span>
              </button>
              
              {technologies.map(tech => {
                const count = getTechCount(tech);
                if (count > 0) {
                  return (
                    <button
                      key={tech}
                      className={`${styles.techTag} ${activeTechFilter === tech ? styles.active : ''}`}
                      data-tech={tech}
                      onClick={() => setActiveTechFilter(tech)}
                    >
                      <i className={getTechIcon(tech)}></i>
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                      <span className={styles.techTagCount}>{count}</span>
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className={styles.techContent}>
          <div className={styles.contentHeader}>
            <h2>Project Portfolio</h2>
            <p>Filter projects by selecting technologies from the left menu. Each project showcases different combinations of technologies from my portfolio.</p>
          </div>

          <div className={styles.filterInfo}>
            <h3>Showing: {getFilterTitle()}</h3>
            <p>Displaying {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} from the portfolio</p>
          </div>

          <div className={styles.projectsGrid}>
            {filteredProjects.length === 0 ? (
              <div className={styles.noProjects}>
                <i className="fas fa-search fa-3x mb-4"></i>
                <h3>No projects found</h3>
                <p>Try a different search term or technology filter</p>
              </div>
            ) : (
              filteredProjects.map((project, index) => {
                const isFavorite = favorites[project.title] || false;
                const favoriteIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';
                const favoriteClass = isFavorite ? styles.active : '';

                // Get main technologies for display
                const mainTechs = project.techStack.slice(0, 4).map(tech => {
                  const techName = tech.split(':')[0].trim();
                  return techName;
                });

                return (
                  <div key={project.id || index} className={styles.projectCard}>
                    <button 
                      className={`${styles.projectFav} ${favoriteClass}`}
                      onClick={() => toggleFavorite(project.title)}
                    >
                      <i className={favoriteIcon}></i>
                    </button>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectTech}>
                      {mainTechs.map((tech, idx) => (
                        <span key={idx} className={styles.techItem}>{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className={styles.techItem}>+{project.techStack.length - 4} more</span>
                      )}
                    </div>
                    <div className={styles.projectLinks}>
                      {project.link && (
                        <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-youtube"></i> Video
                        </a>
                      )}
                      {!project.link && !project.github && !project.demo && (
                        <span style={{ color: '#94a3b8' }}>No links available</span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;