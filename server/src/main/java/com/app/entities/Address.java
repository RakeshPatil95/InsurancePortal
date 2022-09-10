package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Address extends BaseEntity {
@Column(unique = true,nullable = false)
private int pincode;
private String village;
private String city;
private String state; 
@OneToMany(mappedBy = "pincode",fetch = FetchType.LAZY)
private List<Customer>customers=new ArrayList<>();
@OneToMany(mappedBy = "pincode",fetch = FetchType.LAZY)
private List<Agent>agents=new ArrayList<>();
@OneToMany(mappedBy = "pincode",fetch = FetchType.LAZY)
private List<Admin>admins=new ArrayList<>();
}
