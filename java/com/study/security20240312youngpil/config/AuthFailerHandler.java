package com.study.security20240312youngpil.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

public class AuthFailerHandler implements AuthenticationFailureHandler {

	@Override								//http 요청을받으면 응답을하겠다,매개변수는 예외처리를 받고있다.
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		System.out.println("hihi");
		System.out.println(exception.getMessage());
		response.setContentType("utf-8");
		response.setContentType("text/html; charset=utf-8");
		response.getWriter().print("<html><head></head><body><script>alert(\"잘못된입력입니다.\");history.back()</script></body></html>");
	}

}
