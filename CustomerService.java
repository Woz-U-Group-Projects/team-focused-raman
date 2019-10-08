//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.services;

import com.example.groupproject.entities.Customer;
import com.example.groupproject.models.CustomerCreation;
import com.example.groupproject.models.CustomerRepo;
import com.example.groupproject.models.CustomerUpdate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepo customerRepository;

    @Autowired
    public CustomerService(CustomerRepo customerRepository) {
        this.customerRepository = customerRepository;
    }

    //Method that will SELECT all the customer in teh DB and display their informaton
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    //A method that will locate a customer in the DB by their customerId
    public Optional<Customer> findById(Long customerId) {
        return customerRepository.findById(customerId);
    }

    //Method that calls the Customer Creations method from Creation Request class to create a new Customer object
    public Optional<Customer> create(@Valid @NotNull CustomerCreation creationRequest) {
        Customer customerToSave = Customer.fromCreationRequest(creationRequest);
        
        return Optional.of(customerRepository.save(customerToSave));
    }

    //Method to update customer information in the DB
    public Optional<Customer> update(Long customerId, CustomerUpdate updateRequest) {
        Customer customerToSave = getCustomerFromDatabase(customerId);
        updateCustomerValues(updateRequest, customerToSave);
        return Optional.ofNullable(customerRepository.save(customerToSave));
    }

    //Method to delete a customer object (saves in DB)
    public void delete(Long customerId) {
        Customer customerToSave = getCustomerFromDatabase(customerId);

        customerToSave.setDeleted(true);

        customerRepository.save(customerToSave);
    }

    //A Method that returns a customer fromt the DB
    private Customer getCustomerFromDatabase(Long customerId) throws EntityNotFoundException {
        Optional<Customer> customerFromDatabase = findById(customerId);

        if (!customerFromDatabase.isPresent()) {
            throw new EntityNotFoundException(String.format("Customer with id %d is not in the database", customerId));
        }
        return customerFromDatabase.get();
    }

    //Method to update the field in a customer object
    private void updateCustomerValues(CustomerUpdate updateRequest, Customer customerToSave) {

        customerToSave.setName(updateRequest.getCustomerName());

        customerToSave.setCustomerId(updateRequest.getCustomerId());

        customerToSave.setPhoneNumber(updateRequest.getPhoneNumber());

    }
}



