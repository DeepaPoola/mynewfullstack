package com.Helloworld;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Helloworld.hellobean.Beanhello;

@SpringBootApplication
public class Demo1Application implements CommandLineRunner {
	
	@Autowired
	Beanhello bh;

	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Good Evening");
		bh.sayHello();
	}

}
