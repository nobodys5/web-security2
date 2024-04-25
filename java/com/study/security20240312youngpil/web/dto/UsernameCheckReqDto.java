package com.study.security20240312youngpil.web.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data		//중복확인하기위한dto
public class UsernameCheckReqDto {
	//빈값일수없다는 어노테이션
	@NotBlank(message = "빈값일 수 없습니다.")
	@Size(max = 16, min = 4)//크기를 설정하는 어노테이션
	private String username;
	
}
