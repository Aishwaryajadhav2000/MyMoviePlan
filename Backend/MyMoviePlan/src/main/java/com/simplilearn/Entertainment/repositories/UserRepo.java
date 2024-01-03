package com.simplilearn.Entertainment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.Entertainment.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity , Long>{
	
	UserEntity findByuseremailid(String useremailid);

}
