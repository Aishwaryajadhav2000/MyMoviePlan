package com.simplilearn.Entertainment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.Entertainment.entity.bookedshows;

public interface bookshow extends JpaRepository<bookedshows , Long>{
	
	bookedshows findByuseremailid(String useremailid);

}
