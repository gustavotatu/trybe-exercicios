SELECT 
    job_id, SUM(salary) AS total
FROM
    employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';