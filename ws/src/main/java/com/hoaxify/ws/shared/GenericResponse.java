package com.hoaxify.ws.shared;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class GenericResponse {
    private String message;

   /* public GenericResponse(String message) {
        this.message = message;
    }*/
}
