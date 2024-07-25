import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuCardIngredients } from "../../constants/RestaurantDetailsFilter";

const MenuCard = () => {
  const handleChangeCheckBox =(value)=>{
    console.log(value)
  }
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5 ">
              <img
                className="w-[7rem]  h-[7rem] object-cover"
                src="https://miro.medium.com/v2/resize:fit:1400/0*oTfm1pTXLxitHHFy.jpg"
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Burger</p>
                <p>₹499</p>
                <p className="text-gray-500">nice Food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <from>
            <div className="flex gap-5 flex-wrap">
              {menuCardIngredients.map((item, ind) => (
                <FormGroup key={ind}>
                  <p>{item.category}</p>
                  {item.ingredients.map((ingredients, i) => (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox onChange={()=>handleChangeCheckBox(ingredients)} />}
                      label={ingredients}
                    />
                  ))}
                </FormGroup>
              ))}
            </div>
            <div className="pt-55">
              <Button variant="contained" disabled={false} type="submit">{true ? "Add to Card" : "Out Of Stock"}</Button>
            </div>
          </from>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
