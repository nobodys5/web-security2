package com.study.security20240312youngpil.web.controller.api;

import java.util.HashMap;

import java.util.Map;

import javax.validation.Valid;
import javax.validation.ValidationException;


import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.security20240312youngpil.domain.user.User;
import com.study.security20240312youngpil.handler.aop.annotation.Log;
import com.study.security20240312youngpil.handler.aop.annotation.Timer;
import com.study.security20240312youngpil.handler.aop.annotation.ValidCheck;
import com.study.security20240312youngpil.handler.exception.CustomValidationApiException;
import com.study.security20240312youngpil.service.auth.AuthService;
import com.study.security20240312youngpil.service.auth.PrincipalDetails;
import com.study.security20240312youngpil.service.auth.PrincipalDetailsService;
import com.study.security20240312youngpil.web.dto.CMRespDto;
import com.study.security20240312youngpil.web.dto.SignupReqDto;
import com.study.security20240312youngpil.web.dto.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

	private final PrincipalDetailsService principalDetailsService;
	private final AuthService authService;
	
	@ValidCheck
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult ) {
		
//		if(bindingResult.hasErrors()) {
//			Map<String, String> errorMessage = new HashMap<String, String>();
//			bindingResult.getFieldErrors().forEach(error -> {
//				System.out.println("오류발생 필드명:" + error.getField());
//				System.out.println("오류발생 상태메세지:" + error.getDefaultMessage());
//				errorMessage.put(error.getField(), error.getDefaultMessage());
//			});
//			//return ResponseEntity.ok().body(new CMRespDto<>(-1,"유효성 검사 실패",errorMessage));
//			throw new CustomValidationApiException("유효성 검사 실패",errorMessage);
//		}
		
		boolean status = false;
		try {
			status = principalDetailsService.addUser(signupReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"회원가입 실패",status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1,"회원가입 성공",status));
	}
	@Log
	@Timer
	@ValidCheck
	@GetMapping("/signup/validation/username")//@valid 유효성검사해주는 어노테이션,bindingresult는 에러
	public ResponseEntity<?> checkUsername(@Valid UsernameCheckReqDto usernameCheckReqDto, BindingResult bindingResult) {
		Map<String, String> errorMessage = new HashMap<String, String>();
		
//		if(bindingResult.hasErrors()) {
//			bindingResult.getFieldErrors().forEach(error -> {
//				System.out.println("오류발생 필드명:" + error.getField());
//				System.out.println("오류발생 상태메세지:" + error.getDefaultMessage());
//				errorMessage.put(error.getField(), error.getDefaultMessage());
//			});
//			//return ResponseEntity.ok().body(new CMRespDto<>(-1,"유효성 검사 실패",errorMessage));
//			throw new CustomValidationApiException("유효성 검사 실패",errorMessage);
//		}
		//return ResponseEntity.ok().body(new CMRespDto<>(1,"유효성 검사 성공",true));
		boolean status = false;
		
		try {
			status = authService.checkUsername(usernameCheckReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"서버 오류",status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"회원 가입 여부",status));
	}
	
	@GetMapping("/principal")
	public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		if(principalDetails == null) {
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", principalDetails.getUser()));
	}
}
