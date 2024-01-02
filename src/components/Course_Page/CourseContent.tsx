import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { contents } from "./course_data";

export default function CourseContent() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="w-10/12 md:w-6/12 mt-5 h-screen">
      <div className="text-left font-semibold py-2 text-xl">Course Content</div>
      {contents.map((content, id) => (
        <div key={id} className="mt-1">
          <Accordion
            expanded={expanded === id.toString()}
            onChange={handleChange(id.toString())}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                fontFamily: "RobotoSlab",
              }}
            >
              <Typography
                sx={{ width: "83%", flexShrink: 0, fontWeight: "bold" }}
              >
                {content.module}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {content.sub_module.map((section, sid) => (
                <Typography
                  key={sid}
                  sx={{ width: "90%", flexShrink: 0, fontSize: "1rem" }}
                >
                  - {section}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
