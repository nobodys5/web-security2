package com.study.security20240312youngpil.web.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.study.security20240312youngpil.service.auth.PrincipalDetails;

@Controller	//화면띄워주는컨트롤러
public class PageController {

	@GetMapping({"/","/index"})
	public String loadIndex(Model model,@AuthenticationPrincipal PrincipalDetails principalDetails) {
		model.addAttribute("principal",principalDetails);
		return "index";
	}
	@GetMapping("/auth/signin")
	public String loadSignin() {
		return "auth/signin";
	}
	@GetMapping("/auth/signup")
	public String loadSignup() {
		return "auth/signup";
	}
	@GetMapping("/mypage")
	public String loadMypage() {
		return "mypage";
	}
}
