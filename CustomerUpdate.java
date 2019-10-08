//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.models;

import javax.validation.constraints.NotBlank;

public class CustomerUpdate {
	
    @NotBlank
    private String customerName;

    @NotBlank
    private Long phoneNumber;
    
    @NotBlank
    private Long customerId;

    
    //Getter and Setter Methods for customerId field
	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	//Default Constructor
    public CustomerUpdate() {
    }

    //Getter and Setter Methods for customerName
    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String name) {
        this.customerName = name;
    }
    
    //Getter and Setter Methods for phoneNumber field
    public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

}