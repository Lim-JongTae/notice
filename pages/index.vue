<template>
  <div class=" mt-10">
    <!-- <header class="header">
      <NuxtLink to="#" class="logo">Portfolio</NuxtLink>
      <UIcon name="i-mdi-menu" id="menu-icon"/>
      <nav class="navbar">
        <NuxtLink class="link active" to="#home">Home</NuxtLink>
        <NuxtLink class="link" to="/#About">About</NuxtLink>
        <NuxtLink class="link" to="#Services">Services</NuxtLink>
        <NuxtLink class="link" to="#Portfolio">Portfolio</NuxtLink>
        <NuxtLink class="link" to="#Content">Content</NuxtLink>
      </nav>
    </header> -->
    <!-- home section design -->
    <!-- <div class="services-container">
      <div class="services-box">
        <img src="/img2.png" class="img-edit mx-auto" />      
      </div>
    </div>
    -->
     <section class="home" id="home">
      <div class="home-content">
        <h3>안녕하십니까?</h3>
        <h1>2024년</h1>
        <h3>대부도 탐조대회를 <span>개최하게 되었습니다.</span></h3>
        <p>이동성 물새들의 계절을 맞아<span> 안산 대부도의 EAAF(동아시아-대양주 철새이동경로)지역</span>의 자연생태를 체험하고 대부도
           서식지의 이해와 탐조관광의 기회를 확대하고자 하오니 많은 관심부탁드립니다.</p>
        <div class="social-media">
          <NuxtLink class="link-a"><UIcon name="i-mdi-facebook" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-youtube" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-twitter"></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-instagram"></UIcon></NuxtLink>
        </div>
        <NuxtLink to="https://docs.google.com/forms/d/1Sd0uzj4rjhOdu30Y5b53QKHM3bEby9ofmlgWRlJ7OJw/edit?usp=sharing" class="btn">참가신청</NuxtLink>
      </div>
    </section>
    <!-- about section design -->
    
      <!-- <section class="about" id="about">
        <div class="about-img">
          <img src="/img1.png" alt="">
        </div>
        <div class="about-content">
          <h2 class="heading">대부도<span>탐조대회</span></h2>
          <h3>대회신청 접수</h3>
          <p>아래의 내용을 참고 하여 신청해 주시기 바랍니다</p>
       
        </div>
      </section> -->
      <!-- services section design -->
       <!-- <section class="services" id="services">
        <h2 class="heading">Our <span>Services</span></h2>
        <div class="services-container">
          <div class="services-box">
            <UIcon class="w-28 h-28" name="i-mdi-format-paint"></UIcon>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos?</p>
            <NuxtLink to="#" class="btn">Read More</NuxtLink>
          </div>
          <div class="services-box">
            <UIcon class="w-28 h-28" name="i-mdi-application-brackets"></UIcon>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos?</p>
            <NuxtLink to="#" class="btn">Read More</NuxtLink>
          </div>
          <div class="services-box">
            <UIcon class="w-28 h-28" name="i-mdi-chart-bar"></UIcon>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos?</p>
            <NuxtLink to="#" class="btn">Read More</NuxtLink>
          </div>
        </div>
       </section> -->
       <section class="portfolio" id="portfolio" >
        <h2 class="heading"><span>대회안내</span></h2>        
        <div class="portfolio-container">
          <div class="portfolio-box">
            <img src="../public/dabudo.png" alt="" />
            <!-- <div class="portfolio-layer">              
              <h4>{{item.job}}</h4>
              <p>{{ item.des }}</p>
              <NuxtLink class="link-icon" to="#"><UIcon :name="`${item.icon}`" class="w-8 h-8 text-gray-950"></UIcon></NuxtLink>
            </div> -->
          </div>
        </div>        
       </section>
       <!-- contact section disign -->
       <!-- <section class="contact" id="contact">
        <h2 class="heading"> <span>Me!</span></h2>
        <form action="">
          <div class="input-box">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Email">
          </div>
          <div class="input-box">
            <input type="number" placeholder="Phone Number">
            <input type="text" placeholder="Email subject">
          </div>
          <textarea name="" id="" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" class="btn">
        </form>
       </section> -->
       <!-- Footer Design -->
        <footer class="footer">
          <div class="footer-text">
            <p>Copyright &copy;{{ year }} <span>대부도탐조대회추진위원회</span> </p>
          </div>
          <!-- <div class="footer-iconTop">
            <NuxtLink class="link-top" to=""><UIcon class="link-top-icon w-10 h-10 text-gray-900" name="i-heroicons-arrow-long-up-16-solid" /></NuxtLink>
          </div> -->
        </footer>
  </div>
</template>

<script setup>
// const sections = ref(null)
// sections.value = document.querySelectorAll("section")
// console.log(sections.value)
// // navLinks.value = document.querySelectorAll('header nav .link')
// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY
//     let offset = sec.offsetTop - 150
//     let height = sec.offsetHeight
//     let id = sec.getAttribute('id')
//     if(top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active')
//         document.querySelector('header nav .link[href*='+ id + ']').classList.add('active')
//       })
//     }
//   })
// }
const thisYear = new(Date)
const year = thisYear.getFullYear()
const portfolio = ref([
  {
    idx: 1,
    img: '/insta-1.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  },
  {
    idx: 2,
    img: '/insta-2.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  },
  {
    idx: 3,
    img: '/insta-3.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  },
  {
    idx: 4,
    img: '/insta-4.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  },
  {
    idx: 5,
    img: '/insta-5.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  },
  {
    idx: 6,
    img: '/insta-6.jpg',
    job: 'Web Design',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae, adipisci numquam, sunt exercitationem rem optio corporis modi repellendus quibusdam possimus ex, magnam eius asperiores. Maiores magni autem maxime excepturi.',
    icon: 'i-heroicons-link-16-solid'
  }
])
</script>

<style>

</style>