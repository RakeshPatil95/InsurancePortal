package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.customerException.ResourceNotFoundException;
import com.app.customerException.UserNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.AgentDao;
import com.app.dao.CustomerDao;
import com.app.dto.AdminDto;
import com.app.dto.AdminUpdateDto;
import com.app.dto.AgentDto;
import com.app.dto.CustomerDto;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.SigninDto;
import com.app.entities.Admin;

import lombok.extern.slf4j.Slf4j;
@Service
@Transactional
@Slf4j
public class AdminServiceImpl implements AdminService {
@Autowired
private AdminDao adDao;
@Autowired
private CustomerDao custDao;
@Autowired
private AgentDao agDao;
@Autowired
private ModelMapper mapper;
@Value("${project.adminImages}")
private String folder;
@Autowired
private PasswordEncoder encoder;
@PostConstruct
public void anyInit() {
	log.info("in init {} ", folder);
	
	File dir = new File(folder);
	if (!dir.exists())
		log.info("dir created {} ", dir.mkdirs());
	else
		log.info("dir alrdy exists.... ");
}
	@Override
	public AdminDto getAdminByEmailAndPassword(SigninDto signinDto) {
		
		return this.adminToDto(adDao.findByEmailAndPassword(signinDto.getEmail(), signinDto.getPassword()).orElseThrow(()->new UserNotFoundException("Invalid Admin Email or Password")));
	}

	@Override
	public AdminDto getAdminByEmailAndSecurityQuestionAndSecurityAnswer(ForgotPasswordDto fpDto) 
	{
		
		Admin admin=adDao.findByEmailAndSecurityQuestionAndSecurityAnswer(fpDto.getEmail(), fpDto.getSecurityQuestion(), fpDto.getSecurityAnswer()).orElseThrow(()->new UserNotFoundException("Invalid Admin Email or Security Question or Security Answer"));
	 admin.setPassword(encoder.encode(fpDto.getPassword()));
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

	@Override
	public List<CustomerDto> getAllCustomers() {
	
		return custDao.findAll().stream().map((customer)->mapper.map(customer, CustomerDto.class)).collect(Collectors.toList());
	}

	@Override
	public List<AgentDto> getAllAgents() {
		return agDao.findAll().stream().map((agent)->mapper.map(agent, AgentDto.class)).collect(Collectors.toList());
	}

	@Override
	public AdminDto updateAdmin( AdminUpdateDto adminupdateDto,MultipartFile profileImage) throws IOException {
	adDao.findById(adminupdateDto.getId()).orElseThrow(()->new UserNotFoundException("Admin not FOund with Id"+adminupdateDto.getId()));
	String profileImagePath = folder.concat(File.separator).concat("AdminId "+adminupdateDto.getId());
	Files.copy(profileImage.getInputStream(), Paths.get(profileImagePath), StandardCopyOption.REPLACE_EXISTING);
  adminupdateDto.setImage(profileImagePath);
	Admin admin=mapper.map(adminupdateDto, Admin.class);
   adDao.save(admin);
  return mapper.map(admin, AdminDto.class);
	}
//	@Override
//	public String uploadProfileImage(long adminId, MultipartFile profileImage) throws IOException {
//	Admin admin=adDao.findById(adminId).orElseThrow(()->new UserNotFoundException("Admin Not Found With Id "+adminId));
//	String imagePath = folder.concat(File.separator).concat("AdminId "+adminId);
//	log.info("bytes copied {} ",
//			Files.copy(profileImage.getInputStream(), Paths.get(imagePath), StandardCopyOption.REPLACE_EXISTING));
//	admin.setImage(imagePath);
//	return "Admin Profile Uploaded SuccessFully";
//		
//	}
	@Override
	public byte[] getProfileImage(long adminId) throws IOException {
		Admin admin=adDao.findById(adminId).orElseThrow(()->new UserNotFoundException("Admin Not Found With Id "+adminId));
	if(admin.getImage()==null)
		  throw new ResourceNotFoundException("Admin doesnt have an ProfileImage");
				return Files.readAllBytes(Paths.get(admin.getImage()));
	}

}
