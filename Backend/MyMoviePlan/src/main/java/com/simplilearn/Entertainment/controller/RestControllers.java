package com.simplilearn.Entertainment.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.Entertainment.dto.MoviesDTO;
import com.simplilearn.Entertainment.entity.MovieImages;
import com.simplilearn.Entertainment.entity.MoviesEntity;
import com.simplilearn.Entertainment.entity.UserEntity;
import com.simplilearn.Entertainment.entity.bookedshows;
import com.simplilearn.Entertainment.repositories.MoviesRepository;
import com.simplilearn.Entertainment.repositories.UserRepo;
import com.simplilearn.Entertainment.repositories.bookshow;
import com.simplilearn.Entertainment.services.MoviesService;

import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/simplilearn/movies")
public class RestControllers {
	
	@Autowired(required = true)
	UserRepo userrepo;
	
	@Autowired(required= true)
	bookshow bookshowrepo;
	
	@Autowired
	MoviesService movieserv;
	
	@Autowired(required = true)
	MoviesRepository movierepo;
	
	MoviesDTO moviedto;
	
@PostMapping("/register")
public UserEntity registration(@RequestBody UserEntity userentity) {
	return userrepo.save(userentity);
}


	@GetMapping("/login/{useremailid}")
	public ResponseEntity<UserEntity> login(@PathVariable String useremailid) {
	UserEntity user = userrepo.findByuseremailid(useremailid);
			return ResponseEntity.ok(user);
	}
	
	

	
	
	//Admin
	       
	       //add movies
	@PostMapping(value= {"/addmovies"}, consumes= {MediaType.MULTIPART_FORM_DATA_VALUE })
	public MoviesEntity addnewmed(@RequestPart ("movies") MoviesEntity moviesntity,
			@RequestPart("imageFile")MultipartFile[] file) {	
		try {
			Set<MovieImages> images = uploadImages(file);
			
			moviesntity.setMovieImages(images);
			return movieserv.addnewmovie(moviesntity);
			
		}catch (Exception e){
			System.out.println(e.getMessage());
			return null;
		}	
	}
	
	private Set<MovieImages> uploadImages(MultipartFile[] multipartfile)throws IOException{
		
		Set<MovieImages> movieimage = new HashSet<>();
		
		for(MultipartFile file: multipartfile) {
			MovieImages imagemodel = new MovieImages(
					 file.getOriginalFilename(),
						file.getContentType(),
						file.getBytes()
					);
			movieimage.add(imagemodel);
		}
		return movieimage;		
	}
	
	//get all movies
	
	@GetMapping("/getallmovies")
	public List<MoviesEntity> getAllMovies(){	
		return (List<MoviesEntity>) movierepo.findAll();
		}
	
	
	//getby id
	@GetMapping("/update/{movieid}")
	public Optional<MoviesEntity> getmovie(@PathVariable Long movieid){
		return movierepo.findById(movieid);
		
	}
	
	
	
	//update movie
	@PostMapping("/updatemovie/{id}")
	public ResponseEntity<MoviesEntity> updatemovie(@PathVariable Long id,
			@RequestBody MoviesEntity movieentity){
		
		MoviesEntity movie = movierepo.findById(id).orElseThrow();
		
		movie.setMoviename(moviedto.getMoviename());
		movie.setCategory(moviedto.getCategory());
		movie.setDuration(moviedto.getDuration());
		movie.setMoviedescription(moviedto.getMoviedescription());
		movie.setTicketprice(moviedto.getTicketprice());
		
		MoviesEntity updatemovie = movierepo.save(movie);
		
		return ResponseEntity.ok(updatemovie);
	}
	
	
	//Booked Movies
	@PostMapping("/bookmovies")
	public bookedshows bookmovies(@RequestBody bookedshows bookshowentity) {
		return bookshowrepo.save(bookshowentity);
	}
	
	
	//get booked movies
	@GetMapping("/getbookedmovies/{useremailid}")
	public ResponseEntity<bookedshows> getbookmovies(@PathVariable String useremailid){
		bookedshows bookmov = bookshowrepo.findByuseremailid(useremailid);
		return ResponseEntity.ok(bookmov);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
