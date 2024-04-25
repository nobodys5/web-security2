package com.study.security20240312youngpil.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312youngpil.handler.exception.CustomValidationApiException;
import com.study.security20240312youngpil.web.dto.CMRespDto;

@RestController
@ControllerAdvice
public class RestControllerExceptionHandler {
	
	//exceptionhandler에서 터지면 아래메소드에서 잡는다.
	@ExceptionHandler(CustomValidationApiException.class)
	public ResponseEntity<?> validationApiException(CustomValidationApiException e) {
		return ResponseEntity.ok().body(new CMRespDto<>(-1, e.getMessage() + "hi", e.getErrorMap()));
	}
}
