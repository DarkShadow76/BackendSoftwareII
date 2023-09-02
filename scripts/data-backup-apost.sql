--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_Type AS ENUM (
	'admin',
    'partner',
    'client'
);

ALTER TYPE public.service_Type OWNER TO postgres;

CREATE TYPE public.service_Type AS enum (
	'service 1',
	'service 2',
	'service 3'
);


ALTER TYPE public.user_Type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user (
    id uuid NOT NULL,
    user_Name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    phone_Number character varying(10) NOT NULL,
    type public.user_type NOT NULL,
    score double PRECISION
);


ALTER TABLE public.user OWNER TO postgres;

--
-- Name: property; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.property (
    id uuid NOT NULL,
    id_owner uuid NOT NULL,
    property_Name CHARACTER VARYING(100) NOT NULL,
    address CHARACTER varying(100) NOT NULL,
    price_Per_Hour double PRECISION NOT NULL,
    service_Type public.service_Type NOT NULL,
    contact_Number CHARACTER VARYING NOT NULL
);


ALTER TABLE public.property OWNER TO postgres;

--
-- Name: reservation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservation (
    id uuid NOT NULL,
    id_client uuid NOT NULL,
    id_property uuid NOT NULL,
    date_reserv date NOT NULL,
    time_Slot character varying(100) NOT NULL,
    score double PRECISION,
    is_Paid boolean NOT null
);


ALTER TABLE public.reservation OWNER TO postgres;

--
-- Name: tariff
-- 

CREATE TABLE public.tariff (
	id uuid NOT NULL,
	id_property uuid NOT NULL,
	decimal_Price_per_Hour double PRECISION NOT NULL,
	date_reserv date NOT NULL,
	description CHARACTER varying(200)
);

ALTER TABLE public.tariff OWNER TO postgres;

--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user (id, user_Name, email, password, phone_Number, TYPE , score) FROM stdin;
0b051afd-c8d3-438a-9df9-486e68b78722	Isabella	isabellaperez@gmail.com	isabellaperez	945115696	partner	\N
4042b823-78a0-49e5-8e69-02874101c33c	Valentina	valentinagonzales@gmail.com	valentinagonzales	988562478	client	\N
7bea1f89-6e17-4b50-8f56-ec8c76e2f415	Mateo	mateorodriguez@gmail.com	mateorodriguez	933144445	client	\N
8d01563b-61b4-4a9a-9792-634a76a38291	Santiago	santiagogomez@gmail.com	santiagogomez	956234518	client	\N
ade3c8de-925c-4f49-9919-ac24ccbe0e71	Sofia	sofiagarcia@gmail.com	sofiagarcia	964451684	client	\N
e97883de-09bd-40d7-bca8-ab3de422e025	Jhon	jhondoe@gmail.com	jhondoe	974545664	client	\N
f5ac78b2-b036-4113-86fc-fce1dc74bbaa	Jose	joselinares@gmail.com	joselinares	978455225	client	\N
22abc385-f932-429f-8b5c-6509cf989fe4	Angel	angelferroa@gmail.com	angelferroa	923784565	client	\N
54f5ad8d-10a1-42f6-a8fe-3a61f3e022d5	Alonso	alonsocaceres@gmail.com	alonsocaceres	918288243	admin	\N
073680d4-c419-4225-b0f9-13297e8a35f0	Isai	isaitorres@gmail.com	isaitorres	978855448	partner	\N
cb390b58-1cbb-4fac-8143-fd53e9c47d6b	Albert	albertmacready@gmail.com	albertmacready	955451738	client	\N
e41e5f7e-a4d6-40c3-9a26-dc446f8a6bdd	Martin	martinlopez88@gmail.com	mertin123	933985287	client	\N
19765129-2590-41e1-a008-91eb0559e58c	Test	test@yopmail.com	testpost	testnumber	client	\N
\.


--
-- Name: compra compra_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pk PRIMARY KEY (id);


--
-- Name: reserva reserva_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tariff
    ADD CONSTRAINT tariff_pk PRIMARY KEY (id);

   
ALTER TABLE ONLY public.property
	ADD CONSTRAINT property_pk PRIMARY KEY (id);

--
-- Name: usuario user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: reserva fk_owner; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.property
    ADD CONSTRAINT fk_owner FOREIGN KEY (id_owner) REFERENCES public.user(id);


--
-- Name: compra fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT fk_user FOREIGN KEY (id_client) REFERENCES public.user(id);
   

 --
-- Name: compra fk_property; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
   
ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT fk_property FOREIGN KEY (id_property) REFERENCES public.property(id);

--
-- Name: compra fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
   
ALTER TABLE ONLY public.tariff
    ADD CONSTRAINT fk_property FOREIGN KEY (id_property) REFERENCES public.property(id);

   
--
-- PostgreSQL database dump complete
--