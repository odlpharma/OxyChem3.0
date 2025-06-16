// Enhanced Product data for Research Chemicals
const products = [
  {
    id: "rc1",
    name: "4-MMC (Mephedrone)",
    description:
      "Hochreines 4-Methylmethcatinon für wissenschaftliche Forschung. Laborgeprüfte Qualität mit Analysezertifikat. Nur für Forschungszwecke.",
    price: 89,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60",
    category: "Stimulants",
    rating: 4.8,
    reviews: 34,
    stock: 12,
    inStock: true,
    purity: "99.2%",
    cas: "1189805-46-6",
  },
  {
    id: "rc2",
    name: "2C-B-FLY",
    description:
      "Seltenes Phenethylamin-Derivat für psychedelische Forschung. Höchste Reinheit und Qualität garantiert.",
    price: 145,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60",
    category: "Psychedelics",
    rating: 4.9,
    reviews: 18,
    stock: 8,
    inStock: true,
    purity: "98.7%",
    cas: "178557-21-6",
  },
  {
    id: "rc3",
    name: "3-MeO-PCP",
    description: "Dissoziatives Arylcyclohexylamin für Bewusstseinsforschung. Präzise dosiert und laboranalysiert.",
    price: 95,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    category: "Dissociatives",
    rating: 4.6,
    reviews: 27,
    stock: 15,
    inStock: true,
    purity: "99.1%",
    cas: "91164-58-8",
  },
  {
    id: "rc4",
    name: "5F-MDMB-2201",
    description: "Synthetisches Cannabinoid für Rezeptorforschung. Hochpotent und rein für wissenschaftliche Studien.",
    price: 120,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=60",
    category: "Cannabinoids",
    rating: 4.4,
    reviews: 22,
    stock: 6,
    inStock: true,
    purity: "98.9%",
    cas: "1971007-88-1",
  },
  {
    id: "rc5",
    name: "1P-LSD",
    description: "Lysergamid-Analogon für psychedelische Forschung. Stabile Formulierung mit garantierter Potenz.",
    price: 180,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=60",
    category: "Psychedelics",
    rating: 4.9,
    reviews: 41,
    stock: 0,
    inStock: false,
    purity: "99.5%",
    cas: "2349358-81-0",
  },
  {
    id: "rc6",
    name: "3-CMC",
    description: "Cathinon-Derivat für neurochemische Forschung. Hohe Reinheit und konsistente Qualität.",
    price: 75,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60",
    category: "Stimulants",
    rating: 4.5,
    reviews: 29,
    stock: 20,
    inStock: true,
    purity: "98.8%",
    cas: "1607439-32-6",
  },
  {
    id: "rc7",
    name: "O-DSMT",
    description: "Opioid-Metabolit für Schmerzforschung. Pharmazeutische Qualität mit vollständiger Dokumentation.",
    price: 110,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    category: "Dissociatives",
    rating: 4.7,
    reviews: 16,
    stock: 9,
    inStock: true,
    purity: "99.3%",
    cas: "73986-53-5",
  },
  {
    id: "rc8",
    name: "4-AcO-DMT",
    description: "Psilocybin-Analogon für Tryptamin-Forschung. Stabil und hochrein für präzise Studien.",
    price: 135,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60",
    category: "Psychedelics",
    rating: 4.8,
    reviews: 33,
    stock: 11,
    inStock: true,
    purity: "99.0%",
    cas: "92292-84-7",
  },
  {
    id: "rc9",
    name: "NEP (N-Ethylpentedrone)",
    description: "Cathinon-Stimulans für pharmakologische Forschung. Laborgeprüfte Reinheit und Identität.",
    price: 85,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60",
    category: "Stimulants",
    rating: 4.3,
    reviews: 25,
    stock: 18,
    inStock: true,
    purity: "98.6%",
    cas: "18268-16-1",
  },
  {
    id: "rc10",
    name: "5-MeO-MiPT",
    description: "Tryptamin-Derivat für Serotoninrezeptor-Forschung. Hochrein und stabil gelagert.",
    price: 125,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60",
    category: "Psychedelics",
    rating: 4.6,
    reviews: 19,
    stock: 7,
    inStock: true,
    purity: "98.9%",
    cas: "96096-55-8",
  },
  {
    id: "rc11",
    name: "JWH-018",
    description: "Klassisches synthetisches Cannabinoid für CB1/CB2-Rezeptorforschung. Referenzstandard-Qualität.",
    price: 95,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=60",
    category: "Cannabinoids",
    rating: 4.5,
    reviews: 31,
    stock: 14,
    inStock: true,
    purity: "99.1%",
    cas: "209414-07-3",
  },
  {
    id: "rc12",
    name: "2-FDCK",
    description: "Fluoriertes Ketamin-Analogon für dissoziative Forschung. Hohe Potenz und Reinheit.",
    price: 105,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    category: "Dissociatives",
    rating: 4.7,
    reviews: 24,
    stock: 10,
    inStock: true,
    purity: "98.8%",
    cas: "111982-50-4",
  },
]

// Enhanced reviews data
const reviewsData = {
  rc1: [
    {
      name: "Dr. Schmidt",
      rating: 5,
      comment: "Exzellente Qualität für unsere neurochemischen Studien. Analysezertifikat stimmt perfekt überein.",
      date: "2024-01-15",
    },
    {
      name: "Research Lab M.",
      rating: 5,
      comment: "Sehr zuverlässiger Lieferant. Diskrete Verpackung und schnelle Lieferung.",
      date: "2024-01-10",
    },
  ],
  rc2: [
    {
      name: "Prof. Weber",
      rating: 5,
      comment: "Seltene Substanz in hervorragender Qualität. Perfekt für unsere Rezeptorbindungsstudien.",
      date: "2024-01-12",
    },
    {
      name: "Institut XY",
      rating: 4,
      comment: "Gute Qualität, aber etwas teuer. Dennoch empfehlenswert für Forschung.",
      date: "2024-01-08",
    },
  ],
}

