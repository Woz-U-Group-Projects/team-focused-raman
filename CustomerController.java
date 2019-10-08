//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/2/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.controllers;

import java.util.List;
import com.example.groupproject.entities.Customer;
import com.example.groupproject.models.CustomerRepo;
import com.example.groupproject.models.CustomerUpdate;
import com.example.groupproject.services.CustomerService;
import com.example.groupproject.models.CustomerCreation;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController{
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> findAll() {
        return customerService.findAll();
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<Customer> findById(@PathVariable Long customerId) {
        return customerService.findById(customerId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<Customer> create(@Valid @NotNull @RequestBody CustomerCreation creationRequest, Authentication authentication) {
        return customerService.create(creationRequest)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Customer> update(@PathVariable Long customerId, @Valid @NotNull @RequestBody CustomerUpdate updateRequest) {
        return customerService.update(customerId, updateRequest)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    @DeleteMapping("/{customerId}")
    @ResponseStatus(value = HttpStatus.OK)
    public void delete(Long customerId) {
        customerService.delete(customerId);
    }

}


	
