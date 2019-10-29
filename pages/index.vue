<template>
  <div class="index">
    <!-- <blog-list /> -->
    <header>
      <div class="topBox">
        <div class="borderBottom">
          <div class="container">
            <div class="row">
              <div class="welcomeBox">深圳第三者私家侦探</div>
              <div class="topContactBox">
                <!-- <img src="./src/tel.png" /> -->
                <img src="~/assets/images/tel.png" >
                <a>13823569075</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-static-top navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"/>
              <span class="icon-bar"/>
              <span class="icon-bar"/>
            </button>
            <a 
              class="navbar-brand" 
              href="./">
              <img 
                class="logo" 
                src="./src/logo.png" 
                alt="深圳第三者私家侦探" >
            </a>
          </div>
          <div 
            id="navbar" 
            class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li>
                <a href="./">首页</a>
              </li>
              {% for cate in cateTypes %} {% if cate.parentId == '0' %}
              <li role="presentation">
                <a
                  role="menuitem"
                  tabindex="-1"
                  alt="{{siteInfo.altkey}}{{cate.name}}"
                  href="/{{cate.defaultUrl}}___{{cate._id}}"
                >{{ cate.name }}</a>
              </li>
              {% endif %} {% endfor %}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="./contactus/">
              <img 
                class="img" 
                src="./src/banner2.jpg" 
                alt="见面签私家侦探合同，100%安全可靠" >
            </a>
          </div>
          <div class="swiper-slide">
            <a href="./contactus/">
              <img 
                class="img" 
                src="./src/banner2.jpg" 
                alt="见面签私家侦探合同，100%安全可靠" >
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"/>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"/>
        <div class="swiper-button-next"/>
      </div>
    </div>

    <div class="container threeImgBox">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-4 col-md-4 keyweb">
            <img src="./src/b.jpg" >
            <div class="content">
              <h4>深圳情感侦查</h4>
              <p>深圳第三者私家侦探公司情感侦查服务包括侦查双方家庭背景、双方忠诚度、相处前人品等，帮助大家解除不幸福婚姻或挽回边缘婚姻等内容。</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 keyweb">
            <img src="./src/c.jpg" >
            <div class="content">
              <h4>找人寻址服务</h4>
              <p>深圳第三者私家侦探公司找人寻址服务，包括帮助客户寻找到需要找到的人、客户丢失或者需要购买的物品以及客户需要的第一手市场信息等内容。</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 keyweb">
            <img src="./src/a.jpg" >
            <div class="content">
              <h4>商务侦查服务</h4>
              <p>深圳第三者私家侦探公司开展商务侦查服务，旨在帮助客户进行商业相关的侦查取证工作，如商业情报、商务风险、打假、侵权等一切商务往来业务。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="productBox">
            <div class="titleBar homeTitleBar">
              <h5>侦探案例</h5>
              <a 
                class="rightMore" 
                href="./success/">READ MORE</a>
            </div>
            <div class="list">
              <!-- <div class="col-xs-6 col-sm-4 col-md-3 col-mm-6 productImg"> <a title="火车上一见钟情却意外失联，美好爱情能否再续前缘?"
                href="./success/350.html"> <span class="imgLink-hover"> <span class="hover-link"> </span> </span> <img
                  src="./src/m0107-lp.jpg" alt="火车上一见钟情却意外失联，美好爱情能否再续前缘?">
              </a> <a class="productTitle" href="./success/350.html" title="火车上一见钟情却意外失联，美好爱情能否再续前缘?">
                火车上一见钟情却意外失联，美好爱情能 </a> </div>
            <div class="col-xs-6 col-sm-4 col-md-3 col-mm-6 productImg"> <a title="老人万元被骗，深圳私家侦探能否主持公道？"
                href="./success/288.html"> <span class="imgLink-hover"> <span class="hover-link"> </span> </span> <img
                  src="./src/a727-lp.jpg" alt="老人万元被骗，深圳私家侦探能否主持公道？"> </a> <a class="productTitle"
                href="./success/288.html" title="老人万元被骗，深圳私家侦探能否主持公道？"> 老人万元被骗，深圳私家侦探能否主持公 </a> </div>
            <div class="col-xs-6 col-sm-4 col-md-3 col-mm-6 productImg"> <a title="深圳私家侦探帮可怜大学生千里送“团圆”"
                href="./success/320.html"> <span class="imgLink-hover"> <span class="hover-link"> </span> </span> <img
                  src="./src/m824-lp.jpg" alt="深圳私家侦探帮可怜大学生千里送“团圆”"> </a> <a class="productTitle"
                href="./success/320.html" title="深圳私家侦探帮可怜大学生千里送“团圆”"> 深圳私家侦探帮可怜大学生千里送“团圆 </a> </div>
            <div class="col-xs-6 col-sm-4 col-md-3 col-mm-6 productImg"> <a title="女子遭骗，能否悬崖勒马避免酿成悲剧？"
                href="./success/326.html"> <span class="imgLink-hover"> <span class="hover-link"> </span> </span> <img
                  src="./src/x0910-lp.jpg" alt="女子遭骗，能否悬崖勒马避免酿成悲剧？"> </a> <a class="productTitle"
                href="./success/326.html" title="女子遭骗，能否悬崖勒马避免酿成悲剧？">
              女子遭骗，能否悬崖勒马避免酿成悲剧？ </a> </div>-->
              {% for item in documentList4.docs %}
              <div class="col-xs-6 col-sm-4 col-md-3 col-mm-6 productImg">
                <a 
                  title="{{item.title}}" 
                  href="/details/{{item._id}}.html">
                  <span class="imgLink-hover">
                    <span class="hover-link"/>
                  </span>
                  <img 
                    src="{{item.sImg}}" 
                    alt="{{item.title}}" >
                </a>
                <a
                  class="productTitle"
                  href="/details/{{item._id}}.html"
                  title="{{item.title}}"
                >{{ item.title }}</a>
              </div>

              {% endfor %}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="aboutBoxBg"
      style="background-image: url(./src/about.png);background-position: left bottom;"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="aboutBox">
              <div class="title">
                <h5>关于第三者</h5>
                <span>ABOUT US</span>
              </div>
              <section>
                <p class="aboutContent">
                  <b style="color:#F00; font-size:16px;">深圳第三者商务调查有限公司</b>是深圳著名的私家侦探公司。公司自创立以来，始终秉承守法、诚信、高效、保密的理念，为深圳及周边城市的客户提供婚姻侦查、找人寻址等侦探服务。多年来，深圳第三者私家侦探凭借着丰富的人脉，五星级的服务质量，超高的办案成功率，深受广大客户好评，被誉为”深圳十强私家侦探公司“。
                  <br >
                </p>
                <br >
                <a 
                  href="./guanjie/" 
                  class="aboutMore">了解更多&gt;&gt;</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="newsBox">
            <div class="titleBar homeTitleBar">
              <h5>新闻动态</h5>
              <a 
                class="rightMore" 
                href="./news/" 
                style="display:none;">READ MORE</a>`
            </div>
            <div class="indexNewsList">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="imgNewsBox">
                  <a href="./news/knowledges/">
                    <img src="./src/sz.jpg" >
                  </a>
                </div>
                <ul class="newsList">
                  <!-- <li> <span> [侦探常识] </span> <a href="./news/knowledges/358.html" title="信息咨询网"> 信息咨询网 </a> </li>
                <li> <span> [侦探常识] </span> <a href="./news/knowledges/357.html" title="深圳私家侦探：做夫妻6个标准：谈得来对彼此了解信任">
                    深圳私家侦探：做夫妻6个标准：谈得来对 </a> </li>
                <li> <span> [侦探常识] </span> <a href="./news/knowledges/354.html" title="私家侦探和警察究竟有什么区别?"> 私家侦探和警察究竟有什么区别?
                  </a> </li>
                <li> <span> [侦探常识] </span> <a href="./news/knowledges/353.html" title="女性婚后十年易出轨，有这五大原因!">
                    女性婚后十年易出轨，有这五大原因! </a> </li>
                <li> <span> [侦探常识] </span> <a href="./news/knowledges/352.html" title="五点让你熟知私家侦探公司的调查范围">
                  五点让你熟知私家侦探公司的调查范围 </a> </li>-->
                  {% for item in documentList1.docs %}
                  <li>
                    <span>[侦探常识]</span>
                    <a 
                      href="/details/{{item._id}}.html" 
                      title="{{item.title}}">{{ item.title }}</a>
                  </li>
                  {% endfor %}
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="imgNewsBox">
                  <a href="./news/rules/">
                    <img src="./src/sg.jpg" >
                  </a>
                </div>
                <ul class="newsList">
                  <!-- <li> <span> [侦探守则] </span> <a href="./news/rules/42.html" title="第五条：虚心学习，加强自身侦查技能"> 第五条：虚心学习，加强自身侦查技能
                  </a> </li>
                <li> <span> [侦探守则] </span> <a href="./news/rules/40.html" title="第四条：严禁欺骗客户，违者开除处理"> 第四条：严禁欺骗客户，违者开除处理
                  </a> </li>
                <li> <span> [侦探守则] </span> <a href="./news/rules/11.html" title="第三条：努力完成侦查任务，绝不怠惰"> 第三条：努力完成侦查任务，绝不怠惰
                  </a> </li>
                <li> <span> [侦探守则] </span> <a href="./news/rules/10.html" title="第二条：禁止收受贿赂，坚守职业道德"> 第二条：禁止收受贿赂，坚守职业道德
                  </a> </li>
                  <li> <span> [侦探守则] </span> <a href="./news/rules/9.html" title="第一条：严守秘密，绝不外泄"> 第一条：严守秘密，绝不外泄 </a> </li>-->
                  {% for item in documentList2.docs %}
                  <li>
                    <span>[侦探守则]</span>
                    <a 
                      href="/details/{{item._id}}.html" 
                      title="{{item.title}}">{{ item.title }}</a>
                  </li>
                  {% endfor %}
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="imgNewsBox">
                  <a href="./news/answer/">
                    <img src="./src/sj.jpg" >
                  </a>
                </div>
                <ul class="newsList">
                  <!-- <li> <span> [侦探解疑] </span> <a href="./news/answer/362.html" title="第三者私家侦探来告诉你：哪几种男人不靠谱">
                    第三者私家侦探来告诉你：哪几种男人不靠 </a> </li>
                <li> <span> [侦探解疑] </span> <a href="./news/answer/361.html" title="深圳第三者私家侦探独家揭秘：做夫妻5个标准">
                    深圳第三者私家侦探独家揭秘：做夫妻5个标 </a> </li>
                <li> <span> [侦探解疑] </span> <a href="./news/answer/360.html" title="深圳第三者商务调查有限公司"> 深圳第三者商务调查有限公司 </a>
                </li>
                <li> <span> [侦探解疑] </span> <a href="./news/answer/359.html" title="三招教你修复夫妻感情，重温初恋感觉"> 三招教你修复夫妻感情，重温初恋感觉
                  </a> </li>
                <li> <span> [侦探解疑] </span> <a href="./news/answer/356.html" title="夫妻之间感情差因为什么?这几点原因你了解吗?">
                  夫妻之间感情差因为什么?这几点原因你了 </a> </li>-->
                  {% for item in documentList3.docs %}
                  <li>
                    <span>[侦探解疑]</span>
                    <a 
                      href="/details/{{item._id}}.html" 
                      title="{{item.title}}">{{ item.title }}</a>
                  </li>
                  {% endfor %}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar-default navbar-fixed-bottom footer_nav">
      <div class="foot_nav btn-group dropup">
        <a 
          class="dropdown-toggle" 
          href="./">
          <span 
            class="glyphicon glyphicon-share btn-lg" 
            aria-hidden="true"/> 首页
        </a>
      </div>
      <div class="foot_nav">
        <a href="tel:13823569075">
          <span 
            class="glyphicon glyphicon-phone btn-lg" 
            aria-hidden="true"/> 手机
        </a>
      </div>
      <div class="foot_nav">
        <a 
          id="gotocate" 
          href="./wk/">
          <span 
            class="glyphicon glyphicon-th-list btn-lg" 
            aria-hidden="true"/> 业务
        </a>
      </div>
      <div class="foot_nav">
        <a 
          id="gototop" 
          href="./#">
          <span 
            class="glyphicon glyphicon-circle-arrow-up btn-lg" 
            aria-hidden="true"/> 顶部
        </a>
      </div>
    </nav>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="footerLogo"/>
            <div class="footerContact">
              深圳市福田保税区市花路1号联合金融大厦C座
              <br >13823569075
              <br >
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="quikLink">
              <div class="footerTitle">网站导航</div>
              <div class="footerContent">
                <a href="./guanjie/">关于第三者</a>
                <a href="./wk/">侦探业务</a>
                <a href="./price/">侦探收费</a>
                <a href="./success/">侦探案例</a>
                <a href="./news/">侦探动态</a>
                <a href="./contactus/">联系我们</a>
              </div>
            </div>
          </div>
          <div 
            id="footerSearch" 
            class="col-xs-12 col-sm-4 col-md-4">
            <div class="footerTitle">站内搜索</div>
            <div class="footerContent">
              <div class="searchBox">
                <form 
                  name="formsearch" 
                  action="./plus/search.php">
                  <input 
                    type="hidden" 
                    name="q" 
                    value="0" >
                  <input
                    type="text"
                    name="q"
                    value="深圳私家侦探"
                    onfocus="this.value=&#39;&#39;"
                    onblur="if(!value){value=defaultValue;}"
                  >
                  <button 
                    type="submit" 
                    onclick="javascript:searchform.submit();">搜索</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p style="white-space:normal;text-align:center;">
          Copyright © 2019 深圳市第三者商务调查
          <br >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import "~/assets/styles/style.css";
export default {
  head: {
    title: "【深圳第三者私家侦探公司】2019最新报价,深圳私人侦探首选",
    meta: [
      {
        name: "description",
        content:
          "【深圳第三者私家侦探】专业从事深圳私人侦探服务多年，被誉为“深圳十强私人侦探公司”，为客户提供婚姻调查、找人寻址、商务调查等侦查服务，电话/微信:13823569075。"
      },
      {
        name: "keywords",
        content:
          "深圳私家侦探,深圳私人侦探,私家侦探公司,私人侦探公司,深圳私家侦探公司,深圳私人侦探公司"
      }
    ],
    script:[{
      src:'//cdn.bootcss.com/Swiper/4.5.1/js/swiper.min.js'
    }]
  },
  async fetch({ store, route }) {
    const { page = 1, category = "", keywords = "" } = route.query;
    await Promise.all([
      store.dispatch("getArticles", {
        category,
        keywords,
        page
      }),
      store.dispatch("getArticlesTop")
    ]);
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
};
</script>

<style lang="scss" scoped>
</style>
