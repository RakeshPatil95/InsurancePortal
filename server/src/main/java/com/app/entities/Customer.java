package com.app.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;



import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Customer extends BaseEntity {
	@Column(nullable = false)
private String firstName;
	@Column(nullable = false)
private String lastName;
@Column(unique = true,nullable = false)
private long phoneNumber;
@Column(unique = true,nullable = false)
private String email;
@Column(nullable = false)
private String password;
@Column(nullable = false)
private String securityQuestion;
@Column(nullable = false)
private String securityAnswer;
private byte[] image;
@ManyToOne
private Agent agent;


private int age;
private Date dateOfBirth;
@Column(unique = true,length=12)
private String aadhar;
private byte[] aadharDoc;
@Column(unique = true,length=10)
private String pan;
private byte[] panDoc;
@Column(length = 6)
private int pincode;

 
}
