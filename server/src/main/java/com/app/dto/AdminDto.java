package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.app.entities.Address;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AdminDto {
	@NotNull
	private long id;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	private long phoneNumber;
	@Email(message="Email Address not Valid")
	private String email;
  @Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or invalid password")
	private String password;
  @NotBlank
	private String securityQuestion;
 @NotBlank
	private String securityAnswer;
 

 private String token;
 private String Role="ADMIN";


	private Address address;
	private String image;
}
