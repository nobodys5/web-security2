package com.study.security20240312youngpil.service.auth;

import com.study.security20240312youngpil.web.dto.UsernameCheckReqDto;

public interface AuthService {

	public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception;
	public boolean signup() throws Exception;
}
