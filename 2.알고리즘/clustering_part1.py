# -*- coding: utf-8 -*-

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import folium
from shapely.geometry import Point as point
import seaborn as sns
import random as rd
#df = pd.read_excel("20230323 택배 주소 좌표 데이터.xlsx") #xlsx파일 업로드, 주로열 있는 데이터
df = pd.read_excel("../1.데이터/20220510 송장 좌표 데이터.xlsx")


X = df.iloc[:,[2]].values #X좌표
Y = df.iloc[:,[1]].values #Y좌표
Z = np.hstack([X,Y]) #X,Y좌표
A = df.iloc[:,[4]].values #주소, 주소열 없는 df를 쓸 때는 주석처리

import sklearn
from sklearn.cluster import KMeans

#K-means 결과
K = 50 #K-means는 클러스터 개수를 지정
model = KMeans(n_clusters = K)
model.fit(Z)
CL_list = []
plt.figure(figsize=(5,5))
for k in range(K): #클러스터 리스트 생성
    Ck = []
    Ck = np.append(Z[model.labels_ ==k,0], Z[model.labels_==k,1])
    CL_list.append(Ck)
cnt,sum,cnt2,sum2=0,0,0,0 #X,Y 중심점을 구하기 위한 변수
CL=np.empty((0,4),float) #4col float array
KmeansItem=np.empty((0,3),float) #3col float array
for a in range(K): 
  for j in Z[model.labels_==a,0]:
    sum+=j #전체 K클러스터에 해당하는 X좌표를 더함
    cnt+=1 #중심점을 구하기 위해 나누는 목적 n
  for b in Z[model.labels_==a,1]:
    sum2+=b #전체 K클러스터에 해당하는 Y좌표를 더함
    cnt2+=1 #중심점을 구하기 위해 나누는 목적 n
  CL=np.append(CL,np.array([[(sum/cnt),(sum2/cnt2),cnt2,CL_list[a]]],dtype=object),axis=0) #[1.클러스터 X중심,  2.클러스터 Y중심,  3.개수,  4.클러스터에 해당 좌표 리스트]
  
  cnt,sum,cnt2,sum2=0,0,0,0 #K번 반복을 위해 초기화 
for i in range(len(X)):
  KmeansItem=np.append(KmeansItem,np.array([[X[i],Y[i],model.labels_[i]]],dtype=object),axis=0)
KmeansItem=np.c_[KmeansItem,A]

import csv
df2 = pd.DataFrame(CL)
df3 = pd.DataFrame(KmeansItem)
df2.to_csv('../1.데이터/K-means.csv') #엑셀로 출력
df3.to_csv('../1.데이터/K-means-Item.csv',encoding='cp949')

#GMM 결과
from sklearn.mixture import GaussianMixture as GMM
gmm = GMM(n_components=55, init_params="k-means++",max_iter=1,n_init=10,covariance_type='tied',reg_covar=1e-15).fit(Z) #데이터 군집 수
labels = gmm.predict(Z) #라벨

labels_2=list(set(labels))
labels=list(labels) 
labels_num=set(labels) #set()으로 중복되는 클러스터링 숫자를 합해줌
labels_num=list(labels_num)

CL_list=[] #클러스터 리스트 생성
labels_cnt=[] #클러스터 개수 리스트 생성
for i in labels_num: #클러스터 각각 라벨링 번호로 for문
  tmp=[]
  cnt=0
  cnt1=0
  for j in range(len(labels)):#전체 좌표와 비교
    if i==labels[j]: #클러스터 라벨링 번호와 해당하는 순서(cnt1)의 좌표 라벨링이 일치하면
      tmp.append(X[cnt1][0]) #X좌표 넣기
    cnt1+=1
  cnt2=0
  for k in range(len(labels)): #전체 좌표와 비교
    if i==labels[k]: #클러스터 라벨링 번호와 해당하는 순서(cnt2)의 좌표 라벨링이 일치하면
      tmp.append(Y[cnt2][0]) #Y좌표 넣기
      cnt+=1
    cnt2+=1
  CL_list.append(tmp) #클러스터에 해당하는 전체 좌표
  labels_cnt.append(cnt) #클러스터 개수