// Application state
let cart = []
let wishlist = []
let selectedProduct = null
let searchQuery = ""
let selectedCategory = "All"
let isSearchOpen = false
let currentView = "hero"
let currentUser = null
let currentCheckoutStep = 1
let sortBy = "default"
let activeFilters = {
  price: [],
  rating: [],
  stock: [],
}

// DOM elements
const heroSection = document.getElementById("heroSection")
const productSection = document.getElementById("productSection")
const checkoutSection = document.getElementById("checkoutSection")
const productGrid = document.getElementById("productGrid")
const productModal = document.getElementById("productModal")
const cartDrawer = document.getElementById("cartDrawer")
const wishlistDrawer = document.getElementById("wishlistDrawer")
const searchInput = document.getElementById("searchInput")
const searchContainer = document.getElementById("searchContainer")
const cartBadge = document.getElementById("cartBadge")
const wishlistBadge = document.getElementById("wishlistBadge")
const categoryNav = document.getElementById("categoryNav")
const addToCartAnimation = document.getElementById("addToCartAnimation")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners()
  setupCookieBanner()
  setupBackToTop()
  setupLiveChat()
  loadUserData()
  showHeroSection()
  setupEnhancedAnimations()
})

// Enhanced animations setup
function setupEnhancedAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".product-card, .trust-indicator, .feature-card").forEach((el) => {
    observer.observe(el)
  })

  // Enhanced hover effects for product cards
  setupProductCardAnimations()
}

function setupProductCardAnimations() {
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".product-card")) {
      const card = e.target.closest(".product-card")
      card.style.transform = "translateY(-8px) scale(1.03)"
      card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)"
    }
  })

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".product-card")) {
      const card = e.target.closest(".product-card")
      card.style.transform = "translateY(0) scale(1)"
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
    }
  })
}

// Enhanced Cookie Banner
function setupCookieBanner() {
  const cookieBanner = document.getElementById("cookieBanner")
  const acceptCookies = document.getElementById("acceptCookies")
  const cookieSettings = document.getElementById("cookieSettings")

  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => {
      cookieBanner.classList.remove("translate-y-full")
      cookieBanner.classList.add("animate-slide-up")
    }, 3000)
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true")
    cookieBanner.classList.add("translate-y-full")
    showToast("🍪 Cookie-Einstellungen gespeichert", "success")
  })

  cookieSettings.addEventListener("click", () => {
    showToast("⚙️ Cookie-Einstellungen werden in Kürze verfügbar sein.", "info")
  })
}

// Enhanced Back to Top Button
function setupBackToTop() {
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.remove("hidden")
      backToTop.style.opacity = "1"
      backToTop.style.transform = "translateY(0) scale(1)"
    } else {
      backToTop.style.opacity = "0"
      backToTop.style.transform = "translateY(20px) scale(0.8)"
      setTimeout(() => {
        if (window.scrollY <= 500) {
          backToTop.classList.add("hidden")
        }
      }, 300)
    }
  })

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    // Add bounce animation
    backToTop.style.animation = "bounce 0.6s ease-out"
    setTimeout(() => {
      backToTop.style.animation = ""
    }, 600)
  })
}

