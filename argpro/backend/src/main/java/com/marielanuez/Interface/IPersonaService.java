package com.marielanuez.Interface;

import com.marielanuez.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //elimnar un usuario pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //buscar una persona por ID
    public Persona findPersona(Long id);
}
