package com.pratham.configuration;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Service
public class JwtProvider {

  public String generateToken(Authentication authentication) {
    Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
    String roles = populateAuthorities(authorities);
    String token = Jwts.builder().setIssuedAt(new Date())
        .setExpiration(new Date(new Date().getTime() + 86400000))
        .claim("email", authentication.getName())
        .claim("authorities", roles)
        .signWith(JwtConstant.key)
        .compact();
    return token;
  }

  public String getEmailFromToken(String token) {
    Claims claims = Jwts.parserBuilder().setSigningKey(JwtConstant.key).build().parseClaimsJws(token).getBody();
    String email = String.valueOf(claims.get("email"));
    return email;
  }

  private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
    Set<String> auhts = new HashSet<>();
    for (GrantedAuthority auth : authorities) {
      auhts.add(auth.getAuthority());
    }
    return String.join(",", auhts);
  }
}
