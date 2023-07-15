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
-- Name: enum_usuario_tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_usuario_tipo AS ENUM (
    'admin',
    'turista',
    'guia'
);


ALTER TYPE public.enum_usuario_tipo OWNER TO postgres;

--
-- Name: tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.tipo AS ENUM (
    'admin',
    'guia',
    'turista'
);


ALTER TYPE public.tipo OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: compra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.compra (
    id uuid NOT NULL,
    id_servicio uuid NOT NULL,
    id_turista uuid NOT NULL,
    total double precision NOT NULL
);


ALTER TABLE public.compra OWNER TO postgres;

--
-- Name: reserva; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reserva (
    id uuid NOT NULL,
    id_turista uuid NOT NULL,
    id_servicio uuid NOT NULL,
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
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    dni character varying(10) NOT NULL,
    correo character varying(100) NOT NULL,
    contrasenia character varying(100) NOT NULL,
    telefono character varying(10) NOT NULL,
    tipo public.tipo NOT NULL,
    id_reserva uuid,
    id_servicio uuid
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Data for Name: compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.compra (id, id_servicio, id_turista, total) FROM stdin;
6b015af8-6a30-40b0-973d-c984e5368581	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	cb390b58-1cbb-4fac-8143-fd53e9c47d6b	210
1a93ca60-faec-4ab4-aa30-48e181b48a28	4a7b588e-e1ff-46a6-b94f-4b423763b571	f5ac78b2-b036-4113-86fc-fce1dc74bbaa	180
\.


--
-- Data for Name: reserva; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reserva (id, id_turista, id_servicio, nombre) FROM stdin;
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
40612863-d019-4497-ac47-a587e449d98d	0b051afd-c8d3-438a-9df9-486e68b78722	250	B5	4	postergado
164223d7-9867-42a2-b7c5-dee2231aeaa9	ade3c8de-925c-4f49-9919-ac24ccbe0e71	200	A1	4.5	realizandose
9c430422-7eb7-4f92-a3fe-a5daa5503a3e	8d01563b-61b4-4a9a-9792-634a76a38291	210	C4	5	cancelado
4a7b588e-e1ff-46a6-b94f-4b423763b571	7bea1f89-6e17-4b50-8f56-ec8c76e2f415	180	A3	4.5	cancelado
ade3c8de-925c-4f49-9919-ac24ccbe0e71	7bea1f89-6e17-4b50-8f56-ec8c76e2f415	190	C3	4	finalizado
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, nombre, apellido, dni, correo, contrasenia, telefono, tipo, id_reserva, id_servicio) FROM stdin;
0b051afd-c8d3-438a-9df9-486e68b78722	Isabella	Perez	76543200	isabellaperez@gmail.com	isabellaperez	945115696	guia	\N	\N
4042b823-78a0-49e5-8e69-02874101c33c	Valentina	Gonzalez	76543201	valentinagonzales@gmail.com	valentinagonzales	988562478	guia	\N	\N
7bea1f89-6e17-4b50-8f56-ec8c76e2f415	Mateo	Rodriguez	76543202	mateorodriguez@gmail.com	mateorodriguez	933144445	guia	\N	\N
8d01563b-61b4-4a9a-9792-634a76a38291	Santiago	Gomez	76543203	santiagogomez@gmail.com	santiagogomez	956234518	guia	\N	\N
ade3c8de-925c-4f49-9919-ac24ccbe0e71	Sofia	Garcia	76543204	sofiagarcia@gmail.com	sofiagarcia	964451684	guia	\N	\N
e97883de-09bd-40d7-bca8-ab3de422e025	Jhon	Doe	76543206	jhondoe@gmail.com	jhondoe	974545664	turista	\N	\N
f5ac78b2-b036-4113-86fc-fce1dc74bbaa	Jose	Linares	76543207	joselinares@gmail.com	joselinares	978455225	turista	\N	\N
22abc385-f932-429f-8b5c-6509cf989fe4	Angel	Ferroa	76543208	angelferroa@gmail.com	angelferroa	923784565	turista	\N	\N
54f5ad8d-10a1-42f6-a8fe-3a61f3e022d5	Alonso	Caceres	76543211	alonsocaceres@gmail.com	alonsocaceres	918288243	admin	\N	\N
073680d4-c419-4225-b0f9-13297e8a35f0	Isai	Torres	76543205	isaitorres@gmail.com	isaitorres	978855448	turista	\N	\N
cb390b58-1cbb-4fac-8143-fd53e9c47d6b	Albert	MacReady	76543212	albertmacready@gmail.com	albertmacready	955451738	turista	\N	\N
e41e5f7e-a4d6-40c3-9a26-dc446f8a6bdd	Martin	Lopez	76543213	martinlopez88@gmail.com	mertin123	933985287	turista	\N	\N
19765129-2590-41e1-a008-91eb0559e58c	Test	post	dniTest	test@yopmail.com	testpost	testnumber	turista	\N	\N
\.


--
-- Name: compra compra_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.compra
    ADD CONSTRAINT compra_pk PRIMARY KEY (id);


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
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: reserva fk_servicio; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT fk_servicio FOREIGN KEY (id_servicio) REFERENCES public.servicio(id);


--
-- Name: compra fk_servicio; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.compra
    ADD CONSTRAINT fk_servicio FOREIGN KEY (id_servicio) REFERENCES public.servicio(id);


--
-- Name: compra fk_turista; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.compra
    ADD CONSTRAINT fk_turista FOREIGN KEY (id_turista) REFERENCES public.usuario(id);


--
-- Name: servicio fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_guia) REFERENCES public.usuario(id) NOT VALID;


--
-- Name: reserva fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_turista) REFERENCES public.usuario(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