// Enhanced Live Chat
function setupLiveChat() {
  const chatToggle = document.getElementById("chatToggle")
  const chatWindow = document.getElementById("chatWindow")
  const chatClose = document.getElementById("chatClose")
  const chatSend = document.getElementById("chatSend")
  const chatInput = document.getElementById("chatInput")
  const chatMessages = document.getElementById("chatMessages")

  chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden")
    if (!chatWindow.classList.contains("hidden")) {
      chatWindow.style.animation = "slideUp 0.4s ease-out"
      chatInput.focus()
    }
  })

  chatClose.addEventListener("click", () => {
    chatWindow.style.animation = "slideDown 0.3s ease-out"
    setTimeout(() => {
      chatWindow.classList.add("hidden")
    }, 300)
  })

  function sendMessage(message, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `flex ${isUser ? "justify-end" : ""} chat-message animate-fade-in`

    messageDiv.innerHTML = `
      <div class="bg-${isUser ? "blue-600 text-white" : "white border border-slate-200"} rounded-2xl p-3 max-w-xs shadow-sm">
        <p class="text-sm">${message}</p>
        <span class="text-xs opacity-70 mt-1 block">${new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
    `

    chatMessages.appendChild(messageDiv)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  chatSend.addEventListener("click", () => {
    const message = chatInput.value.trim()
    if (message) {
      sendMessage(message, true)
      chatInput.value = ""

      // Show typing indicator
      const typingDiv = document.createElement("div")
      typingDiv.className = "flex typing-indicator"
      typingDiv.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-2xl p-3 max-w-xs shadow-sm">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
            <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          </div>
        </div>
      `
      chatMessages.appendChild(typingDiv)
      chatMessages.scrollTop = chatMessages.scrollHeight

      // Simulate bot response
      setTimeout(() => {
        chatMessages.removeChild(typingDiv)
        const responses = [
          "🔬 Vielen Dank für Ihre Nachricht! Wie kann ich Ihnen bei Ihrer Forschung helfen?",
          "📋 Gerne helfe ich Ihnen weiter. Benötigen Sie Informationen zu spezifischen Substanzen?",
          "🧪 Haben Sie Fragen zu Analysezertifikaten oder Reinheitsgraden?",
          "📦 Möchten Sie mehr über unsere diskreten Versandoptionen erfahren?",
        ]
        sendMessage(responses[Math.floor(Math.random() * responses.length)])
      }, 1500)
    }
  })

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      chatSend.click()
    }
  })
}

// Enhanced User Management
function loadUserData() {
  const userData = localStorage.getItem("currentUser")
  if (userData) {
    currentUser = JSON.parse(userData)
    updateUserInterface()
  }

  // Load cart and wishlist
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCartBadge()
  }

  const savedWishlist = localStorage.getItem("wishlist")
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist)
    updateWishlistBadge()
  }
}

function updateUserInterface() {
  const userInfo = document.getElementById("userInfo")
  const guestInfo = document.getElementById("guestInfo")
  const userMenuItems = document.getElementById("userMenuItems")
  const guestMenuItems = document.getElementById("guestMenuItems")

  if (currentUser) {
    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("userEmail").textContent = currentUser.email
    userInfo.classList.remove("hidden")
    guestInfo.classList.add("hidden")
    userMenuItems.classList.remove("hidden")
    guestMenuItems.classList.add("hidden")
  } else {
    userInfo.classList.add("hidden")
    guestInfo.classList.remove("hidden")
    userMenuItems.classList.add("hidden")
    guestMenuItems.classList.remove("hidden")
  }
}

// Enhanced Navigation functions
function showHeroSection() {
  currentView = "hero"
  heroSection.classList.remove("hidden")
  productSection.classList.add("hidden")
  checkoutSection.classList.add("hidden")
  categoryNav.classList.add("hidden")

  // Trigger hero animations
  setTimeout(() => {
    document.querySelector(".hero-content").style.animation = "fadeInUp 1s ease-out"
  }, 100)
}

function showProductSection() {
  currentView = "products"
  heroSection.classList.add("hidden")
  productSection.classList.remove("hidden")
  checkoutSection.classList.add("hidden")
  categoryNav.classList.remove("hidden")

  // Add page transition animation
  productSection.style.animation = "fadeIn 0.6s ease-out"
  renderProducts()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function showCheckoutSection() {
  currentView = "checkout"
  heroSection.classList.add("hidden")
  productSection.classList.add("hidden")
  checkoutSection.classList.remove("hidden")
  categoryNav.classList.add("hidden")

  checkoutSection.style.animation = "fadeIn 0.6s ease-out"
  renderCheckoutItems()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Event listeners setup
function setupEventListeners() {
  // Navigation
  document.getElementById("homeBtn").addEventListener("click", showHeroSection)
  document.getElementById("shopNowBtn").addEventListener("click", showProductSection)

  // Enhanced Search functionality
  document.getElementById("searchToggle").addEventListener("click", toggleSearch)
  document.getElementById("clearSearch").addEventListener("click", clearSearch)
  searchInput.addEventListener("input", handleSearch)
  searchInput.addEventListener("keydown", handleSearchKeydown)

  // Cart functionality
  document.getElementById("cartToggle").addEventListener("click", openCart)
  document.getElementById("cartClose").addEventListener("click", closeCart)
  document.querySelector(".cart-backdrop").addEventListener("click", closeCart)
  document.getElementById("proceedToCheckout").addEventListener("click", () => {
    closeCart()
    showCheckoutSection()
  })

  // Wishlist functionality
  document.getElementById("wishlistToggle").addEventListener("click", openWishlist)
  document.getElementById("wishlistClose").addEventListener("click", closeWishlist)
  document.querySelector(".wishlist-backdrop").addEventListener("click", closeWishlist)

  // User menu
  document.getElementById("userToggle").addEventListener("click", toggleUserMenu)
  document.getElementById("loginBtn").addEventListener("click", () => {
    toggleUserMenu()
    openLoginModal()
  })
  document.getElementById("registerBtn").addEventListener("click", () => {
    toggleUserMenu()
    openRegisterModal()
  })
  document.getElementById("logoutBtn").addEventListener("click", logout)

  // Modal functionality
  document.getElementById("modalClose").addEventListener("click", closeModal)
  document.querySelector(".modal-backdrop").addEventListener("click", closeModal)
  document.getElementById("modalAddToCart").addEventListener("click", addToCartFromModal)
  document.getElementById("modalAddToWishlist").addEventListener("click", addToWishlistFromModal)

  // Login/Register modals
  setupAuthModals()

  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      selectedCategory = e.target.dataset.category
      updateCategoryButtons()
      renderProducts()
    })
  })

  // Filters and sorting
  document.getElementById("filterToggle").addEventListener("click", toggleFilters)
  document.getElementById("sortSelect").addEventListener("change", handleSort)
  document.getElementById("clearFilters").addEventListener("click", clearFilters)
  setupFilterListeners()

  // Checkout steps
  setupCheckoutListeners()

  // Enhanced keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!productModal.classList.contains("hidden")) {
        closeModal()
      } else if (!cartDrawer.classList.contains("hidden")) {
        closeCart()
      } else if (!wishlistDrawer.classList.contains("hidden")) {
        closeWishlist()
      } else if (isSearchOpen) {
        toggleSearch()
      }
    }

    // Ctrl+K for search
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault()
      toggleSearch()
    }
  })

  // Click outside to close dropdowns
  document.addEventListener("click", (e) => {
    const userMenu = document.getElementById("userMenu")
    const userToggle = document.getElementById("userToggle")

    if (!userMenu.contains(e.target) && !userToggle.contains(e.target)) {
      userMenu.classList.add("hidden")
    }
  })
}

// Enhanced Authentication Modals
function setupAuthModals() {
  const loginModal = document.getElementById("loginModal")
  const registerModal = document.getElementById("registerModal")
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  // Modal close buttons with animation
  document.getElementById("loginModalClose").addEventListener("click", () => {
    loginModal.style.animation = "fadeOut 0.3s ease-out"
    setTimeout(() => {
      loginModal.classList.add("hidden")
      loginModal.style.animation = ""
    }, 300)
  })

  document.getElementById("registerModalClose").addEventListener("click", () => {
    registerModal.style.animation = "fadeOut 0.3s ease-out"
    setTimeout(() => {
      registerModal.classList.add("hidden")
      registerModal.style.animation = ""
    }, 300)
  })

  // Switch between modals with animation
  document.getElementById("switchToRegister").addEventListener("click", () => {
    loginModal.classList.add("hidden")
    registerModal.classList.remove("hidden")
    registerModal.style.animation = "fadeIn 0.3s ease-out"
  })

  document.getElementById("switchToLogin").addEventListener("click", () => {
    registerModal.classList.add("hidden")
    loginModal.classList.remove("hidden")
    loginModal.style.animation = "fadeIn 0.3s ease-out"
  })

  // Enhanced form submissions
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(loginForm)
    const email = formData.get("email") || loginForm.querySelector('input[type="email"]').value

    // Show loading state
    const submitBtn = loginForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Anmelden...
    `

    // Simulate login
    setTimeout(() => {
      currentUser = {
        name: "Dr. " + email.split("@")[0],
        email: email,
      }

      localStorage.setItem("currentUser", JSON.stringify(currentUser))
      updateUserInterface()
      loginModal.classList.add("hidden")
      submitBtn.innerHTML = originalText
      showToast("🎉 Erfolgreich angemeldet! Willkommen zurück.", "success")
    }, 1500)
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(registerForm)
    const firstName = registerForm.querySelector('input[type="text"]').value
    const lastName = registerForm.querySelectorAll('input[type="text"]')[1].value
    const email = registerForm.querySelector('input[type="email"]').value

    // Show loading state
    const submitBtn = registerForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Registrieren...
    `

    // Simulate registration
    setTimeout(() => {
      currentUser = {
        name: `${firstName} ${lastName}`,
        email: email,
      }

      localStorage.setItem("currentUser", JSON.stringify(currentUser))
      updateUserInterface()
      registerModal.classList.add("hidden")
      submitBtn.innerHTML = originalText
      showToast("🎉 Erfolgreich registriert und angemeldet! Willkommen bei ChemLab Research.", "success")
    }, 1500)
  })
}

function openLoginModal() {
  const loginModal = document.getElementById("loginModal")
  loginModal.classList.remove("hidden")
  loginModal.style.animation = "fadeIn 0.3s ease-out"
}

function openRegisterModal() {
  const registerModal = document.getElementById("registerModal")
  registerModal.classList.remove("hidden")
  registerModal.style.animation = "fadeIn 0.3s ease-out"
}

function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu")
  userMenu.classList.toggle("hidden")
  if (!userMenu.classList.contains("hidden")) {
    userMenu.style.animation = "slideUp 0.3s ease-out"
  }
}

function logout() {
  currentUser = null
  localStorage.removeItem("currentUser")
  updateUserInterface()
  toggleUserMenu()
  showToast("👋 Erfolgreich abgemeldet! Auf Wiedersehen.", "success")
}

// Enhanced Search functionality
function toggleSearch() {
  isSearchOpen = !isSearchOpen
  const searchToggle = document.getElementById("searchToggle")
  const clearSearch = document.getElementById("clearSearch")

  if (isSearchOpen) {
    searchContainer.classList.add("search-open")
    searchToggle.classList.add("bg-blue-50", "text-blue-600")
    searchInput.style.width = window.innerWidth < 640 ? "200px" : "224px"
    searchInput.style.opacity = "1"
    searchInput.focus()
    clearSearch.classList.remove("hidden")
  } else {
    searchContainer.classList.remove("search-open")
    searchToggle.classList.remove("bg-blue-50", "text-blue-600")
    searchInput.style.width = "0px"
    searchInput.style.opacity = "0"
    clearSearch.classList.add("hidden")
    searchQuery = ""
    searchInput.value = ""
    if (currentView === "products") {
      renderProducts()
    }
  }
}

function clearSearch() {
  searchQuery = ""
  searchInput.value = ""
  if (currentView === "products") {
    renderProducts()
  }
  toggleSearch()
}

function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase()
  if (currentView === "products") {
    renderProducts()
  }
}

function handleSearchKeydown(e) {
  if (e.key === "Escape") {
    toggleSearch()
  } else if (e.key === "Enter" && searchQuery.trim()) {
    if (currentView !== "products") {
      showProductSection()
    }
  }
}

// Enhanced Filter and Sort functionality
function toggleFilters() {
  const filterPanel = document.getElementById("filterPanel")
  filterPanel.classList.toggle("hidden")
  if (!filterPanel.classList.contains("hidden")) {
    filterPanel.style.animation = "slideDown 0.4s ease-out"
  }
}

function setupFilterListeners() {
  // Price filters
  document.querySelectorAll(".price-filter").forEach((filter) => {
    filter.addEventListener("change", (e) => {
      const min = Number.parseInt(e.target.dataset.min)
      const max = Number.parseInt(e.target.dataset.max)

      if (e.target.checked) {
        activeFilters.price.push({ min, max })
      } else {
        activeFilters.price = activeFilters.price.filter((f) => f.min !== min || f.max !== max)
      }
      renderProducts()
    })
  })

  // Rating filters
  document.querySelectorAll(".rating-filter").forEach((filter) => {
    filter.addEventListener("change", (e) => {
      const rating = Number.parseInt(e.target.dataset.rating)

      if (e.target.checked) {
        activeFilters.rating.push(rating)
      } else {
        activeFilters.rating = activeFilters.rating.filter((r) => r !== rating)
      }
      renderProducts()
    })
  })

  // Stock filters
  document.querySelectorAll(".stock-filter").forEach((filter) => {
    filter.addEventListener("change", (e) => {
      if (e.target.checked) {
        activeFilters.stock.push("inStock")
      } else {
        activeFilters.stock = activeFilters.stock.filter((s) => s !== "inStock")
      }
      renderProducts()
    })
  })
}

function handleSort(e) {
  sortBy = e.target.value
  renderProducts()
}

function clearFilters() {
  activeFilters = { price: [], rating: [], stock: [] }
  document.querySelectorAll('input[type="checkbox"]').forEach((cb) => (cb.checked = false))
  renderProducts()
  showToast("🔄 Filter zurückgesetzt", "info")
}

// Enhanced Category functionality
function updateCategoryButtons() {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("text-blue-600", "bg-blue-50", "border-blue-200")
    btn.classList.add("text-slate-600", "hover:text-blue-600", "hover:bg-blue-50")

    if (btn.dataset.category === selectedCategory) {
      btn.classList.remove("text-slate-600", "hover:text-blue-600", "hover:bg-blue-50")
      btn.classList.add("text-blue-600", "bg-blue-50", "border-blue-200")
    }
  })
}

// Enhanced Product rendering
function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.cas.includes(searchQuery)
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

    // Price filter
    let matchesPrice = activeFilters.price.length === 0
    if (activeFilters.price.length > 0) {
      matchesPrice = activeFilters.price.some((filter) => product.price >= filter.min && product.price <= filter.max)
    }

    // Rating filter
    let matchesRating = activeFilters.rating.length === 0
    if (activeFilters.rating.length > 0) {
      matchesRating = activeFilters.rating.some((rating) => product.rating >= rating)
    }

    // Stock filter
    let matchesStock = activeFilters.stock.length === 0
    if (activeFilters.stock.includes("inStock")) {
      matchesStock = product.inStock
    }

    return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesStock
  })

  // Apply sorting
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
  }

  // Update product count
  document.getElementById("productCount").textContent = `${filteredProducts.length} Substanzen`

  // Show loading skeleton first
  productGrid.innerHTML = Array(12)
    .fill(0)
    .map(
      () => `
    <div class="animate-pulse">
      <div class="aspect-[4/5] bg-slate-200 rounded-xl mb-3"></div>
      <div class="h-4 bg-slate-200 rounded mb-2"></div>
      <div class="h-3 bg-slate-200 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-slate-200 rounded w-1/2"></div>
    </div>
  `,
    )
    .join("")

  // Render actual products after short delay
  setTimeout(() => {
    productGrid.innerHTML = filteredProducts
      .map(
        (product) => `
        <div class="product-card group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100" data-product-id="${product.id}">
            <div class="relative aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                ${
                  !product.inStock
                    ? '<div class="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"><span class="text-white text-sm font-semibold bg-red-500 px-3 py-1 rounded-full">Ausverkauft</span></div>'
                    : '<div class="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">' +
                      product.purity +
                      "</div>"
                }
                <button 
                    class="wishlist-btn absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
                    data-product-id="${product.id}"
                    onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
                >
                    <svg class="w-4 h-4 ${wishlist.some((item) => item.id === product.id) ? "fill-red-500 text-red-500" : "text-slate-600"}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>
                ${
                  product.inStock
                    ? `<button 
                      class="add-to-cart-btn absolute bottom-3 left-3 right-3 py-2 bg-blue-600 text-white rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 transform translate-y-2 group-hover:translate-y-0"
                      onclick="event.stopPropagation(); addToCart(products.find(p => p.id === '${product.id}'))"
                  >
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      In den Warenkorb
                  </button>`
                    : ""
                }
            </div>
            <div class="p-4 space-y-2">
                <div class="flex justify-between items-start">
                    <h3 class="text-sm font-semibold text-slate-900 line-clamp-2 leading-tight">${product.name}</h3>
                    <span class="text-lg font-bold text-blue-600 ml-2">€${product.price}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${generateStarRating(product.rating)}
                    <span class="text-xs text-slate-500">(${product.reviews})</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="text-slate-500 bg-slate-100 px-2 py-1 rounded-full">${getCategoryName(product.category)}</span>
                    <span class="text-slate-400">CAS: ${product.cas}</span>
                </div>
                ${
                  product.inStock
                    ? `<div class="flex items-center gap-1 text-xs text-green-600">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Auf Lager (${product.stock})
                      </div>`
                    : '<div class="flex items-center gap-1 text-xs text-red-600"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>Ausverkauft</div>'
                }
            </div>
        </div>
      `,
      )
      .join("")

    // Add click listeners to product cards
    document.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.productId
        const product = products.find((p) => p.id === productId)
        openProductModal(product)
      })
    })
  }, 300)
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  let stars = ""

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars +=
      '<svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>'
  }

  // Half star
  if (hasHalfStar) {
    stars +=
      '<svg class="w-3 h-3 text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>'
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars +=
      '<svg class="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>'
  }

  return `<div class="flex items-center">${stars}</div>`
}

function getCategoryName(category) {
  const categoryNames = {
    Stimulants: "Stimulanzien",
    Psychedelics: "Psychedelika",
    Dissociatives: "Dissoziativa",
    Cannabinoids: "Cannabinoide",
  }
  return categoryNames[category] || category
}

// Enhanced Modal functionality
function openProductModal(product) {
  selectedProduct = product

  document.getElementById("modalImage").src = product.image
  document.getElementById("modalImage").alt = product.name
  document.getElementById("modalName").textContent = product.name
  document.getElementById("modalCategory").textContent = getCategoryName(product.category)
  document.getElementById("modalPrice").textContent = `€${product.price}`
  document.getElementById("modalDescription").textContent = product.description
  document.getElementById("modalSku").textContent = `CAS: ${product.cas} | Reinheit: ${product.purity}`
  document.getElementById("modalStock").textContent = product.inStock ? `Auf Lager (${product.stock})` : "Ausverkauft"

  // Rating
  document.getElementById("modalRating").innerHTML = `
    ${generateStarRating(product.rating)}
    <span class="text-sm text-slate-500 ml-2">${product.rating} (${product.reviews} Bewertungen)</span>
  `

  // Reviews
  const reviews = reviewsData[product.id] || []
  document.getElementById("modalReviews").innerHTML = reviews
    .slice(0, 2)
    .map(
      (review) => `
    <div class="border-b border-slate-200 pb-3 last:border-b-0">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-semibold text-slate-900">${review.name}</span>
        <div class="flex items-center">
          ${generateStarRating(review.rating)}
        </div>
      </div>
      <p class="text-sm text-slate-600 leading-relaxed">${review.comment}</p>
      <span class="text-xs text-slate-400 mt-1">${new Date(review.date).toLocaleDateString("de-DE")}</span>
    </div>
  `,
    )
    .join("")

  productModal.classList.remove("hidden")
  productModal.style.animation = "fadeIn 0.4s ease-out"
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modalContent = document.querySelector(".modal-content")
  modalContent.style.animation = "slideDown 0.4s ease-out"

  setTimeout(() => {
    productModal.classList.add("hidden")
    modalContent.style.animation = ""
    document.body.style.overflow = "auto"
    selectedProduct = null
  }, 400)
}

function addToCartFromModal() {
  if (selectedProduct && selectedProduct.inStock) {
    const modalButton = document.getElementById("modalAddToCart")
    animateAddToCart(modalButton, selectedProduct)
    addToCart(selectedProduct)
    closeModal()

    setTimeout(() => {
      openCart()
    }, 800)
  } else {
    showToast("⚠️ Produkt ist nicht verfügbar", "error")
  }
}

function addToWishlistFromModal() {
  if (selectedProduct) {
    toggleWishlist(selectedProduct.id)
  }
}

// Enhanced Wishlist functionality
function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showToast("💔 Aus Wunschliste entfernt", "info")
  } else {
    wishlist.push(product)
    showToast("❤️ Zur Wunschliste hinzugefügt", "success")
  }

  updateWishlistBadge()
  saveWishlist()

  // Update wishlist button in modal if open
  if (selectedProduct && selectedProduct.id === productId) {
    const modalWishlistBtn = document.getElementById("modalAddToWishlist")
    const isInWishlist = wishlist.some((item) => item.id === productId)
    modalWishlistBtn.innerHTML = `
      <svg class="w-5 h-5 ${isInWishlist ? "fill-red-500 text-red-500" : ""}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
      ${isInWishlist ? "Entfernen" : "Merken"}
    `
  }

  // Re-render products to update wishlist buttons
  if (currentView === "products") {
    renderProducts()
  }
}

function openWishlist() {
  renderWishlistItems()
  wishlistDrawer.classList.remove("hidden")
  wishlistDrawer.style.animation = "slideInRight 0.4s ease-out"
  document.body.style.overflow = "hidden"
}

function closeWishlist() {
  const wishlistContent = document.querySelector(".wishlist-content")
  wishlistContent.style.animation = "slideOutRight 0.4s ease-out"

  setTimeout(() => {
    wishlistDrawer.classList.add("hidden")
    wishlistContent.style.animation = ""
    document.body.style.overflow = "auto"
  }, 400)
}

function renderWishlistItems() {
  const wishlistItems = document.getElementById("wishlistItems")

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="text-center py-12">
        <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
        <p class="text-slate-500">Ihre Wunschliste ist leer</p>
        <p class="text-sm text-slate-400 mt-1">Fügen Sie Produkte hinzu, die Sie interessieren</p>
      </div>
    `
    return
  }

  wishlistItems.innerHTML = wishlist
    .map(
      (item) => `
      <div class="wishlist-item flex gap-4 p-4 bg-gradient-to-r from-slate-50 to-red-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300" data-wishlist-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl shadow-sm" />
          <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                  <h3 class="text-sm font-semibold text-slate-900 line-clamp-2">${item.name}</h3>
                  <button
                      class="remove-wishlist-item p-2 hover:bg-red-100 rounded-full ml-2 transition-all duration-300 hover:scale-110 text-red-500"
                      data-product-id="${item.id}"
                  >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                  </button>
              </div>
              <p class="text-lg font-bold text-blue-600 mt-1">€${item.price}</p>
              <div class="flex items-center gap-1 text-xs text-slate-500 mt-1">
                <span class="bg-slate-100 px-2 py-1 rounded-full">${item.purity}</span>
                <span>CAS: ${item.cas}</span>
              </div>
              <div class="flex gap-2 mt-3">
                  <button 
                      class="add-to-cart-from-wishlist flex-1 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-sm"
                      data-product-id="${item.id}"
                      ${!item.inStock ? "disabled" : ""}
                  >
                      ${item.inStock ? "🛒 In den Warenkorb" : "❌ Ausverkauft"}
                  </button>
              </div>
          </div>
      </div>
    `,
    )
    .join("")

  // Add event listeners
  document.querySelectorAll(".remove-wishlist-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.dataset.productId
      toggleWishlist(productId)
      renderWishlistItems()
    })
  })

  document.querySelectorAll(".add-to-cart-from-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.dataset.productId
      const product = products.find((p) => p.id === productId)
      if (product && product.inStock) {
        addToCart(product)
        showToast("🛒 Zum Warenkorb hinzugefügt", "success")
      }
    })
  })
}

