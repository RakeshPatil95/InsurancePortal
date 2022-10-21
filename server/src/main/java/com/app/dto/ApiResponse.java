package com.app.dto;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Service
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse {
public ApiResponse(String message2, HttpStatus conflict) {
        // TODO Auto-generated constructor stub
    }
private String message;
private HttpStatus status;
}
