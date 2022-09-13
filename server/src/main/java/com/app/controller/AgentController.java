package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AgentUpdateDto;
import com.app.dto.ApiResponse;
import com.app.dto.CustomerDto;
import com.app.dto.CustomerPolicyDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.PolicyReturnDto;
import com.app.dto.SignupDto;
import com.app.service.AgentService;
import com.app.service.PolicyService;


@RestController
@RequestMapping("/agent")
@CrossOrigin(origins = "http://localhost:3000")
public class AgentController {
@Autowired
private AgentService agServ;
@Autowired
private PolicyService polServ;


//private AgentDetailsService agentDetailsService;
//@Autowired
//private JwtTokenHelper jwtTokenHelper;
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
//@PostMapping("/signin")
//public ResponseEntity<?>signin(@RequestBody @Valid SigninDto signinDto) 
//{
//
//	//	return ResponseEntity.status(HttpStatus.OK).body(agServ.getAgentByEmailAndPassword(signinDto));
//	try {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                		signinDto.getEmail(),
//                		signinDto.getPassword()
//                )
//        );
//    } catch (BadCredentialsException e) {
//        throw new UserNotFoundException("INVALID_CREDENTIALS BAD CREDENTIALS EXCEPTION OCCURED");
//    }
//	catch(Exception e)
//	{
//		System.out.println(e.getMessage());
//	}
//
//    final UserDetails userDetails
//            = agentDetailsService.loadUserByUsername(signinDto.getEmail());
//
//    final String token =
//    		jwtTokenHelper.generateToken(userDetails);
//
//	
//	AgentDto agent=agServ.getAgentByEmailAndPassword(signinDto);
//	if(agent!=null) {
//		if(agent.getPassword()!=null&&agent.getPassword().equals(signinDto.getPassword())) {
//			agent.setToken(token);
//			return ResponseEntity.ok().body(agent);
//		}
//			
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Invalid Password",HttpStatus.BAD_REQUEST));	}
//	else
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("invalid Agent",HttpStatus.BAD_REQUEST));
//	
//	
//}
@PostMapping("/forgotPassword")
public ResponseEntity<?>forgotPassword(@RequestBody @Valid ForgotPasswordDto fpDto){


		return ResponseEntity.status(HttpStatus.OK).body(agServ.getAgentByEmailAndSecurityQuestionAndSecurityAnswer(fpDto));

}
@PostMapping("/updateProfile")
public ResponseEntity<?>updateProfile(@ModelAttribute @Valid AgentUpdateDto agUpDto,@RequestParam MultipartFile profileImage,@RequestParam MultipartFile acDoc,@RequestBody MultipartFile pcDoc) throws IOException
{
	return ResponseEntity.status(HttpStatus.OK).body(agServ.upDateProfile(agUpDto,profileImage,acDoc,pcDoc));
}
@GetMapping(value="/getAllPolicies")
public ResponseEntity<List<PolicyReturnDto>> getAllPolicies() 
{

return ResponseEntity.ok(polServ.getAllPolicyDetails());
}
@GetMapping(value="/getMyCustomers/{agentId}")
public ResponseEntity<List<CustomerDto>>getMyCustomers(@PathVariable long agentId){
	return ResponseEntity.ok().body(agServ.getMyCustomers(agentId));
}
@PostMapping(value="/addMyCustomer/{agentId}")
public ResponseEntity<?>addMyCustomer(@PathVariable @Valid long agentId,@ModelAttribute CustomerDto custDto,@RequestParam MultipartFile profileImage, @RequestParam MultipartFile acDoc,@RequestParam MultipartFile pcDoc) throws IOException
{
	return ResponseEntity.ok().body(agServ.addMyCustomer(agentId,custDto,profileImage,acDoc,pcDoc));
}
@GetMapping(value="/getMyCustomersPremiums/{agentId}")
public ResponseEntity<?>getMyCustomersPremiums(@PathVariable long agentId)
{
	return ResponseEntity.ok().body(agServ.getMyCustomersPolicyPremiums(agentId));
}
@GetMapping(value="/getMyCustomerPolicies/{agentId}/customer/{customerId}")
public ResponseEntity<?>getMyCustomersPolicies(@PathVariable long agentId,@PathVariable long customerId)
{
	return ResponseEntity.ok().body(agServ.getMyCustomersPolicies(agentId,customerId));
}
@PostMapping("/addMyCustomersPolicy/agent/{agentId}/customer/{customerId}/policy/{policyId}")
public ResponseEntity<?>addMyCustomersPolicy(@PathVariable long agentId,@PathVariable long customerId,@PathVariable long policyId,@RequestBody CustomerPolicyDto customerPolicyDto)

{
	return ResponseEntity.ok().body(agServ.addMyCustomersPolicy(agentId,customerId,policyId,customerPolicyDto));
}
}
