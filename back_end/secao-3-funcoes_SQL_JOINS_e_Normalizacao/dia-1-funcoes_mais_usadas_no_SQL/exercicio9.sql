SELECT 
    job_id, AVG(salary) AS total
FROM
    employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY total DESC;