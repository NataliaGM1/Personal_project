package dev.natalia.NatureInSight.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "plants")

public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name="id_plant")
    private Long id;
    private String name;
    
    public Plant(Long id, String name, String latinName) {
        this.id = id;
        this.name = name;
        this.latinName = latinName;
    }
    private String latinName;
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
    public String getLatinName() {
        return latinName;
    }
    public void setLatinName(String latinName) {
        this.latinName = latinName;
    }

}
