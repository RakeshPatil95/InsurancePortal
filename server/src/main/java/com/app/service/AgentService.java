package com.app.service;

import com.app.dto.AgentDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.entities.Customer;

public interface AgentService {
public AgentDto addAgent(SignupDto signupDto);
public AgentDto getAgentByEmailAndPassword(SigninDto signinDto);
public AgentDto getAgentByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto);
public String addCustomer(Customer customer,long agentId);
}
