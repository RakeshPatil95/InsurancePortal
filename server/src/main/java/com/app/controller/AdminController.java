package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
@Autowired
private AdminService adServ;
@PostMapping("/signin")
public ResponseEntity<?>signin(@RequestBody  @Valid SigninDto signinDto)
{
	
		return ResponseEntity.ok().body(adServ.getAdminByEmailAndPassword(signinDto));
	
}
@PostMapping("/forgotPassword")
public ResponseEntity<?>forgotPassword(@RequestBody  @Valid ForgotPasswordDto fpDto)
{
	
		return ResponseEntity.ok().body(adServ.getAdminByEmailAndSecurityQuestionAndSecurityAnswer(fpDto));
	
	
}
}
