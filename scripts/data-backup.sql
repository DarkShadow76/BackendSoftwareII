--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2023-04-21 10:34:41

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
-- TOC entry 3331 (class 0 OID 16505)
-- Dependencies: 212
-- Data for Name: guia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.guia (id, nombre, apellido, correo, contrasena, telefono, id_tour, id_vehiculo, calificacion) FROM stdin;
4042b823-78a0-49e5-8e69-02874101c33c	Valentina	Gonzalez	valentinagonzales@gmail.com	valentinagonzales	988562478	4a7b588e-e1ff-46a6-b94f-4b423763b571	39268b69-a826-4a34-986b-55ac64ce54c1	4
8d01563b-61b4-4a9a-9792-634a76a38291	Santiago	Gomez	santiagogomez@gmail.com	santiagogomez	956234518	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	b3e228f9-d770-4d8a-a651-90d273e8e42b	4
0b051afd-c8d3-438a-9df9-486e68b78722	Isabella	Perez	isabellaperez@gmail.com	isabellaperez	945115696	40612863-d019-4497-ac47-a587e449d98d	4a7b588e-e1ff-46a6-b94f-4b423763b571	4
7bea1f89-6e17-4b50-8f56-ec8c76e2f415	Mateo	Rodriguez	mateorodriguez@gmail.com	mateorodriguez	933144445	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	52c4eda7-3c20-4489-8978-59211ea37791	4
ade3c8de-925c-4f49-9919-ac24ccbe0e71	Sofia	Garcia	sofiagarcia@gmail.com	sofiagarcia	964451684	164223d7-9867-42a2-b7c5-dee2231aeaa9	1958766e-d178-4e3e-b7ee-257a74377acb	4
\.


--
-- TOC entry 3332 (class 0 OID 16512)
-- Dependencies: 213
-- Data for Name: tour; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tour (id, id_turista, id_guia, id_zona, fecha) FROM stdin;
4a7b588e-e1ff-46a6-b94f-4b423763b571	073680d4-c419-4225-b0f9-13297e8a35f0	4042b823-78a0-49e5-8e69-02874101c33c	8c2a6f26-0ac5-492d-ac40-ee9032139905	2023-04-26
9c430422-7eb7-4f92-a3fe-a5daa5503a3e	22abc385-f932-429f-8b5c-6509cf989fe4	8d01563b-61b4-4a9a-9792-634a76a38291	fd95262e-36ac-43e9-8779-b38b752e6c43	2023-04-29
ade3c8de-925c-4f49-9919-ac24ccbe0e71	cb390b58-1cbb-4fac-8143-fd53e9c47d6b	7bea1f89-6e17-4b50-8f56-ec8c76e2f415	03b16982-13d3-4e9a-95df-72694c1d8258	2023-04-23
40612863-d019-4497-ac47-a587e449d98d	f5ac78b2-b036-4113-86fc-fce1dc74bbaa	0b051afd-c8d3-438a-9df9-486e68b78722	eb8ceb29-8fb5-4a7c-9483-70b9d6070702	2023-04-24
164223d7-9867-42a2-b7c5-dee2231aeaa9	e97883de-09bd-40d7-bca8-ab3de422e025	ade3c8de-925c-4f49-9919-ac24ccbe0e71	7f953c54-18ad-4791-99fc-45899f8d2ec3	2023-04-27
\.


--
-- TOC entry 3328 (class 0 OID 16414)
-- Dependencies: 209
-- Data for Name: turista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turista (id, nombre, apellido, contrasena, telefono, id_tour, correo) FROM stdin;
073680d4-c419-4225-b0f9-13297e8a35f0	Isai	Torres	isaitorres	978855448	4a7b588e-e1ff-46a6-b94f-4b423763b571	isaitorres@gmail.com
e97883de-09bd-40d7-bca8-ab3de422e025	Jhon	Doe	jhondoe	974545664	164223d7-9867-42a2-b7c5-dee2231aeaa9	jhondoe@gmail.com
f5ac78b2-b036-4113-86fc-fce1dc74bbaa	Jose	Linares	joselinares	978455225	40612863-d019-4497-ac47-a587e449d98d	joselinares@gmail.com
22abc385-f932-429f-8b5c-6509cf989fe4	Angel	Ferroa	angelferroa	923784565	9c430422-7eb7-4f92-a3fe-a5daa5503a3e	angelferroa@gail.com
cb390b58-1cbb-4fac-8143-fd53e9c47d6b	Albert	MacReady	albertmacready	955451738	bd042618-df06-4d73-a083-508cba31e090	albertmacready
\.


--
-- TOC entry 3329 (class 0 OID 16426)
-- Dependencies: 210
-- Data for Name: vehiculo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehiculo (id, id_guia, placa, modelo, tipo, n_asientos) FROM stdin;
\.


--
-- TOC entry 3330 (class 0 OID 16465)
-- Dependencies: 211
-- Data for Name: zona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.zona (id, nombre, id_tour) FROM stdin;
\.


-- Completed on 2023-04-21 10:34:41

--
-- PostgreSQL database dump complete
--