function updateWishlistBadge() {
  if (wishlist.length > 0) {
    wishlistBadge.textContent = wishlist.length
    wishlistBadge.classList.remove("hidden")
  } else {
    wishlistBadge.classList.add("hidden")
  }
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

// Enhanced Cart functionality
function addToCart(product, quantity = 1) {
  if (!product.inStock) {
    showToast("⚠️ Produkt ist nicht verfügbar", "error")
    return
  }

  const existingItem = cart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += quantity
    showToast(`📦 Menge erhöht: ${product.name} (${existingItem.quantity}x)`, "success")
  } else {
    cart.push({ ...product, quantity })
    showToast(`✅ Hinzugefügt: ${product.name}`, "success")
  }

  updateCartBadge()
  animateCartBadge()
  saveCart()
}

function removeFromCart(productId) {
  const cartItem = document.querySelector(`[data-cart-id="${productId}"]`)
  if (cartItem) {
    cartItem.style.animation = "slideOutLeft 0.4s ease-out"
    setTimeout(() => {
      cart = cart.filter((item) => item.id !== productId)
      updateCartBadge()
      renderCartItems()
      saveCart()
      showToast("🗑️ Produkt entfernt", "info")
    }, 400)
  }
}

function updateCartQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = newQuantity
      updateCartBadge()
      renderCartItems()
      saveCart()
    }
  }
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (totalItems > 0) {
    cartBadge.textContent = totalItems
    cartBadge.classList.remove("hidden")
  } else {
    cartBadge.classList.add("hidden")
  }
}

