package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class Address  {
@Column(unique = true)
private int pincode;
private String village;
@Column(length = 20)
private String city;
@Column(length = 20)
private String state; 
private String addressLine1;
private String addressLine2;

}
