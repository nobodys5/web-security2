package com.study.security20240312youngpil.service.auth;

import java.util.Collection;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.study.security20240312youngpil.domain.user.User;
import com.study.security20240312youngpil.domain.user.UserRepository;
import com.study.security20240312youngpil.web.dto.SignupReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

	private final UserRepository userRepository;
	
	
	@Override								//signin.html에 username과 동일해야함
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = null;
		try {
			 userEntity = userRepository.findUserByUsername(username);
	} catch (Exception e) {
		e.printStackTrace();
		throw new UsernameNotFoundException(username);
	}
		if(userEntity == null) {
			throw new UsernameNotFoundException(username + "사용자 이름을 사용할 수 없습니다.");
		}
		
		
//		if(!username.equals("test")) {
//			System.out.println("test");
//			throw new UsernameNotFoundException(username + "사용자 이름은 사용할 수 없습니다."); 
//		}
		//익명클래스로 생성이됨 한번쓰고 버리는용도??
//		UserDetails userDetails = new UserDetails() {
//			
//			@Override
//			public boolean isEnabled() {
//				return true;
//			}
//			
//			@Override
//			public boolean isCredentialsNonExpired() {
//				return true;
//			}
//			
//			@Override
//			public boolean isAccountNonLocked() {
//				return true;
//			}
//			
//			@Override
//			public boolean isAccountNonExpired() {
//				return true;
//			}
//			
//			@Override
//			public String getUsername() {//기존에있는test를 확인하는용도
//				return "test";
//			}
//			
//			@Override
//			public String getPassword() {//복호화해주는과정의메소드
//				return new BCryptPasswordEncoder().encode("1234");
//			}
//			
//			@Override
//			public Collection<? extends GrantedAuthority> getAuthorities() {
//				return null;
//			}
//		};
//		
//		return userDetails;
		return new PrincipalDetails(userEntity);
	}
//	public boolean addUser() {
//		User user = User.builder()
//					.user_name("홍길동")
//					.user_email("honghong@gmail.com")
//					.user_id("abcd")
//					.user_password(new BCryptPasswordEncoder().encode("1234"))
//					.user_roles("ROLE_USER, ROLE_MANAGER")
//					.build();
//		try {
//			userRepository.save(user);
//		} catch (Exception e) {
//			return false;
//		}
//		return true;
//	}				
	
	public boolean addUser(SignupReqDto signupReqDto) throws Exception {
		return userRepository.save(signupReqDto.toEntity()) > 0;
	}
}