function animateCartBadge() {
  const cartToggle = document.getElementById("cartToggle")
  cartToggle.style.animation = "bounce 0.6s ease-out"
  setTimeout(() => {
    cartToggle.style.animation = ""
  }, 600)
}

function animateAddToCart(sourceElement, product) {
  const rect = sourceElement.getBoundingClientRect()
  const cartRect = document.getElementById("cartToggle").getBoundingClientRect()

  addToCartAnimation.style.left = rect.left + rect.width / 2 - 20 + "px"
  addToCartAnimation.style.top = rect.top + rect.height / 2 - 20 + "px"
  addToCartAnimation.classList.remove("hidden")

  // Animate to cart
  const deltaX = cartRect.left + cartRect.width / 2 - rect.left - rect.width / 2
  const deltaY = cartRect.top + cartRect.height / 2 - rect.top - rect.height / 2

  addToCartAnimation.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`
  addToCartAnimation.style.opacity = "0"

  setTimeout(() => {
    addToCartAnimation.classList.add("hidden")
    addToCartAnimation.style.transform = ""
    addToCartAnimation.style.opacity = "1"
  }, 1200)
}

function openCart() {
  renderCartItems()
  cartDrawer.classList.remove("hidden")
  cartDrawer.style.animation = "slideInRight 0.4s ease-out"
  document.body.style.overflow = "hidden"
}

function closeCart() {
  const cartContent = document.querySelector(".cart-content")
  cartContent.style.animation = "slideOutRight 0.4s ease-out"

  setTimeout(() => {
    cartDrawer.classList.add("hidden")
    cartContent.style.animation = ""
    document.body.style.overflow = "auto"
  }, 400)
}

function renderCartItems() {
  const cartItems = document.getElementById("cartItems")
  const cartSubtotal = document.getElementById("cartSubtotal")
  const cartTotal = document.getElementById("cartTotal")
  const cartTotalInline = document.getElementById("cartTotalInline")

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="text-center py-12">
        <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
        </svg>
        <p class="text-slate-500">Ihr Warenkorb ist leer</p>
        <p class="text-sm text-slate-400 mt-1">Fügen Sie Produkte hinzu, um zu beginnen</p>
      </div>
    `
    cartSubtotal.textContent = "€0"
    cartTotal.textContent = "€0"
    cartTotalInline.textContent = "0"
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 100 ? 0 : 9.99
  const total = subtotal + shipping

  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item flex gap-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300" data-cart-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl shadow-sm" />
          <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                  <h3 class="text-sm font-semibold text-slate-900 line-clamp-2">${item.name}</h3>
                  <button
                      class="remove-item p-2 hover:bg-red-100 rounded-full ml-2 transition-all duration-300 hover:scale-110 text-red-500"
                      data-product-id="${item.id}"
                  >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                  </button>
              </div>
              <div class="flex items-center gap-1 text-xs text-slate-500 mt-1">
                <span class="bg-slate-100 px-2 py-1 rounded-full">${item.purity}</span>
                <span>CAS: ${item.cas}</span>
              </div>
              <div class="flex items-center justify-between mt-3">
                  <div class="flex items-center gap-3">
                      <button class="quantity-btn w-8 h-8 flex items-center justify-center border-2 border-slate-300 rounded-lg hover:bg-slate-100 hover:border-blue-400 transition-all duration-300" data-product-id="${item.id}" data-action="decrease">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                      </button>
                      <span class="text-lg font-bold w-8 text-center">${item.quantity}</span>
                      <button class="quantity-btn w-8 h-8 flex items-center justify-center border-2 border-slate-300 rounded-lg hover:bg-slate-100 hover:border-blue-400 transition-all duration-300" data-product-id="${item.id}" data-action="increase">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                      </button>
                  </div>
                  <p class="text-lg font-bold text-blue-600">€${(item.price * item.quantity).toFixed(2)}</p>
              </div>
          </div>
      </div>
    `,
    )
    .join("")

  cartSubtotal.textContent = `€${subtotal.toFixed(2)}`
  cartTotal.textContent = `€${total.toFixed(2)}`
  cartTotalInline.textContent = total.toFixed(2)

  // Add remove item listeners
  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.dataset.productId
      removeFromCart(productId)
    })
  })

  // Add quantity change listeners
  document.querySelectorAll(".quantity-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.dataset.productId
      const action = e.currentTarget.dataset.action
      const item = cart.find((item) => item.id === productId)

      if (item) {
        const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1
        updateCartQuantity(productId, newQuantity)
      }
    })
  })
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Enhanced Checkout functionality
function setupCheckoutListeners() {
  document.getElementById("backToProducts").addEventListener("click", showProductSection)
  document.getElementById("proceedToAddress").addEventListener("click", () => showCheckoutStep(2))
  document.getElementById("backToCart").addEventListener("click", () => showCheckoutStep(1))
  document.getElementById("proceedToPayment").addEventListener("click", () => showCheckoutStep(3))
  document.getElementById("backToAddress").addEventListener("click", () => showCheckoutStep(2))
  document.getElementById("placeOrder").addEventListener("click", placeOrder)
}

function showCheckoutStep(step) {
  currentCheckoutStep = step

  // Hide all steps
  document.getElementById("checkoutStep1").classList.add("hidden")
  document.getElementById("checkoutStep2").classList.add("hidden")
  document.getElementById("checkoutStep3").classList.add("hidden")

  // Show current step with animation
  const currentStepElement = document.getElementById(`checkoutStep${step}`)
  currentStepElement.classList.remove("hidden")
  currentStepElement.style.animation = "fadeIn 0.4s ease-out"

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const stepElement = document.getElementById(`step${i}`)
    if (i <= step) {
      stepElement.className =
        "w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
    } else {
      stepElement.className =
        "w-10 h-10 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-bold"
    }
  }
}

function renderCheckoutItems() {
  const checkoutItems = document.getElementById("checkoutItems")
  const checkoutSubtotal = document.getElementById("checkoutSubtotal")
  const checkoutShipping = document.getElementById("checkoutShipping")
  const checkoutTotal = document.getElementById("checkoutTotal")

  if (cart.length === 0) {
    checkoutItems.innerHTML = `
      <div class="text-center py-8">
        <p class="text-slate-500">Ihr Warenkorb ist leer</p>
        <button onclick="showProductSection()" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Zum Katalog
        </button>
      </div>
    `
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 100 ? 0 : 9.99
  const total = subtotal + shipping

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
      <div class="flex items-center gap-4 p-6 border-2 border-slate-200 rounded-2xl hover:border-blue-300 transition-all duration-300">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl shadow-sm" />
          <div class="flex-1">
              <h3 class="font-semibold text-slate-900">${item.name}</h3>
              <div class="flex items-center gap-2 text-sm text-slate-500 mt-1">
                <span class="bg-slate-100 px-2 py-1 rounded-full">${item.purity}</span>
                <span>Menge: ${item.quantity}</span>
              </div>
          </div>
          <p class="text-xl font-bold text-blue-600">€${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    `,
    )
    .join("")

  checkoutSubtotal.textContent = `€${subtotal.toFixed(2)}`
  checkoutShipping.textContent = shipping === 0 ? "Kostenlos" : `€${shipping.toFixed(2)}`
  checkoutTotal.textContent = `€${total.toFixed(2)}`
}

