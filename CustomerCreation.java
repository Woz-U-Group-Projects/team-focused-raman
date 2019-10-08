//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.models;

import com.example.groupproject.controllers.CustomerController;
import com.example.groupproject.services.CustomerService;
import com.example.groupproject.models.CustomerCreation;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;


public class CustomerCreation {
    @NotNull
    @NotBlank
    private String customerName;

    @NotNull
    @NotBlank
    private Long phoneNumber;

    @NotNull
    @NotBlank
    private Long customerId;

    //Getter and Setter Methods for customerName field
	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	//Getter and Setter Methods for phoneNumber field
	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	//Getter and Setter Methods for customerId field
	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
    
   
    

   
}