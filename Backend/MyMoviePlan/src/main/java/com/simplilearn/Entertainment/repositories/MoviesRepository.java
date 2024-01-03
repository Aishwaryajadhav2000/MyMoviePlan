package com.simplilearn.Entertainment.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.Entertainment.entity.MoviesEntity;

@Repository
public interface MoviesRepository extends CrudRepository<MoviesEntity, Long>{

}
