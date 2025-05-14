import { useState } from "react";
import classes from "./App.module.css";
import { Navbar } from "./components/navbar";
import { CaseStudy } from "./components/CaseStudy";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { WorkflowIcon } from "lucide-react";
import { FaProjectDiagram, FaReact } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const roles = ["UI/UX Design", "Engineer"];

function App() {
  const [role, setRole] = useState("UI/UX Design");

  return (
    <div className={classes.App}>
      <Navbar />
      <div className={classes.hero}>
        <img src="avatar.png"></img>
        <h1>Hey, I'm Arvin</h1>
        <div className={classes.titles}>
          <p>Full Stack Software Engineer</p>
          <p>University of Ottawa Student</p>
        </div>
      </div>

      <div className={classes.menu}>
        {roles.map((r) => (
          <p
            key={r}
            onClick={() => setRole(r)}
            style={{
              cursor: "pointer",
              fontWeight: role === r ? "bold" : "normal",
              color: role === r ? "black" : "gray",
            }}
          >
            {r}
          </p>
        ))}
      </div>
      {role === "UI/UX Design" ? (
        <>
          <div className={classes.section}>
            <h2>About Me</h2>
            <p>
              As a UI/UX designer, I focus on creating intuitive and visually
              engaging user experiences. My background in design thinking and
              user research allows me to craft interfaces that are not only
              beautiful, but also highly functional. I enjoy wireframing,
              prototyping, and testing ideas to ensure users have the best
              experience possible.
            </p>
          </div>
          <div className={classes.section}>
            <h2>Case Studies</h2>
            <p>
              These case studies showcase my logic, challenges and process
              behind creating each designs. I’ve put a lot of thought into each
              detail and the depth of each study reflects that. If you’re
              curious, take your time and dive in.
            </p>
            <div className={classes.case_studies}>
              <CaseStudy
                read_time="15"
                title="Designing Simplicity: A Seamless Service"
                description="A case study on how I learned how to craft a service website that balances usability, clarity, and aesthetic appeal."
                image="service_website_case.png"
                spineColor="#2B2659"
                contentColor="#887BFF"
                textColor="white"
              />
              <CaseStudy
                read_time="15"
                title="Gameplay Meets Design"
                description="A case study on how I designed a game with a refined HUD for smooth gaming experience."
                image="game_design_case.png"
                spineColor="#777374"
                contentColor="black"
                textColor="white"
              />
              <CaseStudy
                read_time="15"
                title="Designing for Conversion"
                description="A case study on how I transformed visitors into customers with this e-commerce site."
                image="ecommerce_website_case.png"
                spineColor="#69B39A"
                contentColor="#92CAB1"
                textColor="#143733"
              />
              <CaseStudy
                read_time="15"
                title="Clarity in Data"
                description="A case study on my designs for an analytics platform that transforms complex data into clear, actionable insights."
                image="data_analytics_case.png"
                spineColor="#BC9EC1"
                contentColor="#E3BAC6"
                textColor="#596475"
              />
            </div>
          </div>
        </>
      ) : (
        <>
        <div className={classes.section}>
          <h2>About Me</h2>
          <p>
            I'm a full-stack software engineer who enjoys building scalable,
            user-centric applications. From clean, efficient APIs to responsive
            front-end interfaces, I love tackling challenges across the tech
            stack. I'm proficient in React, Node.js, TypeScript, and enjoy
            learning new technologies to improve my engineering craft.
          </p>
        </div>
        <div className={classes.section}>
          <h2>Experience</h2>
          <p>
            I have both professional and personal experience in full-stack development. I have enjoyed both working in fast-paced, agile-based, teams and building/architecting my own software projects that benefit either me or others.
          </p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#8f001a', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8f001a' }}
              date="January 2025 - April 2025"
              dateClassName={classes.date}
              iconStyle={{ background: '#8f001a', color: '#fff' }}
              icon={<MdWork/>}
            >
              <h3 className="vertical-timeline-element-title">Full-Stack Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">University of Ottawa</h4>
              <p>
                Worked alongside the University's Engineer Outreach team to develop full-stack features built for planning and running events  using AngularJS and Java primarily.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(145, 75, 241)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(145, 75, 241)' }}
              date="August 2024"
              dateClassName={classes.date}
              iconStyle={{ background: 'rgb(145, 75, 241)', color: '#fff' }}
              icon={<FaProjectDiagram />}
            >
              <h3 className="vertical-timeline-element-title">TaskTrackr</h3>
              <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
              <p>
                Decided to challenge myself and built a full-stack kanban board web application to boost personal produtivity using React, Node.js, Express.js, and Supabase.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(145, 75, 241)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(145, 75, 241)' }}
              date="July 2024"
              dateClassName={classes.date}
              iconStyle={{ background: 'rgb(145, 75, 241)', color: '#fff' }}
              icon={<FaProjectDiagram />}
            >
              <h3 className="vertical-timeline-element-title">Impiric Academy</h3>
              <h4 className="vertical-timeline-element-subtitle">Client Project</h4>
              <p>
                Worked closely with a client to build a full-stack learning management system using Next.js, Typescript, Prisma, and MongoDB.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        </>
      )}
    </div>
  );
}

export default App;
