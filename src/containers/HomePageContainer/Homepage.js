import React, { Component } from "react";

import HeaderSection from "../../components/HeaderSection";
import BannerSection from "../../components/BannerSection";
import WorkSection from "../../components/workSection";
import MeetingSection from "../../components/MeetingSection";
import WhatSection from "../../components/WhatSection";
import HowSection from "../../components/HowSection";
import CountSection from "../../components/CountSection";
import ChatSection from "../../components/ChatSection";
import FeatureSection from "../../components/FeatureSection";
import FooterSection from "../../components/FooterSection";
import ProductListSection from "../../components/ProductListSection";

const data = {
  productList: [
    { 
        id: 'product_1',
        name: '유튜브',
        description: '이마트 여름휴가 이벤트',
        image: './assets/images/products/product_1.png',
    },
    { 
        id: 'product_2',
        name: '유튜브',
        description: '이마트 여름휴가 이벤트',
        image: './assets/images/products/product_2.png',
    },
    { 
        id: 'product_3',
        name: '유튜브',
        description: '이마트 여름휴가 이벤트',
        image: './assets/images/products/product_3.png',
    },
    { 
        id: 'product_4',
        name: '유튜브',
        description: '이마트 여름휴가 이벤트',
        image: './assets/images/products/product_4.png',
    },
    { 
        id: 'product_5',
        name: '유튜브',
        description: '이마트 여름휴가 이벤트',
        image: './assets/images/products/product_3.png',
    },
  ],
  workList: [
    {
      id: 'w1',
      image: 'assets/images/work/work_01.png',
      title: '첫번째',
      description: '내 브랜드에 맞는 영상 만들기',
      arr: 'assets/images/work/Arrow.png',
    },
    {
      id: 'w2',
      image: 'assets/images/work/work_02.png',
      title: '첫번째',
      description: '단 하나 뿐인 내 브랜드 영상 제작 완료',
      arr: 'assets/images/work/Arrow.png',
    },
    {
      id: 'w3',
      image: 'assets/images/work/work_03.png',
      title: '세번째',
      description: '작업자들이 소통하며 템플릿 영상 작업',
      arr: 'assets/images/work/Arrow.png',
    }
  ],
  listCountItems : [
    {
      id: 1,
      image: "assets/images/count/icon_01.png",
      title: "사용중인 기업",
      number: 41,
    },
    {
      id: 2,
      image: "assets/images/count/icon_02.png",
      title: "완료한 템플릿",
      number: 164,
    },
    {
      id: 3,
      image: "assets/images/count/icon_03.png",
      title: "체험가능한 템플릿",
      number: 82,
    },
  ],
  listFeature : [
    {
      id: 'f1',
      name: '이미지 찾기',
      description: '내 회사에 맞는 이미지를 찾아 정합니다.',
      image: 'assets/images/feature/bigicon_01.png'
    },
    {
      id: 'f2',
      name: '만들기',
      description: '정해둔 이미지에 맞춰 템플릿을 만듭니다.',
      image: 'assets/images/feature/bigicon_02.png'
    },
    {
      id: 'f3',
      name: '정리하기',
      description: '회사와 비디온리가 소통을 통해 퀄리티를 높입니다.',
      image: 'assets/images/feature/bigicon_03.png'
    },
    {
      id: 'f4',
      name: '제작 완료',
      description: '세상에 단 하나 뿐인 영상 제작 완료!',
      image: 'assets/images/feature/bigicon_04.png'
    },
  ],
  listSocialIcon : [
    { 
        id: 'n',
        image: "assets/images/social/logo_n.png"
    },
    { 
        id: 'instagram',
        image: 'assets/images/social/logo_insta.png'
    },
    { 
        id: 'facebook',
        image: 'assets/images/social/logo_face.png'
    },
    { 
        id: 'youtube',
        image: 'assets/images/social/logo_youtube.png'
    },
]

}

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderSection />
        <BannerSection />
        <ProductListSection productList={data.productList}/>
        <WorkSection workList={data.workList}/>
        <MeetingSection />
        <WhatSection />
        <HowSection />
        <CountSection listCountItems={data.listCountItems}/>
        <ChatSection />
        <FeatureSection listFeature={data.listFeature} />
        <FooterSection listSocialIcon={data.listSocialIcon}/>
        

        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat quasi porro sapiente dignissimos aliquid totam, deserunt nam illo numquam vero ex id vel atque quis reprehenderit, molestias ullam voluptatibus assumenda sint et praesentium. Tempora, velit aperiam sapiente cupiditate quis recusandae nisi fuga asperiores eveniet fugit cumque blanditiis, atque laudantium aut cum sunt libero commodi. Laudantium ea cumque eos ipsum obcaecati. Error natus laborum ducimus dolores, fuga quo, nostrum iusto consequuntur minus laudantium at obcaecati mollitia incidunt necessitatibus itaque. Iusto facilis earum nam optio error eius accusamus blanditiis sint aliquam. Veritatis ratione maiores ut quia excepturi dicta, accusamus consequatur quibusdam.</p> */}
      </React.Fragment>
    );
  }
}

export default Homepage;
