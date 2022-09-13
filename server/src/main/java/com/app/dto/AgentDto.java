package com.app.dto;

import java.sql.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
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
public class AgentDto {
@NotBlank
private long id;
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
private String password;
private String token;
private byte[] image;
@Min(18)
@Max(100)
private int age;
private Date dateOfBirth;
private Date hireDate;
@Length(min=12,max=12)
private String aadhar;
private  String aadharDoc;
@Length(min=10,max=10)
private String pan;
private String panDoc;
@Length(min=6,max=6)
private int pincode;
private String Role="AGENT";



}
