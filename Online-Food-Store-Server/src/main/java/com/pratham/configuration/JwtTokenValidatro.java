package com.pratham.configuration;

import java.io.IOException;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtTokenValidatro extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    String token = request.getHeader(JwtConstant.JWT_HEADER);

    if (token != null) {
      token = token.substring(7);
      try {

      } catch (Exception e) {
        throw new BadCredentialsException("Invalid token");
      }
    }
    filterChain.doFilter(request, response);
  }

}
