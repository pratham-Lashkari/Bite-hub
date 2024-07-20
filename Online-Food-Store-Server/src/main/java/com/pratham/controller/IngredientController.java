package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.IngredientCategoryModel;
import com.pratham.request.IngredientCategoryRequest;
import com.pratham.service.impl.IngredientServiceImpl;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

  @Autowired
  private IngredientServiceImpl ingredientServiceImpl;

  @PostMapping("/create")
  public ResponseEntity<IngredientCategoryModel> createIngredientCategory(@RequestBody IngredientCategoryRequest req)
      throws Exception {
    IngredientCategoryModel item = ingredientServiceImpl.createIngredientCategory(req.getName(), req.getRestaurantId());
    return new ResponseEntity<>(item, HttpStatus.CREATED);
  }
}
