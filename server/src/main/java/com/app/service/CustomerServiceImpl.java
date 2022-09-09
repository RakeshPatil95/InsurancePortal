package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customerException.UserNotFoundException;
import com.app.dao.CustomerDao;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;
import com.app.entities.Customer;
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerDao cusDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public CustomerDto addCustomer(SignupDto signupDto) {
		Customer customer=mapper.map(signupDto,Customer.class);
		Customer retCustomer=cusDao.save(customer);
		 return this.customerToDto( retCustomer);
		
	}

	@Override
	public CustomerDto getCustomerByEmailAndPassword(SigninDto signinDto) {
	
		return this.customerToDto(cusDao.findByEmailAndPassword(signinDto.getEmail(), signinDto.getPassword()).orElseThrow(()->new UserNotFoundException("Invalid Email or  Password for Customer ")));
	}

	@Override
	public CustomerDto getCustomerByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto) {
		
	Customer customer=cusDao.findByEmailAndSecurityQuestionAndSecurityAnswer(fpDto.getEmail(), fpDto.getSecurityQuestion(),fpDto.getSecurityAnswer()).orElseThrow(()->new UserNotFoundException("Invalid Email or Security Question Answer for Customer"));
	customer.setPassword(fpDto.getPassword());
	cusDao.save(customer);
	return customerToDto(customer);

	}

public CustomerDto customerToDto(Customer customer)
{
	return mapper.map(customer, CustomerDto.class);
}
}
