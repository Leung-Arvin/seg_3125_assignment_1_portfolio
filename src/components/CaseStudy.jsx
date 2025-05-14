import { Button } from "react-bootstrap";
import classes from "./case-study.module.css";

export function CaseStudy({ title, description, image, read_time, spineColor, contentColor, textColor }) {
  return (
  <div className={classes.case_study}
    style={{
      backgroundColor: contentColor || "white",
    }}>
    <div className={classes.spine} style={{ backgroundColor: spineColor || "black"}}></div>
    <div className={classes.content} style={{ color: textColor || "black" }}>
      <h3>{"~" + read_time + "mins"}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} className={classes.image} />
    </div>
  </div>
  )
}