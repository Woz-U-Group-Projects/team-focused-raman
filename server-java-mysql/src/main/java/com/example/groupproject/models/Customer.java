package com.example.groupproject.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long customerid;
  private String firstName;
  private String lastName;
//  private double mtrate;
//  private double mtfrate;
//  private double mtbrate;
//  private String paymentType;
//  private String basis;
//  private String day;
//  
public Long getCustomerid() {
	return customerid;
}
public void setCustomerid(Long customerid) {
	this.customerid = customerid;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
//public double getMtrate() {
//	return mtrate;
//}
//public void setMtrate(double mtrate) {
//	this.mtrate = mtrate;
//}
//public double getMtfrate() {
//	return mtfrate;
//}
//public void setMtfrate(double mtfrate) {
//	this.mtfrate = mtfrate;
//}
//public double getMtbrate() {
//	return mtbrate;
//}
//public void setMtbrate(double mtbrate) {
//	this.mtbrate = mtbrate;
//}
//public String getPaymentType() {
//	return paymentType;
//}
//public void setPaymentType(String paymentType) {
//	this.paymentType = paymentType;
//}
//public String getBasis() {
//	return basis;
//}
//public void setBasis(String basis) {
//	this.basis = basis;
//}
//public String getDay() {
//	return day;
//}
//public void setDay(String day) {
//	this.day = day;
//}
  
//  @Column(columnDefinition = "boolean default false")
//  private boolean complete;
  
}