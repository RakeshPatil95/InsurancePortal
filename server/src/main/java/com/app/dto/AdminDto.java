package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

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
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@Length(min=10,max = 10)
	@NotNull
	private long phoneNumber;
	@Email
	@NotNull
	private String email;
	@NotBlank
	private String securityQuestion;
	@NotBlank
	private String securityAnswer;
	private byte[] image;
}
