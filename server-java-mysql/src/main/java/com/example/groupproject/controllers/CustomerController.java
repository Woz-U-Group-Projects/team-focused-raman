package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Customer;
import com.example.groupproject.models.CustomerRepository;

@RestController
@RequestMapping("/customer")
public class CustomerController {

  @Autowired
  CustomerRepository customerRepository;

  @GetMapping()
  public List<Customer> getCustomers() {
    return customerRepository.findAll();
  }
  
@PostMapping()
  public Customer addCustomer(@RequestBody Customer customer) {
    return customerRepository.save(customer);
  }

@CrossOrigin
@DeleteMapping("/{customerid}")
  public void deleteCustomer(@PathVariable Long customerid) {
    customerRepository.deleteById(customerid);
  }

//@PutMapping("/{id}")
//  public Customer updateProject(@PathVariable Long id, @RequestBody Customer customer) {
//    Customer foundCustomer = customerRepository.findById(id).orElse(null);
//    if (foundCustomer != null) {
//    	foundCustomer.setName(customer.getName());
//    	foundCustomer.setComplete(customer.getComplete());
//      customerRepository.save(foundCustomer);
//      return foundCustomer;
//    }
//    return null;
//  }

}