package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.IngredientCategoryModel;
import com.pratham.model.IngredientsItem;
import com.pratham.request.IngredientCategoryRequest;
import com.pratham.request.IngredientRequest;
import com.pratham.service.impl.IngredientServiceImpl;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

  @Autowired
  private IngredientServiceImpl ingredientServiceImpl;

  @PostMapping("/category")
  public ResponseEntity<IngredientCategoryModel> createIngredientCategory(@RequestBody IngredientCategoryRequest req)
      throws Exception {
    IngredientCategoryModel item = ingredientServiceImpl.createIngredientCategory(req.getName(), req.getRestaurantId());
    return new ResponseEntity<>(item, HttpStatus.CREATED);
  }

  @PostMapping("/")
  public ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody IngredientRequest req)
      throws Exception {

    IngredientsItem item = ingredientServiceImpl.createIngredientItem(req.getRestaurantId(), req.getName(),
        req.getCategoryId());
    return new ResponseEntity<>(item, HttpStatus.CREATED);
  }

  @PutMapping("/{id}/stock")
  public ResponseEntity<IngredientsItem> updateIngredientStock(@PathVariable String id)
      throws Exception {
    IngredientsItem item = ingredientServiceImpl.updateStock(id);
    return new ResponseEntity<>(item, HttpStatus.OK);
  }

}
