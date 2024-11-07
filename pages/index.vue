<template>
  <div>
    <header class="header">
      <NuxtLink to="#" class="logo">Portfolio</NuxtLink>
      <UIcon name="i-mdi-menu" id="menu-icon"/>
      <nav class="navbar">
        <NuxtLink class="link active" to="#home">Home</NuxtLink>
        <NuxtLink class="link" to="/#About">About</NuxtLink>
        <NuxtLink class="link" to="#Services">Services</NuxtLink>
        <NuxtLink class="link" to="#Portfolio">Portfolio</NuxtLink>
        <NuxtLink class="link" to="#Content">Content</NuxtLink>
      </nav>
    </header>
    <!-- home section design -->
     <section class="home" id="home">
      <div class="home-content">
        <h3>안녕하십니까?</h3>
        <h1>대부도탐조대회</h1>
        <h3>탐조대회를 <span>개최하게 되었습니다.</span></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi praesentium quis, ea eveniet maxime voluptatum consequatur animi repudiandae nesciunt repellendus nisi voluptatibus in deleniti aut laboriosam facilis adipisci rerum.</p>
        <div class="social-media">
          <NuxtLink class="link-a"><UIcon name="i-mdi-facebook" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-youtube" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-twitter"></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-instagram"></UIcon></NuxtLink>
        </div>
        <NuxtLink to="#" class="btn">Download CV</NuxtLink>
      </div>
      <div class="home-img">
        <img src="/img1.png" />
      </div>
     </section>
     <!-- about section design -->
      <section class="about" id="about">
        <div class="about-img">
          <img src="/img1.png" alt="">
        </div>
        <div class="about-content">
          <h2 class="heading">대부도<span>탐조대회</span> </h2>
          <h3>탐조대회</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam ex unde numquam possimus illo sapiente natus vel sunt. Sed asperiores nostrum, voluptates dolore quis tempora dicta eveniet incidunt blanditiis?</p>
          <NuxtLink to="#" class="btn">Read More</NuxtLink>
        </div>
      </section>
      <!-- services section design -->
       <section class="services" id="services">
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
       </section>
       <section class="portfolio" id="portfolio" >
        <h2 class="heading">Latest <span>Project</span></h2>        
        <div class="portfolio-container">
          <div class="portfolio-box" v-for="item in portfolio" :key="item.idx">
            <img :src="`${ item.img }`" alt="" />
            <div class="portfolio-layer">              
              <h4>{{item.job}}</h4>
              <p>{{ item.des }}</p>
              <NuxtLink class="link-icon" to="#"><UIcon :name="`${item.icon}`" class="w-8 h-8 text-gray-950"></UIcon></NuxtLink>
            </div>
          </div>
        </div>        
       </section>
       <!-- contact section disign -->
       <section class="contact" id="contact">
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
       </section>
       <!-- Footer Design -->
        <footer class="footer">
          <div class="footer-text">
            <p>Cypyright &copy;{{ year }} by Codehal | All Rights Reservied. </p>
          </div>
          <div class="footer-iconTop">
            <NuxtLink class="link-top" to=""><UIcon class="link-top-icon w-10 h-10 text-gray-900" name="i-heroicons-arrow-long-up-16-solid" /></NuxtLink>
          </div>
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