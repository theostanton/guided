--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6 (Debian 11.6-1.pgdg90+1)
-- Dumped by pg_dump version 12.1

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

DROP DATABASE database;
--
-- Name: database; Type: DATABASE; Schema: -; Owner: user
--

CREATE DATABASE database WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE database OWNER TO "user";

\connect database

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
-- Name: guided; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA guided;


ALTER SCHEMA guided OWNER TO "user";

--
-- Name: postgraphile_watch; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA postgraphile_watch;


ALTER SCHEMA postgraphile_watch OWNER TO "user";

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: jwt_token; Type: TYPE; Schema: guided; Owner: user
--

CREATE TYPE guided.jwt_token AS (
	role text,
	username text,
	exp bigint
);


ALTER TYPE guided.jwt_token OWNER TO "user";

--
-- Name: authenticate(text, text); Type: FUNCTION; Schema: guided; Owner: user
--

CREATE FUNCTION guided.authenticate(email text, password text) RETURNS guided.jwt_token
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $_$
declare
    userInfo guided.users;
begin
    select *
    into userInfo
    from guided.users as u
    where u.email = $1;

    if userInfo.password_hash = crypt(password, userInfo.password_hash) then
        return ('guided_user', userInfo.username, extract(epoch from (now() + interval '2 days')))::guided.jwt_token;
    else
        return null;
    end if;
end;
$_$;


ALTER FUNCTION guided.authenticate(email text, password text) OWNER TO "user";

--
-- Name: FUNCTION authenticate(email text, password text); Type: COMMENT; Schema: guided; Owner: user
--

COMMENT ON FUNCTION guided.authenticate(email text, password text) IS 'Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days.';


--
-- Name: current_user(); Type: FUNCTION; Schema: guided; Owner: user
--

CREATE FUNCTION guided."current_user"() RETURNS guided.jwt_token
    LANGUAGE sql STABLE
    AS $$
select 'lol',
       current_setting('jwt.claims.username', true),
       current_setting('jwt.claims.exp', true)::bigint
$$;


ALTER FUNCTION guided."current_user"() OWNER TO "user";

SET default_tablespace = '';

--
-- Name: users; Type: TABLE; Schema: guided; Owner: user
--

CREATE TABLE guided.users (
    username character varying(128) NOT NULL,
    email character varying(128) NOT NULL,
    password_hash character varying(128) NOT NULL
);


ALTER TABLE guided.users OWNER TO "user";

--
-- Name: register(text, text, text); Type: FUNCTION; Schema: guided; Owner: user
--

CREATE FUNCTION guided.register(_username text, _email text, _password text) RETURNS guided.users
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $$
declare
    user_info guided.users;
begin
    insert into guided.users (username, email, password_hash)
    values (_username, _email, crypt(_password, gen_salt('bf')))
    returning * into user_info;

    return user_info;
end;
$$;


ALTER FUNCTION guided.register(_username text, _email text, _password text) OWNER TO "user";

--
-- Name: notify_watchers_ddl(); Type: FUNCTION; Schema: postgraphile_watch; Owner: user
--

CREATE FUNCTION postgraphile_watch.notify_watchers_ddl() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
begin
  perform pg_notify(
    'postgraphile_watch',
    json_build_object(
      'type',
      'ddl',
      'payload',
      (select json_agg(json_build_object('schema', schema_name, 'command', command_tag)) from pg_event_trigger_ddl_commands() as x)
    )::text
  );
end;
$$;


ALTER FUNCTION postgraphile_watch.notify_watchers_ddl() OWNER TO "user";

--
-- Name: notify_watchers_drop(); Type: FUNCTION; Schema: postgraphile_watch; Owner: user
--

CREATE FUNCTION postgraphile_watch.notify_watchers_drop() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
begin
  perform pg_notify(
    'postgraphile_watch',
    json_build_object(
      'type',
      'drop',
      'payload',
      (select json_agg(distinct x.schema_name) from pg_event_trigger_dropped_objects() as x)
    )::text
  );
