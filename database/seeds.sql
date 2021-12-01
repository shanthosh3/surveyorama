INSERT INTO User (`username`, `email`, `passcode`) 
VALUES
  ('Admin', 'admin@test.com', '0192023a7bbd73250516f069df18b500'),
  ('Paul', 'psmith@test.com', '1254737c076cf867dc53d60a0364f38e'),
  ('Pauline', 'pjakes@test.com', '4744ddea876b11dcb1d169fadf494418'),
  ('Henry', 'hwilliams@test.com','3cc93e9a6741d8b40460457139cf8ced');



INSERT INTO survey ( `title`, `userID`) 
VALUES
  ("Sample Survey", 1),
  ("Survey 1", 2),
  ("Survey 2", 3),
  ("Survey 3", 4);


INSERT INTO question (`title`, `choices`, `surveyID`)
 VALUES
('Politics', 'Republican', 3),
('Bootcamps', 'Trilogy', 2),
('Sports', 'Football', 4),
('Beer', 'Heineken', 3);