package com.simplilearn.Entertainment.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.Entertainment.entity.MoviesEntity;
import com.simplilearn.Entertainment.repositories.MoviesRepository;

@Service
public class MoviesService {
	
	@Autowired
	private MoviesRepository movierepo;
	
	public MoviesEntity addnewmovie(MoviesEntity movieentity) {
		return movierepo.save(movieentity);
	}
	

}