end;
$$;


ALTER FUNCTION postgraphile_watch.notify_watchers_drop() OWNER TO "user";

--
-- Name: guides; Type: TABLE; Schema: guided; Owner: user
--

CREATE TABLE guided.guides (
    id character varying(64) NOT NULL,
    title character varying(64) NOT NULL,
    slug character varying(64) NOT NULL,
    owner character varying(64) NOT NULL,
    start_date date
);


ALTER TABLE guided.guides OWNER TO "user";

--
-- Name: rides; Type: TABLE; Schema: guided; Owner: user
--

CREATE TABLE guided.rides (
    id character varying(128) NOT NULL,
    guide character varying(128) NOT NULL,
    from_spot character varying(128) NOT NULL,
    to_spot character varying(128) NOT NULL
);


ALTER TABLE guided.rides OWNER TO "user";

--
-- Name: spots; Type: TABLE; Schema: guided; Owner: user
--

CREATE TABLE guided.spots (
    id character varying(128) NOT NULL,
    label character varying(128),
    guide character varying(128) NOT NULL,
    nights integer NOT NULL,
    locked boolean NOT NULL
);


ALTER TABLE guided.spots OWNER TO "user";

--
-- Data for Name: guides; Type: TABLE DATA; Schema: guided; Owner: user
--

COPY guided.guides (id, title, slug, owner, start_date) FROM stdin;
guide_9012	Johns other guide	johns-other-guide	john	\N
guide_f203ukd	THeos other guide	theos-other-guide	theo	\N
guide_5678	Johns guide 1	johns-guide	john	\N
guide_5503uv8	New guide	new-guide	theo	\N
guide_9q03u93	New guide 2	new-guide-2	theo	\N
guide_fe03u3l	New guide 3	new-guide-3	theo	\N
guide_pf03wqi	New guide 4	new-guide-4	theo	\N
guide_j103wqq	New guide 5	new-guide-5	theo	\N
guide_iv03w06	New guide 5	new-guide-5	theo	\N
guide_cf03ulf	New guide 7	new-guide-7	theo	\N
guide_o603w7y	New guide 9	new-guide-9	theo	\N
guide_x803wkj	New guide 10	new-guide-10	theo	\N
guide_wp03w41	New guide 11	new-guide-11	theo	\N
guide_0g03wsf	Mew guide 8	mew-guide-8	theo	2020-01-31
\.


--
-- Data for Name: rides; Type: TABLE DATA; Schema: guided; Owner: user
--

COPY guided.rides (id, guide, from_spot, to_spot) FROM stdin;
ride_1234	guide_9012	spot_1234	spot_5678
\.


--
-- Data for Name: spots; Type: TABLE DATA; Schema: guided; Owner: user
--

COPY guided.spots (id, label, guide, nights, locked) FROM stdin;
spot_1234	Some spot	guide_9012	2	t
spot_5678	Some other spot	guide_9012	3	f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: guided; Owner: user
--

COPY guided.users (username, email, password_hash) FROM stdin;
theo	theo@theo.dev	-
john	john@theo.dev	-
theostanton	theostanton@gmail.com	$2a$06$QxEQ81xFPV3c148OuylBb.qIiplz4scZh44ti42pxr7yu/yVHgnje
theostanton2	theostanton2@gmail.com	$2a$06$q7mutzKIYxDqJlievZoONOYGVCW1ap1lwy6BTlNI4c8ATsMFGPJMK
theostanton3	theostanton3@gmail.com	$2a$06$RnpAtH14DurMUXpB4KxxOeoPBcqRLs5c0SbxNSBDRTe8XkPEyULn6
theostanton4	theostanton4@gmail.com	$2a$06$B2k8PZRBLwBgXuGoGpXaf.lxywlnqsfEBvt3tgHHcLzgsFNo3s0x6
theostanton5	theostanton5@gmail.com	$2a$06$bSyBRI4s.qsNv3zbPhc.5O27KjyvbMFtTPQPrgdzkDqC8nsfZgKm.
theostanton6	theostanton6@gmail.com	$2a$06$rPisWwzqdyZ69ySeW1IvP.DYTFZOxQ2SRZh4xOA7P0d03SXIj4/IG
theostanton7	theostanton7@gmail.com	$2a$06$hdszpAFh2iAhp.dcC9OkE.Bj8wTo.HNUU0lKKiFUUHoKoedM/Wov2
\.


