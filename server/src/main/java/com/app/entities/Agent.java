package com.app.entities;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter 
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Agent extends BaseEntity {
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
	
   private int age;
	private Date dateOfBirth;
	private Date hireDate;
	@Column(unique = true,length=12)
   private String aadhar;
	private byte[] aadharDoc;
	@Column(unique = true,length=10)
	private String pan;
	private byte[] panDoc;
	@Column(length = 6)
	private int pincode;
	@OneToMany(mappedBy = "agent",fetch = FetchType.LAZY)
	private List<Customer>customers=new ArrayList<>();
}
