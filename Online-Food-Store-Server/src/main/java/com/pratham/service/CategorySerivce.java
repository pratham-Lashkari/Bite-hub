package com.pratham.service;

import java.util.List;

import com.pratham.model.Category;

public interface CategorySerivce {

  public Category createcCategory(String name, String userId);

  public List<Category> findCategoryRestaurantId(String id) throws Exception;

  public Category findCategoryById(String id) throws Exception;
}
