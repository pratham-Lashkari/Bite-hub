package com.pratham.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.server.ServerWebExchange;

@Configuration
@EnableWebSecurity
public class AppConfig {

  // @SuppressWarnings("deprecation")
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    http.authorizeHttpRequests(request -> request
        .requestMatchers("/api/admin/**").hasAnyRole("RESTAURANT_OWNER", "ADMIN")
        .requestMatchers("/api/**").authenticated()
        .anyRequest().permitAll());
    http.addFilterBefore(new JwtTokenValidatro(), BasicAuthenticationFilter.class);
    http.csrf(csrf -> csrf.disable());
    http.cors(cors -> cors.configurationSource(corsConfigurationSource()));

    return http.build();
  }

  private CorsConfigurationSource corsConfigurationSource() {
    return new CorsConfigurationSource() {

      @Override
      public CorsConfiguration getCorsConfiguration(ServerWebExchange arg0) {

        CorsConfiguration cfg = new CorsConfiguration();
        return cfg;
      }

    };
  }

}
