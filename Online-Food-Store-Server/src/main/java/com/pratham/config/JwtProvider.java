package com.pratham.config;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtProvider {

  public String generateToken(Authentication auth) {
    String jwt = Jwts.builder()
        .setIssuedAt(new Date())
        .setExpiration(new Date(new Date().getTime() + 86400000))
        .claim("email", auth.getName())
        .signWith(JwtConstant.key)
        .compact();
    return jwt;
  }

  public String getEmailFromToken(String token) {
    token = token.substring(7);
    Claims claims = Jwts.parserBuilder().setSigningKey(JwtConstant.key).build().parseClaimsJws(token).getBody();
    String email = String.valueOf(claims.get("email"));
    return email;
  }
}
