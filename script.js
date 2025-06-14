// Product data with enhanced information
const products = [
  {
    id: "p1",
    name: "Minimal Desk Lamp",
    description:
      "Eine elegante und moderne Schreibtischlampe mit einstellbarer Helligkeit und Farbtemperatur. Perfekt für produktives Arbeiten.",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Lighting",
    rating: 4.5,
    reviews: 23,
    stock: 15,
    inStock: true,
  },
  {
    id: "p2",
    name: "Ceramic Coffee Set",
    description:
      "Handgefertigtes Keramik-Kaffee-Set mit 4 Tassen und passendem Pour-Over-Dripper. Für den perfekten Kaffeegenuss.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Kitchenware",
    rating: 4.8,
    reviews: 41,
    stock: 8,
    inStock: true,
  },
  {
    id: "p3",
    name: "Linen Throw Pillow",
    description: "Weiches Leinen-Dekokissen mit minimalistischem Musterdesign. Bringt Gemütlichkeit in jeden Raum.",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Home Decor",
    rating: 4.2,
    reviews: 18,
    stock: 25,
    inStock: true,
  },
  {
    id: "p4",
    name: "Wooden Wall Clock",
    description: "Moderne Holz-Wanduhr mit leisem Uhrwerk. Zeitloses Design trifft auf Funktionalität.",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Home Decor",
    rating: 4.6,
    reviews: 32,
    stock: 12,
    inStock: true,
  },
  {
    id: "p5",
    name: "Concrete Planter",
    description: "Minimalistischer Beton-Pflanztopf perfekt für Sukkulenten. Industrielles Design für moderne Räume.",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Plants",
    rating: 4.3,
    reviews: 27,
    stock: 0,
    inStock: false,
  },
  {
    id: "p6",
    name: "Glass Vase Set",
    description: "Set aus 3 minimalistischen Glasvasen in verschiedenen Größen. Perfekt für frische Blumen.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Home Decor",
    rating: 4.7,
    reviews: 35,
    stock: 18,
    inStock: true,
  },
  {
    id: "p7",
    name: "Bamboo Organizer",
    description: "Schreibtisch-Organizer aus nachhaltigem Bambus. Ordnung und Nachhaltigkeit vereint.",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Office",
    rating: 4.4,
    reviews: 19,
    stock: 22,
    inStock: true,
  },
  {
    id: "p9",
    name: "Marble Coasters",
    description: "Set aus 4 Marmor-Untersetzern mit Kork-Rückseite. Eleganter Schutz für Ihre Möbel.",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Kitchenware",
    rating: 4.1,
    reviews: 14,
    stock: 30,
    inStock: true,
  },
  {
    id: "p10",
    name: "Brass Bookends",
    description: "Moderne geometrische Messing-Buchstützen, 2er-Set. Funktional und dekorativ zugleich.",
    price: 68,
    image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Office",
    rating: 4.5,
    reviews: 21,
    stock: 9,
    inStock: true,
  },
  {
    id: "p11",
    name: "Ceramic Plant Pot",
    description: "Handgefertigter Keramik-Pflanztopf mit Drainageloch. Ideal für Zimmerpflanzen aller Art.",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Plants",
    rating: 4.6,
    reviews: 28,
    stock: 16,
    inStock: true,
  },
  {
    id: "p12",
    name: "Wall Mirror",
    description: "Runder Wandspiegel mit minimalem Metallrahmen. Vergrößert optisch jeden Raum.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Home Decor",
    rating: 4.9,
    reviews: 52,
    stock: 7,
    inStock: true,
  },
]

