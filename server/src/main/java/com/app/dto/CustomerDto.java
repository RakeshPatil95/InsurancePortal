package com.app.dto;

import java.sql.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

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
public class CustomerDto {
@NotBlank
private String firstName;
@NotBlank
private String lastName;
//@Length(min=10,max = 10)
private long phoneNumber;
@Email
private String email;
@NotBlank
private String securityQuestion;
@NotBlank
private String securityAnswer;
private byte[] image;
private AgentDto agent;

@Min(18)
@Max(100)
private int age;
private Date dateOfBirth;
@Length(min=12,max=12)
private String aadhar;
private byte[] aadharDoc;
@Length(min=10,max=10)
private String pan;
private byte[] panDoc;
@Length(min=6,max=6)
private int pincode;



}
