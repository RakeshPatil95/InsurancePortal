package com.app.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

import com.app.entities.Agent;
import com.app.entities.Customer;
import com.app.entities.Policy;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class CustomerPolicyDto {
	private long id;

	private Date policyStartDate;
	
	private Date policyEndDate;

	private Date premiumDate;

	private int Premium;

	private String invoice;

	private boolean status;

	private float claimAmount;

	private Date claimDate;

	private CustomerDto customer;

	private PolicyReturnDto policy;

	private AgentDto agent;

}
