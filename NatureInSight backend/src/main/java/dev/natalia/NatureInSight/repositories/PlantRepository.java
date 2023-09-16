package dev.natalia.NatureInSight.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.natalia.NatureInSight.models.Plant;

public interface PlantRepository extends JpaRepository<Plant,Long>{
    
}
