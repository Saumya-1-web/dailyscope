
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  // ---------- ARTICLE DATA ----------
  // Illustrative demo stories. Replace these objects with verified
  // editorial content when publishing a real news website.

  const articles = [
    {
      id: 1,
      category: "Tech",
      title: "The next wave of AI is changing how people work",
      snippet:
        "New AI tools are moving beyond chatbots, helping teams automate routine work and focus on more complex problems.",
      author: "Maya Sharma",
      hoursAgo: 2,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
      alt: "Abstract artificial intelligence visualization",
      trending: 1,
      body: [
        "Artificial intelligence is entering a new phase. Rather than simply answering questions, newer tools are increasingly designed to assist with multi-step tasks, summarize information, and support everyday decisions.",
        "For businesses, the opportunity is practical: reduce repetitive work, make information easier to access, and give employees more time for tasks that require judgment and creativity. The results depend on how thoughtfully these systems are introduced.",
        "Experts continue to emphasize the importance of accuracy, transparency, and human oversight. AI-generated output can contain mistakes, so important decisions still require verification and accountability.",
        "The next stage of adoption will likely be shaped not only by technical progress, but also by how well organizations train their teams, protect data, and measure real-world outcomes."
      ]
    },
    {
      id: 2,
      category: "Politics",
      title: "Cities rethink public transport as urban populations grow",
      snippet:
        "Urban planners are exploring better-connected bus and rail networks to make daily commutes more reliable and affordable.",
      author: "Arjun Mehta",
      hoursAgo: 4,
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
      alt: "Busy modern city skyline",
      trending: 2,
      body: [
        "Growing cities face a familiar challenge: how to move more people without making roads increasingly crowded. Transport planning is therefore becoming a central part of conversations about housing, employment, and urban development.",
        "Integrated ticketing, reliable bus services, safer walking routes, and well-connected rail systems can make public transport a more convenient choice. Planning around commuters' actual needs is as important as building new infrastructure.",
        "Local officials must also consider accessibility, operating costs, and the needs of residents who live far from major employment centers.",
        "Long-term progress depends on sustained investment, clear performance targets, and meaningful public consultation."
      ]
    },
    {
      id: 3,
      category: "Sports",
      title: "A new generation of athletes is changing the training game",
      snippet:
        "Performance data, recovery routines, and smarter coaching methods are reshaping how competitors prepare for major events.",
      author: "Kabir Singh",
      hoursAgo: 5,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
      alt: "Athlete running on a track",
      trending: 3,
      body: [
        "Modern sports training combines traditional coaching with detailed information about workload, movement, and recovery. Used carefully, these insights can help athletes and coaches understand how training affects performance.",
        "Technology is only one part of the picture. Sleep, nutrition, mental preparation, and consistent practice remain important foundations of athletic development.",
        "Coaches increasingly need to balance measurement with individual judgment. A number on a screen cannot fully describe how an athlete feels or responds to pressure.",
        "The strongest programs use data to support a clear plan rather than allowing technology to replace the relationship between athletes and their coaches."
      ]
    },
    {
      id: 4,
      category: "Entertainment",
      title: "Independent filmmakers find new audiences online",
      snippet:
        "Digital distribution is opening more doors for small productions, niche genres, and first-time storytellers.",
      author: "Rhea Kapoor",
      hoursAgo: 7,
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
      alt: "Cinema seats facing a movie screen",
      trending: 4,
      body: [
        "Independent filmmakers have more ways to reach viewers than ever before. Online releases, festival platforms, and social media communities can help smaller productions find audiences beyond traditional distribution channels.",
        "Discoverability remains a challenge. A large catalogue does not automatically mean that viewers will find a film, so filmmakers often combine distribution with community building and direct promotion.",
        "For emerging creators, smaller productions can provide room to experiment with unusual formats, personal stories, and new visual approaches.",
        "The long-term opportunity lies in building sustainable relationships between creators and audiences, not simply in achieving a single viral moment."
      ]
    },
    {
      id: 5,
      category: "Politics",
      title: "Why local government decisions affect everyday life",
      snippet:
        "From water supply to neighbourhood roads, municipal decisions can shape the services residents depend on most.",
      author: "Ananya Rao",
      hoursAgo: 9,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      alt: "People working together in a civic-style office",
      trending: 5,
      body: [
        "Local government is often closest to the services residents experience every day. Street maintenance, waste collection, water systems, public spaces, and local planning can all influence quality of life.",
        "Understanding how these decisions are made helps residents ask better questions about budgets, priorities, and timelines. Public meetings and official notices can offer useful starting points.",
        "Local bodies work within financial and legal constraints, and responsibilities may be shared across multiple levels of government.",
        "Clear communication and accessible public information make it easier for communities to follow decisions and participate in local planning."
      ]
    },
    {
      id: 6,
      category: "Tech",
      title: "Digital privacy becomes a bigger part of everyday technology",
      snippet:
        "Consumers are paying closer attention to the information apps collect and the choices they offer about personal data.",
      author: "Dev Malhotra",
      hoursAgo: 12,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      alt: "Laptop and digital workspace",
      trending: 6,
      body: [
        "As more everyday activities move online, people leave information across apps, websites, and connected devices. That makes clear privacy settings and understandable data policies increasingly important.",
        "Consumers can take practical steps by reviewing app permissions, using unique passwords, enabling multifactor authentication, and removing accounts they no longer need.",
        "Companies also have responsibilities. Collecting less information, explaining its use in plain language, and offering meaningful controls can improve trust.",
        "Privacy is not a single setting. It is an ongoing process involving product design, security practices, regulation, and informed choices."
      ]
    },
    {
      id: 7,
      category: "Sports",
      title: "Community sports programs create opportunities for young players",
      snippet:
        "Accessible coaching and safe places to play can help more children discover sport and develop confidence.",
      author: "Ishaan Verma",
      hoursAgo: 15,
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=85",
      alt: "Football resting on a sports field",
      trending: 7,
      body: [
        "Community sports programs can give young people a place to build skills, make friends, and learn how to work toward a shared goal.",
        "Cost, transport, equipment, and access to safe facilities can prevent some children from taking part. Local partnerships can help reduce these barriers.",
        "Qualified coaches and clear safeguarding practices are important parts of any youth program. The environment should support learning and enjoyment as well as competition.",
        "Sustained participation often depends on welcoming spaces, consistent schedules, and opportunities for children with different experience levels."
      ]
    },
    {
      id: 8,
      category: "Entertainment",
      title: "Why live music continues to bring communities together",
      snippet:
        "Concerts and local performances offer artists and audiences a shared experience that streaming cannot fully reproduce.",
      author: "Nisha Das",
      hoursAgo: 18,
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
      alt: "Crowd enjoying a live music performance",
      trending: 8,
      body: [
        "Recorded music makes listening possible almost anywhere, but live performances create a different kind of connection. Artists and audiences share the same moment, and every performance has its own atmosphere.",
        "Local venues can also support surrounding businesses and provide a stage for emerging performers. Smaller shows often give audiences a chance to discover artists before they reach larger spaces.",
        "Organizers must balance ticket prices, venue costs, accessibility, and safe crowd management.",
        "For many communities, live music remains both an entertainment experience and an important part of local cultural life."
      ]
    },
    {
      id: 9,
      category: "Politics",
      title: "Public libraries adapt to a more digital world",
      snippet:
        "Libraries are expanding beyond books to offer digital access, learning resources, and spaces for community activities.",
      author: "Priya Nair",
      hoursAgo: 22,
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
      alt: "Rows of books in a library",
      trending: 9,
      body: [
        "Libraries continue to serve readers while adapting to changing community needs. Many now provide access to digital resources, computer facilities, study areas, and educational events.",
        "For people without reliable internet access or a quiet place to work, these services can be especially valuable.",
        "Library staff also help visitors navigate information, discover resources, and develop digital skills. That role matters in an environment where information can be abundant but difficult to assess.",
        "Future planning will depend on local budgets, community feedback, and the ability to keep both physical collections and digital services accessible."
      ]
    },
    {
      id: 10,
      category: "Tech",
      title: "Small businesses explore practical uses for automation",
      snippet:
        "Simple digital tools can help smaller teams organize routine tasks, communicate with customers, and manage information.",
      author: "Rahul Khanna",
      hoursAgo: 26,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      alt: "Team collaborating at a workplace",
      trending: 10,
      body: [
        "Small businesses often operate with limited time and staff. Automation tools can help manage appointments, organize customer inquiries, and reduce repetitive administrative work.",
        "The best starting point is usually a clearly defined problem. A tool should save time or improve service in a way that can be measured, rather than adding complexity for its own sake.",
        "Owners should consider training, privacy, recurring costs, and how easy it is to return to manual processes if a system fails.",
        "Careful experimentation can help businesses identify which tasks benefit from automation while keeping human judgment at the center of customer relationships."
      ]
    },
    {
      id: 11,
      category: "Sports",
      title: "The science of recovery is becoming part of everyday training",
      snippet:
        "Rest, hydration, and appropriate training loads are gaining attention alongside performance and competition.",
      author: "Aarav Joshi",
      hoursAgo: 30,
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
      alt: "Athlete training in a swimming pool",
      trending: 11,
      body: [
        "Training plans are increasingly built around the idea that improvement requires both effort and recovery. Rest gives the body time to adapt to physical demands.",
        "Recovery is individual. Training history, age, sleep, nutrition, and the intensity of exercise can all affect how much rest is appropriate.",
        "Athletes and recreational exercisers should pay attention to persistent pain or unusual fatigue and seek qualified advice when needed.",
        "A sustainable routine is usually more useful than an extreme short-term program that is difficult to maintain."
      ]
    },
    {
      id: 12,
      category: "Entertainment",
      title: "Photography exhibitions invite viewers to see familiar places differently",
      snippet:
        "Local galleries are using visual storytelling to explore city life, changing landscapes, and personal histories.",
      author: "Meera Sethi",
      hoursAgo: 34,
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85",
      alt: "Camera used for photography",
      trending: 12,
      body: [
        "Photography can document a place while also asking viewers to reconsider what they think they know about it. A carefully arranged exhibition can connect personal memories with wider social changes.",
        "Local exhibitions often provide emerging photographers with opportunities to share work and meet audiences in person.",
        "Curators shape the experience through image selection, captions, sequencing, and the physical arrangement of photographs.",
        "For visitors, taking time to look closely can reveal details that might otherwise disappear into the background of everyday life."
      ]
    }
  ];

  // ---------- BREAKING TICKER ----------
  const breakingHeadlines = [
    "Technology leaders discuss the future of responsible AI",
    "Cities explore smarter and more accessible public transport",
    "Young athletes bring fresh energy to community sports"
  ];

  const tickerTrack = $("#tickerTrack");

  if (tickerTrack) {
    // Duplicate the sequence so the scrolling animation loops smoothly.
    const tickerItems = [...breakingHeadlines, ...breakingHeadlines];

    tickerTrack.innerHTML = tickerItems.map((headline, index) => `
      <span class="ticker-item" ${index >= breakingHeadlines.length
        ? 'aria-hidden="true"' : ""}>
        ${escapeHTML(headline)}
      </span>
    `).join("");
  }

  // ---------- STATE ----------
  let activeCategory = "Home";
  let searchTerm = "";
  let modalArticle = null;
  let previousFocus = null;
  let toastTimer = null;

  const articleGrid = $("#articleGrid");
  const heroContainer = $("#heroArticle");
  const trendingContainer = $("#trendingList");
  const modal = $("#articleModal");
  const modalDialog = $(".article-modal", modal);
  const searchInput = $("#searchInput");
  const themeToggle = $("#themeToggle");

  // ---------- SAFE HELPERS ----------
  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function imageFallback(image, altText) {
    image.addEventListener("error", () => {
      image.removeAttribute("src");
      image.alt = altText || "Image unavailable";
      image.classList.add("image-unavailable");
    }, { once: true });
  }

  function articleDate(hoursAgo) {
    const date = new Date(Date.now() - hoursAgo * 60 * 60 * 1000);
    return date;
  }

  function relativeDate(hoursAgo) {
    if (hoursAgo < 1) return "Just now";
    if (hoursAgo < 24) return `${hoursAgo}h ago`;

    const days = Math.floor(hoursAgo / 24);
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  }

  function formattedDate(hoursAgo) {
    return articleDate(hoursAgo).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function authorInitial(author) {
    return author.trim().charAt(0).toUpperCase() || "D";
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // ---------- THEME ----------
  function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {
      themeToggle.textContent = isDark ? "☀" : "☾";
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.title = isDark ? "Light mode" : "Dark mode";
    }

    try {
      localStorage.setItem("dailyScopeTheme", isDark ? "dark" : "light");
    } catch (error) {
      // The theme still works when storage is unavailable.
    }
  }

  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("dailyScopeTheme");
  } catch (error) {
    savedTheme = null;
  }

  const initialDarkMode = savedTheme
    ? savedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(initialDarkMode);

  themeToggle?.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("dark-mode"));
  });

  // ---------- ARTICLE CARD MARKUP ----------
  function cardMarkup(article) {
    return `
      <article
        class="news-card"
        data-article-id="${article.id}"
        tabindex="0"
        role="button"
        aria-label="Read: ${escapeHTML(article.title)}"
      >
        <div class="card-image-wrap">
          <img
            class="card-image"
            src="${escapeHTML(article.image)}"
            alt="${escapeHTML(article.alt)}"
            loading="lazy"
          >
          <span class="card-category">${escapeHTML(article.category)}</span>
        </div>

        <div class="card-content">
          <div class="article-meta">
            <span class="category-text">${escapeHTML(article.category)}</span>
            <span class="meta-dot">•</span>
            <time>${escapeHTML(relativeDate(article.hoursAgo))}</time>
          </div>

          <h3 class="card-title">${escapeHTML(article.title)}</h3>
          <p class="card-description">${escapeHTML(article.snippet)}</p>

          <div class="card-footer">
            <span>By ${escapeHTML(article.author)}</span>
            <span class="card-read-more">Read story ↗</span>
          </div>
        </div>
      </article>
    `;
  }

  // ---------- HERO STORY ----------
  function renderHero(article) {
    if (!article) {
      heroContainer.innerHTML = `
        <div class="empty-state">
          <h3>No top story available</h3>
          <p>Try clearing your filters to explore all stories.</p>
        </div>
      `;
      return;
    }

    heroContainer.innerHTML = `
      <article
        class="hero-card"
        data-article-id="${article.id}"
        tabindex="0"
        role="button"
        aria-label="Read top story: ${escapeHTML(article.title)}"
      >
        <div class="hero-image-wrap">
          <img
            class="hero-image"
            src="${escapeHTML(article.image)}"
            alt="${escapeHTML(article.alt)}"
            fetchpriority="high"
          >
          <span class="hero-image-tag">${escapeHTML(article.category)}</span>
        </div>

        <div class="hero-content">
          <div class="article-meta">
            <span class="category-text">${escapeHTML(article.category)}</span>
            <span class="meta-dot">•</span>
            <time>${escapeHTML(relativeDate(article.hoursAgo))}</time>
          </div>

          <h2 class="hero-title">${escapeHTML(article.title)}</h2>
          <p class="hero-snippet">${escapeHTML(article.snippet)}</p>

          <div class="hero-byline">
            <span class="author-avatar">${escapeHTML(authorInitial(article.author))}</span>
            <span>
              <strong>${escapeHTML(article.author)}</strong><br>
              <span>Updated ${escapeHTML(relativeDate(article.hoursAgo))}</span>
            </span>
          </div>
        </div>
      </article>
    `;

    imageFallback(
      $(".hero-image", heroContainer),
      article.alt
    );
  }

  // ---------- TRENDING STORIES ----------
  function renderTrending() {
    const trending = [...articles]
      .sort((a, b) => a.trending - b.trending)
      .slice(0, 5);

    trendingContainer.innerHTML = trending.map((article, index) => `
      <article
        class="trending-item"
        data-article-id="${article.id}"
        tabindex="0"
        role="button"
        aria-label="Read trending story ${index + 1}: ${escapeHTML(article.title)}"
      >
        <span class="trending-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 class="trending-title">${escapeHTML(article.title)}</h3>
          <div class="trending-meta">
            ${escapeHTML(article.category)} · ${escapeHTML(relativeDate(article.hoursAgo))}
          </div>
        </div>
        <img
          class="trending-image"
          src="${escapeHTML(article.image)}"
          alt=""
          loading="lazy"
        >
      </article>
    `).join("");

    $$(".trending-image", trendingContainer).forEach((image) => {
      imageFallback(image, "");
    });
  }

  // ---------- SEARCH + CATEGORY FILTERS ----------
  function getFilteredArticles() {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatches =
        activeCategory === "Home" ||
        article.category === activeCategory;

      const searchableText = [
        article.title,
        article.snippet,
        article.category,
        article.author,
        ...article.body
      ].join(" ").toLowerCase();

      const searchMatches =
        !normalizedSearch || searchableText.includes(normalizedSearch);

      return categoryMatches && searchMatches;
    });
  }

  function renderPage() {
    const filteredArticles = getFilteredArticles();
    const heroArticle = filteredArticles[0] || null;

    renderHero(heroArticle);

    // Avoid repeating the lead story in the main grid.
    const gridArticles = filteredArticles.slice(1);

    articleGrid.innerHTML = gridArticles.map(cardMarkup).join("");

    $$(".card-image", articleGrid).forEach((image) => {
      imageFallback(image, image.alt);
    });

    const resultsCount = $("#resultsCount");
    if (resultsCount) {
      const count = filteredArticles.length;
      resultsCount.textContent =
        `${count} ${count === 1 ? "story" : "stories"}`;
    }

    const pageTitle = $("#articlesTitle");
    if (pageTitle) {
      pageTitle.textContent = searchTerm
        ? "Search results"
        : activeCategory === "Home"
          ? "Latest stories"
          : `${activeCategory} stories`;
    }

    const emptyState = $("#emptyState");
    if (emptyState) {
      emptyState.hidden = filteredArticles.length > 0;
    }

    if (articleGrid) {
      articleGrid.hidden = filteredArticles.length <= 1;
    }

    const activeFilters = $("#activeFilters");
    const filterDescription = $("#filterDescription");

    const hasFilters =
      activeCategory !== "Home" || Boolean(searchTerm.trim());

    if (activeFilters) {
      activeFilters.hidden = !hasFilters;
    }

    if (filterDescription) {
      const descriptions = [];

      if (activeCategory !== "Home") {
        descriptions.push(`Category: ${activeCategory}`);
      }

      if (searchTerm.trim()) {
        descriptions.push(`Search: "${searchTerm.trim()}"`);
      }

      filterDescription.textContent = descriptions.join(" · ");
    }

    // Update selected navigation item.
    $$(".nav-link").forEach((button) => {
      const active =
        button.dataset.category === activeCategory && !searchTerm;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  // ---------- CATEGORY NAVIGATION ----------
  $$(".nav-link").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "Home";
      searchTerm = "";

      if (searchInput) searchInput.value = "";

      renderPage();

      $("#main")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // ---------- SEARCH ----------
  const searchForm = $("#searchForm");

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    searchTerm = searchInput?.value.trim() || "";
    renderPage();

    $("#articlesTitle")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (searchTerm) {
      showToast(`Searching stories for "${searchTerm}"`);
    } else {
      showToast("Showing all stories");
    }
  });

  // Filter live as the user types, while keeping the submit button usable.
  searchInput?.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    renderPage();
  });

  // ---------- CLEAR FILTERS ----------
  function clearFilters() {
    activeCategory = "Home";
    searchTerm = "";

    if (searchInput) searchInput.value = "";

    renderPage();
    showToast("All stories are visible");
  }

  $("#clearFilters")?.addEventListener("click", clearFilters);
  $("#resetSearch")?.addEventListener("click", clearFilters);

  // ---------- ARTICLE MODAL ----------
  function openArticle(articleID) {
    const article = articles.find(
      (item) => item.id === Number(articleID)
    );

    if (!article) return;

    modalArticle = article;
    previousFocus = document.activeElement;

    $("#modalImage").src = article.image;
    $("#modalImage").alt = article.alt;
    $("#modalCategory").textContent = article.category;
    $("#modalTitle").textContent = article.title;
    $("#modalAuthor").textContent = article.author;
    $("#modalAuthorInitial").textContent = authorInitial(article.author);
    $("#modalDate").textContent =
      `${formattedDate(article.hoursAgo)} · ${relativeDate(article.hoursAgo)}`;

    const modalBody = $("#modalBody");

    modalBody.innerHTML = article.body.map((paragraph) =>
      `<p>${escapeHTML(paragraph)}</p>`
    ).join("");

    modal.hidden = false;
    document.body.classList.add("modal-open");

    // Move keyboard focus into the dialog.
    modalDialog.focus();
    $("#modalClose").focus();

    imageFallback($("#modalImage"), article.alt);
  }

  function closeArticle() {
    if (modal.hidden) return;

    modal.hidden = true;
    document.body.classList.remove("modal-open");
    modalArticle = null;

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  $("#modalClose")?.addEventListener("click", closeArticle);
  $("#modalDone")?.addEventListener("click", closeArticle);

  // Click outside the dialog to close.
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeArticle();
    }
  });

  // Escape closes the dialog. Tab stays within the modal.
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      closeArticle();
      return;
    }

    if (event.key === "Tab") {
      const focusable = $$(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]',
        modal
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) {
        event.preventDefault();
        modalDialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // ---------- CLICKABLE CARDS AND TRENDING ----------
  // Event delegation handles cards even after the grid is rerendered.
  document.addEventListener("click", (event) => {
    const clickable = event.target.closest("[data-article-id]");

    if (!clickable) return;

    openArticle(clickable.dataset.articleId);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const clickable = event.target.closest(
      ".news-card[data-article-id], " +
      ".hero-card[data-article-id], " +
      ".trending-item[data-article-id]"
    );

    if (!clickable) return;

    event.preventDefault();
    openArticle(clickable.dataset.articleId);
  });

  // ---------- DATE + FOOTER ----------
  const today = new Date();

  $("#editionDate").textContent = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  $("#currentYear").textContent = today.getFullYear();

  // ---------- INITIAL RENDER ----------
  renderTrending();
  renderPage();
});
