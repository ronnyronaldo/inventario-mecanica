package com.bezkoder.spring.jpa.postgresql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringBootJpaPostgresqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJpaPostgresqlApplication.class, args);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/auto/**")
				 .allowedOrigins("https://davidnaulamecanica2.netlify.app")
				 .allowedMethods("GET", "POST", "PUT", "DELETE")
				 .maxAge(3600);
				 }

				 };
				 }

}
