package com.simplilearn.Entertainment.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "bookedshow")
public class bookedshows {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userid;
	
	private String useremailid;
	public String getUseremailid() {
		return useremailid;
	}


	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}


	private String moviename;

	
	public bookedshows() {
		super();
	}


	public String getMoviename() {
		return moviename;
	}


	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}


	public bookedshows(long userid, String useremailid, String moviename) {
		super();
		this.userid = userid;
		this.useremailid = useremailid;
		this.moviename = moviename;
	}


	@Override
	public String toString() {
		return "bookedshows [userid=" + userid + ", useremailid=" + useremailid + ", moviename=" + moviename + "]";
	}


	


	
	
	
	
	
	
}