// Sample reviews data
const reviewsData = {
  p1: [
    { name: "Anna M.", rating: 5, comment: "Perfekte Beleuchtung für meinen Arbeitsplatz!", date: "2024-01-15" },
    { name: "Thomas K.", rating: 4, comment: "Sehr gute Qualität, schnelle Lieferung.", date: "2024-01-10" },
  ],
  p2: [
    { name: "Sarah L.", rating: 5, comment: "Wunderschönes Set, der Kaffee schmeckt fantastisch!", date: "2024-01-12" },
    { name: "Michael R.", rating: 5, comment: "Hochwertige Verarbeitung, sehr zufrieden.", date: "2024-01-08" },
  ],
}

// Application state
let cart = []
let wishlist = []
let selectedProduct = null
let searchQuery = ""
let selectedCategory = "All"
let isSearchOpen = false
let currentView = "hero" // "hero", "products", "checkout"
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
})

// Cookie Banner
function setupCookieBanner() {
  const cookieBanner = document.getElementById("cookieBanner")
  const acceptCookies = document.getElementById("acceptCookies")
  const cookieSettings = document.getElementById("cookieSettings")

  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => {
      cookieBanner.classList.add("cookie-banner-show")
    }, 2000)
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true")
    cookieBanner.classList.remove("cookie-banner-show")
  })

  cookieSettings.addEventListener("click", () => {
    showToast("Cookie-Einstellungen werden in Kürze verfügbar sein.", "info")
  })
}

