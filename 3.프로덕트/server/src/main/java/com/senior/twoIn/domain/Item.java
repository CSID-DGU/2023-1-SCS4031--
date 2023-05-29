package com.senior.twoIn.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "ITEM")
public class Item extends BaseTime{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ITEM_ID")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column
    private boolean deliveryStatus;

    @Column
    private String index_x;

    @Column
    private String index_y;

    @ManyToOne
    @JoinColumn(name = "CLUSTER_ID")
    private Cluster cluster_id;

}
