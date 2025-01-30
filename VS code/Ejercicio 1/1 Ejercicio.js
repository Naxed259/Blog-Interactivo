function changeBackgroundColor() {
    const colors = ['#f8b400', '#ff5e57', '#1fab89', '#62b6cb', '#ff677d', '#e17055'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function changeArticleBackgroundColor(article) {
    const colors = ['#f8b400', '#ff5e57', '#1fab89', '#62b6cb', '#ff677d', '#e17055'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    article.style.backgroundColor = randomColor;
}

function incrementViews(article) {
    const viewCountElem = article.querySelector('.view-count');
    let viewCount = parseInt(viewCountElem.textContent);
    viewCount += 1;
    viewCountElem.textContent = viewCount;
}

function handleImageClick(img) {
    const article = img.closest('article');
    changeBackgroundColor();
    changeArticleBackgroundColor(article);
    incrementViews(article);
}

document.querySelectorAll('article img').forEach(img => {
    img.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the article
        handleImageClick(img);
    });
});