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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: guia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.guia (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    contrasenia character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL
);


ALTER TABLE public.guia OWNER TO postgres;

--
-- Name: reserva; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reserva (
    id uuid NOT NULL,
    turista_id uuid NOT NULL,
    servicio_id uuid NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.reserva OWNER TO postgres;

--
-- Name: servicio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.servicio (
    id uuid NOT NULL,
    id_guia uuid NOT NULL,
    monto double precision NOT NULL,
    categoria character varying(100) NOT NULL,
    puntaje double precision,
    estado character varying(100) NOT NULL
);


ALTER TABLE public.servicio OWNER TO postgres;

--
-- Name: turista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turista (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    contrasenia character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL,
    correo character varying(100) NOT NULL
);


ALTER TABLE public.turista OWNER TO postgres;

--
-- Data for Name: guia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.guia (id, nombre, apellido, correo, contrasenia, telefono) FROM stdin;
0b051afd-c8d3-438a-9df9-486e68b78722	Isabella	Perez	isabellaperez@gmail.com	isabellaperez	945115696
4042b823-78a0-49e5-8e69-02874101c33c	Valentina	Gonzalez	valentinagonzales@gmail.com	valentinagonzales	988562478
7bea1f89-6e17-4b50-8f56-ec8c76e2f415	Mateo	Rodriguez	mateorodriguez@gmail.com	mateorodriguez	933144445
8d01563b-61b4-4a9a-9792-634a76a38291	Santiago	Gomez	santiagogomez@gmail.com	santiagogomez	956234518
ade3c8de-925c-4f49-9919-ac24ccbe0e71	Sofia	Garcia	sofiagarcia@gmail.com	sofiagarcia	964451684
\.


--
-- Data for Name: reserva; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reserva (id, turista_id, servicio_id, nombre) FROM stdin;
7dda6be7-8988-4870-96e6-501b4b6fd0c0	22abc385-f932-429f-8b5c-6509cf989fe4	ade3c8de-925c-4f49-9919-ac24ccbe0e71	EEE
74c7ab3a-1573-4e7e-8952-7ef371561559	e97883de-09bd-40d7-bca8-ab3de422e025	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	DDD
d241fad4-baf5-4027-95fe-5d99fa4f8c65	f5ac78b2-b036-4113-86fc-fce1dc74bbaa	4a7b588e-e1ff-46a6-b94f-4b423763b571	CCC
6d1eff13-d9ef-455a-bb02-5c763d7e39ed	cb390b58-1cbb-4fac-8143-fd53e9c47d6b	40612863-d019-4497-ac47-a587e449d98d	BBB
6908ad71-a275-46a5-a789-05dbaba5b978	073680d4-c419-4225-b0f9-13297e8a35f0	164223d7-9867-42a2-b7c5-dee2231aeaa9	AAA
11afb6de-1470-4957-978c-fde52bbd04d2	e41e5f7e-a4d6-40c3-9a26-dc446f8a6bdd	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	Prueba Post
f756220b-0be3-4fb5-a59e-b60b44b9ba04	e41e5f7e-a4d6-40c3-9a26-dc446f8a6bdd	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	Prueba Post
\.


--
-- Data for Name: servicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.servicio (id, id_guia, monto, categoria, puntaje, estado) FROM stdin;
164223d7-9867-42a2-b7c5-dee2231aeaa9	ade3c8de-925c-4f49-9919-ac24ccbe0e71	200	A1	4	realizandose
40612863-d019-4497-ac47-a587e449d98d	0b051afd-c8d3-438a-9df9-486e68b78722	250	B5	4	postergado
4a7b588e-e1ff-46a6-b94f-4b423763b571	4042b823-78a0-49e5-8e69-02874101c33c	180	A3	4	cancelado
9c430422-7eb7-4f92-a3fe-a5daa5503a3e	8d01563b-61b4-4a9a-9792-634a76a38291	210	C4	4	cancelado
ade3c8de-925c-4f49-9919-ac24ccbe0e71	7bea1f89-6e17-4b50-8f56-ec8c76e2f415	190	C3	4	finalizado
\.


--
-- Data for Name: turista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turista (id, nombre, apellido, contrasenia, telefono, correo) FROM stdin;
073680d4-c419-4225-b0f9-13297e8a35f0	Isai	Torres	isaitorres	978855448	isaitorres@gmail.com
e97883de-09bd-40d7-bca8-ab3de422e025	Jhon	Doe	jhondoe	974545664	jhondoe@gmail.com
f5ac78b2-b036-4113-86fc-fce1dc74bbaa	Jose	Linares	joselinares	978455225	joselinares@gmail.com
22abc385-f932-429f-8b5c-6509cf989fe4	Angel	Ferroa	angelferroa	923784565	angelferroa@gail.com
cb390b58-1cbb-4fac-8143-fd53e9c47d6b	Albert	MacReady	albertmacready	955451738	albertmacready
e41e5f7e-a4d6-40c3-9a26-dc446f8a6bdd	Martin	Lopez	mertin123	933985287	martinlopez88@gmail.com
\.


--
-- Name: guia guia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guia
    ADD CONSTRAINT guia_pkey PRIMARY KEY (id);


--
-- Name: reserva reserva_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT reserva_pkey PRIMARY KEY (id);


--
-- Name: servicio tour_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT tour_pkey PRIMARY KEY (id);


--
-- Name: turista turista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turista
    ADD CONSTRAINT turista_pkey PRIMARY KEY (id);


--
-- Name: servicio guia_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT guia_id_fk FOREIGN KEY (id_guia) REFERENCES public.guia(id) NOT VALID;


--
-- Name: reserva servicio_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT servicio_id_fk FOREIGN KEY (servicio_id) REFERENCES public.servicio(id);


--
-- Name: reserva turista_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT turista_id_fk FOREIGN KEY (turista_id) REFERENCES public.turista(id);


--
-- PostgreSQL database dump complete
--

