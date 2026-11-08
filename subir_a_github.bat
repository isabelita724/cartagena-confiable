@echo off
chcp 65001 >nul
title Publicar Cartagena Confiable en GitHub Pages
cls
echo ======================================================================
echo    CARTAGENA CONFIABLE - PUBLICADOR AUTOMÁTICO EN GITHUB PAGES
echo ======================================================================
echo.
echo Este asistente conectará tu proyecto a tu cuenta de GitHub para que
echo tu página web quede en línea las 24 horas del día.
echo.
echo PASO PREVIO:
echo 1. Entra a https://github.com/new
echo 2. Crea un repositorio con el nombre: cartagena-confiable
echo    (Asegúrate de marcarlo como "Public" y NO marques agregar README)
echo.
echo ======================================================================
set /p GH_USER="Escribe tu NOMBRE DE USUARIO de GitHub y presiona Enter: "

if "%GH_USER%"=="" (
    echo.
    echo Error: No escribiste ningún usuario.
    pause
    exit /b
)

echo.
echo Conectando con https://github.com/%GH_USER%/cartagena-confiable.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/%GH_USER%/cartagena-confiable.git
git branch -M main

echo.
echo Subiendo archivos a GitHub...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ======================================================================
    echo Hubo un problema al subir (puede requerir iniciar sesión en GitHub).
    echo Si GitHub te pide usuario y contraseña, utiliza un Personal Access Token.
    echo O bien, puedes subir los archivos arrastrándolos directamente en la web de GitHub.
    echo ======================================================================
    pause
    exit /b
)

echo.
echo ======================================================================
echo ¡ÉXITO! Los archivos se subieron correctamente a GitHub.
echo.
echo Ahora activaremos tu link web público:
echo 1. Se abrirá la página de configuración de tu repositorio en el navegador.
echo 2. En "Branch", selecciona "main" y la carpeta "/ (root)".
echo 3. Haz clic en "Save".
echo.
echo Tu link oficial será:
echo https://%GH_USER%.github.io/cartagena-confiable/
echo ======================================================================
echo.
start https://github.com/%GH_USER%/cartagena-confiable/settings/pages
pause