// Back to Top Button
function setupBackToTop() {
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("hidden")
      backToTop.classList.add("back-to-top-show")
    } else {
      backToTop.classList.add("back-to-top-hide")
      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTop.classList.add("hidden")
        }
      }, 300)
    }
  })

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// Live Chat
function setupLiveChat() {
  const chatToggle = document.getElementById("chatToggle")
  const chatWindow = document.getElementById("chatWindow")
  const chatClose = document.getElementById("chatClose")
  const chatSend = document.getElementById("chatSend")
  const chatInput = document.getElementById("chatInput")
  const chatMessages = document.getElementById("chatMessages")

  chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden")
  })

  chatClose.addEventListener("click", () => {
    chatWindow.classList.add("hidden")
  })

  function sendMessage(message, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `flex ${isUser ? "justify-end" : ""} chat-message ${isUser ? "user" : ""}`

    messageDiv.innerHTML = `
      <div class="bg-${isUser ? "blue-600 text-white" : "zinc-100 dark:bg-zinc-800"} rounded-lg p-3 max-w-xs">
        <p class="text-sm">${message}</p>
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

      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "Vielen Dank für Ihre Nachricht! Wie kann ich Ihnen helfen?",
          "Gerne helfe ich Ihnen weiter. Was möchten Sie wissen?",
          "Haben Sie Fragen zu unseren Produkten oder Ihrer Bestellung?",
        ]
        sendMessage(responses[Math.floor(Math.random() * responses.length)])
      }, 1000)
    }
  })

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      chatSend.click()
    }
  })
}

// User Management
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

// Navigation functions
function showHeroSection() {
  currentView = "hero"
  heroSection.classList.remove("hidden")
  productSection.classList.add("hidden")
  checkoutSection.classList.add("hidden")
  categoryNav.classList.add("hidden")
}

function showProductSection() {
  currentView = "products"
  heroSection.classList.add("hidden")
  productSection.classList.remove("hidden")
  checkoutSection.classList.add("hidden")
  categoryNav.classList.remove("hidden")
  productSection.classList.add("page-transition")
  renderProducts()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function showCheckoutSection() {
  currentView = "checkout"
  heroSection.classList.add("hidden")
  productSection.classList.add("hidden")
  checkoutSection.classList.remove("hidden")
  categoryNav.classList.add("hidden")
  renderCheckoutItems()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Event listeners
function setupEventListeners() {
  // Navigation
  document.getElementById("homeBtn").addEventListener("click", showHeroSection)
  document.getElementById("shopNowBtn").addEventListener("click", showProductSection)

  // Search functionality
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

  // Escape key handling
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

// Authentication Modals
function setupAuthModals() {
  const loginModal = document.getElementById("loginModal")
  const registerModal = document.getElementById("registerModal")
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  // Modal close buttons
  document.getElementById("loginModalClose").addEventListener("click", () => {
    loginModal.classList.add("hidden")
  })

  document.getElementById("registerModalClose").addEventListener("click", () => {
    registerModal.classList.add("hidden")
  })

  // Switch between modals
  document.getElementById("switchToRegister").addEventListener("click", () => {
    loginModal.classList.add("hidden")
    registerModal.classList.remove("hidden")
  })

  document.getElementById("switchToLogin").addEventListener("click", () => {
    registerModal.classList.add("hidden")
    loginModal.classList.remove("hidden")
  })

  // Form submissions
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(loginForm)
    const email = formData.get("email") || loginForm.querySelector('input[type="email"]').value

    // Simulate login
    currentUser = {
      name: "Max Mustermann",
      email: email,
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    updateUserInterface()
    loginModal.classList.add("hidden")
    showToast("Erfolgreich angemeldet!", "success")
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(registerForm)
    const firstName = registerForm.querySelector('input[type="text"]').value
    const lastName = registerForm.querySelectorAll('input[type="text"]')[1].value
    const email = registerForm.querySelector('input[type="email"]').value

    // Simulate registration
    currentUser = {
      name: `${firstName} ${lastName}`,
      email: email,
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    updateUserInterface()
    registerModal.classList.add("hidden")
    showToast("Erfolgreich registriert und angemeldet!", "success")
  })
}

function openLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden")
}

function openRegisterModal() {
  document.getElementById("registerModal").classList.remove("hidden")
}

function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu")
  userMenu.classList.toggle("hidden")
}

function logout() {
  currentUser = null
  localStorage.removeItem("currentUser")
  updateUserInterface()
  toggleUserMenu()
  showToast("Erfolgreich abgemeldet!", "success")
}

// Search functionality
function toggleSearch() {
  isSearchOpen = !isSearchOpen
  const searchToggle = document.getElementById("searchToggle")
  const clearSearch = document.getElementById("clearSearch")

  if (isSearchOpen) {
    searchContainer.classList.add("open")
    searchToggle.classList.add("bg-zinc-100", "dark:bg-zinc-800")
    searchInput.focus()
    clearSearch.classList.remove("hidden")
  } else {
    searchContainer.classList.remove("open")
    searchToggle.classList.remove("bg-zinc-100", "dark:bg-zinc-800")
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
  }
}

// Filter and Sort functionality
function toggleFilters() {
  const filterPanel = document.getElementById("filterPanel")
  filterPanel.classList.toggle("hidden")
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
}

// Category functionality
function updateCategoryButtons() {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.category === selectedCategory) {
      btn.className =
        "category-btn active whitespace-nowrap transition-colors text-zinc-900 dark:text-white text-sm font-medium"
    } else {
      btn.className =
        "category-btn whitespace-nowrap transition-colors text-zinc-600 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white"
    }
  })
}

// Product rendering
function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery)
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
  document.getElementById("productCount").textContent = `${filteredProducts.length} Produkte`

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
      <div class="product-card group cursor-pointer" data-product-id="${product.id}">
          <div class="relative aspect-[4/5] bg-white dark:bg-zinc-900 rounded-md overflow-hidden">
              <img
                  src="${product.image}"
                  alt="${product.name}"
                  class="product-image w-full h-full object-cover object-center"
              />
              ${!product.inStock ? '<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><span class="text-white text-sm font-medium">Ausverkauft</span></div>' : ""}
              <button 
                  class="wishlist-btn absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/90 dark:hover:bg-black/60"
                  data-product-id="${product.id}"
                  onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
              >
                  <svg class="w-4 h-4 ${wishlist.some((item) => item.id === product.id) ? "fill-red-500 text-red-500" : "text-zinc-600 dark:text-zinc-400"}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
              </button>
          </div>
          <div class="mt-2 space-y-1">
              <h3 class="text-sm font-medium truncate">${product.name}</h3>
              <div class="flex items-center gap-1">
                  ${generateStarRating(product.rating)}
                  <span class="text-xs text-zinc-500 dark:text-zinc-400">(${product.reviews})</span>
              </div>
              <div class="flex justify-between items-center">
                  <p class="text-sm font-semibold">€${product.price}</p>
                  <p class="text-xs text-zinc-400 dark:text-zinc-500">${getCategoryName(product.category)}</p>
              </div>
              ${
                product.inStock
                  ? `<p class="text-xs text-green-600">Auf Lager (${product.stock})</p>`
                  : '<p class="text-xs text-red-600">Ausverkauft</p>'
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
      '<svg class="w-3 h-3 text-zinc-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>'
  }

  return `<div class="flex items-center">${stars}</div>`
}

function getCategoryName(category) {
  const categoryNames = {
    Lighting: "Beleuchtung",
    Kitchenware: "Küche",
    "Home Decor": "Deko",
    Plants: "Pflanzen",
    Office: "Büro",
  }
  return categoryNames[category] || category
}

// Modal functionality
function openProductModal(product) {
  selectedProduct = product

  document.getElementById("modalImage").src = product.image
  document.getElementById("modalImage").alt = product.name
  document.getElementById("modalName").textContent = product.name
  document.getElementById("modalCategory").textContent = getCategoryName(product.category)
  document.getElementById("modalPrice").textContent = `€${product.price}`
  document.getElementById("modalDescription").textContent = product.description
  document.getElementById("modalSku").textContent = `SKU: ${product.id}`
  document.getElementById("modalStock").textContent = product.inStock ? `Auf Lager (${product.stock})` : "Ausverkauft"

  // Rating
  document.getElementById("modalRating").innerHTML = `
    ${generateStarRating(product.rating)}
    <span class="text-sm text-zinc-500 dark:text-zinc-400 ml-1">${product.rating} (${product.reviews} Bewertungen)</span>
  `

  // Reviews
  const reviews = reviewsData[product.id] || []
  document.getElementById("modalReviews").innerHTML = reviews
    .slice(0, 2)
    .map(
      (review) => `
    <div class="border-b border-zinc-200 dark:border-zinc-800 pb-2 last:border-b-0">
      <div class="flex items-center justify-between mb-1">
        <span class="text-sm font-medium">${review.name}</span>
        <div class="flex items-center">
          ${generateStarRating(review.rating)}
        </div>
      </div>
      <p class="text-sm text-zinc-600 dark:text-zinc-400">${review.comment}</p>
    </div>
  `,
    )
    .join("")

  productModal.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modalContent = document.querySelector(".modal-content")
  modalContent.classList.add("closing")

  setTimeout(() => {
    productModal.classList.add("hidden")
    modalContent.classList.remove("closing")
    document.body.style.overflow = "auto"
    selectedProduct = null
  }, 300)
}

function addToCartFromModal() {
  if (selectedProduct && selectedProduct.inStock) {
    const modalButton = document.getElementById("modalAddToCart")
    animateAddToCart(modalButton, selectedProduct)
    addToCart(selectedProduct)
    closeModal()

    setTimeout(() => {
      openCart()
    }, 500)
  } else {
    showToast("Produkt ist nicht verfügbar", "error")
  }
}

function addToWishlistFromModal() {
  if (selectedProduct) {
    toggleWishlist(selectedProduct.id)
  }
}

// Wishlist functionality
function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showToast("Aus Wunschliste entfernt", "info")
  } else {
    wishlist.push(product)
    showToast("Zur Wunschliste hinzugefügt", "success")
  }

  updateWishlistBadge()
  saveWishlist()

  // Update wishlist button in modal if open
  if (selectedProduct && selectedProduct.id === productId) {
    const modalWishlistBtn = document.getElementById("modalAddToWishlist")
    const isInWishlist = wishlist.some((item) => item.id === productId)
    modalWishlistBtn.innerHTML = `
      <svg class="w-4 h-4 inline mr-1 ${isInWishlist ? "fill-red-500 text-red-500" : ""}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  document.body.style.overflow = "hidden"
}

