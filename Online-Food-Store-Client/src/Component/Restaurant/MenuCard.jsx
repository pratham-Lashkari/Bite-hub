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
import React, { useState } from "react";
import { organizeIngredients } from "../../utils/ingredeint&itsCategory";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/Cart/Action";

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();
  const handleChangeCheckBox = (value) => {
    if (selectedIngredients.includes(value)) {
      setSelectedIngredients(
        selectedIngredients.filter((items) => items !== value)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, value]);
    }
  };
  const handleAddItemToCart = (e) => {
    e.preventDefault();

    const reqData = {
      token: localStorage.getItem("token"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
        totalPrice: item.price,
      },
    };
    dispatch(addItemToCart(reqData));
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
          <form onSubmit={handleAddItemToCart}>
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
                          onChange={() => handleChangeCheckBox(ingredients.id)}
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
