package com.senior.twoIn.domain;

import javax.persistence.*;

@Entity
public class User extends BaseTime{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long id;


}
