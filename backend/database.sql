-- Crear la tabla "usuarios"
CREATE TABLE  public.usuarios
(
    dni character varying(8) COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default",
    id_rol integer NOT NULL,
    CONSTRAINT usuarios_pkey PRIMARY KEY (dni)
);

-- Cambiar el propietario de la tabla "usuarios" a "postgres"
ALTER TABLE  public.usuarios
    OWNER to postgres;

-- Insertar datos en la tabla "usuarios"
INSERT INTO public.usuarios(dni, nombre, id_rol)
	VALUES ('12345678', 'Ronal Llapapasca', 1),
           ('11114444', 'Administrador 1', 1),
           ('11111111', 'Usuario 1', 2),
           ('22225555', 'Usuario 2', 2);

-- Crear la tabla "r_asistencia"
CREATE TABLE public.r_asistencia
(
    id serial PRIMARY KEY,
    dni character varying(8) COLLATE pg_catalog."default",
    fecha date,
    hora time without time zone,
    CONSTRAINT r_asistencia_dni_fkey FOREIGN KEY (dni)
        REFERENCES public.usuarios (dni) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- Insertar datos en la tabla "r_asistencia"
INSERT INTO public.r_asistencia(dni, fecha, hora)
	VALUES ('12345678', '2023-12-09', '19:34:48'),
           ('11114444', '2023-12-10', '20:00:00'),
           ('11111111', '2023-12-10', '20:00:00'),
           ('22225555', '2023-12-11', '21:15:30');
