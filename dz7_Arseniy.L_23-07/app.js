

const getNews = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
};

const renderNews = (news) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = news.map((item) => {
        const { title, body } = item;
        return `
      <div class="news-card">
        <img src="https://picsum.photos/200" alt="#">
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
    `;
    }).join('');
};

(async function() {
    const news = await getNews();
    renderNews(news);
})();




