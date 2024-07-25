import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuCard = () => {
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
