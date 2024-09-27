
const apiKey = '15764d7cf997401d9804da2d00712a8f'; 
const topStories = document.getElementById('top-stories-items');



async function fetchTopStories() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=15764d7cf997401d9804da2d00712a8f&pageSize=6');
    const data = await response.json();
    displayNews(data.articles, topStories);
}

function displayNews(articles, content) {
    content.innerHTML = ''; // Clear previous content
    articles.forEach(article => {
        const newsLetter = document.createElement('div');
        newsLetter.classList.add('borders');

        newsLetter.innerHTML = `
           
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        content.appendChild(newsLetter);
    });
}

// Initialize the app by fetching top stories and latest news
fetchTopStories();
// fetchLatestNews();
