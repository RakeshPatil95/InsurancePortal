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
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.service.AgentService;

@RestController
@RequestMapping("/agent")
@CrossOrigin(origins = "http://localhost:3000")
public class AgentController {
@Autowired
private AgentService agServ;
@PostMapping("/signup")
public ResponseEntity<?>signup(@RequestBody @Valid SignupDto signupDto)
{
	try {
		return ResponseEntity.status(HttpStatus.CREATED).body(agServ.addAgent(signupDto));
	}
	catch(RuntimeException e) {
	
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage(),HttpStatus.CONFLICT));
	}
}
@PostMapping("/signin")
public ResponseEntity<?>signin(@RequestBody @Valid SigninDto signinDto)
{

		return ResponseEntity.status(HttpStatus.OK).body(agServ.getAgentByEmailAndPassword(signinDto));
	
	
}
@PostMapping("/forgotPassword")
public ResponseEntity<?>forgotPassword(@RequestBody @Valid ForgotPasswordDto fpDto){


		return ResponseEntity.status(HttpStatus.OK).body(agServ.getAgentByEmailAndSecurityQuestionAndSecurityAnswer(fpDto));

}
}
