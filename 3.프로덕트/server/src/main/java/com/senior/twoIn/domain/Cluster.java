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
    private Double indexY;

    @Column(nullable = false)
    private Double indexX;

    @Column(nullable = false, columnDefinition = "CHAR(1) DEFAULT 'N'")
    @Type(type = "yes_no")
    private boolean isDelivery;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DelivererTypeEnum deliverType;

    @Column(nullable = false)
    private Long deliveryOrder;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "cluster")
    private List<Item> items;


    @Builder
    public Cluster(Double indexX, Double indexY, DelivererTypeEnum deliverType, Long deliveryOrder){
        this.indexX = indexX;
        this.indexY = indexY;
        this.deliverType = deliverType;
        this.deliveryOrder = deliveryOrder;
    }

    public void deliveryDone(boolean isDelivery){
        this.isDelivery = true;
    }

}
