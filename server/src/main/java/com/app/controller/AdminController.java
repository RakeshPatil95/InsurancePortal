package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddPolicyDto;
import com.app.dto.AgentDto;
import com.app.dto.ApiResponse;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.PolicyReturnDto;
import com.app.dto.SigninDto;
import com.app.dto.AdminUpdateDto;
import com.app.service.AdminService;
import com.app.service.PolicyService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
@Autowired
private AdminService adServ;
@Autowired
private PolicyService polServ;

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
@PostMapping("/addPolicy")
public ResponseEntity<?>addPolicy(@RequestBody @Valid AddPolicyDto apDto)
{
	try {
		return ResponseEntity.status(HttpStatus.CREATED).body(polServ.addPolicy(apDto));
	}
	catch(RuntimeException e) {
	
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage(),HttpStatus.BAD_REQUEST));
	}
}
@PostMapping("/addPolicyImage/{policyId}")
public ResponseEntity<?> addPolicyImage(@PathVariable long policyId, @RequestParam MultipartFile imageFile)
		throws IOException {
	System.out.println("in upload image " + policyId + " orig file name " + imageFile.getOriginalFilename() + " size "
			+ imageFile.getSize());
	return ResponseEntity.status(HttpStatus.CREATED).body(polServ.uploadPolicyImage(policyId, imageFile));
}
@GetMapping(value = "/getPolicyImage/{policyId}",produces = 
{MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
public ResponseEntity<?> getPolicyDetails(@PathVariable long policyId) throws IOException
{

return ResponseEntity.ok(polServ.getPolicyImageById(policyId));
}
@GetMapping(value="/getPolicy/{policyId}")
public ResponseEntity<PolicyReturnDto> getPolicy(@PathVariable long policyId) 
{

return ResponseEntity.ok(polServ.getPolicyDetails(policyId));
}
@GetMapping(value="/getAllPolicies")
public ResponseEntity<List<PolicyReturnDto>> getAllPolicies() 
{

return ResponseEntity.ok(polServ.getAllPolicyDetails());
}
@GetMapping(value="/getAllAgents")
public ResponseEntity<List<AgentDto>> getAllAgents() 
{

return ResponseEntity.ok(adServ.getAllAgents());
}
@GetMapping(value="/getAllCustomers")
public ResponseEntity<List<CustomerDto>> getAllCustomers() 
{

return ResponseEntity.ok(adServ.getAllCustomers());
}
@PutMapping(value="/updateProfile")
public ResponseEntity<?>upDateProfile(@ModelAttribute @Valid AdminUpdateDto adupDto,@RequestParam MultipartFile profileImage) throws IOException
{
	
	return ResponseEntity.ok().body(adServ.updateAdmin( adupDto,profileImage));
	
}
//@PostMapping("/addProfileImage/{adminId}")
//public ResponseEntity<?> addProfileImage(@PathVariable long adminId, @RequestParam MultipartFile profileImage)
//		throws IOException {
//	
//	return ResponseEntity.status(HttpStatus.CREATED).body(adServ.uploadProfileImage(adminId, profileImage));
//}
@GetMapping(value = "/getProfileImage/{adminId}",produces = 
{MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
public ResponseEntity<?> getProfileImage(@PathVariable  @Valid long adminId) throws IOException
{

return ResponseEntity.ok(adServ.getProfileImage(adminId));
}

}
