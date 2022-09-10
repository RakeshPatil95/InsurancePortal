package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Policy;

public interface PolicyDao extends JpaRepository<Policy, Long> {

}
