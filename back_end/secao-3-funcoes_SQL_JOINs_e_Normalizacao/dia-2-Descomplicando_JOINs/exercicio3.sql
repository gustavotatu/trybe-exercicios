SELECT
mo.title,
bo.rating 
FROM movies mo
JOIN box_office bo
ON mo.id = bo.movie_id
ORDER BY bo.rating DESC;