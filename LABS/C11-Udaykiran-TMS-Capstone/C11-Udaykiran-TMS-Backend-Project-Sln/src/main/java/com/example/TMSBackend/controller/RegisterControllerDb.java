package com.example.TMSBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TMSBackend.entity.Register;
import com.example.TMSBackend.repository.RegisterRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins  ="http://localhost:4200")
public class RegisterControllerDb {
    @Autowired
    private RegisterRepository registerRepository;

    @GetMapping("/register")
    public List getRegisterList(){

        return registerRepository.findAll();
    }


    @GetMapping("/register/{id}")
    public Register getRegisterById(@PathVariable(value = "id") Integer id){
        Register existingregister = registerRepository.findById(id).get();
        return existingregister;
    }

    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register){

        System.out.println("Create Register!");
        Register savedRegister = registerRepository.save(register);
        return savedRegister;
    }

}

