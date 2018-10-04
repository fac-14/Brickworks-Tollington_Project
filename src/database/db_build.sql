BEGIN;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS themes CASCADE;

CREATE TABLE events (
id SERIAL PRIMARY KEY,
event_name TEXT NOT NULL,
event_description TEXT NOT NULL,
date_time TIMESTAMP,
event_location TEXT NOT NULL
);

CREATE TABLE themes (
id SERIAL PRIMARY KEY,
theme TEXT NOT NULL,
theme_description TEXT NOT NULL
);

/* Escape special characters by prefixing them with two single quotes*/

INSERT INTO events (event_name, event_description, date_time, event_location) VALUES
('Poverty Action', 'Get together to fight poverty', '2018-10-21 17:00:00', 'Caxton House'),
('Youth Action', 'Help youth get skills', '2018-10-11 16:30:00', 'Tollington House'),
('Get Green', 'Let''s plant a tree', '2018-02-01 14:00:00', 'Town Hall');

INSERT INTO themes ('poverty', 'homelessness', 'youth', 'elderly', 'employment', 'environment') VALUES
('poverty', 'Poverty'),
('homelessness', 'Homelessness'),
('youth', 'Youth'),
('elderly', 'Elderly'),
('employment', 'Employment'),
('environment', 'Environment');

COMMIT;

