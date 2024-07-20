package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.request.IngredientCategoryRequest;
import com.pratham.service.IngredientCategory;
import com.pratham.service.impl.IngredientServiceImpl;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

  @Autowired
  private IngredientServiceImpl ingredientServiceImpl;

  public ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest req) {
    return null;
  }
}
