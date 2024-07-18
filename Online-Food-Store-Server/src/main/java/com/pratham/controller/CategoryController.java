package com.pratham.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Category;
import com.pratham.model.User;
import com.pratham.service.CategorySerivce;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api")
public class CategoryController {

  @Autowired
  private CategorySerivce categorySerivce;

  @Autowired
  private UserService userService;

  @PostMapping("/admin/category")
  public ResponseEntity<Category> createCategory(@RequestBody Category category,
      @RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Category createdCategory = categorySerivce.createcCategory(category.getName(), user.getId());
    return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
  }

  @GetMapping("/category/restaurant")
  public ResponseEntity<List<Category>> getRestaurantCategory(@RequestHeader("Authorization") String jwt)
      throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    List<Category> createdCategorys = categorySerivce.findCategoryRestaurantId(user.getId());
    return new ResponseEntity<>(createdCategorys, HttpStatus.CREATED);
  }
}
