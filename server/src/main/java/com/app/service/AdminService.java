package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AdminDto;
import com.app.dto.AdminUpdateDto;
import com.app.dto.AgentDto;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;

public interface AdminService {
AdminDto getAdminByEmailAndPassword(SigninDto signinDto);
AdminDto getAdminByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto);
List<CustomerDto>getAllCustomers();
List<AgentDto>getAllAgents();
AdminDto updateAdmin(MultipartFile adminImage, AdminUpdateDto adminupdateDto)throws IOException;
}
