package com.app.service;

import com.app.dto.AdminDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;

public interface AdminService {
public AdminDto getAdminByEmailAndPassword(SigninDto signinDto);
public AdminDto getAdminByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto);
}
