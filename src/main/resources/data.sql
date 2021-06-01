DROP TABLE IF EXISTS issues;

CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(250) NOT NULL,
    severity INT NOT NULL
);

INSERT INTO issues(title, description, severity) VALUES ( '123', 'ddsadas', 1);

