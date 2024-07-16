package com.pratham.config;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtValidator extends OncePerRequestFilter {

  private static final Logger logger = LoggerFactory.getLogger(JwtValidator.class);

  @SuppressWarnings("null")
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    String jwt = request.getHeader(JwtConstant.JWT_HEADER);

    if (jwt != null && jwt.startsWith("Bearer ")) {

      jwt = jwt.substring(7);

      try {

        Claims claims = Jwts.parserBuilder().setSigningKey(JwtConstant.key).build().parseClaimsJws(jwt).getBody();
        String email = String.valueOf(claims.get("email"));
        String authorities = String.valueOf(claims.get("authorities"));

        List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, auths);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        logger.info("Authenticated user: {}", email);

      } catch (Exception e) {

        logger.error("Invalid JWT token", e);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("Invalid JWT token");
        return;

      }
    } else {

      logger.warn("JWT token is missing or does not start with Bearer ");
    }

    filterChain.doFilter(request, response);
  }
}
