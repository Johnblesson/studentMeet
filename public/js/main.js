  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  const courseLinks = document.querySelectorAll(".course .det a");

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    const filteredLinks = Array.from(courseLinks).filter(link => {
      const linkText = link.textContent.toLowerCase();
      return linkText.includes(query);
    });

    if (filteredLinks.length === 0) {
      searchResults.innerHTML = "No results found.";
    } else {
      filteredLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.href;
        linkElement.textContent = link.textContent;
        linkElement.classList.add("search-result");
        searchResults.appendChild(linkElement);
      });
    }
  }

  searchInput.addEventListener("input", performSearch);

