package com.app.entities;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
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
	private String image;
	
   private int age;
	private Date dateOfBirth;
	private Date hireDate;
	@Column(unique = true,length=12)
   private String aadhar;
	private String aadharDoc;
	@Column(unique = true,length=10)
	private String pan;
	private String panDoc;
	

	@Embedded
	private Address address;
	@OneToMany(mappedBy = "agent",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Customer>customers=new ArrayList<>();
}
