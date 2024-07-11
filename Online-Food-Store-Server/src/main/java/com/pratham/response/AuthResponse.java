package com.pratham.response;

import com.pratham.enums.USER_ROLE;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthResponse {
  private String token;
  private String message;
  private USER_ROLE role;
}
