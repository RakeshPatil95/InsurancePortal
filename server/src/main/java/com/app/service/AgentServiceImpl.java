package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customerException.UserNotFoundException;
import com.app.dao.AgentDao;
import com.app.dao.CustomerDao;
import com.app.dto.AgentDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.entities.Agent;
import com.app.entities.Customer;
@Service
@Transactional
public class AgentServiceImpl implements AgentService {
	@Autowired
	private AgentDao agDao;
	@Autowired
	private CustomerDao custDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public AgentDto addAgent(SignupDto signupDto) {
	
		Agent agent=this.mapper.map(signupDto,Agent.class);
	
		Agent retAgent=agDao.save(agent);
		
		return this.AgentToDto(retAgent);
	}

	@Override
	public AgentDto getAgentByEmailAndPassword(SigninDto signinDto) {
		
	return this.AgentToDto(agDao.findByEmailAndPassword(signinDto.getEmail(), signinDto.getPassword()).orElseThrow(()->new UserNotFoundException("Agents Email or Password is Invalid")));
	}

	@Override
	public AgentDto getAgentByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto) {
	
		Agent agent=agDao.findByEmailAndSecurityQuestionAndSecurityAnswer(fpDto.getEmail(), fpDto.getSecurityQuestion(),fpDto.getSecurityAnswer()).orElseThrow(()->new UserNotFoundException("Agents Email or Password is Invalid"));
		agent.setPassword(fpDto.getPassword());
		agDao.save(agent);
		return this.AgentToDto(agent);
		
	}
	public Agent dtoToAgent(AgentDto agDto)
	{ 
		return mapper.map(agDto, Agent.class);
	}
	public AgentDto AgentToDto(Agent agent)
	{
		return mapper.map(agent, AgentDto.class);
	}

	@Override
	public String addCustomer(Customer customer, long agentId) {
		Agent agent=this.agDao.findById(agentId).orElseThrow(()->new UserNotFoundException("Agent Not found with Id "+agentId));
		
		return null;
	}

}
