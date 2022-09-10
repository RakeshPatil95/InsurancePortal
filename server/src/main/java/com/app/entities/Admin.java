package com.app.entities;



import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;

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

public class Admin extends BaseEntity {
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


	@Embedded
	private Address address;
	private String image;
}
