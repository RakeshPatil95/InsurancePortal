package com.app.service;

import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.dto.SignupDto;

public interface CustomerService {
public CustomerDto addCustomer(SignupDto signupDto);
public  CustomerDto getCustomerByEmailAndPassword(SigninDto signinDto);
public  CustomerDto getCustomerByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto);
}
