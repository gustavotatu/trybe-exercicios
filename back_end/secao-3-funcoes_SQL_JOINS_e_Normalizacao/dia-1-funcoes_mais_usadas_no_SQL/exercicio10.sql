SELECT 
    department_id,
    SUM(1) AS funcionários,
    AVG(salary) AS média_salarial
FROM
    employees
GROUP BY department_id
HAVING funcionários > 10;