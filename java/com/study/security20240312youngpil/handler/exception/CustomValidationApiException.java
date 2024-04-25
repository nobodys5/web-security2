package com.study.security20240312youngpil.handler.exception;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

@Getter
public class CustomValidationApiException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private Map<String, String> errorMap;
	
	public CustomValidationApiException() {
		this("error", new HashMap<String, String>());
	}
	public CustomValidationApiException(String message) {
		this(message, new HashMap<String, String>());
	}
	public CustomValidationApiException(String message, Map<String, String> erroMap) {
		super(message);
		this.errorMap = erroMap;
	}
}
