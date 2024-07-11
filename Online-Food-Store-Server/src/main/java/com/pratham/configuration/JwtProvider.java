package com.pratham.configuration;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

@Service
public class JwtProvider {

  public String generateToken(Authentication authentication) {
    Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
    String roles = populateAuthorities(authorities);
  }

  private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
    Set<String> auhts = new HashSet<>();
    for (GrantedAuthority auth : authorities) {
      auhts.add(auth.getAuthority());
    }
    return String.join(",", auhts);
  }
}