function closeWishlist() {
  const wishlistContent = document.querySelector(".wishlist-content")
  wishlistContent.classList.add("closing")

  setTimeout(() => {
    wishlistDrawer.classList.add("hidden")
    wishlistContent.classList.remove("closing")
    document.body.style.overflow = "auto"
  }, 300)
}

function renderWishlistItems() {
  const wishlistItems = document.getElementById("wishlistItems")

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = '<p class="text-center text-zinc-500 dark:text-zinc-400">Ihre Wunschliste ist leer</p>'
    return
  }

  wishlistItems.innerHTML = wishlist
    .map(
      (item) => `
      <div class="wishlist-item flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg" data-wishlist-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md" />
          <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                  <h3 class="text-sm font-medium truncate">${item.name}</h3>
                  <button
                      class="remove-wishlist-item p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full ml-2 transition-colors"
                      data-product-id="${item.id}"
                  >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                  </button>
              </div>
              <p class="text-sm font-medium mt-1">€${item.price}</p>
              <div class="flex gap-2 mt-2">
                  <button 
                      class="add-to-cart-from-wishlist px-3 py-1 text-xs bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                      data-product-id="${item.id}"
                      ${!item.inStock ? "disabled" : ""}
                  >
                      ${item.inStock ? "In den Warenkorb" : "Ausverkauft"}
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
        showToast("Zum Warenkorb hinzugefügt", "success")
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

// Cart functionality
function addToCart(product, quantity = 1) {
  if (!product.inStock) {
    showToast("Produkt ist nicht verfügbar", "error")
    return
  }

  const existingItem = cart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({ ...product, quantity })
  }

  updateCartBadge()
  animateCartBadge()
  saveCart()
  showToast("Zum Warenkorb hinzugefügt", "success")
}

function removeFromCart(productId) {
  const cartItem = document.querySelector(`[data-cart-id="${productId}"]`)
  if (cartItem) {
    cartItem.classList.add("removing")
    setTimeout(() => {
      cart = cart.filter((item) => item.id !== productId)
      updateCartBadge()
      renderCartItems()
      saveCart()
    }, 300)
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
  cartToggle.classList.add("cart-bounce")
  setTimeout(() => {
    cartToggle.classList.remove("cart-bounce")
  }, 600)
}

function animateAddToCart(sourceElement, product) {
  const rect = sourceElement.getBoundingClientRect()
  const cartRect = document.getElementById("cartToggle").getBoundingClientRect()

  addToCartAnimation.style.left = rect.left + rect.width / 2 - 16 + "px"
  addToCartAnimation.style.top = rect.top + rect.height / 2 - 16 + "px"
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
  }, 1000)
}

function openCart() {
  renderCartItems()
  cartDrawer.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeCart() {
  const cartContent = document.querySelector(".cart-content")
  cartContent.classList.add("closing")

  setTimeout(() => {
    cartDrawer.classList.add("hidden")
    cartContent.classList.remove("closing")
    document.body.style.overflow = "auto"
  }, 300)
}

function renderCartItems() {
  const cartItems = document.getElementById("cartItems")
  const cartSubtotal = document.getElementById("cartSubtotal")
  const cartTotal = document.getElementById("cartTotal")
  const cartTotalInline = document.getElementById("cartTotalInline")

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center text-zinc-500 dark:text-zinc-400">Ihr Warenkorb ist leer</p>'
    cartSubtotal.textContent = "€0"
    cartTotal.textContent = "€0"
    cartTotalInline.textContent = "0"
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 50 ? 0 : 4.99
  const total = subtotal + shipping

  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg" data-cart-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md" />
          <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                  <h3 class="text-sm font-medium truncate">${item.name}</h3>
                  <button
                      class="remove-item p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full ml-2 transition-colors"
                      data-product-id="${item.id}"
                  >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                  </button>
              </div>
              <div class="flex items-center justify-between mt-2">
                  <div class="flex items-center gap-2">
                      <button class="quantity-btn w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" data-product-id="${item.id}" data-action="decrease">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                      </button>
                      <span class="text-sm font-medium w-8 text-center">${item.quantity}</span>
                      <button class="quantity-btn w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" data-product-id="${item.id}" data-action="increase">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                      </button>
                  </div>
                  <p class="text-sm font-semibold">€${(item.price * item.quantity).toFixed(2)}</p>
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

// Checkout functionality
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

  // Show current step
  document.getElementById(`checkoutStep${step}`).classList.remove("hidden")

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const stepElement = document.getElementById(`step${i}`)
    if (i <= step) {
      stepElement.className =
        "w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full flex items-center justify-center text-sm font-medium"
    } else {
      stepElement.className =
        "w-8 h-8 bg-zinc-300 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full flex items-center justify-center text-sm font-medium"
    }
  }
}

function renderCheckoutItems() {
  const checkoutItems = document.getElementById("checkoutItems")
  const checkoutSubtotal = document.getElementById("checkoutSubtotal")
  const checkoutShipping = document.getElementById("checkoutShipping")
  const checkoutTotal = document.getElementById("checkoutTotal")

  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p class="text-center text-zinc-500 dark:text-zinc-400">Ihr Warenkorb ist leer</p>'
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 50 ? 0 : 4.99
  const total = subtotal + shipping

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
      <div class="flex items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md" />
          <div class="flex-1">
              <h3 class="font-medium">${item.name}</h3>
              <p class="text-sm text-zinc-600 dark:text-zinc-400">Menge: ${item.quantity}</p>
          </div>
          <p class="font-semibold">€${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    `,
    )
    .join("")

  checkoutSubtotal.textContent = `€${subtotal.toFixed(2)}`
  checkoutShipping.textContent = shipping === 0 ? "Kostenlos" : `€${shipping.toFixed(2)}`
  checkoutTotal.textContent = `€${total.toFixed(2)}`
}

