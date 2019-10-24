package com.example.groupproject.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
  
 //  Optional<RoomEntity> optinalEntity =  roomRepository.findById(roomId);
 // RoomEntity roomEntity = optionalEntity.get();
  

  @GetMapping("/{customerid}")
  public Optional<Customer> getCustomer(@PathVariable Long customerid) {
    return customerRepository.findById(customerid);
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

@CrossOrigin
@PutMapping("/{customerid}")
  public Customer updateProject(@PathVariable Long customerid, @RequestBody Customer customer) {
    Customer foundCustomer = customerRepository.findById(customerid).orElse(null);
    if (foundCustomer != null) {
    	foundCustomer.setFirstName(customer.getFirstName());
    	foundCustomer.setLastName(customer.getLastName());
    	foundCustomer.setPhone(customer.getPhone());
    	foundCustomer.setEmail(customer.getEmail());
    	
    	foundCustomer.setAddress1(customer.getAddress1());
    	foundCustomer.setAddress2(customer.getAddress2());
    	foundCustomer.setCity(customer.getCity());
    	foundCustomer.setState1(customer.getState1());
    	foundCustomer.setZip(customer.getZip());
    	foundCustomer.setCountry(customer.getCountry());
    	
    	foundCustomer.setMtrate(customer.getMtrate());
    	foundCustomer.setMtfrate(customer.getMtfrate());
    	foundCustomer.setMtbrate(customer.getMtbrate());
    	foundCustomer.setPaymentType(customer.getPaymentType());
    	foundCustomer.setBasis(customer.getBasis());
    	foundCustomer.setDay(customer.getDay());
      customerRepository.save(foundCustomer);
      return foundCustomer;
    }
    return null;
  }
}