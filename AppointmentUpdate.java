//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/8/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.models;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class AppointmentUpdate {

	@Column
	private Long mtRate;

	@Column
	private Long mtpRate;

	@Column
	private String dayOfWeek;

	@Column
	private String apptFrequency;
	
	@Column
	private Long cost;
	
	@Column
	private Long paymentType;

	public Long getMtRate() {
		return mtRate;
	}

	public void setMtRate(Long mtRate) {
		this.mtRate = mtRate;
	}

	public Long getMtpRate() {
		return mtpRate;
	}

	public void setMtpRate(Long mtpRate) {
		this.mtpRate = mtpRate;
	}

	public String getDayOfWeek() {
		return dayOfWeek;
	}

	public void setDayOfWeek(String dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}

	public String getApptFrequency() {
		return apptFrequency;
	}

	public void setApptFrequency(String apptFrequency) {
		this.apptFrequency = apptFrequency;
	}

	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	public Long getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(Long paymentType) {
		this.paymentType = paymentType;
	}

	
}
