package com.pratham.response;

import java.util.List;

import com.pratham.model.Category;
import com.pratham.model.IngredientCategoryModel;
import com.pratham.model.IngredientsItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodReponse {
  private String id;
  private String name;
  private String description;
  private Long price;
  private Category foodCategory;
  private List<String> images;
  private boolean available;
  private String restaurantId;
  private boolean isSeasonal;
  private boolean isVegetarian;
  private List<IngredientsItem> ingredients;
  private List<IngredientCategoryModel> ingredientCategoryModels;
  private String createdAt;
}
