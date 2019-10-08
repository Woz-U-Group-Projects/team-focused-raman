//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.models;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.entities.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Long> {

}
