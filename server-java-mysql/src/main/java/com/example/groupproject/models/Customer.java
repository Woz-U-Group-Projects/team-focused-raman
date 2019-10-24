package com.example.groupproject.models;

// import javax.persistence.Column;
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
  private String phone;
  private String email;
  
  private String address1;
  private String address2;
  private String city;
  private String state1;
  private String zip;
  private String country;
  
  private double mtrate;
  private double mtfrate;
  private double mtbrate;
  private String paymentType;
  private String basis;
  private String day;
  
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
public String getAddress1() {
	return address1;
}
public void setAddress1(String address1) {
	this.address1 = address1;
}
public String getAddress2() {
	return address2;
}
public void setAddress2(String address2) {
	this.address2 = address2;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState1() {
	return state1;
}
public void setState1(String state1) {
	this.state1 = state1;
}
public String getZip() {
	return zip;
}
public void setZip(String zip) {
	this.zip = zip;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}
public double getMtrate() {
	return mtrate;
}
public void setMtrate(double mtrate) {
	this.mtrate = mtrate;
}

//@Column(columnDefinition = "double default 0.00")
public double getMtfrate() {
	return mtfrate;
}
public void setMtfrate(double mtfrate) {
	this.mtfrate = mtfrate;
}
public double getMtbrate() {
	return mtbrate;
}
public void setMtbrate(double mtbrate) {
	this.mtbrate = mtbrate;
}
public String getPaymentType() {
	return paymentType;
}
public void setPaymentType(String paymentType) {
	this.paymentType = paymentType;
}
public String getBasis() {
	return basis;
}
public void setBasis(String basis) {
	this.basis = basis;
}
public String getDay() {
	return day;
}
public void setDay(String day) {
	this.day = day;
}

public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
  
//  @Column(columnDefinition = "boolean default false")
//  private boolean complete;
  
}