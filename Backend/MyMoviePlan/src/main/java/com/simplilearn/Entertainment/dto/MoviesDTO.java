package com.simplilearn.Entertainment.dto;

public class MoviesDTO {

	private Long movieid;
	private String moviename;
	private String moviedescription;
	private String category;
	private int ticketprice;
	private int duration;
	
	public MoviesDTO() {
		super();
	}

	public String getMoviename() {
		return moviename;
	}

	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}

	public Long getMovieid() {
		return movieid;
	}

	public void setMovieid(Long movieid) {
		this.movieid = movieid;
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

	public MoviesDTO( String moviename, String moviedescription, String category, int ticketprice,
			int duration) {
		super();
		this.moviename = moviename;
		this.moviedescription = moviedescription;
		this.category = category;
		this.ticketprice = ticketprice;
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "MoviesDTO [movieid=" + movieid + ", moviename=" + moviename + ", moviedescription=" + moviedescription
				+ ", category=" + category + ", ticketprice=" + ticketprice + ", duration=" + duration + "]";
	}
	
	
	
}
