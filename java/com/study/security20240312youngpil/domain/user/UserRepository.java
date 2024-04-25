package com.study.security20240312youngpil.domain.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	//회원가입용 메소드
	public int save(User user) throws Exception;     //로그인용메소드
	public User findUserByUsername(String username) throws Exception;

	public User findOAuth2UserByUsername(String oauth2_id) throws Exception;
}
