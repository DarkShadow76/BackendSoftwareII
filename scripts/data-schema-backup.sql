--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2023-04-21 10:30:42

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
-- TOC entry 212 (class 1259 OID 16505)
-- Name: guia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.guia (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    contrasena character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL,
    id_tour uuid,
    id_vehiculo uuid NOT NULL,
    calificacion integer NOT NULL
);


ALTER TABLE public.guia OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16512)
-- Name: tour; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tour (
    id uuid NOT NULL,
    id_turista uuid NOT NULL,
    id_guia uuid NOT NULL,
    id_zona uuid NOT NULL,
    fecha date NOT NULL
);


ALTER TABLE public.tour OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16414)
-- Name: turista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turista (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    contrasena character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL,
    id_tour uuid,
    correo character varying(100) NOT NULL
);


ALTER TABLE public.turista OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16426)
-- Name: vehiculo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehiculo (
    id uuid NOT NULL,
    id_guia uuid NOT NULL,
    placa character varying(10) NOT NULL,
    modelo character varying(100) NOT NULL,
    tipo character varying(100) NOT NULL,
    n_asientos integer NOT NULL
);


ALTER TABLE public.vehiculo OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16465)
-- Name: zona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zona (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    id_tour uuid
);


ALTER TABLE public.zona OWNER TO postgres;

--
-- TOC entry 3186 (class 2606 OID 16511)
-- Name: guia guia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guia
    ADD CONSTRAINT guia_pkey PRIMARY KEY (id);


--
-- TOC entry 3188 (class 2606 OID 16518)
-- Name: tour tour_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_pkey PRIMARY KEY (id);


--
-- TOC entry 3180 (class 2606 OID 16418)
-- Name: turista turista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turista
    ADD CONSTRAINT turista_pkey PRIMARY KEY (id);


--
-- TOC entry 3182 (class 2606 OID 16434)
-- Name: vehiculo vehiculo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_pkey PRIMARY KEY (id);


--
-- TOC entry 3184 (class 2606 OID 16469)
-- Name: zona zona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zona
    ADD CONSTRAINT zona_pkey PRIMARY KEY (id);


-- Completed on 2023-04-21 10:30:42

--
-- PostgreSQL database dump complete
--

