import Reveal from "./Reveal";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

// Tech icons
import python from "../assets/Python.png";
import java from "../assets/Java.png";
import react from "../assets/React.png";
import django from "../assets/Django.png";
import node from "../assets/Node.js.png";
import mongodb from "../assets/MongoDB.png";
import docker from "../assets/Docker.png";
import aws from "../assets/AWS.png";
import excel from "../assets/excel.png";

const courses = [
  {
    name: "Python Development",
    desc: "Learn Python from basics to advanced and build real-world web applications using Django and APIs.",
    points: ["Python", "Django", "REST APIs", "SQL", "Git", "Deployment"],
    icons: [python, django],
  },
  {
    name: "Java Development",
    desc: "Become a job-ready Java developer and build enterprise applications using Spring Boot and modern tools.",
    points: ["Core Java", "Spring Boot", "Hibernate", "REST APIs", "SQL", "Project Work"],
    icons: [java],
  },
  {
    name: "MERN Stack",
    desc: "Master full stack web development using MongoDB, Express, React, and Node.js with real projects.",
    points: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Deployment"],
    icons: [react, node, mongodb],
  },
  {
    name: "React + Django Stack",
    desc: "Build powerful full stack applications with React frontend and Django REST backend.",
    points: ["React", "Django", "DRF", "API Integration", "Authentication", "Deployment"],
    icons: [react, django, python],
  },
  {
    name: "Data Analytics",
    desc: "Learn to analyze, visualize, and interpret data to make better business decisions.",
    points: ["Excel", "SQL", "Python", "Data Cleaning", "Visualization", "Projects"],
    icons: [excel, python],
  },
  {
    name: "DevOps",
    desc: "Become a DevOps engineer by learning automation, CI/CD, containers, cloud, and monitoring tools.",
    points: ["Linux", "Git", "Docker", "Kubernetes", "Jenkins", "AWS"],
    icons: [docker, aws],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10">Training Programs</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Reveal key={course.name} delay={idx * 0.08}>
              <Motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition flex flex-col"
              >
                {/* 🔝 Tech Stack Icons */}
                <div className="flex gap-3 mb-4">
                  {course.icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech"
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-2">{course.name}</h3>

                <p className="text-slate-600 mb-4 text-sm">{course.desc}</p>

                <ul className="text-sm text-slate-700 mb-6 list-disc list-inside space-y-1">
                  {course.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <Link
                      to="/contact"
                       state={{ course: course.name }}
                      className="text-brand-orange font-semibold hover:underline"
                       >
                       Explore →
                  </Link>
                </div>
              </Motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
