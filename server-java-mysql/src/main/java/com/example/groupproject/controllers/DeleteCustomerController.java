package com.example.groupproject.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.groupproject.models.CustomerSearchInput;
import com.example.groupproject.models.CustomerSearchInputRepository;
//import com.example.groupproject.models.Customer;
//import com.example.groupproject.models.Customer;
//import com.example.groupproject.models.Order;
import com.example.groupproject.models.DeleteCustomer;
import com.example.groupproject.models.DeleteCustomerRepository;

//import com.example.groupproject.models.CustomerSearchRepository;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;



@Controller
@RequestMapping({ "/customer/delete" })


public class DeleteCustomerController {
	@Autowired
	DeleteCustomerRepository deleteCustomerRepository;
    @GetMapping()
    public @ResponseBody List<DeleteCustomer> getDeleteCustomer() {
        List<DeleteCustomer> deleteCustomer = new ArrayList<DeleteCustomer>();
        // Code to query the database and
        // add actors to the List will go here
        Connection con;
        try {
        	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/finalproject", "root", "Password1!");
        	Statement stmt = con.createStatement();
        	ResultSet rs = stmt.executeQuery("select * from finalproject.delete_customer"
        			);
        	while (rs.next()) {

        	    // create a new Actor object
        		DeleteCustomer newDeleteCustomer = new DeleteCustomer();

        	    // get the values from each column of the current row and add them to the new Actor
        		newDeleteCustomer.setCustomerid(rs.getLong("customerid"));

        	    // add the new actor to the actors list
        		deleteCustomer.add(newDeleteCustomer);
        	}
        } catch (SQLException e) {
        	e.printStackTrace();
        }
//        model.addAttribute("orderDetails", orderDetails);
        return deleteCustomer;
    }

    @PostMapping()
    public DeleteCustomer deleteThis(@RequestBody DeleteCustomer delete) {
        return deleteCustomerRepository.save(delete);
      }
}