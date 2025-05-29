import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
    {
    job: "Backend Developer (Academic + Freelance)",
    company: "Independent Projects",
    date: "2023 – Present",
    responsibilities: [
      "Developed scalable Java microservices using Spring Boot and Kafka.",
      "Designed distributed systems with service registry (Eureka) and centralized config.",
      "Deployed applications using Docker and (GKE).",
    ],
  },
    {
    job: "Java Programming Intern",
    company: "Codsoft",
    date: "June 2024 – July 2024",
    responsibilities: [
      "Developed RESTful APIs using Spring Boot, Spring Data JPA, and Hibernate.",
      "Integrated Spring Security for role-based authentication.",
      "Worked on the DreamShops e-commerce backend with product and order modules.",
    ],
  },
{
  job: "ASDE Intern",
  company: "Publicis Sapient",
  date: "May 2025 – July 2025",
  responsibilities: [
    "Built Java microservices using Spring Boot, Kafka, and Docker.",
    "Developed FastAPI services for Pfizer GenAI with AWS Bedrock.",
    "Implemented Redis + PostgreSQL NLP pipelines."
  ],
}


];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
