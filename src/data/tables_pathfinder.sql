-- Tables récupérées une par une sur pgadmin
-- Jamais testé si cela fonctionnait

-- Table: public.log

DROP TABLE IF EXISTS log_table;

CREATE TABLE IF NOT EXISTS log_table
(
    id SERIAL PRIMARY KEY,
    url character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "time" time with time zone NOT NULL,
    ip character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS log_table

-- ____________________________________________________________
-- Table: public.user

DROP TABLE IF EXISTS user_table;

CREATE TABLE IF NOT EXISTS user_table
(
    id SERIAL PRIMARY KEY,
    password text COLLATE pg_catalog."default" NOT NULL,
    firstname text COLLATE pg_catalog."default",
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone
    role text COLLATE pg_catalog."default" DEFAULT 'user'::text,
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS user_table


-- ______________________________________________________

-- Table: public.difficulty

DROP TABLE IF EXISTS difficulty CASCADE;

CREATE TABLE IF NOT EXISTS difficulty
(
    id SERIAL PRIMARY KEY,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS difficulty

-- ________________________________________________________________

-- Table: public.summit

DROP TABLE IF EXISTS summit CASCADE;

CREATE TABLE IF NOT EXISTS summit
(
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS summit

-- _____________________________________________________

-- Table: public.trek

DROP TABLE IF EXISTS trek CASCADE;

CREATE TABLE IF NOT EXISTS trek
(
    id SERIAL PRIMARY KEY,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    boucle character varying(50) COLLATE pg_catalog."default" NOT NULL,
    time_length character varying(50) COLLATE pg_catalog."default" NOT NULL,
    start_point character varying(100) COLLATE pg_catalog."default",
    gps_coordonate character varying(50) COLLATE pg_catalog."default",
    gpx character varying(100) COLLATE pg_catalog."default",
    resume text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    distance integer NOT NULL,
    denivele integer NOT NULL,
    max_height integer NOT NULL,
    min_height integer NOT NULL,
    summit_id integer NOT NULL,
    difficulty_id integer NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone,
    map character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT trek_difficulty_id FOREIGN KEY (difficulty_id)
        REFERENCES public.difficulty (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT trek_summit_id FOREIGN KEY (summit_id)
        REFERENCES public.summit (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS trek
-- ____________________________________________________________

-- Table: public.tag

DROP TABLE IF EXISTS tag CASCADE;

CREATE TABLE IF NOT EXISTS tag
(
    id SERIAL PRIMARY KEY,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS tag


-- _____________________________________________________________________

-- Table: public.tag_has_trek

DROP TABLE IF EXISTS tag_has_trek CASCADE;

CREATE TABLE IF NOT EXISTS tag_has_trek
(
    id SERIAL PRIMARY KEY,
    tag_id integer NOT NULL,
    trek_id integer NOT NULL,
    created_at TIMESTAMP with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP with time zone,
    CONSTRAINT tag_has_trek_tag_id_trek_id_key UNIQUE (tag_id, trek_id),
    CONSTRAINT tag_has_trek_tag_id_fkey FOREIGN KEY (tag_id)
        REFERENCES public.tag (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT tag_has_trek_trek_id_fkey FOREIGN KEY (trek_id)
        REFERENCES public.trek (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS tag_has_trek

-- ___________________________________________________________