//----------------------------------------------------------------------------------------------
//Author: Ryan Woodward
//Date: 10/9/2019
//Team-Focused-Raman Group Project
// Description: THe back of a simple CRM that will allow the use to create, view, delete,
//or alter new customers and orders for a lawn care business.
//----------------------------------------------------------------------------------------------

package com.example.groupproject.services;

import com.example.groupproject.entities.Appointment;
import com.example.groupproject.models.CustomerRepo;
import com.example.groupproject.models.AppointmentCreation;
//importcom.example.groupproject.models.AppointmentUpdate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@Service
public interface AppointmentService extends CustomerRepo{


}