function placeOrder() {
  // Simulate order processing
  showToast("Bestellung wird verarbeitet...", "info")

  setTimeout(() => {
    // Clear cart
    cart = []
    updateCartBadge()
    saveCart()

    // Show success message
    showToast("Bestellung erfolgreich aufgegeben! Sie erhalten eine Bestätigungs-E-Mail.", "success")

    // Redirect to products
    setTimeout(() => {
      showProductSection()
    }, 2000)
  }, 2000)
}

// Toast notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.style.opacity = "0"
    toast.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

// Footer functionality
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
        // Simulate newsletter subscription
        subscribeBtn.innerHTML = `
          <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Abonniert!
        `
        subscribeBtn.classList.add("bg-green-600", "hover:bg-green-700")
        subscribeBtn.classList.remove("bg-zinc-900", "hover:bg-zinc-800")

        setTimeout(() => {
          emailInput.value = ""
          subscribeBtn.innerHTML = `
            <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Abonnieren
          `
          subscribeBtn.classList.remove("bg-green-600", "hover:bg-green-700")
          subscribeBtn.classList.add("bg-zinc-900", "hover:bg-zinc-800")
        }, 2000)
      } else {
        // Show error animation
        emailInput.classList.add("border-red-500", "animate-pulse")
        setTimeout(() => {
          emailInput.classList.remove("border-red-500", "animate-pulse")
        }, 1000)
      }
    })
  }

  // Social media hover effects
  document.querySelectorAll(".social-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-2px) scale(1.1)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) scale(1)"
    })
  })

  // Footer links hover effects
  document.querySelectorAll(".footer-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(4px)"
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
