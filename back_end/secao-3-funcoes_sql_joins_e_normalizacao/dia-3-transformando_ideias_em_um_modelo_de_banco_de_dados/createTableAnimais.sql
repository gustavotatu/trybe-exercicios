CREATE TABLE animais(
animal_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
especie_id INT NOT NULL,
genero_id INT NOT NULL,
idade INT NOT NULL,
local_id INT NOT NULL,
FOREIGN KEY (especie_id) REFERENCES especies (especie_id),
FOREIGN KEY (genero_id) REFERENCES generos (genero_id),
FOREIGN KEY (local_id) REFERENCES localizacoes (local_id)
);