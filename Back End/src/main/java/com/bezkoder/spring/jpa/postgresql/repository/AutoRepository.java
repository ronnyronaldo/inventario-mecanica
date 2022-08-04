package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;

import com.bezkoder.spring.jpa.postgresql.model.Auto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutoRepository extends JpaRepository<Auto, Long> {
  List<Auto> findByNombre(String nombre);

  List<Auto> findByPlacaContaining(String placa);
}
