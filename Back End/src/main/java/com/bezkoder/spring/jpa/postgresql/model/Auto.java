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

	@Column(name = "cedula")
	private String cedula;

	@Column(name = "celular")
	private String celular;

	@Column(name = "repuestos")
	private String repuestos;

	public Auto() {

	}

	public Auto(String placa, String chasis, String kilometraje, Date fecha, String obra, String nombre, String cedula, String celular, String repuestos) {
		this.placa = placa;
		this.chasis = chasis;
		this.kilometraje = kilometraje;
		this.fecha = fecha;
		this.obra = obra;
		this.nombre = nombre;
		this.cedula = cedula;
		this.celular = celular;
		this.repuestos = repuestos;
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

	public String getCedula() {
		return cedula;
	}

	public void setCedula(String cedula) {
		this.cedula = cedula;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getRepuestos() {
		return repuestos;
	}

	public void setRepuestos(String repuestos) {
		this.repuestos = repuestos;
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
				", cedula=" + cedula +
				", celular=" + celular +
				", repuestos='" + repuestos + '\'' +
				'}';
	}
}
