$(document).ready(function () {
    function getMovies(category) {
        console.log('category', category);
        $.get(`http://localhost:3000/${category}`, function (data) {
            data.forEach((movie) => {
                console.log(`#${category.toLowerCase()}-movies`, `#${category.toLowerCase()}-movies`);
                $(`#${category.toLowerCase()}-movies`).append(`
                    <div class="col-md-4">
                        <div class="card mb-4">
                        <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${movie.desc}</p>
                                <div class="card-footer">
                                    <small class="text-muted">Stars: ${movie.stars}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            });
        });
    }

    getMovies('Action');
    getMovies('Comedy');
    getMovies('Sci-fi');
});