--
-- Name: guides guides_pk; Type: CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.guides
    ADD CONSTRAINT guides_pk PRIMARY KEY (id);


--
-- Name: rides rides_pk; Type: CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.rides
    ADD CONSTRAINT rides_pk PRIMARY KEY (id);


--
-- Name: spots spots_pk; Type: CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.spots
    ADD CONSTRAINT spots_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.users
    ADD CONSTRAINT users_pk PRIMARY KEY (username);


--
-- Name: guides_id_uindex; Type: INDEX; Schema: guided; Owner: user
--

CREATE UNIQUE INDEX guides_id_uindex ON guided.guides USING btree (id);


--
-- Name: guides_slug_index; Type: INDEX; Schema: guided; Owner: user
--

CREATE INDEX guides_slug_index ON guided.guides USING btree (slug);


--
-- Name: rides_id_uindex; Type: INDEX; Schema: guided; Owner: user
--

CREATE UNIQUE INDEX rides_id_uindex ON guided.rides USING btree (id);


--
-- Name: spots_id_uindex; Type: INDEX; Schema: guided; Owner: user
--

CREATE UNIQUE INDEX spots_id_uindex ON guided.spots USING btree (id);


--
-- Name: users_email_uindex; Type: INDEX; Schema: guided; Owner: user
--

CREATE UNIQUE INDEX users_email_uindex ON guided.users USING btree (email);


--
-- Name: users_username_uindex; Type: INDEX; Schema: guided; Owner: user
--

CREATE UNIQUE INDEX users_username_uindex ON guided.users USING btree (username);


--
-- Name: guides guides_users_username_fk; Type: FK CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.guides
    ADD CONSTRAINT guides_users_username_fk FOREIGN KEY (owner) REFERENCES guided.users(username);


--
-- Name: rides rides_from_spots_id_fk; Type: FK CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.rides
    ADD CONSTRAINT rides_from_spots_id_fk FOREIGN KEY (from_spot) REFERENCES guided.spots(id);


--
-- Name: rides rides_guides_id_fk; Type: FK CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.rides
    ADD CONSTRAINT rides_guides_id_fk FOREIGN KEY (guide) REFERENCES guided.guides(id);


--
-- Name: rides rides_to_spots_id_fk; Type: FK CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.rides
    ADD CONSTRAINT rides_to_spots_id_fk FOREIGN KEY (to_spot) REFERENCES guided.spots(id);


--
-- Name: spots spots_guides_id_fk; Type: FK CONSTRAINT; Schema: guided; Owner: user
--

ALTER TABLE ONLY guided.spots
    ADD CONSTRAINT spots_guides_id_fk FOREIGN KEY (guide) REFERENCES guided.guides(id);


--
-- Name: postgraphile_watch_ddl; Type: EVENT TRIGGER; Schema: -; Owner: user
--

CREATE EVENT TRIGGER postgraphile_watch_ddl ON ddl_command_end
         WHEN TAG IN ('ALTER AGGREGATE', 'ALTER DOMAIN', 'ALTER EXTENSION', 'ALTER FOREIGN TABLE', 'ALTER FUNCTION', 'ALTER POLICY', 'ALTER SCHEMA', 'ALTER TABLE', 'ALTER TYPE', 'ALTER VIEW', 'COMMENT', 'CREATE AGGREGATE', 'CREATE DOMAIN', 'CREATE EXTENSION', 'CREATE FOREIGN TABLE', 'CREATE FUNCTION', 'CREATE INDEX', 'CREATE POLICY', 'CREATE RULE', 'CREATE SCHEMA', 'CREATE TABLE', 'CREATE TABLE AS', 'CREATE VIEW', 'DROP AGGREGATE', 'DROP DOMAIN', 'DROP EXTENSION', 'DROP FOREIGN TABLE', 'DROP FUNCTION', 'DROP INDEX', 'DROP OWNED', 'DROP POLICY', 'DROP RULE', 'DROP SCHEMA', 'DROP TABLE', 'DROP TYPE', 'DROP VIEW', 'GRANT', 'REVOKE', 'SELECT INTO')
   EXECUTE FUNCTION postgraphile_watch.notify_watchers_ddl();


