package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.customerException.ResourceNotFoundException;
import com.app.customerException.UserNotFoundException;
import com.app.dao.AgentDao;
import com.app.dao.CustomerDao;
import com.app.dao.CustomerPolicyDao;
import com.app.dao.PolicyDao;
import com.app.dto.AgentDto;
import com.app.dto.AgentUpdateDto;
import com.app.dto.CustomerDto;
import com.app.dto.CustomerPolicyDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.entities.Agent;
import com.app.entities.Customer;
import com.app.entities.CustomerPolicy;
import com.app.entities.Policy;

import lombok.extern.slf4j.Slf4j;
@Service
@Transactional
@Slf4j
public class AgentServiceImpl implements AgentService {
	@Autowired
	private AgentDao agDao;
	@Autowired
	private CustomerDao custDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CustomerPolicyDao custPolDao;
	@Autowired
	private PolicyDao polDao;
	@Value("${project.agentImages}")
	private String folder;
	@Value("${project.customerImages}")
	private String customerFolder;
	@PostConstruct
	public void anyInit() {
		log.info("in init {} ", folder);
		
		File dir = new File(folder);
		
		if (!dir.exists())
			log.info("dir created {} ", dir.mkdirs());
		else
			log.info("dir alrdy exists.... ");
	File dir2 = new File(customerFolder);
		
		if (!dir2.exists())
			log.info("dir created {} ", dir2.mkdirs());
		else
			log.info("dir alrdy exists.... ");
	}

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
	public AgentUpdateDto upDateProfile(@Valid AgentUpdateDto agUpDto, MultipartFile profileImage, MultipartFile acDoc,
			MultipartFile pcDoc) throws IOException {
		agDao.findById(agUpDto.getId()).orElseThrow(()->new UserNotFoundException("Agent Not Found With ID  "+agUpDto.getId()));
		String profileImagePath = folder.concat(File.separator).concat("AgentID "+agUpDto.getId());
		Files.copy(profileImage.getInputStream(), Paths.get(profileImagePath), StandardCopyOption.REPLACE_EXISTING);
		agUpDto.setImage(profileImagePath);
		String aadharDocPath = folder.concat(File.separator).concat("AgentAadhar "+agUpDto.getId());
		Files.copy(acDoc.getInputStream(), Paths.get(aadharDocPath), StandardCopyOption.REPLACE_EXISTING);
		agUpDto.setAadharDoc(aadharDocPath);
		String panDocPath = folder.concat(File.separator).concat("AgentPan  "+agUpDto.getId());
		Files.copy(pcDoc.getInputStream(), Paths.get(panDocPath), StandardCopyOption.REPLACE_EXISTING);
		agUpDto.setPanDoc(panDocPath);
	Agent	 agent=mapper.map(agUpDto, Agent.class);
		agDao.save(agent);
		return agUpDto;
	}

	@Override
	public List<CustomerDto> getMyCustomers(long  agentId) {
	    Agent agent=agDao.findById(agentId).orElseThrow(()->new UserNotFoundException("Agent Not Found With Id  "+agentId));
		return custDao.findByAgent(agent).stream().map((customer)->mapper.map(customer, CustomerDto.class)).collect(Collectors.toList());
	}

	@Override
	public CustomerDto addMyCustomer(@Valid long agentId, CustomerDto custDto, MultipartFile profileImage,
			MultipartFile acDoc, MultipartFile pcDoc) throws IOException {
		Agent agent=agDao.findById(agentId).orElseThrow(()-> new UserNotFoundException("Agent Not Found Exception "+agentId));
		
		Customer customer=custDao.save(mapper.map(custDto, Customer.class));
		customer.setAgent(agent);
		String profileImagePath = customerFolder.concat(File.separator).concat("CustomerId "+customer.getId());
		Files.copy(profileImage.getInputStream(), Paths.get(profileImagePath), StandardCopyOption.REPLACE_EXISTING);
		customer.setImage(profileImagePath);
		String aadharDocPath = customerFolder.concat(File.separator).concat("CustomerAadhar "+customer.getId());
		Files.copy(acDoc.getInputStream(), Paths.get(aadharDocPath), StandardCopyOption.REPLACE_EXISTING);
		customer.setAadharDoc(aadharDocPath);
		String panDocPath = customerFolder.concat(File.separator).concat("CustomerPan  "+customer.getId());
		Files.copy(pcDoc.getInputStream(), Paths.get(panDocPath), StandardCopyOption.REPLACE_EXISTING);
		customer.setPanDoc(panDocPath);
		//custDao.save(mapper.map(custDto, Customer.class));
		return mapper.map(customer, CustomerDto.class);
		//return custDto;
	}

	@Override
	public List<CustomerPolicyDto> getMyCustomersPolicies(long agentId,long customerId) {
		Agent agent=agDao.findById(agentId).orElseThrow(()->new UserNotFoundException("Agent not found with Id "+agentId));
		Customer customer=custDao.findById(customerId).orElseThrow(()->new UserNotFoundException("Customer not found with Id "+customerId));
		return custPolDao.findByAgentAndCustomer(agent,customer).stream().map((customerPolicy)->mapper.map(customerPolicy, CustomerPolicyDto.class)).collect(Collectors.toList());
	}

	@Override
	public List<CustomerPolicyDto> getMyCustomersPolicyPremiums(long agentId) {
		
		return custPolDao.getAgentsCustomersPremiums(agentId, LocalDate.now()).stream().map((customerPolicy)->mapper.map(customerPolicy, CustomerPolicyDto.class)).collect(Collectors.toList());
	}

	@Override
	public CustomerPolicyDto addMyCustomersPolicy(long agentId, long customerId, long policyId,
			CustomerPolicyDto customerPolicyDto) {
		Agent agent=agDao.findById(agentId).orElseThrow(()->new UserNotFoundException("Agent not found with Id "+agentId));
		Customer customer=custDao.findById(customerId).orElseThrow(()->new UserNotFoundException("Customer not found with Id "+customerId));
		Policy policy=polDao.findById(policyId).orElseThrow(()->new ResourceNotFoundException("Policy not found with id "+policyId));
		CustomerPolicy customerPolicy=mapper.map(customerPolicyDto, CustomerPolicy.class);
		customerPolicy.setAgent(agent);
		customerPolicy.setCustomer(customer);
		customerPolicy.setPolicy(policy);
		custPolDao.save(customerPolicy);
		return mapper.map(customerPolicy, CustomerPolicyDto.class);
	}

}
