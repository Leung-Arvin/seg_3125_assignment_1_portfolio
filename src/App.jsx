import { useState } from "react";
import { Navbar } from "./components/navbar";
import { CaseStudy } from "./components/CaseStudy";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { WorkflowIcon } from "lucide-react";
import { FaProjectDiagram, FaReact } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const roles = ["UI/UX Design", "Engineer"];

function App() {
  const [role, setRole] = useState("UI/UX Design");

  return (
    <div class="flex flex-col gap-5 max-width-4xl justify-center items-center py-5">
      <Navbar />
      <div class="w-195 pt-10">
        <img class="h-[250px] w-[180px]" src="avatar.png"></img>
        <h1 class="text-6xl pb-5">Hey, I'm Arvin</h1>
        <div class="flex flex-row gap-6 underline text-lg">
          <p>Full Stack Software Engineer</p>
          <p>University of Ottawa Student</p>
        </div>
      </div>

      <div class="flex w-195 gap-6 text-lg mt-10 italic">
        {roles.map((r) => (
          <p
            key={r}
            onClick={() => setRole(r)}
            class={`cursor-pointer hover:text-black hover:underline hover:underline-offset-8  ${
              role === r ? "font-bold text-black underline underline-offset-8" : "font-normal text-gray-500"
            }`}
          >
            {r}
          </p>
        ))}
      </div>
      <AnimatePresence mode="wait">
      {role === "UI/UX Design" ? (
        <motion.div
          key="design"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y: -10 }}
          transition={{duration: 0.3}}
          >
          <div class="w-195">
            <h2 class="text-3xl font-medium">About Me</h2>
            <p class="text-lg mt-2 pb-5">
              I'm an amateur in UI/UX design with a background in Software Engineering. To me, nothing leaves a stronger impression than an application's appearance and ease of use. That's why I prioritze design thinking in every project because it's what sets me apart from other full-stack developers. I'm always exploring new design trends and tools whilst discovering new ways to express myself through this artform that is UI/UX design.
            </p>
            <h2 class="text-3xl font-medium">How I Work</h2>
            <p class="text-lg mt-2 pb-5">
              My UI/UX journey began with personal projects and recently led me to design the University of Ottawa's OutStem landing page. Most of my skills so far are self-taught through Youtube tutorials, experimenting in Figma, and now formalizing my knowledge in my Analysis and Design of User Interfaces course. My Worflow is evolving as a I dive into user research, wireframing, and prototyping. I'll continue to refine my process through hands-on case studies (check them out below!)
            </p>
          </div>
          <div class="w-195">
            <h2 class="text-3xl font-medium">Case Studies</h2>
            <p class="text-lg mt-2 pb-5">
              These case studies showcase my logic, challenges and process
              behind creating each designs. I’ve put a lot of thought into each
              detail and the depth of each study reflects that. If you’re
              curious, click on whichever piques your interests.
            </p>
            <div class="grid grid-cols-2 gap-10">
              <Link to="https://tinymicss.netlify.app/">
                <CaseStudy
                  read_time="15"
                  title="Designing Simplicity: A Seamless Service"
                  description="A case study on how I created TinyMics"
                  image="service_website_case.png"
                  spineColor="#2B2659"
                  contentColor="#887BFF"
                  textColor="white"
                />
              </Link>
              <Link to="https://the-fading-tail.netlify.app/">
              <CaseStudy
                read_time="15"
                title="Gameplay Meets Design"
                description="A case study on how I designed a turned-based RPG game with a high-stakes memory mechanic."
                image="the-fading-tail-case.png"
                spineColor="#777374"
                contentColor="black"
                textColor="white"
              />
              </Link>
              <Link to="https://matcha-mart.netlify.app/">
              <CaseStudy
                read_time="15"
                title="Designing for Conversion"
                description="A case study on how I transformed visitors into customers with this e-commerce site."
                image="ecommerce_website_case.png"
                spineColor="#69B39A"
                contentColor="#92CAB1"
                textColor="#143733"
              />
              </Link>
              <Link to="/case4">
              <CaseStudy
                read_time="15"
                title="Clarity in Data"
                description="A case study on my designs for an analytics platform that transforms complex data into clear, actionable insights."
                image="data_analytics_case.png"
                spineColor="#BC9EC1"
                contentColor="#E3BAC6"
                textColor="#596475"
              />
              </Link>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="engineer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y: -10 }}
          transition={{duration: 0.3}}
          >
        <div class="w-195">
            <h2 class="text-3xl font-medium">About Me</h2>
            <p class="text-lg mt-2 pb-5">
            I'm a full-stack software engineer who enjoys building scalable,
            user-centric applications. From clean, efficient APIs to responsive
            front-end interfaces, I love tackling challenges across the tech
            stack. I'm proficient in React, Node.js, TypeScript, and enjoy
            learning new technologies to improve my engineering craft.
            </p>
          </div>
        <div class="w-195">
          <h2 class="text-3xl font-medium">Experience</h2>
          <p class="text-lg mt-2 pb-5">
            I have both professional and personal experience in full-stack development. I have enjoyed both working in fast-paced, agile-based, teams and building/architecting my own software projects that benefit either me or others.
          </p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#8f001a', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8f001a' }}
              date="January 2025 - April 2025"
              dateClassName="text-white lg:text-black lg:mx-5"
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
              dateClassName="text-white lg:text-black lg:mx-5"
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
              dateClassName="text-white lg:text-black lg:mx-5"
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
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
