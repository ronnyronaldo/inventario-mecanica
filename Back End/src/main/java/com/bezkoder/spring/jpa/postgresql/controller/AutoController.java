package com.bezkoder.spring.jpa.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bezkoder.spring.jpa.postgresql.model.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.jpa.postgresql.repository.AutoRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class AutoController {

	@Autowired
	AutoRepository autoRepository;

	@GetMapping("/auto")
	public ResponseEntity<List<Auto>> getAllAutos(@RequestParam(required = false) String placa) {
		try {
			List<Auto> autos = new ArrayList<Auto>();

			if (placa == null)
				autoRepository.findAll().forEach(autos::add);
			else
				autoRepository.findByPlacaContaining(placa).forEach(autos::add);

			if (autos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(autos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/auto/{id}")
	public ResponseEntity<Auto> getAutoById(@PathVariable("id") long id) {
		Optional<Auto> autoData = autoRepository.findById(id);

		if (autoData.isPresent()) {
			return new ResponseEntity<>(autoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/auto")
	public ResponseEntity<Auto> createAuto(@RequestBody Auto auto) {
		try {
			Auto _auto = autoRepository
					.save(new Auto(
							auto.getPlaca(),
							auto.getChasis(),
							auto.getKilometraje(),
							auto.getFecha(),
							auto.getObra(),
							auto.getNombre()
							));
			System.out.println(_auto);
			return new ResponseEntity<>(_auto, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/auto/{id}")
	public ResponseEntity<Auto> updateAuto(@PathVariable("id") long id, @RequestBody Auto auto) {
		Optional<Auto> autoData = autoRepository.findById(id);

		if (autoData.isPresent()) {
			Auto _auto = autoData.get();
			_auto.setChasis(auto.getChasis());
			_auto.setKilometraje(auto.getKilometraje());
			_auto.setFecha(auto.getFecha());
			_auto.setObra(auto.getObra());
			_auto.setNombre(auto.getNombre());
			return new ResponseEntity<>(autoRepository.save(_auto), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/auto/{id}")
	public ResponseEntity<HttpStatus> deleteAuto(@PathVariable("id") long id) {
		try {
			autoRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/auto")
	public ResponseEntity<HttpStatus> deleteAllAutos() {
		try {
			autoRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/auto/published")
	public ResponseEntity<List<Auto>> findByNombre(@RequestParam(required = false) String nombre) {
		try {
			List<Auto> autos = autoRepository.findByNombre(nombre);

			if (autos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(autos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
