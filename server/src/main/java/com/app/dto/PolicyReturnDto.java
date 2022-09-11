package com.app.dto;

import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

//import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PolicyReturnDto {
	private long id;

	private String policyName;

	private int minEntryAge;

	private int maxEntryAge;

	private int minPeriodMonths;

	private int maxPeriodMonths;

	private int minMonthPremium;

	private int maxMonthPremium;

	private double agentCommisionPercentage;

	private double perAnnumRate;

}
