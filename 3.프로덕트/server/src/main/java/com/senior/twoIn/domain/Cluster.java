package com.senior.twoIn.domain;

import com.senior.twoIn.specification.DelivererTypeEnum;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
@Table(name= "CLUSTER")
public class Cluster extends BaseTime{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CLUSTER_ID")
    private Long id;

    @Column(nullable = false)
    private Double index_y;

    @Column(nullable = false)
    private Double index_x;

    @Column(nullable = false)
    private int item_num;


    @Column(nullable = false)
    private String average_dist;

    @Column(nullable = false)
    private String total_dist;


    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DelivererTypeEnum deliverType;

    @Column(nullable = false)
    private int deliverOrder;

    @OneToMany(mappedBy =  "cluster_id")
    private List<Item> items;


    @Builder
    public Cluster(Double indexX, Double indexY, int item_num, String average_dist, String total_dist, DelivererTypeEnum deliverType, int deliveryOrder){
        this.index_x = indexX;
        this.index_y = indexY;
        this.item_num = item_num;
        this.average_dist = average_dist;
        this.total_dist = total_dist;
        this.deliverType = deliverType;
        this.deliverOrder = deliveryOrder;
    }

}
