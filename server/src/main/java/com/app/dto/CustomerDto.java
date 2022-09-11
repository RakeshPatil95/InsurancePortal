package com.app.dto;

import java.sql.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.app.entities.Address;
import com.app.entities.Agent;

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
public class CustomerDto {
	private long id;
@NotBlank
private String firstName;
@NotBlank
private String lastName;
//@Length(min=10,max = 10)
private long phoneNumber;
@Email
private String email;
private String password;
@NotBlank
private String securityQuestion;

@NotBlank
private String securityAnswer;
private String image;
private AgentDto agent;

//@Min(18)
//@Max(100)
private int age;
private Date dateOfBirth;
@Length(min=12,max=12)
private String aadhar;
private String aadharDoc;
@Length(min=10,max=10)
private String pan;
private String panDoc;
private Address address;


}
