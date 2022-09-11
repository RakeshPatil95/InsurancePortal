package com.app.service;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AgentDto;
import com.app.dto.AgentUpdateDto;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.entities.Agent;
import com.app.entities.Customer;
import com.app.entities.CustomerPolicy;

public interface AgentService {
public AgentDto addAgent(SignupDto signupDto);
public AgentDto getAgentByEmailAndPassword(SigninDto signinDto);
public AgentDto getAgentByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto);
public String addCustomer(Customer customer,long agentId);
public AgentUpdateDto upDateProfile(@Valid AgentUpdateDto agUpDto, MultipartFile profileImage, MultipartFile acDoc,
		MultipartFile pcDoc)throws IOException;
public List<CustomerDto> getMyCustomers(long agentId);
public CustomerDto addMyCustomer(@Valid long agentId, CustomerDto custDto, MultipartFile profileImage, MultipartFile acDoc,
		MultipartFile pcDoc) throws IOException;
public List<CustomerPolicy> getMyCustomersPolicies(long agentId);
public List<CustomerPolicy> getMyCustomersPolicyPremiums(long agentId);
public CustomerPolicy addMyCustomersPolicy(long agentId, long customerId, long policyId, CustomerPolicy customerPolicy);
}
