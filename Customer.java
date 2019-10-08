//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.entities;

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
public class Customer {
    
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(columnDefinition = "serial")
    private Long customerId;

   @NotNull
   @Column(name = "customerName")
    private String customerName;
   
   @NotNull
   @Column(name = "phoneNumber")
   private Long phoneNumber;
   
   @Column(name = "deleted")
   private boolean deleted = false;

	public Customer() {
    }

    //Getter and Setter Methods for customerId field
    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long id) {
        this.customerId = id;
    }

    //Getter and Setter Methods for customerName field
    public String getName() {
        return customerName;
    }

    public void setName(String name) {
        this.customerName = name;
    }

    //Getter and Setter Methods for phoneNumber field
    public Long getPhoneNumber() {
    	
    	return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
	
    	this.phoneNumber = phoneNumber;
    }
    
    //Methods to determine is a customer is deleted
    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    
    //Customer Creation Method created new customer objects.
    public static Customer fromCreationRequest(CustomerCreation creationRequest) {
        Customer customer = new Customer();
        customer.setName(creationRequest.getCustomerName());
        customer.setPhoneNumber(creationRequest.getPhoneNumber());
        customer.setCustomerId(creationRequest.getCustomerId());
        return customer;
    }
}
