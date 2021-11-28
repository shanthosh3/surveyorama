CREATE TABLE survey_set (
    id int(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    survey_description  TEXT NOT NULL,
    user_id int(30) NOT NULL,
    date_created datetime NOT NULL DEFAULT current_timestamp()
) --ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `survey_set`
INSERT INTO `survey_set` (`id`, `title`, `survey_description`, `user_id`, `date_created`) VALUES
  (1, 'Sample Survey', 'Sample Only', 0, '2020-11-06', '2020-12-10', '2020-11-10 09:57:47'),
  (2, 'Survey 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 0, '2020-11-10 14:12:09'),
  (3, 'Survey 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 0, '2020-11-10 14:12:33'),
  (4, 'Survey 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '2020-11-10 14:14:03'),
  (5, 'Survey 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0,  '2020-11-10 14:14:29');
--

CREATE TABLE questions (
    id int(30) NOT NULL,
    question text NOT NULL,
    survey_set_id int(30) NOT NULL,
    date_created datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `questions`

INSERT INTO `questions` (`id`, `question`, `frm_option`, `type`, `order_by`, `survey_set_id`, `date_created`) VALUES
  (1, 'Sample Survey Question using Radio Button', '{\"cKWLY\":\"Option 1\",\"esNuP\":\"Option 2\",\"dAWTD\":\"Option 3\",\"eZCpf\":\"Option 4\"}', 'radio_opt', 3, 1, '2020-11-10 12:04:46'),
  (2, 'Question for Checkboxes', '{\"qCMGO\":\"Checkbox label 1\",\"JNmhW\":\"Checkbox label 2\",\"zZpTE\":\"Checkbox label 3\",\"dOeJi\":\"Checkbox label 4\"}', 'check_opt', 2, 1, '2020-11-10 12:25:13'),
  (4, 'Sample question for the text field', '', 'textfield_s', 1, 1, '2020-11-10 13:34:21');


CREATE TABLE answers (
    id int(30) NOT NULL,
    survey_id int(30) NOT NULL,
    user_id int(30) NOT NULL,
    answer text NOT NULL,
    question_id int(30) NOT NULL,
    date_created datetime NOT NULL DEFAULT current_timestamp()
) --ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dumping data for table `answers`

INSERT INTO `answers` (`id`, `survey_id`, `user_id`, `answer`, `question_id`, `date_created`) VALUES
  (1, 1, 2, 'Sample Only', 4, '2020-11-10 14:46:07'),
  (2, 1, 2, '[JNmhW],[zZpTE]', 2, '2020-11-10 14:46:07'),
  (3, 1, 2, 'dAWTD', 1, '2020-11-10 14:46:07'),
  (4, 1, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in tempus turpis, sed fermentum risus. Praesent vitae velit rutrum, dictum massa nec, pharetra felis. Phasellus enim augue, laoreet in accumsan dictum, mollis nec lectus. Aliquam id viverra nisl. Proin quis posuere nulla. Nullam suscipit eget leo ut suscipit.', 4, '2020-11-10 15:59:43'),
  (5, 1, 3, '[qCMGO],[JNmhW]', 2, '2020-11-10 15:59:43'),
  (6, 1, 3, 'esNuP', 1, '2020-11-10 15:59:43');



CREATE TABLE `users` (
    `id` int(30) NOT NULL,
    `firstname` varchar(200) NOT NULL,
    `lastname` varchar(200) NOT NULL,
    `email` varchar(200) NOT NULL,
    `password` text NOT NULL,
    `type` tinyint(1) NOT NULL DEFAULT 3 COMMENT '1=Admin,2 = Staff, 3= Subscriber',
    `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `users`

INSERT INTO `users` (`id`, `firstname`, `lastname`, `password`, `type`, `date_created`) VALUES
  (1, 'Admin', 'Admin', 'admin@test.com', '0192023a7bbd73250516f069df18b500', 1, '2020-11-10 08:43:06'),
  (2, 'Paul', 'Smith', 'psmith@test.com', '1254737c076cf867dc53d60a0364f38e', 3, '2020-11-10 09:16:53'),
  (3, 'Pauline', 'Jakes', 'pjakes@test.com', '4744ddea876b11dcb1d169fadf494418', 3, '2020-11-10 15:59:11'),
  (4, 'Henry', 'Williams', 'hwilliams@test.com','3cc93e9a6741d8b40460457139cf8ced', 3, '2020-11-10 16:21:02');