package com.study.security20240312youngpil.handler.aop.annotation;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import org.aspectj.lang.annotation.Pointcut;

@Retention(RUNTIME)
@Target({ TYPE, METHOD })
public @interface Log {

}
