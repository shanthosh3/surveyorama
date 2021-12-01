DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS survey;
DROP TABLE IF EXISTS question;

CREATE TABLE user (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    passcode text NOT NULL, --REALIZE THIS IS PASSCODE NOT PASSWORD
    date_created datetime NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE survey (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    userID INTEGER NOT NULL,
     INDEX user_ind (userID),
     CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user(id),
    date_created datetime NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE question (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title text NOT NULL,
    choices text NOT NULL,
    surveyID INTEGER NOT NULL,
    INDEX survey_ind (surveyID),
    CONSTRAINT fk_survey FOREIGN KEY (surveyID) REFERENCES survey(id),
    date_created datetime NOT NULL DEFAULT current_timestamp()
);

