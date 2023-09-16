package dev.natalia.NatureInSight.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.natalia.NatureInSight.models.Plant;
import dev.natalia.NatureInSight.services.PlantService;


@RestController
@RequestMapping(path = "${api-endpoint}")
public class PlantController {

    PlantService service;

    public PlantController(PlantService service) {
        this.service = service;
    }

    @GetMapping(path = "/plants")
    public List<Plant> index() {

        List<Plant> plants = service.getAll();
        return plants;
    }

    @GetMapping(path = "/plants/{id}")
    public Plant show(@PathVariable("id") Long id) {
        Plant plant = service.findById(id);
        return plant;
    }

    @PostMapping(path = "/plants")
    // @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Plant> store(@RequestBody Plant plant) {
        Plant plantSaved = service.save(plant);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(plantSaved);
    }

    @DeleteMapping(path = "/plants/{id}")
    public Map<String, String> destroy(@PathVariable("id") Long id) {
        Map<String, String> msg = service.delete(id);
        return msg;
    }

}
