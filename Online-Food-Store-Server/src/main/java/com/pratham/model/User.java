package com.pratham.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.pratham.enums.USER_ROLE;

import lombok.Data;

@Data
@Document(collection = "User")
public class User {

  @Id
  private String Id;
  private String fullName;
  private String email;
  private String password;
  private USER_ROLE role;
}
