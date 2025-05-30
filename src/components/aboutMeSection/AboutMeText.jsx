import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       I’m a Computer Science undergrad at NIT Rourkela (CGPA: 9.80) with hands-on experience in backend development using Java, Spring Boot, and SQL. I’ve built scalable systems like DreamShops (e-commerce) and a full-fledged Ride Management App with real-time tracking and secure payments. I interned at Codsoft, developing REST APIs and implementing role-based access control. As a coordinator for INNOVISION 2023 and an active member of AXIOM, I combine tech expertise with leadership and collaboration. Passionate about solving real-world problems through code.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
