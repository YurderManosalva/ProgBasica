<p align="center">
  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" width="80" height="80" />
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="80" height="80" />
</p>

# Flujo Básico de Git y GitHub desde la Terminal

Este documento describe el proceso paso a paso para inicializar un proyecto con Git, conectarlo a un repositorio remoto en GitHub, y realizar el primer commit en la rama principal (`master`).

---

## 1. Creación e Inicialización del Proyecto Local

Se realizan los siguientes comandos desde la terminal para crear la estructura básica del proyecto e inicializar Git.

| Paso | Comando de Terminal | Descripción |
| :--- | :--- | :--- |
| **1.1** | `mkdir mi-primer-proyecto-git` | Crea una nueva carpeta para el proyecto. |
| **1.2** | `cd mi-primer-proyecto-git` | Navega al directorio recién creado. |
| **1.3** | `touch index.html` | Crea el archivo principal del proyecto. |
| **1.4** | `git init` | Inicializa un repositorio Git vacío en el directorio actual. |

---

## 2. Contenido del Archivo `index.html`

Para cumplir con la estructura mínima, se agrega el siguiente contenido al archivo `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primer Proyecto Git</title>
</head>
<body>
    <h1>¡Hola, GitHub!</h1>
    <p>Este es el contenido inicial de mi proyecto subido usando el flujo de Git desde la terminal.</p>
</body>
</html>