package com.senior.twoIn.specification;

import lombok.Getter;

@Getter
public enum DelivererTypeEnum {
    MAIN(1),
    SUB(2);

    private int value;

    DelivererTypeEnum(int value){
        this.value = value;
    }

    public static DelivererTypeEnum getTypeByValue(int value){
        for(DelivererTypeEnum delivererTypeEnum: DelivererTypeEnum.values()){
            if(delivererTypeEnum.value == value){
                return delivererTypeEnum;
            }
        }
        throw new IllegalArgumentException("올바르지 않은 타입입니다.  타입 번호:" + value);
    }
}
