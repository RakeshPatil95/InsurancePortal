package com.app.dao;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Agent;
import com.app.entities.CustomerPolicy;

public interface CustomerPolicyDao  extends JpaRepository<CustomerPolicy, Long>{
   @Query(value="select * from customer_policy cp where cp.agent_id=?1 and cp.premium_date<=?2",nativeQuery =true)
 List<CustomerPolicy>getAgentsCustomersPremiums(long agent_id,LocalDate d);
  List<CustomerPolicy>findByAgent(Agent agent);
}
