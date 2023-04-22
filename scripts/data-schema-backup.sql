PGDMP                         {            postgres    14.4    14.4     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13754    postgres    DATABASE     c   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Peru.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3341            �            1259    16505    guia    TABLE     j  CREATE TABLE public.guia (
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
    DROP TABLE public.guia;
       public         heap    postgres    false            �            1259    16512    tour    TABLE     �   CREATE TABLE public.tour (
    id uuid NOT NULL,
    id_turista uuid NOT NULL,
    id_guia uuid NOT NULL,
    id_zona uuid NOT NULL,
    fecha date NOT NULL
);
    DROP TABLE public.tour;
       public         heap    postgres    false            �            1259    16414    turista    TABLE     +  CREATE TABLE public.turista (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    contrasena character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL,
    id_tour uuid,
    correo character varying(100) NOT NULL
);
    DROP TABLE public.turista;
       public         heap    postgres    false            �            1259    16426    vehiculo    TABLE     �   CREATE TABLE public.vehiculo (
    id uuid NOT NULL,
    id_guia uuid NOT NULL,
    placa character varying(10) NOT NULL,
    modelo character varying(100) NOT NULL,
    tipo character varying(100) NOT NULL,
    n_asientos integer NOT NULL
);
    DROP TABLE public.vehiculo;
       public         heap    postgres    false            �            1259    16465    zona    TABLE     q   CREATE TABLE public.zona (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    id_tour uuid
);
    DROP TABLE public.zona;
       public         heap    postgres    false            r           2606    16511    guia guia_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.guia
    ADD CONSTRAINT guia_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.guia DROP CONSTRAINT guia_pkey;
       public            postgres    false    212            t           2606    16518    tour tour_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.tour DROP CONSTRAINT tour_pkey;
       public            postgres    false    213            l           2606    16418    turista turista_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.turista
    ADD CONSTRAINT turista_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.turista DROP CONSTRAINT turista_pkey;
       public            postgres    false    209            n           2606    16434    vehiculo vehiculo_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT vehiculo_pkey;
       public            postgres    false    210            p           2606    16469    zona zona_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.zona
    ADD CONSTRAINT zona_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.zona DROP CONSTRAINT zona_pkey;
       public            postgres    false    211            x           2606    16559    guia guia_id_tour_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.guia
    ADD CONSTRAINT guia_id_tour_fkey FOREIGN KEY (id_tour) REFERENCES public.tour(id) NOT VALID;
 @   ALTER TABLE ONLY public.guia DROP CONSTRAINT guia_id_tour_fkey;
       public          postgres    false    213    212    3188            y           2606    16564    guia guia_id_vehiculo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.guia
    ADD CONSTRAINT guia_id_vehiculo_fkey FOREIGN KEY (id_vehiculo) REFERENCES public.vehiculo(id) NOT VALID;
 D   ALTER TABLE ONLY public.guia DROP CONSTRAINT guia_id_vehiculo_fkey;
       public          postgres    false    212    3182    210            {           2606    16574    tour tour_id_guia_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_id_guia_fkey FOREIGN KEY (id_guia) REFERENCES public.guia(id) NOT VALID;
 @   ALTER TABLE ONLY public.tour DROP CONSTRAINT tour_id_guia_fkey;
       public          postgres    false    3186    212    213            z           2606    16569    tour tour_id_turista_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_id_turista_fkey FOREIGN KEY (id_turista) REFERENCES public.turista(id) NOT VALID;
 C   ALTER TABLE ONLY public.tour DROP CONSTRAINT tour_id_turista_fkey;
       public          postgres    false    209    213    3180            |           2606    16579    tour tour_id_zona_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.tour
    ADD CONSTRAINT tour_id_zona_fkey FOREIGN KEY (id_zona) REFERENCES public.zona(id) NOT VALID;
 @   ALTER TABLE ONLY public.tour DROP CONSTRAINT tour_id_zona_fkey;
       public          postgres    false    213    3184    211            u           2606    16584    turista turista_id_tour_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.turista
    ADD CONSTRAINT turista_id_tour_fkey FOREIGN KEY (id_tour) REFERENCES public.tour(id) NOT VALID;
 F   ALTER TABLE ONLY public.turista DROP CONSTRAINT turista_id_tour_fkey;
       public          postgres    false    209    3188    213            v           2606    16589    vehiculo vehiculo_id_guia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT vehiculo_id_guia_fkey FOREIGN KEY (id_guia) REFERENCES public.guia(id) NOT VALID;
 H   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT vehiculo_id_guia_fkey;
       public          postgres    false    3186    210    212            w           2606    16594    zona zona_id_tour_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.zona
    ADD CONSTRAINT zona_id_tour_fkey FOREIGN KEY (id_tour) REFERENCES public.tour(id) NOT VALID;
 @   ALTER TABLE ONLY public.zona DROP CONSTRAINT zona_id_tour_fkey;
       public          postgres    false    213    3188    211           