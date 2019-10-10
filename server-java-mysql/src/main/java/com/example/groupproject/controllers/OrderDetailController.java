package com.example.groupproject.controllers;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//import com.example.groupproject.models.Customer;
//import com.example.groupproject.models.Order;
import com.example.groupproject.models.OrderDetail;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

@Controller
@RequestMapping({ "/orderdetail" })
public class OrderDetailController {
    @GetMapping()
    public @ResponseBody List<OrderDetail> getOrderDetails() {
        List<OrderDetail> orderDetails = new ArrayList<OrderDetail>();
        // Code to query the database and
        // add actors to the List will go here
        Connection con;
        try {
        	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/finalproject", "root", "Password1!");
        	Statement stmt = con.createStatement();
        	ResultSet rs = stmt.executeQuery("SELECT \n" + 
        			"orders.orderid, \n" + 
        			"orders.customerid, \n" + 
        			"CONCAT(customer.first_name, \" \", customer.last_name) as customerName, \n" + 
        			"orders.service_date, \n" + 
        			"orders.service, \n" + 
        			"orders.cu, \n" + 
        			"orders.pw, \n" + 
        			"orders.r, \n" + 
        			"orders.lr, \n" + 
        			"orders.misc, \n" + 
        			"\n" + 
        			"(SELECT   \n" + 
        			"	CASE\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MT'\n" + 
        			"        THEN\n" + 
        			"          customer.mtrate\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MTF'\n" + 
        			"        THEN\n" + 
        			"          customer.mtfrate\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MTB'\n" + 
        			"        THEN\n" + 
        			"          customer.mtbrate\n" + 
        			"    ELSE\n" + 
        			"      'Earth'\n" + 
        			"  END) AS mow_total,\n" + 
        			"\n" + 
        			"(SELECT (orders.cu + orders.pw + orders.r + orders.lr + orders.misc) * 0.80) AS extras_total, \n" + 
        			"\n" + 
        			"(SELECT   \n" + 
        			"	CASE\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MT'\n" + 
        			"        THEN\n" + 
        			"          customer.mtrate\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MTF'\n" + 
        			"        THEN\n" + 
        			"          customer.mtfrate\n" + 
        			"    WHEN\n" + 
        			"      orders.service= 'MTB'\n" + 
        			"        THEN\n" + 
        			"          customer.mtbrate\n" + 
        			"    ELSE\n" + 
        			"      'Earth'\n" + 
        			"  END) + (SELECT (orders.cu + orders.pw + orders.r + orders.lr + orders.misc) * 0.80) as total,\n" + 
        			"\n" + 
        			"orders.notes\n" + 
        			"\n" + 
        			"FROM finalproject.orders\n" + 
        			"\n" + 
        			"INNER JOIN finalproject.customer\n" + 
        			"USING(customerid);"
        			);
        	while (rs.next()) {

        	    // create a new Actor object
        	    OrderDetail newOrderDetail = new OrderDetail();

        	    // get the values from each column of the current row and add them to the new Actor
        	    newOrderDetail.setOrderid(rs.getLong("orderid"));
        	    newOrderDetail.setCustomerid(rs.getString("customerid"));
        	    newOrderDetail.setCustomerName(rs.getString("customerName"));
        	    newOrderDetail.setService_date(rs.getString("service_date"));
        	    newOrderDetail.setService(rs.getString("service"));
        	    newOrderDetail.setCu(rs.getString("cu"));
        	    newOrderDetail.setPw(rs.getString("pw"));
        	    newOrderDetail.setR(rs.getString("r"));
        	    newOrderDetail.setLr(rs.getString("lr"));
        	    newOrderDetail.setMisc(rs.getString("misc"));
        	    newOrderDetail.setMow_total(rs.getString("mow_total"));
        	    newOrderDetail.setExtras_total(rs.getString("extras_total"));
        	    newOrderDetail.setTotal(rs.getString("total"));
        	    newOrderDetail.setNotes(rs.getString("notes"));

        	    // add the new actor to the actors list
        		orderDetails.add(newOrderDetail);
        	}
        } catch (SQLException e) {
        	e.printStackTrace();
        }
//        model.addAttribute("orderDetails", orderDetails);
        return orderDetails;
    }
}