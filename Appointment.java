//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/8/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.entities;

import com.example.groupproject.models.AppointmentCreation;
import com.example.groupproject.models.CustomerCreation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Appointment extends Customer {

	@NotNull
	@Column
	private Long mtRate;

	@NotNull
	@Column
	private Long mtpRate;

	@NotNull
	@Column
	private String dayOfWeek;

	@NotNull
	@Column
	private String apptFrequency;
	
	@NotNull
	@Column
	private Long cost;

	@NotNull
	@Column
	private Long paymentType;

	//Getter and Setter Methods for mtRate field
	public Long getMtRate() {
		return mtRate;
	}

	public void setMtRate(Long mtRate) {
		this.mtRate = mtRate;
	}

	//Getter and Setter Methods for mtpRate field
	public Long getMtpRte() {
		return mtpRate;
	}

	public void setMtpRte(Long mtpRate) {
		this.mtpRate = mtpRate;
	}

	//Getter and Setter Methodfor dayOfWeek field
	public String getDayOfWeek() {

		return dayOfWeek;
	}

	public void setDayOfWeek(String dayOfWeek) {
		//use a switch statement for 1-7 to make mon-sun
		this.dayOfWeek = dayOfWeek;
	}

	//Getter and Setter Methods for the apptFrequency field
	public String getApptFrequency() {
		return apptFrequency;
	}

	public void setApptFrequency(String apptFrequency) {
		this.apptFrequency = apptFrequency;
	}

	//Getter and Setter Methods for the cost field
	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	//Getter and Setter Methods for the paymentType field
	public Long getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(Long paymentType) {
		this.paymentType = paymentType;
	}
	
	//Add an appointment creation method that calls a customer object
	//(likely with id) then adds a created appointment to the DB.

	//DEV NOTES-----------------------------------
	/*
	 * the apptFrequency methods need to be given with logic that uses 1-7 out of 7 days
	 * or out of a period of a month.
	 * 
	 * the day of week should use logic containing 1/7 */
	

}
