package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import com.app.entities.Agent;

public interface AdminDao extends JpaRepository<Admin, Long> {
Optional<Admin>findByEmailAndPassword(String email,String password);
Optional<Admin>findByEmailAndSecurityQuestionAndSecurityAnswer(String email,String SecurityQuestion,String securityAnswer);
Admin findByEmail(String email);
}
