package com.bezkoder.spring.jpa.postgresql.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "inventario")
public class Auto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "placa")
	private String placa;

	@Column(name = "chasis")
	private String chasis;

	@Column(name = "kilometraje")
	private String kilometraje;

	@Column(name = "fecha_tratado")
	@Temporal(TemporalType.DATE)
	private Date fecha;

	@Column(name = "mano_de_obra")
	private String obra;

	@Column(name = "persona")
	private String nombre;

	public Auto() {

	}

	public Auto(String placa, String chasis, String kilometraje, Date fecha, String obra, String nombre) {
		this.placa = placa;
		this.chasis = chasis;
		this.kilometraje = kilometraje;
		this.fecha = fecha;
		this.obra = obra;
		this.nombre = nombre;
	}

	public long getId() {
		return id;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getChasis() {
		return chasis;
	}

	public void setChasis(String chasis) {
		this.chasis = chasis;
	}

	public String getKilometraje() {
		return kilometraje;
	}

	public void setKilometraje(String kilometraje) {
		this.kilometraje = kilometraje;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getObra() {
		return obra;
	}

	public void setObra(String obra) {
		this.obra = obra;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "Auto{" +
				"id=" + id +
				", placa='" + placa + '\'' +
				", chasis='" + chasis + '\'' +
				", kilometraje='" + kilometraje + '\'' +
				", fecha=" + fecha +
				", obra='" + obra + '\'' +
				", nombre='" + nombre + '\'' +
				'}';
	}
}
