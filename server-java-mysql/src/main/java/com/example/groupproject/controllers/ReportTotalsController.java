package com.example.groupproject.controllers;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.groupproject.models.ReportTotals;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

@RestController
@RequestMapping({ "/reports/totals" })
public class ReportTotalsController {

	// THOUGHT -- perhaps the GET mapping should include a parameter to identify the computer from where the request is coming?  So as to not cross swords with other users...
	
	@GetMapping()
    public @ResponseBody List<ReportTotals> getTotals() {
        List<ReportTotals> totals = new ArrayList<ReportTotals>();
        // Code to query the database and
        // add actors to the List will go here
        Connection con;
        try {
        	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/finalproject", "root", "Password1!");
        	Statement stmt = con.createStatement();
        	ResultSet rs = stmt.executeQuery("SELECT \n" + 
        			"    (SELECT \n" + 
        			"            SUM(total)\n" + 
        			"        FROM\n" + 
        			"            finalproject.orderdetails\n" + 
        			"                INNER JOIN\n" + 
        			"            finalproject.customer USING (customerid)\n" + 
        			"        WHERE\n" + 
        			"            payment_type = 'CASH') AS cash,\n" + 
        			"    (SELECT \n" + 
        			"            SUM(total)\n" + 
        			"        FROM\n" + 
        			"            finalproject.orderdetails\n" + 
        			"                INNER JOIN\n" + 
        			"            finalproject.customer USING (customerid)\n" + 
        			"        WHERE\n" + 
        			"            payment_type = 'CREDIT') AS credit,\n" + 
        			"    (SELECT \n" + 
        			"            SUM(total)\n" + 
        			"        FROM\n" + 
        			"            finalproject.orderdetails\n" + 
        			"                INNER JOIN\n" + 
        			"            finalproject.customer USING (customerid)) AS total\n" + 
        			""
        			);
        	while (rs.next()) {

        	    // create a new Actor object
        	    ReportTotals newTotals = new ReportTotals();

        	    // get the values from each column of the current row and add them to the new Actor
        	    newTotals.setCash(rs.getString("cash"));
        	    newTotals.setCredit(rs.getString("credit"));
        	    newTotals.setTotal(rs.getString("total"));


        	    // add the new actor to the actors list
        	    totals.add(newTotals);
        	}
        } catch (SQLException e) {
        	e.printStackTrace();
        }
//        model.addAttribute("orderDetails", orderDetails);
        return totals;
    }
}