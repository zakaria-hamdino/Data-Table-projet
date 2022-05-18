# React Starter

---

-   React
-   Typescript
-   ESLint & Prettier
-   Tailwind
-   Base API class

&nbsp;

## Preparing The Environment

---

You need to install docker and docker-compose before you begin working:

-   https://docs.docker.com/desktop/
-   https://docs.docker.com/compose/install/

Once the installation is complete, open up a command line or a terminal and run:

`docker-compose up`

The first time you run this command, building the environment can take a few minutes.

Once the environments are up, open your favorite browser (or terminal) and go to: http://localhost:5001.

&nbsp;

#### Changing the Port

You can change the port in the docker-compose.yml.

```yaml
ports:
    - 5005:5005
environment:
    - PORT=5005
```

**Both values need to be changed and match**

&nbsp;
&nbsp;

---
