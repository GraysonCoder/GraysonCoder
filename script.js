// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenuClose = document.querySelector(".mobile-menu-close")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileLinks = document.querySelectorAll(".mobile-nav-links a")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active")
})

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
})

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })
})

// Parallax effect for hero section
const hero = document.querySelector(".hero")
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY
  hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
})

// Glitch effect on hover for logo
const logo = document.querySelector(".logo")
logo.addEventListener("mouseenter", () => {
  logo.classList.add("glitch")
})
logo.addEventListener("mouseleave", () => {
  logo.classList.remove("glitch")
})

// Scroll reveal animation
const revealElements = document.querySelectorAll(".feature-card, .gameplay-item, .gallery-item")

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < triggerBottom) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    } else {
      element.style.opacity = "0"
      element.style.transform = "translateY(50px)"
    }
  })
}

// Set initial styles
revealElements.forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(50px)"
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
})

window.addEventListener("scroll", checkReveal)
window.addEventListener("load", checkReveal)

// Trailer modal functionality
const trailerBtn = document.querySelector(".secondary-button")

trailerBtn.addEventListener("click", () => {
  alert("Трейлер будет открыт в модальном окне")
  // В реальной реализации здесь будет создано и открыто модальное окно с трейлером игры
})

// Language switcher functionality
let currentLang = localStorage.getItem("standzone-lang") || "en"

// Translations object
const translations = {
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_gameplay: "Gameplay",
    nav_gallery: "Gallery",
    nav_download: "Download",
    play_now: "Play Now",
    download_now: "Download Now",
    subscribe: "Subscribe",
    watch_trailer: "Watch Trailer",
    hero_title: "STANDZONE: THE ULTIMATE BATTLE ROYALE",
    hero_description:
      "Experience intense battles, strategic gameplay, and stunning graphics in the world of Standzone.",
    features_title: "Key Features",
    feature1_title: "Immersive World",
    feature1_desc: "Explore a vast and detailed world filled with secrets and challenges.",
    feature2_title: "Strategic Gameplay",
    feature2_desc: "Plan your moves carefully and outsmart your opponents to emerge victorious.",
    feature3_title: "Stunning Graphics",
    feature3_desc: "Experience the game in breathtaking detail with cutting-edge graphics.",
    feature4_title: "Customizable Characters",
    feature4_desc: "Personalize your character with a wide range of skins and accessories.",
    feature5_title: "Intense Battles",
    feature5_desc: "Engage in fast-paced and thrilling battles against players from around the world.",
    feature6_title: "Regular Updates",
    feature6_desc: "Enjoy new content, features, and improvements with regular updates.",
    gameplay_title: "Gameplay",
    gameplay1_title: "Team Up",
    gameplay1_desc1: "Coordinate with your team to dominate the battlefield.",
    gameplay1_desc2: "Use teamwork and communication to gain the upper hand.",
    gameplay2_title: "Loot and Survive",
    gameplay2_desc1: "Scavenge for weapons, armor, and resources to survive.",
    gameplay2_desc2: "Manage your inventory and make strategic decisions to stay alive.",
    gameplay3_title: "Conquer the Zone",
    gameplay3_desc1: "Fight to control key areas and secure valuable resources.",
    gameplay3_desc2: "Adapt to the ever-changing environment and conquer the zone.",
    gallery_title: "Gallery",
    cta_title: "Join the Battle Today!",
    cta_desc: "Download Standzone now and experience the ultimate battle royale.",
    about_title: "About Standzone",
    about_desc:
      "Standzone is a free-to-play battle royale game developed by a team of passionate gamers. Our mission is to create a fun and engaging experience for players of all skill levels.",
    quick_links: "Quick Links",
    support: "Support",
    faq: "FAQ",
    contact: "Contact Us",
    system_req: "System Requirements",
    bug_reports: "Bug Reports",
    forums: "Forums",
    newsletter: "Newsletter",
    newsletter_desc: "Subscribe to our newsletter to receive the latest news and updates.",
    email_placeholder: "Your email address",
    copyright: "Copyright © 2023 Standzone. All rights reserved.",
  },
  ru: {
    nav_home: "Главная",
    nav_features: "Особенности",
    nav_gameplay: "Геймплей",
    nav_gallery: "Галерея",
    nav_download: "Скачать",
    play_now: "Играть сейчас",
    download_now: "Скачать сейчас",
    subscribe: "Подписаться",
    watch_trailer: "Смотреть трейлер",
    hero_title: "STANDZONE: АБСОЛЮТНАЯ КОРОЛЕВСКАЯ БИТВА",
    hero_description: "Испытайте напряженные сражения, стратегический геймплей и потрясающую графику в мире Standzone.",
    features_title: "Ключевые особенности",
    feature1_title: "Захватывающий мир",
    feature1_desc: "Исследуйте огромный и детализированный мир, полный секретов и испытаний.",
    feature2_title: "Стратегический геймплей",
    feature2_desc: "Планируйте свои действия тщательно и перехитрите своих противников, чтобы выйти победителем.",
    feature3_title: "Потрясающая графика",
    feature3_desc: "Наслаждайтесь игрой в захватывающих деталях с передовой графикой.",
    feature4_title: "Настраиваемые персонажи",
    feature4_desc: "Персонализируйте своего персонажа с помощью широкого спектра скинов и аксессуаров.",
    feature5_title: "Напряженные сражения",
    feature5_desc: "Участвуйте в динамичных и захватывающих сражениях против игроков со всего мира.",
    feature6_title: "Регулярные обновления",
    feature6_desc: "Наслаждайтесь новым контентом, функциями и улучшениями с регулярными обновлениями.",
    gameplay_title: "Геймплей",
    gameplay1_title: "Объединяйтесь в команды",
    gameplay1_desc1: "Координируйте свои действия с командой, чтобы доминировать на поле боя.",
    gameplay1_desc2: "Используйте командную работу и общение, чтобы получить преимущество.",
    gameplay2_title: "Собирайте добычу и выживайте",
    gameplay2_desc1: "Собирайте оружие, броню и ресурсы, чтобы выжить.",
    gameplay2_desc2: "Управляйте своим инвентарем и принимайте стратегические решения, чтобы остаться в живых.",
    gameplay3_title: "Завоюйте зону",
    gameplay3_desc1: "Сражайтесь за контроль над ключевыми областями и обеспечьте ценные ресурсы.",
    gameplay3_desc2: "Адаптируйтесь к постоянно меняющейся среде и завоюйте зону.",
    gallery_title: "Галерея",
    cta_title: "Присоединяйтесь к битве сегодня!",
    cta_desc: "Скачайте Standzone сейчас и испытайте абсолютную королевскую битву.",
    about_title: "О Standzone",
    about_desc:
      "Standzone - это бесплатная игра в жанре королевской битвы, разработанная командой увлеченных геймеров. Наша миссия - создать увлекательный и интересный опыт для игроков всех уровней подготовки.",
    quick_links: "Быстрые ссылки",
    support: "Поддержка",
    faq: "FAQ",
    contact: "Связаться с нами",
    system_req: "Системные требования",
    bug_reports: "Сообщения об ошибках",
    forums: "Форумы",
    newsletter: "Новостная рассылка",
    newsletter_desc: "Подпишитесь на нашу новостную рассылку, чтобы получать последние новости и обновления.",
    email_placeholder: "Ваш адрес электронной почты",
    copyright: "Авторские права © 2023 Standzone. Все права защищены.",
  },
}

