//package com.app.jwt;
//
//import java.io.IOException;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import io.jsonwebtoken.ExpiredJwtException;
//import io.jsonwebtoken.MalformedJwtException;
//
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//@Autowired
//private UserDetailsService userDetailsService;
//@Autowired
//private JwtTokenHelper jwtTokenHelper;
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//	  String requestToken=request.getHeader("Authorization");
//	  System.out.println(requestToken);
//	  String username=null;
//	  String token=null;
//	  if(request!=null &&requestToken.startsWith("Bearer"))
//	  {
//		   token=requestToken.substring(7);
//		   try {
//		   username=this.jwtTokenHelper.getUsernameFromToken(token);
//		   }
//		   catch(IllegalArgumentException e)
//		   {
//			   System.out.println("Unable to get JWT TOKEN");
//		   }
//		   catch(ExpiredJwtException e)
//		   {
//			   System.out.println("JWT token has expired");
//		   }
//		   catch(MalformedJwtException e)
//		   {
//			   System.out.println("invalid Jwt ");
//		   }
//	  }
//	  else {
//		  System.out.println("Token does not begin with Bearer");
//	  }
//    if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null)
//    {
//    	UserDetails userDetails=this.userDetailsService.loadUserByUsername(username);
//    	if(this.jwtTokenHelper.validateToken(token, userDetails)) {
//    		SecurityContextHolder.getContext().setAuthentication(null);
//    	}
//    	else {
//    		System.out.println("Invalid Jwt Token");
//    	}
//    }
//    else {
//    	
//    }
//	}
//
//}
