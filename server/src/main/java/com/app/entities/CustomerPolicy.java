package com.app.entities;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Data;

@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"customer_id","policy_id"}))
@Entity
@Data
public class CustomerPolicy extends BaseEntity {
	@Column(nullable = false)
	private Date policyStartDate;
	@Column(nullable = false)
	private Date policyEndDate;
	@Column(nullable = false)
	private Date premiumDate;
	@Column(nullable = false)
	private int Premium;
	@Column(nullable = false)
	private String invoice;
	@Column(nullable = false)
	private boolean status;
	@Column(nullable = false)
	private float claimAmount;
	@Column(nullable = false)
	private Date claimDate;
	@ManyToOne
	private Customer customer;
	@ManyToOne
	private Policy policy;
	@ManyToOne
	private Agent agent;

}
