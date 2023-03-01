SELECT
mo.title,
bo.domestic_sales,
bo.international_sales 
FROM movies mo
JOIN box_office bo
ON mo.id = bo.movie_id;
