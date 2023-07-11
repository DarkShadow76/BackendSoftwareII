PGDMP     
    $                {            postgres    14.4    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13754    postgres    DATABASE     c   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Peru.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3339            B           1247    40978    tipo    TYPE     L   CREATE TYPE public.tipo AS ENUM (
    'admin',
    'guia',
    'turista'
);
    DROP TYPE public.tipo;
       public          postgres    false            �            1259    41012    compra    TABLE     �   CREATE TABLE public.compra (
    id uuid NOT NULL,
    id_servicio uuid NOT NULL,
    id_turista uuid NOT NULL,
    total double precision NOT NULL
);
    DROP TABLE public.compra;
       public         heap    postgres    false            �            1259    32777    reserva    TABLE     �   CREATE TABLE public.reserva (
    id uuid NOT NULL,
    turista_id uuid NOT NULL,
    servicio_id uuid NOT NULL,
    nombre character varying(100) NOT NULL
);
    DROP TABLE public.reserva;
       public         heap    postgres    false            �            1259    16512    servicio    TABLE     �   CREATE TABLE public.servicio (
    id uuid NOT NULL,
    id_guia uuid NOT NULL,
    monto double precision NOT NULL,
    categoria character varying(100) NOT NULL,
    puntaje double precision,
    estado character varying(100) NOT NULL
);
    DROP TABLE public.servicio;
       public         heap    postgres    false            �            1259    40972    usuario    TABLE     �  CREATE TABLE public.usuario (
    id uuid NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    dni character varying(10) NOT NULL,
    correo character varying(100) NOT NULL,
    contrasenia character varying(100) NOT NULL,
    telefono character varying(10) NOT NULL,
    tipo public.tipo NOT NULL,
    id_resera uuid,
    id_servicio uuid
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    834                      0    41012    compra 
   TABLE DATA           D   COPY public.compra (id, id_servicio, id_turista, total) FROM stdin;
    public          postgres    false    212   %                 0    32777    reserva 
   TABLE DATA           F   COPY public.reserva (id, turista_id, servicio_id, nombre) FROM stdin;
    public          postgres    false    210   �                 0    16512    servicio 
   TABLE DATA           R   COPY public.servicio (id, id_guia, monto, categoria, puntaje, estado) FROM stdin;
    public          postgres    false    209   �                 0    40972    usuario 
   TABLE DATA           y   COPY public.usuario (id, nombre, apellido, dni, correo, contrasenia, telefono, tipo, id_resera, id_servicio) FROM stdin;
    public          postgres    false    211   �       q           2606    41028    compra compra_pk 
   CONSTRAINT     N   ALTER TABLE ONLY public.compra
    ADD CONSTRAINT compra_pk PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.compra DROP CONSTRAINT compra_pk;
       public            postgres    false    212            m           2606    32783    reserva reserva_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT reserva_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reserva DROP CONSTRAINT reserva_pkey;
       public            postgres    false    210            k           2606    16518    servicio tour_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT tour_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.servicio DROP CONSTRAINT tour_pkey;
       public            postgres    false    209            o           2606    40976    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    211            s           2606    32789    reserva fk_servicio    FK CONSTRAINT     y   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT fk_servicio FOREIGN KEY (servicio_id) REFERENCES public.servicio(id);
 =   ALTER TABLE ONLY public.reserva DROP CONSTRAINT fk_servicio;
       public          postgres    false    3179    209    210            v           2606    41020    compra fk_servicio    FK CONSTRAINT     x   ALTER TABLE ONLY public.compra
    ADD CONSTRAINT fk_servicio FOREIGN KEY (id_servicio) REFERENCES public.servicio(id);
 <   ALTER TABLE ONLY public.compra DROP CONSTRAINT fk_servicio;
       public          postgres    false    209    212    3179            u           2606    41015    compra fk_turista    FK CONSTRAINT     u   ALTER TABLE ONLY public.compra
    ADD CONSTRAINT fk_turista FOREIGN KEY (id_turista) REFERENCES public.usuario(id);
 ;   ALTER TABLE ONLY public.compra DROP CONSTRAINT fk_turista;
       public          postgres    false    3183    211    212            r           2606    40990    servicio fk_usuario    FK CONSTRAINT     ~   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_guia) REFERENCES public.usuario(id) NOT VALID;
 =   ALTER TABLE ONLY public.servicio DROP CONSTRAINT fk_usuario;
       public          postgres    false    209    3183    211            t           2606    40995    reserva fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.reserva
    ADD CONSTRAINT fk_usuario FOREIGN KEY (turista_id) REFERENCES public.usuario(id) NOT VALID;
 <   ALTER TABLE ONLY public.reserva DROP CONSTRAINT fk_usuario;
       public          postgres    false    210    211    3183               �   x��1r@!k��ˀ��]� ����?���]A<��A)g�EӚ�l��*�c`Wl�;.����I�R-C�4pF|�'�U���
��h���I_��P��ϭ�8�|XS�_�
��A�/�яB��%17�7=��@�,(���K�,��5½�Q������;�         �  x���;��!�k�Udd|�@y_}�����pw�&��"�aۓATP����@}8���Oos��%W��zA�l�z����f��H$�^TP
v&��ٓG���x�/�A� ����λx�D�RYd�ZW�~L�#q�쓚\���\%u���`fD}��������q-�.��dP��������.�a�	��c��{��q��;�$�p�W���\��S�|{{{v���4B��D�}�z�K3���`�2`d�����qlo����K�ND�b���p�1T����>[�X� �L�#0�N��F^L[絥���jsR��
cM�[t{��KP�vZA�C�u?,ʹ���<c��]mX��J��R�"i�Gǘ-q$�j�a�~��q������巟��˷�~?�i���g���rK��;��[��T����y���~           x����n�1Fg�w!�l۾Fl�*R�TM�>}i��Y,�����r�Vq��H�mR,ݣ]*�H�m/��*RC];ƥy�ѥ���2|�����a�v�F���Q�u�bG���=��-�v��i��j��,4���=CI	^2Љ���r������I5Ev�������̘S�� ��:��AH���c�U�ެJ�H�	��]�_���u���网�5JQ*��ì��E�y��	esC�2{�)3d	�����?��sx���>_����q��'{&         �  x�e�[�7F�����.�D�5hРAZiѧ�P7g����_ή�o��8�8M1��hX�y$ς���ıG.��s��IJ��>����ygL�}ſ�2����p�!S�6�a�8	|�S�d�v�A�= ���8Nd���W�G��x�����}xq[��Z�=�N��j��Ct�x{�T���c�	��<B�^���� �9�>�m�v��88����7��d�-�'l�܌�����dm{��'IQ<�l�/��A�nf�߭x#��5����E�ֽ��م�4(c�6�TG��nzR�<��e��s��V�{�[�B���F�������hriH�%,U�($�q>|���n�W[�oJ��7���(P�����L��U4����a1>"Y��8j��&*E>̧u2��,�7��g�ިJ�Bpz�{�sR��#{���@.��L�#s���q���[_�������7���������4k�ֈU�(<:z�vxm�k����i�_��[VkA�x}�[�C��y�v���I>�i��tf��m�.�]N�Ňa�e1����pX7�t~b�k���rD�*j->�m-E�U*�%���s��bѨ�/g���s���5��Lk� uY�]�mA��N�M�����a��BMG�T�Y\�V��`��5�.�j�����Z�K`��2o�C_�u~�����W�/o~{Ǫ�     