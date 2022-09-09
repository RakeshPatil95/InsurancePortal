package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Agent;
import com.app.entities.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
 Optional<Customer>findByEmailAndPassword(String email,String password);
 Optional<Customer>findByEmailAndSecurityQuestionAndSecurityAnswer(String email,String securityQuestion,String securityAnswer);
 List<Customer>findByAgent(Agent agent);
}