function placeOrder() {
  // Show loading state
  const orderBtn = document.getElementById("placeOrder")
  const originalText = orderBtn.innerHTML
  orderBtn.innerHTML = `
    <svg class="animate-spin w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Bestellung wird verarbeitet...
  `
  orderBtn.disabled = true

  // Simulate order processing
  showToast("🔄 Bestellung wird verarbeitet...", "info")

  setTimeout(() => {
    // Generate order number
    const orderNumber = "RC-" + Date.now().toString().slice(-6)

    // Clear cart
    cart = []
    updateCartBadge()
    saveCart()

    // Reset button
    orderBtn.innerHTML = originalText
    orderBtn.disabled = false

    // Show success message
    showToast(`🎉 Bestellung ${orderNumber} erfolgreich aufgegeben! Sie erhalten eine Bestätigungs-E-Mail.`, "success")

    // Redirect to products
    setTimeout(() => {
      showProductSection()
    }, 3000)
  }, 3000)
}

// Enhanced Toast notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.className = `fixed top-6 right-6 z-50 p-4 rounded-2xl shadow-2xl border max-w-sm transform transition-all duration-500 translate-x-full opacity-0`

  // Style based on type
  switch (type) {
    case "success":
      toast.classList.add("bg-green-50", "border-green-200", "text-green-800")
      break
    case "error":
      toast.classList.add("bg-red-50", "border-red-200", "text-red-800")
      break
    case "warning":
      toast.classList.add("bg-yellow-50", "border-yellow-200", "text-yellow-800")
      break
    default:
      toast.classList.add("bg-blue-50", "border-blue-200", "text-blue-800")
  }

  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="flex-1">
        <p class="text-sm font-medium leading-relaxed">${message}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="text-current opacity-50 hover:opacity-100 transition-opacity">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `

  document.body.appendChild(toast)

  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-x-full", "opacity-0")
  }, 100)

  // Auto remove
  setTimeout(() => {
    toast.classList.add("translate-x-full", "opacity-0")
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast)
      }
    }, 500)
  }, 5000)
}

// Enhanced Footer functionality
function setupFooter() {
  // Newsletter subscription
  const newsletterForm = document.querySelector(".newsletter-input-group")
  if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]')
    const subscribeBtn = newsletterForm.querySelector("button")

    subscribeBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const email = emailInput.value.trim()

      if (email && isValidEmail(email)) {
        // Show loading state
        const originalText = subscribeBtn.innerHTML
        subscribeBtn.innerHTML = `
          <svg class="animate-spin w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Abonnieren...
        `

        // Simulate subscription
        setTimeout(() => {
          subscribeBtn.innerHTML = `
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Abonniert!
          `
          subscribeBtn.classList.remove("from-blue-600", "to-blue-700", "hover:from-blue-700", "hover:to-blue-800")
          subscribeBtn.classList.add("from-green-600", "to-green-700")

          showToast("📧 Newsletter erfolgreich abonniert!", "success")

          setTimeout(() => {
            emailInput.value = ""
            subscribeBtn.innerHTML = originalText
            subscribeBtn.classList.add("from-blue-600", "to-blue-700", "hover:from-blue-700", "hover:to-blue-800")
            subscribeBtn.classList.remove("from-green-600", "to-green-700")
          }, 3000)
        }, 1500)
      } else {
        // Show error animation
        emailInput.classList.add("border-red-500", "animate-pulse")
        showToast("⚠️ Bitte geben Sie eine gültige E-Mail-Adresse ein.", "error")
        setTimeout(() => {
          emailInput.classList.remove("border-red-500", "animate-pulse")
        }, 2000)
      }
    })

    // Enter key support
    emailInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        subscribeBtn.click()
      }
    })
  }

  // Enhanced social media hover effects
  document.querySelectorAll(".social-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-4px) scale(1.15) rotate(5deg)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) scale(1) rotate(0deg)"
    })
  })

  // Enhanced footer links hover effects
  document.querySelectorAll(".footer-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(6px)"
    })

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateX(0)"
    })
  })
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Initialize footer when DOM is loaded
document.addEventListener("DOMContentLoaded", setupFooter)
