package dev.natalia.NatureInSight.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "${api-endpoint}")
public class HomeController {
    
    @GetMapping(path = "/")
    public String index() {
        return "This application works";
    }

}
    



