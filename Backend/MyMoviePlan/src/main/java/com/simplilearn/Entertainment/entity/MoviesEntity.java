package com.simplilearn.Entertainment.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "movies")
public class MoviesEntity {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long movieid;

	private String moviename;
	private String moviedescription;
	private String category;
	private int ticketprice;
	private int duration;
	
	public MoviesEntity() {
		super();
	}
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "Movie_imagess" , 
	joinColumns = {
			@JoinColumn(name = "movie_id")
	},
	inverseJoinColumns = {
			@JoinColumn(name = "image_id")
	}
			)
	private Set<MovieImages> movieImages;
	
	

	public Long getMovieid() {
		return movieid;
	}

	public void setMovieid(Long movieid) {
		this.movieid = movieid;
	}

	public Set<MovieImages> getMovieImages() {
		return movieImages;
	}

	public void setMovieImages(Set<MovieImages> movieImages) {
		this.movieImages = movieImages;
	}

	public String getMoviename() {
		return moviename;
	}

	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}

	public String getMoviedescription() {
		return moviedescription;
	}

	public void setMoviedescription(String moviedescription) {
		this.moviedescription = moviedescription;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getTicketprice() {
		return ticketprice;
	}

	public void setTicketprice(int ticketprice) {
		this.ticketprice = ticketprice;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public MoviesEntity(Long movieid, String moviename, String moviedescription, String category, int ticketprice,
			int duration) {
		super();
		this.movieid = movieid;
		this.moviename = moviename;
		this.moviedescription = moviedescription;
		this.category = category;
		this.ticketprice = ticketprice;
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "MoviesEntity [movieid=" + movieid + ", moviename=" + moviename + ", moviedescription=" + moviedescription
				+ ", category=" + category + ", ticketprice=" + ticketprice + ", duration=" + duration + "]";
	}
	
	
	
	

}