CL_Center_X=[] #클러스터 X중심좌표 구하기
for i in range(len(CL_list)): 
  sum=0
  for j in CL_list[i]: 
    if(j<100):continue #임시로 X,Y좌표 구분을 위해 X좌표는 127정도로 추후 수정
    sum+=j
  CL_Center_X.append(sum/((len(CL_list[i])//2))) #전체 X좌표합 나누기 리스트길이 나누기2 이유는 길이가 X,Y 전부다여서 반으로 나눠줘야함

CL_Center_Y=[] #클러스터 Y중심좌표 구하기
for i in range(len(CL_list)):
  sum=0
  for j in CL_list[i]:
    if(j>100):continue #임시로 X,Y좌표 구분을 위해 Y좌표는 37정도로 추후 수정
    sum+=j
  CL_Center_Y.append(sum/((len(CL_list[i])//2)))#전체 Y좌표합 나누기 리스트길이 나누기2 이유는 길이가 X,Y 전부다여서 반으로 나눠줘야함

CL=np.empty((0,4),float)
GMMItem=np.empty((0,3),float) #3col float array
for i in range(len(labels_num)): 
  CL=np.append(CL,np.array([[CL_Center_X[i],CL_Center_Y[i],labels_cnt[i],np.array(CL_list[i],dtype=object)]],dtype=object),axis=0) #[1.클러스터 X중심,  2.클러스터 Y중심,  3.개수,  4.클러스터에 해당 좌표 리스트]

for i in range(len(X)):
  for j in range(len(labels_2)):
    if(labels[i]==labels_2[j]):
      labels[i]=j

for i in range(len(X)):
  GMMItem=np.append(GMMItem,np.array([[X[i],Y[i],labels[i]]],dtype=object),axis=0)
GMMItem=np.c_[GMMItem,A]

df2 = pd.DataFrame(CL)
df3 = pd.DataFrame(GMMItem)
df2.to_csv('../1.데이터/GMM.csv') #엑셀로 출력
df3.to_csv('../1.데이터/GMM-Item.csv',encoding='cp949')

#DBSCAN 결과
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
import warnings
warnings.filterwarnings("ignore")

scaler = StandardScaler()
Z_scaled = scaler.fit_transform(Z)

plt.figure(figsize=(20,20))
dbscan = DBSCAN(eps=0.14, min_samples=2) #최대 탐색 거리와 최소 샘플 개수
labels = dbscan.fit_predict(Z_scaled)
# 클러스터 할당을 표시합니다

labels=list(labels) #리스트로 변환
labels_num=set(labels) #중복값 제거
labels_num=list(labels_num) #중복값 제거 set을 리스트로

CL_list=[] #클러스터링 리스트
labels_cnt=[] #클러스터링 개수
for i in labels_num: #클러스터 각각 라벨링 번호로 for문
  tmp=[]
  cnt=0
  cnt1=0
  for j in range(len(labels)): #전체 좌표와 비교
    if labels[j]==i: #클러스터 라벨링 번호와 해당하는 순서(cnt1)의 좌표 라벨링이 일치하면
      tmp.append(X[cnt1][0]) #X좌표 넣기
    cnt1+=1
  cnt2=0
  for k in range(len(labels)): #전체 좌표와 비교
    if labels[k]==i: #클러스터 라벨링 번호와 해당하는 순서(cnt2)의 좌표 라벨링이 일치하면
      tmp.append(Y[cnt2][0]) #Y좌표 넣기
      cnt+=1
    cnt2+=1
  CL_list.append(tmp) #클러스터에 해당하는 전체 좌표
  labels_cnt.append(cnt) #클러스터 개수
 
CL_Center_X=[] #클러스터 X중심좌표 구하기
for i in range(len(CL_list)):
  sum=0
  for j in CL_list[i]:
    if(j<100):continue #임시로 X,Y좌표 구분을 위해 X좌표는 127정도로 추후 수정
    sum+=j
  CL_Center_X.append(sum/((len(CL_list[i])//2))) #전체 X좌표합 나누기 리스트길이 나누기2 이유는 길이가 X,Y 전부다여서 반으로 나눠줘야함

CL_Center_Y=[] #클러스터 Y중심좌표 구하기
for i in range(len(CL_list)): 
  sum=0
  for j in CL_list[i]:
    if(j>100):continue #임시로 X,Y좌표 구분을 위해 Y좌표는 37정도로 추후 수정
    sum+=j
  CL_Center_Y.append(sum/((len(CL_list[i])//2))) #전체 Y좌표합 나누기 리스트길이 나누기2 이유는 길이가 X,Y 전부다여서 반으로 나눠줘야함 

CL=np.empty((0,4),float)
DBSCANItem=np.empty((0,3),float) #3col float array
for i in range(len(labels_cnt)-1): #마지막 이상치 클러스터링을 제거하기 위해 1을 빼줌 
  CL=np.append(CL,np.array([[CL_Center_X[i],CL_Center_Y[i],labels_cnt[i],np.array(CL_list[i],dtype=object)]],dtype=object),axis=0) #[1.클러스터 X중심,  2.클러스터 Y중심,  3.개수,  4.클러스터에 해당 좌표 리스트]
for i in range(len(X)):
  DBSCANItem=np.append(DBSCANItem,np.array([[X[i],Y[i],labels[i]]],dtype=object),axis=0)
DBSCANItem=np.c_[DBSCANItem,A]
for i in range(len(labels)):
  if labels[i]==-1: #-1 이상치
    CL=np.append(CL,np.array([[X[i][0],Y[i][0],1,-1]],dtype=object),axis=0) #DBSCAN에서 이상치 -1 라벨링을 후에 처리하기 위해 [1. 이상치 X, 2.이상치 Y, 3. 1개, 4. -1(이상치표시)]로 작성

df2 = pd.DataFrame(CL)
df3 = pd.DataFrame(DBSCANItem)
df2.to_csv('../1.데이터/DBSCAN.csv') #엑셀로 출력
df3.to_csv('../1.데이터/DBSCAN-Item.csv',encoding='cp949')