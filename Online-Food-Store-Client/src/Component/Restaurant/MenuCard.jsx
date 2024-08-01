import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import { organizeIngredients } from "../../utils/ingredeint&itsCategory";

const MenuCard = ({ item }) => {
  const handleChangeCheckBox = (value) => {
    console.log(value);
  };
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
                src={item.images[1]}
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item?.name}</p>
                <p>₹{item.price}</p>
                <p className="text-gray-500">{item?.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {organizeIngredients(
                item.ingredientCategoryModels,
                item.ingredients
              ).map((item, ind) => (
                <FormGroup key={ind}>
                  <p>{item.name}</p>
                  {item.ingredients.map((ingredients, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          onChange={() =>
                            handleChangeCheckBox(ingredients.name)
                          }
                        />
                      }
                      label={ingredients.name}
                    />
                  ))}
                </FormGroup>
              ))}
            </div>
            <div className="pt-55">
              <Button variant="contained" disabled={false} type="submit">
                {true ? "Add to Card" : "Out Of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
