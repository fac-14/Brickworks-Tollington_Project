BEGIN;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS link_events_topics CASCADE;

/*DROP TABLE IF EXISTS resource CASCADE;*/

CREATE TABLE events (
event_id SERIAL PRIMARY KEY,
event_name TEXT NOT NULL,
event_description TEXT NOT NULL,
date_time TIMESTAMP,
event_location TEXT NOT NULL,
posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE topics (
topic_id SERIAL PRIMARY KEY,
theme TEXT NOT NULL,
theme_description TEXT NOT NULL
);

CREATE TABLE link_events_topics (
link_id SERIAL PRIMARY KEY,
link_event_id INTEGER REFERENCES events(event_id) NOT NULL,
link_topic_id INTEGER REFERENCES topics(topic_id) NOT NULL
);

/* Escape special characters by prefixing them with two single quotes*/

INSERT INTO events (event_name, event_description, date_time, event_location) VALUES
('Poverty Action', 'Get together to fight poverty', '2018-10-21 17:00:00', 'Caxton House'),
('Youth Action', 'Help youth get skills', '2018-10-11 16:30:00', 'Tollington House'),
('Get Green', 'Let''s plant a tree', '2018-02-01 14:00:00', 'Town Hall'),
('Write a great CV', 'Learn how to write a punchy CV to help you get a job', '2018-10-20 12:00:00', 'Brickworks');

INSERT INTO topics (theme, theme_description) VALUES
('poverty', 'Poverty'),
('homelessness', 'Homelessness'),
('youth', 'Youth'),
('elderly', 'Elderly'),
('employment', 'Employment'),
('environment', 'Environment');

INSERT INTO link_events_topics (link_event_id, link_topic_id) VALUES
(1, 1),
(2, 3),
(2, 5),
(3, 6),
(4, 5);

COMMIT;

