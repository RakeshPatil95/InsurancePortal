package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customerException.UserNotFoundException;
import com.app.dao.AdminDao;
import com.app.dto.AdminDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.entities.Admin;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
@Autowired
private AdminDao adDao;
@Autowired
private ModelMapper mapper;
	@Override
	public AdminDto getAdminByEmailAndPassword(SigninDto signinDto) {
		
		return this.adminToDto(adDao.findByEmailAndPassword(signinDto.getEmail(), signinDto.getPassword()).orElseThrow(()->new UserNotFoundException("Invalid Admin Email or Password")));
	}

	@Override
	public AdminDto getAdminByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto) 
	{
		
		Admin admin=adDao.findByEmailAndSecurityQuestionAndSecurityAnswer(fpDto.getEmail(), fpDto.getSecurityQuestion(), fpDto.getSecurityAnswer()).orElseThrow(()->new UserNotFoundException("Invalid Admin Email or Security Question or Security Answer"));
	 admin.setPassword(fpDto.getPassword());
	 adDao.save(admin);
	 return this.adminToDto(admin);
	}
	public AdminDto adminToDto(Admin admin)
	{
		return mapper.map(admin, AdminDto.class);
	}
	public Admin dtoToAdmin(AdminDto adDto)
	{
		return mapper.map(adDto, Admin.class);
	}

}
