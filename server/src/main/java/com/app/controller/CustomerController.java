package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
@Autowired
private CustomerService cusServ;
@PostMapping("/signup")
public ResponseEntity<?> signup(@RequestBody @Valid  SignupDto signupDto){
	System.out.println("in signup");
	try {
		return ResponseEntity.status(HttpStatus.CREATED).body(cusServ.addCustomer(signupDto));
	}
	catch(RuntimeException e) {
	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getLocalizedMessage(), HttpStatus.BAD_REQUEST));
	}
	}
	

@PostMapping("/signin")
public ResponseEntity<CustomerDto>signin(@RequestBody @Valid SigninDto signinDto)
{

		return ResponseEntity.status(HttpStatus.OK).body(cusServ.getCustomerByEmailAndPassword(signinDto));
}
@PostMapping("/forgotPassword")
public ResponseEntity<CustomerDto>forgotPassword(@RequestBody @Valid ForgotPasswordDto fpDto){
	return ResponseEntity.status(HttpStatus.OK).body(cusServ.getCustomerByEmailAndSecurityQuestionAndSecurityAnswer(fpDto));
}
}
