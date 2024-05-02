create database patte_sardine_rencontre;
use patte_sardine_rencontre;

create table users(
    id_user int auto_increment primary key,
    user_name varchar(255) not null,
    first_name varchar(255) not null,
    user_password varchar(255) not null,
    user_mail varchar(255) unique,
    source_photo varchar(255) not null,
    birth date not null,
    sexe int not null
);  

-- 10 : male
-- 20 : female
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Koto', 'RABE', 'koto', 'koto@gmail.com', 'url_koto_photo', '2000-12-22', 10);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Sarah', 'ANDRIANJAKA', 'sarah', 'sarah@gmail.com', 'url_sarah_photo', '2002-03-04', 20);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Bema', 'RAKOTOHARY', 'bema', 'bema@gmail.com', 'url_bema_photo', '1999-02-24', 10);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Jean Joseph', 'RKOTOKELY', 'jean', 'jeanjoseph@gmail.com', 'url_jean_photo', '1997-05-12', 10);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Maria', 'Jolie', 'maria', 'maria@gmail.com', 'url_maria_photo', '2004-10-13', 20);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Melanie', 'ANAIS', 'melanie', 'anaismelanie@gmail.com', 'url_anaismelanie_photo', '2001-01-25', 20);
insert into users(user_name, first_name, user_password, user_mail, source_photo, birth, sexe) values ('Daniella', 'Angela', 'daniella', 'daniella@gmail.com', 'url_daniella_photo', '2000-08-08', 20);

create table standart(
    id_standart int auto_increment primary key,
    standart varchar(255) not null,
    isNumeric boolean not null
);

insert into standart(standart, isNumeric) values ('Poids', true);
insert into standart(standart, isNumeric) values ('Couleur de cheveux', true);

create table details_standart(
    id_details_standart int auto_increment primary key,
    id_standart int references standart(id_standart),
    min int default 0,
    max int default 0,
    coefficient int,
    details varchar(255) not null
);

insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 1, 20, 40, 0, 'null');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 1, 40, 60, 5, 'null');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 1, 60, 80, 2, 'null');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 1, 80, 150, 0, 'null');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 2, 0, 0, 0, 'Rouge');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 2, 0, 0, 0, 'Jaune');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 2, 0, 0, 0, 'Bleu');
insert into details_standart(id_details_standart, id_standart, min, max, coefficient, details) values (null, 2, 0, 0, 0, 'Noir');

create table standart_user (
    id_standart_user int auto_increment primary key,
    id_details_standart int references details_standart(id_details_standart),
    coefficient int not null,
    id_user int references users(id_user)
);

insert into standart_user(id_standart_user, id_details_standart, coefficient, id_user) values (null, 2, 4, 1);
insert into standart_user(id_standart_user, id_details_standart, coefficient, id_user) values (null, 8, 4, 1);

create table details_user (
    id_details_user int auto_increment primary key,
    id_details_standart int references details_standart(id_details_standart),
    valeur int not null,
    id_user int references users(id_user)
);

insert into details_user(id_details_standart, valeur, id_user) values (3, 78, 1);
insert into details_user(id_details_standart, valeur, id_user) values (8, 1, 1);
insert into details_user(id_details_standart, valeur, id_user) values (2, 78, 2);
insert into details_user(id_details_standart, valeur, id_user) values (8, 1, 2);
insert into details_user(id_details_standart, valeur, id_user) values (4, 78, 3);
insert into details_user(id_details_standart, valeur, id_user) values (6, 1, 3);
insert into details_user(id_details_standart, valeur, id_user) values (2, 78, 4);
insert into details_user(id_details_standart, valeur, id_user) values (7, 1, 4);
insert into details_user(id_details_standart, valeur, id_user) values (4, 78, 5);
insert into details_user(id_details_standart, valeur, id_user) values (8, 1, 5);
insert into details_user(id_details_standart, valeur, id_user) values (1, 78, 6);
insert into details_user(id_details_standart, valeur, id_user) values (7, 1, 6);
insert into details_user(id_details_standart, valeur, id_user) values (3, 78, 7);
insert into details_user(id_details_standart, valeur, id_user) values (8, 1, 7);
