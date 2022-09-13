package com.app.spring_security;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.app.jwt.JWTRequestFilter;

@EnableWebSecurity // To tell spring sec frmwork : following contains customization instrs for
					// authentication + authorization
@Configuration // to enable adding @Bean annotated methods
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
	//dep : password enc
	@Autowired
	private PasswordEncoder enc;
	@Autowired
	private JWTRequestFilter filter;

	@Bean
	public SecurityFilterChain configureAuthorization(HttpSecurity http) throws Exception{
		http.cors().and().csrf().disable()
		.exceptionHandling()
		.authenticationEntryPoint((request, response, ex) -> {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
		}).and()
		.authorizeRequests()
		.antMatchers("/user/signin").permitAll()
		.antMatchers("/agent/signup").permitAll()
		.antMatchers("/admin/signup").permitAll()
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.anyRequest().authenticated().and().
		sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS).
		and()
		.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);		
		return http.build();
	}
	

		@Bean
		public AuthenticationManager authenticatonMgr(AuthenticationConfiguration config) throws Exception {
			return config.getAuthenticationManager();
		}

}