ALTER EVENT TRIGGER postgraphile_watch_ddl OWNER TO "user";

--
-- Name: postgraphile_watch_drop; Type: EVENT TRIGGER; Schema: -; Owner: user
--

CREATE EVENT TRIGGER postgraphile_watch_drop ON sql_drop
   EXECUTE FUNCTION postgraphile_watch.notify_watchers_drop();


ALTER EVENT TRIGGER postgraphile_watch_drop OWNER TO "user";

--
-- Name: SCHEMA guided; Type: ACL; Schema: -; Owner: user
--

GRANT USAGE ON SCHEMA guided TO guided_anonymous;
GRANT USAGE ON SCHEMA guided TO guided_user;


--
-- Name: FUNCTION authenticate(email text, password text); Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON FUNCTION guided.authenticate(email text, password text) TO guided_anonymous;
GRANT ALL ON FUNCTION guided.authenticate(email text, password text) TO guided_user;


--
-- Name: FUNCTION "current_user"(); Type: ACL; Schema: guided; Owner: user
--

REVOKE ALL ON FUNCTION guided."current_user"() FROM PUBLIC;
GRANT ALL ON FUNCTION guided."current_user"() TO guided_postgraphile;


--
-- Name: TABLE users; Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON TABLE guided.users TO guided_postgraphile;
GRANT SELECT ON TABLE guided.users TO guided_anonymous;
GRANT SELECT,DELETE,UPDATE ON TABLE guided.users TO guided_user;


--
-- Name: FUNCTION register(_username text, _email text, _password text); Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON FUNCTION guided.register(_username text, _email text, _password text) TO guided_anonymous;


--
-- Name: FUNCTION notify_watchers_ddl(); Type: ACL; Schema: postgraphile_watch; Owner: user
--

REVOKE ALL ON FUNCTION postgraphile_watch.notify_watchers_ddl() FROM PUBLIC;


--
-- Name: FUNCTION notify_watchers_drop(); Type: ACL; Schema: postgraphile_watch; Owner: user
--

REVOKE ALL ON FUNCTION postgraphile_watch.notify_watchers_drop() FROM PUBLIC;


--
-- Name: TABLE guides; Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON TABLE guided.guides TO guided_postgraphile;
GRANT SELECT ON TABLE guided.guides TO guided_anonymous;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE guided.guides TO guided_user;


--
-- Name: TABLE rides; Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON TABLE guided.rides TO guided_postgraphile;


--
-- Name: TABLE spots; Type: ACL; Schema: guided; Owner: user
--

GRANT ALL ON TABLE guided.spots TO guided_postgraphile;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: guided; Owner: user
--

ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA guided REVOKE ALL ON FUNCTIONS  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA guided REVOKE ALL ON FUNCTIONS  FROM "user";
ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA guided GRANT ALL ON FUNCTIONS  TO guided_postgraphile;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: user
--

ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA public REVOKE ALL ON FUNCTIONS  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA public REVOKE ALL ON FUNCTIONS  FROM "user";
ALTER DEFAULT PRIVILEGES FOR ROLE "user" IN SCHEMA public GRANT ALL ON FUNCTIONS  TO guided_postgraphile;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: user
--

ALTER DEFAULT PRIVILEGES FOR ROLE "user" REVOKE ALL ON FUNCTIONS  FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

