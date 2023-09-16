package dev.natalia.NatureInSight.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import dev.natalia.NatureInSight.models.Plant;
import dev.natalia.NatureInSight.repositories.PlantRepository;



@Service
public class PlantService {

    PlantRepository repository;

    public PlantService(PlantRepository repository) {
        this.repository = repository;
    }

    public List<Plant> getAll() {
        List<Plant> plants = repository.findAll();
        return plants;
    }

    public Plant findById(Long id) {
        Plant plant = repository.findById(id).orElseThrow();
        return plant;
    }

    public Plant save(Plant plant) {

        if (plant.getName() == "") {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "name empty");
        }

        Plant plantSaved = repository.save(plant);
        return plantSaved;
    }

    public Map<String, String> delete(Long id) {
        Plant plant = repository.findById(id).orElseThrow();
        repository.deleteById(plant.getId());

        Map<String,String> msg = new HashMap<>();
        msg.put("message", "Plant " + plant.getName() + " successfully deleted!");

        return msg;

    }

}