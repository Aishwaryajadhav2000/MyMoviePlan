package com.simplilearn.Entertainment.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "users")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userid;
	
	private String firstname;
	private String lastname;
	private String useremailid;
	private String password;
	
	
	public UserEntity() {
		super();
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getUseremailid() {
		return useremailid;
	}


	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public UserEntity(long userid, String firstname, String lastname, String useremailid, String password) {
		super();
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.useremailid = useremailid;
		this.password = password;
	}


	@Override
	public String toString() {
		return "UserEntity [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", useremailid="
				+ useremailid + ", password=" + password + "]";
	}
	
	
	
	
	

}
