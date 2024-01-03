package com.simplilearn.Entertainment.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="movieImages")
public class MovieImages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="imagename")
	private String name;
	
	@Column(name="imagetype")
	private String type;
	
	@Column(length = 50000000)
	private byte[] picByte;
	
	public MovieImages() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	public MovieImages( String name, String type, byte[] picByte) {
		super();
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}

	@Override
	public String toString() {
		return "MovieImages [id=" + id + ", name=" + name + ", type=" + type + ", picByte=" + Arrays.toString(picByte)
				+ "]";
	}


	
	
}
